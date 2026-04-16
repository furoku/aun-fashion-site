import fs from "node:fs";
import path from "node:path";

let chromium;

try {
  ({ chromium } = await import("playwright"));
} catch {
  console.error(
    "playwright package not found. Run this script in an environment where `playwright` is installed, or regenerate thumbnails through the browser tooling.",
  );
  process.exit(1);
}

const rootDir = "/Users/hiroki.kai/Documents/cursor-projects/laboratory/papa/fashion-site";
const outDir = path.join(rootDir, "variants", "showcase", "assets", "thumbs");
const baseUrl = "http://127.0.0.1:8123";

const variants = [
  "01-obsidian-runway",
  "02-parchment-salon",
  "03-gallery-minimal",
  "04-editorial-grid",
  "05-midnight-system",
  "06-atelier-cream",
  "07-monochrome-pill",
  "08-acid-signal",
  "09-engineered-blue",
  "10-soft-hospitality",
  "11-washi-minimal",
  "12-tokyo-culture",
  "13-indigo-corporate",
  "14-soft-service",
  "15-market-layer",
];

fs.mkdirSync(outDir, { recursive: true });

const browser = await chromium.launch({
  headless: true,
  args: ["--hide-scrollbars"],
});

const context = await browser.newContext({
  viewport: { width: 1440, height: 980 },
  deviceScaleFactor: 1,
});

const page = await context.newPage();

for (const variant of variants) {
  const url = `${baseUrl}/variants/${variant}/index.html`;
  const file = path.join(outDir, `${variant}.png`);

  await page.goto(url, { waitUntil: "networkidle" });
  await page.waitForTimeout(900);
  await page.evaluate(() => {
    window.scrollTo(0, 0);
    document.querySelectorAll("[data-reveal]").forEach((node) => node.classList.add("is-visible"));
  });
  await page.waitForTimeout(250);
  await page.screenshot({ path: file, type: "png" });
}

await browser.close();

console.log(JSON.stringify({ outDir, count: variants.length }, null, 2));
