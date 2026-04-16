import fs from "node:fs";
import path from "node:path";
import { chromium } from "playwright";

const rootDir = "/Users/hiroki.kai/Documents/cursor-projects/laboratory/papa/fashion-site";
const outDir = path.join(rootDir, "artifacts", "demo-frames");

fs.rmSync(outDir, { recursive: true, force: true });
fs.mkdirSync(outDir, { recursive: true });

const browser = await chromium.launch({
  headless: true,
  args: ["--hide-scrollbars"],
});

const context = await browser.newContext({
  viewport: { width: 1440, height: 900 },
  deviceScaleFactor: 1,
});
const page = await context.newPage();

let frame = 0;

const capture = async (name) => {
  const file = path.join(outDir, `${String(frame).padStart(4, "0")}-${name}.png`);
  await page.screenshot({ path: file, type: "png" });
  frame += 1;
};

const easeInOut = (t) => 0.5 - Math.cos(Math.PI * t) / 2;

const hold = async (name, count, delay = 100) => {
  for (let index = 0; index < count; index += 1) {
    await page.waitForTimeout(delay);
    await capture(name);
  }
};

const animateScroll = async (name, startY, endY, steps, delay = 80) => {
  for (let index = 0; index < steps; index += 1) {
    const t = steps === 1 ? 1 : index / (steps - 1);
    const y = Math.round(startY + (endY - startY) * easeInOut(t));
    await page.evaluate((scrollY) => window.scrollTo(0, scrollY), y);
    await page.waitForTimeout(delay);
    await capture(name);
  }
};

const sequences = [
  {
    name: "home",
    url: "http://127.0.0.1:8000/index.html",
    maxScroll: 2500,
    introFrames: 8,
    scrollFrames: 34,
    outroFrames: 5,
  },
  {
    name: "lookbook",
    url: "http://127.0.0.1:8000/lookbook.html",
    maxScroll: 2100,
    introFrames: 7,
    scrollFrames: 28,
    outroFrames: 4,
  },
  {
    name: "about",
    url: "http://127.0.0.1:8000/about.html",
    maxScroll: 1800,
    introFrames: 7,
    scrollFrames: 24,
    outroFrames: 6,
  },
];

for (const sequence of sequences) {
  await page.goto(sequence.url, { waitUntil: "networkidle" });
  await page.waitForTimeout(700);
  await page.evaluate(() => window.scrollTo(0, 0));
  const limit = await page.evaluate(
    (fallback) => Math.min(fallback, Math.max(0, document.documentElement.scrollHeight - window.innerHeight)),
    sequence.maxScroll,
  );

  await hold(`${sequence.name}-intro`, sequence.introFrames, 110);
  await animateScroll(`${sequence.name}-scroll`, 0, limit, sequence.scrollFrames, 85);
  await hold(`${sequence.name}-outro`, sequence.outroFrames, 110);
}

await browser.close();

console.log(JSON.stringify({ outDir, frameCount: frame }, null, 2));
