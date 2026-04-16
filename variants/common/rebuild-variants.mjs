import fs from "node:fs";
import path from "node:path";
import { VARIANT_COPY } from "./variant-copy.js";

const rootDir = "/Users/hiroki.kai/Documents/cursor-projects/laboratory/papa/fashion-site";
const variantsDir = path.join(rootDir, "variants");

const variants = [
  {
    id: "01-obsidian-runway",
    name: "Obsidian Runway",
    references: ["jp/droga5", "global/ferrari"],
    summary: "漆黒の圧と細い赤を効かせた、ランウェイ・ポスターのような営業サイト。",
    mood: "Black / Bone / Blood red",
    accent: "Cinematic pressure",
    personality: "Commanding, nocturnal, severe",
    colorScheme: "dark",
    fontImport:
      'https://fonts.googleapis.com/css2?family=Antonio:wght@400;700&family=Manrope:wght@400;500;700;800&family=Azeret+Mono:wght@400;500&display=swap',
    displayFont: '"Antonio", sans-serif',
    bodyFont: '"Manrope", sans-serif',
    labelFont: '"Azeret Mono", monospace',
    vars: `
  --bg: oklch(0.12 0.015 22);
  --bg-alt: oklch(0.08 0.01 18);
  --surface: oklch(0.18 0.016 22 / 0.84);
  --surface-strong: oklch(0.21 0.018 22 / 0.94);
  --surface-muted: oklch(0.24 0.03 24 / 0.82);
  --line: oklch(0.62 0.02 78 / 0.18);
  --line-strong: oklch(0.62 0.18 24 / 0.32);
  --ink: oklch(0.94 0.01 82);
  --muted: oklch(0.74 0.012 74);
  --accent: oklch(0.58 0.22 24);
  --accent-2: oklch(0.84 0.02 78);
  --accent-soft: oklch(0.23 0.08 24);
  --inverse-bg: oklch(0.93 0.014 82);
  --inverse-ink: oklch(0.18 0.02 22);
  --shadow: 0 28px 80px oklch(0.02 0 0 / 0.42);
`,
    homeLayout: "Hero copy sits like a stage card beside a tall cinematic image, with a narrow stats strip tucked below.",
    lookbookLayout: "Two-column look grid with compressed cards and a strict note rail, like a backstage deck.",
    aboutLayout: "Split dossier with hard contrast between pale summary panels and a black partner route block.",
    css: `
body {
  background:
    radial-gradient(circle at 12% 12%, oklch(0.35 0.12 24 / 0.18), transparent 18%),
    linear-gradient(180deg, oklch(0.14 0.02 24), oklch(0.07 0.01 18));
}

body::after {
  opacity: 0.08;
}

.hero-composition {
  grid-template-columns: 0.92fr 1.08fr;
  grid-template-areas:
    "copy visual"
    "stats visual";
  gap: 1rem;
}

.hero-copy {
  min-height: 34rem;
  border-radius: 4rem 1rem 1rem 4rem;
}

.hero-visual {
  border-radius: 1rem 4.5rem 1rem 1rem;
}

.hero-stats {
  border-radius: 1rem;
}

.season-composition {
  grid-template-columns: 1.05fr 0.8fr 0.8fr;
}

.gallery-track {
  grid-template-columns: 0.8fr 1.25fr 0.8fr;
}

.editorial-card-wide {
  transform: translateY(2.6rem);
}

.reason-list {
  grid-template-columns: 1fr 1fr 1fr;
}

.reason-block:nth-child(2),
.piece-stack .selected-piece:nth-child(2) {
  transform: translateY(1.5rem);
}

.feature-composition {
  grid-template-columns: 0.76fr 1.24fr;
}

.look-grid {
  grid-template-columns: 1.05fr 0.95fr;
}

.look-tile:nth-child(even) {
  transform: translateY(1.8rem);
}
`,
  },
  {
    id: "02-parchment-salon",
    name: "Parchment Salon",
    references: ["global/claude", "jp/note"],
    summary: "読書室の資料束のように、余白と紙の温度で静かに読み進める営業サイト。",
    mood: "Parchment / Terracotta / Ink",
    accent: "Literary quiet",
    personality: "Thoughtful, literary, cultivated",
    colorScheme: "light",
    fontImport:
      'https://fonts.googleapis.com/css2?family=Libre+Caslon+Display&family=Hanken+Grotesk:wght@400;500;600;700&family=Azeret+Mono:wght@400;500&display=swap',
    displayFont: '"Libre Caslon Display", serif',
    bodyFont: '"Hanken Grotesk", sans-serif',
    labelFont: '"Azeret Mono", monospace',
    vars: `
  --bg: oklch(0.97 0.012 80);
  --bg-alt: oklch(0.93 0.02 76);
  --surface: oklch(0.985 0.01 90 / 0.86);
  --surface-strong: oklch(0.99 0.008 92 / 0.96);
  --surface-muted: oklch(0.94 0.02 78 / 0.86);
  --line: oklch(0.64 0.02 72 / 0.22);
  --line-strong: oklch(0.54 0.08 48 / 0.34);
  --ink: oklch(0.28 0.03 62);
  --muted: oklch(0.5 0.02 66);
  --accent: oklch(0.63 0.1 45);
  --accent-2: oklch(0.72 0.04 76);
  --accent-soft: oklch(0.95 0.02 52);
  --inverse-bg: oklch(0.26 0.025 60);
  --inverse-ink: oklch(0.95 0.012 82);
  --shadow: 0 18px 46px oklch(0.42 0.02 62 / 0.1);
`,
    homeLayout: "A three-part reading table: notes at left, hero essay in the middle, image at right.",
    lookbookLayout: "Looks read like chapter spreads with a calmer single-column rhythm and alternating offsets.",
    aboutLayout: "About becomes an annotated essay with principle cards nested in a warm archive grid.",
    css: `
body::after {
  opacity: 0;
}

.hero-composition {
  grid-template-columns: 0.42fr 0.9fr 0.68fr;
  grid-template-areas: "stats copy visual";
}

.hero-copy::before {
  content: "";
  position: absolute;
  left: 1.4rem;
  top: 1.6rem;
  bottom: 1.6rem;
  width: 1px;
  background: color-mix(in oklch, var(--accent) 70%, transparent);
}

.hero-copy {
  position: relative;
  padding-left: 3rem;
}

.season-composition,
.collection-composition,
.story-composition {
  grid-template-columns: 0.7fr 1fr 0.9fr;
}

.gallery-composition,
.reasons-composition,
.pieces-composition,
.principle-composition,
.studio-composition,
.routes-composition {
  grid-template-columns: 0.42fr 1.58fr;
}

.gallery-track,
.look-grid {
  grid-template-columns: 1fr;
}

.look-tile:nth-child(even) {
  margin-left: 8%;
}

.piece-stack,
.route-list {
  grid-template-columns: 1fr;
}
`,
  },
  {
    id: "03-gallery-minimal",
    name: "Gallery Minimal",
    references: ["global/apple", "jp/muji"],
    summary: "白壁の展示空間のように、余白と額装の静けさで見せるギャラリー型サイト。",
    mood: "White / Stone / Graphite",
    accent: "Sparse prestige",
    personality: "Quiet, rarefied, architectural",
    colorScheme: "light",
    fontImport:
      'https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&family=Public+Sans:wght@400;500;600;700&family=Martian+Mono:wght@400;500&display=swap',
    displayFont: '"Sora", sans-serif',
    bodyFont: '"Public Sans", sans-serif',
    labelFont: '"Martian Mono", monospace',
    vars: `
  --bg: oklch(0.985 0.004 95);
  --bg-alt: oklch(0.96 0.008 90);
  --surface: oklch(0.995 0.002 95 / 0.9);
  --surface-strong: oklch(0.998 0.002 95 / 0.98);
  --surface-muted: oklch(0.96 0.008 92 / 0.72);
  --line: oklch(0.72 0.008 90 / 0.18);
  --line-strong: oklch(0.54 0.015 240 / 0.25);
  --ink: oklch(0.24 0.01 250);
  --muted: oklch(0.48 0.01 248);
  --accent: oklch(0.56 0.03 240);
  --accent-2: oklch(0.82 0.01 240);
  --accent-soft: oklch(0.95 0.01 245);
  --inverse-bg: oklch(0.14 0.012 245);
  --inverse-ink: oklch(0.96 0.008 94);
  --shadow: 0 16px 32px oklch(0.7 0.01 240 / 0.06);
`,
    homeLayout: "Hero copy is stripped of its container while the image floats like a framed work; supporting sections behave like wall texts.",
    lookbookLayout: "Lookbook is a sparse salon hang with wide gutters and unequal columns.",
    aboutLayout: "About uses lots of empty space, as if each block were mounted separately on a gallery wall.",
    css: `
body::before,
body::after {
  opacity: 0;
}

.card-surface,
.reason-block,
.selected-piece,
.principle-block,
.rail-item,
.look-copy,
.collection-switcher-shell {
  box-shadow: none;
}

.hero-composition {
  grid-template-columns: 0.6fr 1.4fr;
  grid-template-areas:
    "copy visual"
    "stats visual";
  gap: 2.2rem;
}

.hero-copy {
  background: transparent;
  border: 0;
  padding-inline: 0;
}

.hero-stats {
  background: transparent;
  border-radius: 0;
  box-shadow: none;
  border-left: 0;
}

.season-composition {
  grid-template-columns: 0.9fr 0.9fr 0.7fr;
  align-items: end;
}

.gallery-track {
  grid-template-columns: 0.7fr 1.35fr 0.7fr;
  gap: 2rem;
}

.editorial-card-wide {
  transform: none;
}

.gallery-track .editorial-card:first-child,
.gallery-track .editorial-card:last-child {
  margin-top: 3rem;
}

.reasons-composition,
.pieces-composition,
.routes-composition {
  grid-template-columns: 0.55fr 1.45fr;
}

.piece-stack,
.route-list {
  grid-template-columns: 1fr 1fr;
}
`,
  },
  {
    id: "04-editorial-grid",
    name: "Editorial Grid",
    references: ["jp/wired", "global/figma"],
    summary: "誌面設計とテクニカルな罫線で組む、知的で硬質なマガジン型サイト。",
    mood: "Mono / Grid / Electric rule",
    accent: "Editorial logic",
    personality: "Exacting, cerebral, publication-first",
    colorScheme: "light",
    fontImport:
      'https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@500;700;800&family=Work+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap',
    displayFont: '"Barlow Condensed", sans-serif',
    bodyFont: '"Work Sans", sans-serif',
    labelFont: '"JetBrains Mono", monospace',
    vars: `
  --bg: oklch(0.965 0.004 95);
  --bg-alt: oklch(0.93 0.008 95);
  --surface: oklch(0.99 0.002 95 / 0.88);
  --surface-strong: oklch(0.995 0.002 95 / 0.96);
  --surface-muted: oklch(0.95 0.004 95 / 0.88);
  --line: oklch(0.4 0.01 95 / 0.18);
  --line-strong: oklch(0.22 0.02 95 / 0.32);
  --ink: oklch(0.16 0.01 95);
  --muted: oklch(0.42 0.008 95);
  --accent: oklch(0.56 0.18 250);
  --accent-2: oklch(0.68 0.05 250);
  --accent-soft: oklch(0.95 0.012 250);
  --inverse-bg: oklch(0.12 0.01 95);
  --inverse-ink: oklch(0.96 0.002 95);
  --shadow: 0 18px 34px oklch(0.2 0 0 / 0.05);
  --radius-md: 0;
  --radius-lg: 0;
  --radius-xl: 0;
`,
    homeLayout: "A strict tabloid spread with cards behaving like columns clipped to a visible baseline grid.",
    lookbookLayout: "Lookbook becomes a magazine spread with flat panels and hard separators.",
    aboutLayout: "About reads like a dossier index, with principles and routes arranged in ruled modules.",
    css: `
body::after {
  opacity: 0.22;
}

.hero-composition {
  grid-template-columns: 1fr 1fr 0.66fr;
  grid-template-areas: "copy visual stats";
  gap: 0;
}

.hero-copy,
.hero-visual,
.hero-stats,
.season-copy,
.season-meta,
.reason-block,
.selected-piece,
.principle-block,
.rail-item,
.look-tile,
.collection-switcher-shell,
.note-copy,
.story-copy {
  border-right: 1px solid var(--line-strong);
}

.hero-stats,
.season-meta,
.reason-block:last-child,
.selected-piece:last-child,
.principle-block:last-child {
  border-right: 0;
}

.season-composition,
.collection-composition,
.lookbook-note-composition,
.story-composition {
  grid-template-columns: 1fr 1fr;
  gap: 0;
}

.gallery-track,
.reason-list,
.piece-stack,
.principle-list,
.route-list,
.look-grid {
  gap: 0;
}

.look-tile:nth-child(even) {
  margin-top: 4rem;
}
`,
  },
  {
    id: "05-midnight-system",
    name: "Midnight System",
    references: ["global/linear.app", "global/framer"],
    summary: "冷えた暗色と氷のようなブルーで組む、コマンドデッキ型の営業サイト。",
    mood: "Midnight / Steel / Ice blue",
    accent: "Technical luxury",
    personality: "Focused, technical, controlled",
    colorScheme: "dark",
    fontImport:
      'https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@400;500;600;700&family=Familjen+Grotesk:wght@400;500;600;700&family=Saira+Semi+Condensed:wght@500;600;700&display=swap',
    displayFont: '"Chakra Petch", sans-serif',
    bodyFont: '"Familjen Grotesk", sans-serif',
    labelFont: '"Saira Semi Condensed", sans-serif',
    vars: `
  --bg: oklch(0.16 0.022 250);
  --bg-alt: oklch(0.1 0.02 248);
  --surface: oklch(0.21 0.018 245 / 0.88);
  --surface-strong: oklch(0.24 0.022 245 / 0.96);
  --surface-muted: oklch(0.28 0.02 242 / 0.82);
  --line: oklch(0.72 0.03 230 / 0.16);
  --line-strong: oklch(0.76 0.08 228 / 0.28);
  --ink: oklch(0.94 0.01 240);
  --muted: oklch(0.73 0.02 236);
  --accent: oklch(0.72 0.13 230);
  --accent-2: oklch(0.55 0.12 255);
  --accent-soft: oklch(0.26 0.08 232);
  --inverse-bg: oklch(0.95 0.004 230);
  --inverse-ink: oklch(0.18 0.02 248);
  --shadow: 0 24px 70px oklch(0.04 0.01 245 / 0.44);
`,
    homeLayout: "A dashboard-like hero where copy, image, and stats become three active panels in a command deck.",
    lookbookLayout: "Lookbook controls are treated like a system console above the collection cards.",
    aboutLayout: "About becomes a technical memo with story and routes laid out as companion panels.",
    css: `
body {
  background:
    radial-gradient(circle at 88% 12%, oklch(0.4 0.12 230 / 0.2), transparent 18%),
    linear-gradient(180deg, oklch(0.18 0.02 250), oklch(0.08 0.012 248));
}

.hero-composition {
  grid-template-columns: 0.86fr 0.9fr 0.68fr;
  grid-template-areas: "copy visual stats";
}

.season-composition,
.lookbook-top-composition {
  grid-template-columns: 1.05fr 0.95fr 0.8fr;
}

.gallery-track {
  grid-template-columns: 1fr 1fr 1fr;
}

.reasons-composition,
.pieces-composition,
.principle-composition,
.routes-composition {
  grid-template-columns: 0.52fr 1.48fr;
}

.look-grid {
  grid-template-columns: 1fr 1fr;
}

.look-tile {
  display: grid;
  grid-template-columns: 0.85fr 1.15fr;
}

.look-tile figure {
  aspect-ratio: auto;
}
`,
  },
  {
    id: "06-atelier-cream",
    name: "Atelier Cream",
    references: ["global/clay", "jp/studio"],
    summary: "色温度のやさしいクリーム地に、アトリエの切れ端のような軽さを残すサイト。",
    mood: "Cream / Clay / Mint",
    accent: "Studio softness",
    personality: "Warm, handcrafted, breezy",
    colorScheme: "light",
    fontImport:
      'https://fonts.googleapis.com/css2?family=Afacad+Flux:wght@400;500;600;700&family=Hanken+Grotesk:wght@400;500;600;700&family=Chivo+Mono:wght@400;500&display=swap',
    displayFont: '"Afacad Flux", sans-serif',
    bodyFont: '"Hanken Grotesk", sans-serif',
    labelFont: '"Chivo Mono", monospace',
    vars: `
  --bg: oklch(0.98 0.014 86);
  --bg-alt: oklch(0.95 0.02 80);
  --surface: oklch(0.99 0.01 92 / 0.88);
  --surface-strong: oklch(0.995 0.008 92 / 0.96);
  --surface-muted: oklch(0.95 0.02 78 / 0.86);
  --line: oklch(0.76 0.02 72 / 0.2);
  --line-strong: oklch(0.76 0.06 50 / 0.26);
  --ink: oklch(0.31 0.03 44);
  --muted: oklch(0.52 0.02 52);
  --accent: oklch(0.71 0.1 48);
  --accent-2: oklch(0.82 0.06 150);
  --accent-soft: oklch(0.97 0.024 48);
  --inverse-bg: oklch(0.26 0.03 44);
  --inverse-ink: oklch(0.96 0.01 86);
  --shadow: 0 20px 46px oklch(0.46 0.02 44 / 0.11);
`,
    homeLayout: "The homepage behaves like an atelier board with slightly misaligned blocks and softer overlaps.",
    lookbookLayout: "Lookbook is a playful spread with unequal cards and generous breathing room.",
    aboutLayout: "About feels like pinned process notes with airy spacing and low-stakes rhythm.",
    css: `
.hero-composition {
  grid-template-columns: 1fr 0.9fr;
  grid-template-areas:
    "visual copy"
    "visual stats";
}

.hero-copy {
  margin-top: 2rem;
}

.hero-stats {
  margin-left: 8%;
}

.gallery-track .editorial-card:first-child {
  margin-top: 2.4rem;
}

.gallery-track .editorial-card:nth-child(2) {
  transform: rotate(-1.2deg);
}

.gallery-track .editorial-card:last-child {
  margin-top: 1rem;
}

.reason-block:nth-child(1) {
  transform: translateY(1rem);
}

.reason-block:nth-child(3) {
  transform: translateY(1.8rem);
}

.feature-composition {
  grid-template-columns: 1.12fr 0.88fr;
}

.piece-stack {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}
`,
  },
  {
    id: "07-monochrome-pill",
    name: "Monochrome Pill",
    references: ["global/cal", "jp/smarthr"],
    summary: "丸みと濃淡だけで成立させる、静かなプロダクト感のある単色サイト。",
    mood: "Fog / White / Charcoal",
    accent: "Rounded restraint",
    personality: "Soft-spoken, precise, calm",
    colorScheme: "light",
    fontImport:
      'https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@400;500;700;800&family=Figtree:wght@400;500;600;700&family=Martian+Mono:wght@400;500&display=swap',
    displayFont: '"Red Hat Display", sans-serif',
    bodyFont: '"Figtree", sans-serif',
    labelFont: '"Martian Mono", monospace',
    vars: `
  --bg: oklch(0.96 0.004 95);
  --bg-alt: oklch(0.93 0.006 95);
  --surface: oklch(0.99 0.002 95 / 0.9);
  --surface-strong: oklch(0.995 0.002 95 / 0.98);
  --surface-muted: oklch(0.95 0.004 95 / 0.88);
  --line: oklch(0.44 0.004 95 / 0.12);
  --line-strong: oklch(0.26 0.004 95 / 0.18);
  --ink: oklch(0.18 0.004 95);
  --muted: oklch(0.46 0.004 95);
  --accent: oklch(0.22 0.004 95);
  --accent-2: oklch(0.86 0.004 95);
  --accent-soft: oklch(0.94 0.004 95);
  --inverse-bg: oklch(0.16 0.004 95);
  --inverse-ink: oklch(0.96 0.002 95);
  --shadow: 0 18px 42px oklch(0.2 0 0 / 0.06);
  --radius-md: 2.2rem;
  --radius-lg: 3rem;
  --radius-xl: 4rem;
`,
    homeLayout: "A centered, single-axis composition where pills and rounded modules guide the eye rather than hard grids.",
    lookbookLayout: "Lookbook becomes stacked horizontal capsules with minimal contrast.",
    aboutLayout: "About reads like a sequence of soft modules floating on a pale field.",
    css: `
.site-nav {
  padding: 0.35rem;
  border-radius: 999px;
  background: color-mix(in oklch, var(--surface) 82%, transparent);
  border: 1px solid var(--line);
}

.hero-composition {
  grid-template-columns: 1fr;
  grid-template-areas:
    "copy"
    "visual"
    "stats";
  max-width: 64rem;
  margin: 0 auto;
}

.season-composition,
.lookbook-top-composition,
.about-intro-composition {
  grid-template-columns: 1fr;
  max-width: 64rem;
  margin: 0 auto;
}

.gallery-composition,
.reasons-composition,
.pieces-composition,
.principle-composition,
.studio-composition,
.routes-composition,
.feature-composition,
.story-composition,
.lookbook-note-composition {
  grid-template-columns: 1fr;
}

.look-tile {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
}

.piece-stack,
.route-list {
  grid-template-columns: 1fr 1fr;
}
`,
  },
  {
    id: "08-acid-signal",
    name: "Acid Signal",
    references: ["jp/novasell", "global/clickhouse"],
    summary: "酸性の強い配色とポスター的な圧縮で押す、最も攻撃的なプロモーションサイト。",
    mood: "Black / Acid / Ash",
    accent: "Compressed energy",
    personality: "Urgent, graphic, loud",
    colorScheme: "dark",
    fontImport:
      'https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@400;500;700;800&family=Inter:wght@400;500;600;700&family=Share+Tech+Mono&display=swap',
    displayFont: '"Bricolage Grotesque", sans-serif',
    bodyFont: '"Inter", sans-serif',
    labelFont: '"Share Tech Mono", monospace',
    vars: `
  --bg: oklch(0.08 0.005 120);
  --bg-alt: oklch(0.04 0.005 120);
  --surface: oklch(0.14 0.005 120 / 0.88);
  --surface-strong: oklch(0.18 0.008 120 / 0.96);
  --surface-muted: oklch(0.2 0.03 120 / 0.78);
  --line: oklch(0.88 0.04 110 / 0.16);
  --line-strong: oklch(0.92 0.19 110 / 0.38);
  --ink: oklch(0.96 0.01 100);
  --muted: oklch(0.76 0.016 102);
  --accent: oklch(0.9 0.24 112);
  --accent-2: oklch(0.75 0.06 95);
  --accent-soft: oklch(0.22 0.08 112);
  --inverse-bg: oklch(0.92 0.2 112);
  --inverse-ink: oklch(0.1 0.01 120);
  --shadow: 0 26px 70px oklch(0.02 0 0 / 0.5);
`,
    homeLayout: "Hero is treated like stacked poster strips, with the stats panel acting like a sticker rather than a footer.",
    lookbookLayout: "Lookbook is brutally compressed with staggered cards and high-contrast section bands.",
    aboutLayout: "About is a loud manifesto board where routes and principles feel like pasted notices.",
    css: `
body::after {
  opacity: 0.22;
}

.hero-composition {
  grid-template-columns: 1.16fr 0.84fr;
  grid-template-areas:
    "copy visual"
    "copy stats";
}

.hero-copy {
  min-height: 38rem;
}

.hero-stats {
  margin-left: 18%;
}

.gallery-track .editorial-card:nth-child(2) {
  transform: translateY(-1.6rem);
}

.gallery-track .editorial-card:nth-child(3) {
  transform: translateY(1.8rem);
}

.reason-list {
  grid-template-columns: 1.18fr 0.82fr 1fr;
}

.look-grid {
  grid-template-columns: 1fr 1fr;
}

.look-tile:nth-child(odd) {
  transform: translateY(-1rem);
}
`,
  },
  {
    id: "09-engineered-blue",
    name: "Engineered Blue",
    references: ["global/bmw", "jp/toyota"],
    summary: "青い設計図のような精度感と直線的な面構成で組む、工業カタログ型サイト。",
    mood: "Silver / Blueprint / Ink",
    accent: "Industrial precision",
    personality: "Measured, industrial, exact",
    colorScheme: "light",
    fontImport:
      'https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@400;500;600;700&family=Public+Sans:wght@400;500;600;700&family=Space+Mono:wght@400;700&display=swap',
    displayFont: '"Chakra Petch", sans-serif',
    bodyFont: '"Public Sans", sans-serif',
    labelFont: '"Space Mono", monospace',
    vars: `
  --bg: oklch(0.96 0.008 240);
  --bg-alt: oklch(0.92 0.012 238);
  --surface: oklch(0.99 0.004 230 / 0.86);
  --surface-strong: oklch(0.995 0.003 230 / 0.96);
  --surface-muted: oklch(0.93 0.012 238 / 0.82);
  --line: oklch(0.52 0.02 242 / 0.18);
  --line-strong: oklch(0.4 0.12 248 / 0.28);
  --ink: oklch(0.22 0.016 245);
  --muted: oklch(0.48 0.012 242);
  --accent: oklch(0.52 0.16 250);
  --accent-2: oklch(0.78 0.04 240);
  --accent-soft: oklch(0.92 0.03 244);
  --inverse-bg: oklch(0.17 0.018 245);
  --inverse-ink: oklch(0.96 0.004 230);
  --shadow: 0 20px 54px oklch(0.18 0.02 243 / 0.09);
  --radius-md: 0.6rem;
  --radius-lg: 0.8rem;
  --radius-xl: 1rem;
`,
    homeLayout: "The homepage behaves like a blueprint spread, with stats as a third column and clear hard-edged modules.",
    lookbookLayout: "Lookbook is a manual with precise cards and measured gutters.",
    aboutLayout: "About becomes an engineering memo, with process notes and routes like spec callouts.",
    css: `
.hero-composition {
  grid-template-columns: 0.92fr 1.08fr 0.72fr;
  grid-template-areas: "copy visual stats";
}

.season-composition {
  grid-template-columns: 1fr 1fr 0.7fr;
}

.gallery-track,
.look-grid {
  grid-template-columns: 1fr 1fr;
}

.gallery-track .editorial-card:first-child,
.gallery-track .editorial-card:last-child {
  min-height: 18rem;
}

.reasons-composition,
.pieces-composition,
.principle-composition,
.routes-composition {
  grid-template-columns: 0.48fr 1.52fr;
}

.piece-stack {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.look-tile:nth-child(even) {
  transform: translateY(1rem);
}
`,
  },
  {
    id: "10-soft-hospitality",
    name: "Soft Hospitality",
    references: ["global/airbnb", "jp/cybozu"],
    summary: "写真の温度と柔らかい余白を主役にした、ホスピタリティ冊子のようなサイト。",
    mood: "Cream / Rose / Cocoa",
    accent: "Warm trust",
    personality: "Welcoming, polished, human",
    colorScheme: "light",
    fontImport:
      'https://fonts.googleapis.com/css2?family=Afacad+Flux:wght@400;500;600;700&family=Hanken+Grotesk:wght@400;500;600;700&family=Chivo+Mono:wght@400;500&display=swap',
    displayFont: '"Afacad Flux", sans-serif',
    bodyFont: '"Hanken Grotesk", sans-serif',
    labelFont: '"Chivo Mono", monospace',
    vars: `
  --bg: oklch(0.985 0.01 72);
  --bg-alt: oklch(0.95 0.018 52);
  --surface: oklch(0.995 0.006 74 / 0.9);
  --surface-strong: oklch(0.998 0.004 74 / 0.98);
  --surface-muted: oklch(0.95 0.02 44 / 0.82);
  --line: oklch(0.76 0.018 48 / 0.2);
  --line-strong: oklch(0.72 0.12 30 / 0.24);
  --ink: oklch(0.3 0.03 34);
  --muted: oklch(0.52 0.02 38);
  --accent: oklch(0.7 0.18 28);
  --accent-2: oklch(0.88 0.03 60);
  --accent-soft: oklch(0.96 0.03 34);
  --inverse-bg: oklch(0.3 0.04 32);
  --inverse-ink: oklch(0.98 0.006 72);
  --shadow: 0 24px 60px oklch(0.5 0.03 34 / 0.09);
`,
    homeLayout: "Hero gives more room to the image than the copy, like a soft hospitality brochure cover.",
    lookbookLayout: "Lookbook feels like a travel notebook with generous picture-first pacing.",
    aboutLayout: "About is arranged like a calm storybook, with friendlier route cards and broad breathing room.",
    css: `
.hero-composition {
  grid-template-columns: 0.84fr 1.16fr;
  grid-template-areas:
    "copy visual"
    "stats visual";
  gap: 2rem;
}

.hero-copy {
  border-radius: 3.6rem;
}

.hero-visual {
  border-radius: 5rem 2rem 2rem 5rem;
}

.season-composition,
.about-intro-composition {
  grid-template-columns: 1.12fr 0.88fr 0.82fr;
}

.gallery-track {
  grid-template-columns: 1.16fr 0.84fr 1fr;
}

.piece-stack,
.route-list {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}
`,
  },
  {
    id: "11-washi-minimal",
    name: "Washi Minimal",
    references: ["jp/muji", "jp/note"],
    summary: "和紙の地と藍の静けさを生かし、縦方向の視線で読む日本的な営業サイト。",
    mood: "Washi / Indigo / Soft ink",
    accent: "Quiet Japanese minimalism",
    personality: "Restrained, attentive, contemplative",
    colorScheme: "light",
    fontImport:
      'https://fonts.googleapis.com/css2?family=Zen+Old+Mincho:wght@400;500;700&family=Zen+Kaku+Gothic+New:wght@400;500;700&family=M+PLUS+1+Code:wght@400;500&display=swap',
    displayFont: '"Zen Old Mincho", serif',
    bodyFont: '"Zen Kaku Gothic New", sans-serif',
    labelFont: '"M PLUS 1 Code", monospace',
    vars: `
  --bg: oklch(0.965 0.012 86);
  --bg-alt: oklch(0.93 0.018 82);
  --surface: oklch(0.985 0.008 92 / 0.88);
  --surface-strong: oklch(0.99 0.008 92 / 0.96);
  --surface-muted: oklch(0.95 0.016 84 / 0.86);
  --line: oklch(0.58 0.012 78 / 0.18);
  --line-strong: oklch(0.42 0.08 250 / 0.24);
  --ink: oklch(0.23 0.02 260);
  --muted: oklch(0.44 0.012 260);
  --accent: oklch(0.44 0.08 250);
  --accent-2: oklch(0.82 0.02 88);
  --accent-soft: oklch(0.96 0.016 250);
  --inverse-bg: oklch(0.24 0.02 250);
  --inverse-ink: oklch(0.97 0.006 88);
  --shadow: 0 18px 40px oklch(0.3 0.02 260 / 0.08);
  --radius-md: 1.2rem;
  --radius-lg: 2rem;
  --radius-xl: 2.4rem;
`,
    homeLayout: "Vertical labels and a narrow left rail make the page read like a Japanese editorial essay rather than a landing page.",
    lookbookLayout: "Looks are paced one by one with quiet offsets and more negative space than a standard grid.",
    aboutLayout: "About uses calm two-tone planes and a vertical-labeled process gallery.",
    css: `
body::after {
  opacity: 0.08;
}

.hero-composition {
  grid-template-columns: 0.72fr 1.28fr;
  grid-template-areas:
    "copy visual"
    "stats visual";
  gap: 2.5rem;
}

.gallery-composition,
.reasons-composition,
.pieces-composition,
.principle-composition,
.studio-composition,
.routes-composition {
  grid-template-columns: 0.3fr 1.7fr;
}

.chapter-heading {
  max-width: none;
}

.gallery-composition .chapter-heading .section-label,
.reasons-composition .chapter-heading .section-label,
.pieces-composition .chapter-heading .section-label,
.principle-composition .chapter-heading .section-label,
.studio-composition .chapter-heading .section-label,
.routes-composition .chapter-heading .section-label {
  writing-mode: vertical-rl;
  margin-left: auto;
}

.look-grid {
  grid-template-columns: 1fr;
}

.look-tile:nth-child(even) {
  margin-left: 9%;
}

.piece-stack,
.route-list {
  grid-template-columns: 1fr 1fr;
}
`,
  },
  {
    id: "12-tokyo-culture",
    name: "Tokyo Culture",
    references: ["jp/wired", "jp/pixiv"],
    summary: "東京のカルチャー誌とギャラリーのフライヤーを混ぜた、誌面圧の強いサイト。",
    mood: "Tokyo / Electric / Poster",
    accent: "Urban editorial tension",
    personality: "Youthful, graphic, culture-forward",
    colorScheme: "light",
    fontImport:
      'https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&family=Murecho:wght@400;500;700&family=Share+Tech+Mono&display=swap',
    displayFont: '"Oswald", sans-serif',
    bodyFont: '"Murecho", sans-serif',
    labelFont: '"Share Tech Mono", monospace',
    vars: `
  --bg: oklch(0.97 0.006 95);
  --bg-alt: oklch(0.92 0.008 95);
  --surface: oklch(0.99 0.002 95 / 0.88);
  --surface-strong: oklch(0.995 0.002 95 / 0.96);
  --surface-muted: oklch(0.95 0.02 250 / 0.18);
  --line: oklch(0.2 0.01 95 / 0.16);
  --line-strong: oklch(0.56 0.2 250 / 0.24);
  --ink: oklch(0.16 0.01 95);
  --muted: oklch(0.42 0.008 95);
  --accent: oklch(0.59 0.2 252);
  --accent-2: oklch(0.72 0.22 355);
  --accent-soft: oklch(0.95 0.018 250);
  --inverse-bg: oklch(0.12 0.01 95);
  --inverse-ink: oklch(0.96 0.002 95);
  --shadow: 0 18px 44px oklch(0.16 0 0 / 0.08);
  --radius-md: 0.9rem;
  --radius-lg: 1.2rem;
`,
    homeLayout: "Blocks behave like posters pasted onto a culture board, with stronger offsets and blue-pink energy.",
    lookbookLayout: "Lookbook is treated like a spread of event flyers: loud headings, harder crops, more punch.",
    aboutLayout: "About uses stacked culture notes and crisp route blocks, more zine than corporate page.",
    css: `
.hero-composition {
  grid-template-columns: 1.2fr 0.8fr;
  grid-template-areas:
    "copy visual"
    "copy stats";
  gap: 1rem;
}

.hero-copy,
.reason-block,
.selected-piece,
.rail-item {
  box-shadow: 10px 10px 0 color-mix(in oklch, var(--accent) 18%, transparent);
}

.hero-visual {
  box-shadow: -12px 12px 0 color-mix(in oklch, var(--accent-2) 24%, transparent);
}

.gallery-track .editorial-card:nth-child(2) {
  transform: translateY(-1.4rem) rotate(-1deg);
}

.gallery-track .editorial-card:nth-child(3) {
  transform: translateY(1.2rem) rotate(0.8deg);
}

.reason-list,
.piece-stack,
.route-list {
  gap: 0.8rem;
}
`,
  },
  {
    id: "13-indigo-corporate",
    name: "Indigo Corporate",
    references: ["jp/sansan", "jp/toyota"],
    summary: "藍色の静かな精度で組む、日本的な上質コーポレート資料サイト。",
    mood: "Indigo / Ledger / Precision",
    accent: "Corporate calm",
    personality: "Confident, exact, composed",
    colorScheme: "light",
    fontImport:
      'https://fonts.googleapis.com/css2?family=Shippori+Mincho:wght@500;700&family=Noto+Sans+JP:wght@400;500;700&family=M+PLUS+1+Code:wght@400;500&display=swap',
    displayFont: '"Shippori Mincho", serif',
    bodyFont: '"Noto Sans JP", sans-serif',
    labelFont: '"M PLUS 1 Code", monospace',
    vars: `
  --bg: oklch(0.955 0.01 245);
  --bg-alt: oklch(0.92 0.014 242);
  --surface: oklch(0.99 0.004 230 / 0.88);
  --surface-strong: oklch(0.995 0.003 230 / 0.96);
  --surface-muted: oklch(0.93 0.014 242 / 0.86);
  --line: oklch(0.42 0.02 245 / 0.16);
  --line-strong: oklch(0.38 0.1 252 / 0.2);
  --ink: oklch(0.22 0.018 245);
  --muted: oklch(0.46 0.01 242);
  --accent: oklch(0.44 0.11 252);
  --accent-2: oklch(0.78 0.02 238);
  --accent-soft: oklch(0.95 0.018 242);
  --inverse-bg: oklch(0.18 0.018 245);
  --inverse-ink: oklch(0.96 0.004 230);
  --shadow: 0 18px 42px oklch(0.18 0.02 243 / 0.08);
  --radius-md: 0.75rem;
  --radius-lg: 1rem;
`,
    homeLayout: "Three-column dossier with a formal left-to-right reading order and a labelled lead block.",
    lookbookLayout: "Lookbook behaves like an executive appendix: switcher, summary, and looks presented with ledger precision.",
    aboutLayout: "About is a corporate note with chapter labels, calm surfaces, and a contained partner route section.",
    css: `
.hero-composition {
  grid-template-columns: 0.72fr 1fr 0.72fr;
  grid-template-areas: "stats copy visual";
}

.hero-copy {
  position: relative;
  padding-top: 4.3rem;
}

.hero-copy::before {
  content: "partner edition";
  position: absolute;
  left: 1.6rem;
  top: 1.4rem;
  font-family: var(--label-font);
  font-size: 0.72rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--muted);
}

.season-composition,
.collection-composition,
.lookbook-note-composition,
.about-intro-composition,
.story-composition {
  grid-template-columns: 0.78fr 1.12fr 0.7fr;
}

.reasons-composition,
.principle-composition {
  grid-template-columns: 0.42fr 1.58fr;
}

.piece-stack,
.route-list {
  grid-template-columns: 1fr 1fr;
}
`,
  },
  {
    id: "14-soft-service",
    name: "Soft Service",
    references: ["jp/cybozu", "jp/smarthr"],
    summary: "やさしい業務サービスの読み心地を保ちつつ、静かなファッション営業資料へ寄せたサイト。",
    mood: "Leaf / Ivory / Friendly",
    accent: "Trust and softness",
    personality: "Gentle, clear, approachable",
    colorScheme: "light",
    fontImport:
      'https://fonts.googleapis.com/css2?family=Kiwi+Maru:wght@400;500&family=Zen+Kaku+Gothic+New:wght@400;500;700&family=M+PLUS+1+Code:wght@400;500&display=swap',
    displayFont: '"Kiwi Maru", serif',
    bodyFont: '"Zen Kaku Gothic New", sans-serif',
    labelFont: '"M PLUS 1 Code", monospace',
    vars: `
  --bg: oklch(0.975 0.012 130);
  --bg-alt: oklch(0.94 0.018 130);
  --surface: oklch(0.99 0.006 120 / 0.9);
  --surface-strong: oklch(0.995 0.004 120 / 0.97);
  --surface-muted: oklch(0.95 0.018 130 / 0.86);
  --line: oklch(0.54 0.02 145 / 0.14);
  --line-strong: oklch(0.46 0.08 150 / 0.18);
  --ink: oklch(0.25 0.02 145);
  --muted: oklch(0.48 0.014 145);
  --accent: oklch(0.58 0.12 152);
  --accent-2: oklch(0.82 0.03 128);
  --accent-soft: oklch(0.97 0.02 150);
  --inverse-bg: oklch(0.26 0.03 150);
  --inverse-ink: oklch(0.98 0.006 120);
  --shadow: 0 18px 38px oklch(0.26 0.02 145 / 0.08);
  --radius-md: 2rem;
  --radius-lg: 2.8rem;
  --radius-xl: 3.4rem;
`,
    homeLayout: "Homepage reads like a friendly onboarding sequence: simple top, clear middle, generous rounded panels.",
    lookbookLayout: "Lookbook is calmer and more guided, with switcher and note blocks feeling like soft steps.",
    aboutLayout: "About is a service handbook with warm, round routes and easy spacing.",
    css: `
.hero-composition {
  grid-template-columns: 1fr;
  grid-template-areas:
    "copy"
    "stats"
    "visual";
  max-width: 70rem;
  margin: 0 auto;
}

.season-composition,
.lookbook-top-composition,
.about-intro-composition {
  grid-template-columns: 1.1fr 0.9fr 0.9fr;
}

.gallery-track {
  grid-template-columns: 1fr 1fr 1fr;
}

.piece-stack,
.route-list {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}
`,
  },
  {
    id: "15-market-layer",
    name: "Market Layer",
    references: ["jp/mercari", "jp/rakuten"],
    summary: "マーケットプレイスの積層感を、商談資料として上品に再編集した高密度サイト。",
    mood: "Market / Warm white / Red",
    accent: "Layered practicality",
    personality: "Busy, practical, commercial",
    colorScheme: "light",
    fontImport:
      'https://fonts.googleapis.com/css2?family=Murecho:wght@400;500;700;800&family=Zen+Old+Mincho:wght@400;700&family=M+PLUS+1+Code:wght@400;500&display=swap',
    displayFont: '"Zen Old Mincho", serif',
    bodyFont: '"Murecho", sans-serif',
    labelFont: '"M PLUS 1 Code", monospace',
    vars: `
  --bg: oklch(0.975 0.012 70);
  --bg-alt: oklch(0.94 0.02 62);
  --surface: oklch(0.995 0.006 72 / 0.92);
  --surface-strong: oklch(0.998 0.004 72 / 0.98);
  --surface-muted: oklch(0.95 0.02 56 / 0.84);
  --line: oklch(0.48 0.02 40 / 0.14);
  --line-strong: oklch(0.54 0.14 30 / 0.2);
  --ink: oklch(0.24 0.03 34);
  --muted: oklch(0.48 0.02 38);
  --accent: oklch(0.58 0.18 30);
  --accent-2: oklch(0.82 0.04 70);
  --accent-soft: oklch(0.97 0.024 30);
  --inverse-bg: oklch(0.22 0.03 34);
  --inverse-ink: oklch(0.98 0.006 72);
  --shadow: 0 14px 28px oklch(0.3 0.02 34 / 0.07);
  --radius-md: 0.7rem;
  --radius-lg: 0.9rem;
  --radius-xl: 1.2rem;
`,
    homeLayout: "A dense market board: copy and stats break into more practical panels with tighter gaps and sharper corners.",
    lookbookLayout: "Lookbook is treated like a comparison board with more compact cards and visible grouping.",
    aboutLayout: "About feels like a seller memo with layered notes, denser routes, and compact spacing.",
    css: `
body::after {
  opacity: 0.18;
}

.hero-composition {
  grid-template-columns: 1.08fr 0.92fr;
  grid-template-areas:
    "copy visual"
    "stats visual";
  gap: 0.75rem;
}

.stat-line {
  gap: 0.45rem;
}

.stat-item {
  padding: 0.7rem;
  background: color-mix(in oklch, var(--accent-soft) 70%, transparent);
  border-top: 0;
}

.season-composition,
.lookbook-top-composition {
  grid-template-columns: 1fr 1fr 0.85fr;
  gap: 0.8rem;
}

.gallery-track,
.reason-list,
.piece-stack,
.route-list {
  gap: 0.75rem;
}

.piece-stack,
.route-list {
  grid-template-columns: 1fr 1fr;
}
`,
  },
];

const structures = {
  "01-obsidian-runway": { home: "stage", lookbook: "poster", about: "dossier" },
  "02-parchment-salon": { home: "desk", lookbook: "chapter", about: "essay" },
  "03-gallery-minimal": { home: "gallery", lookbook: "salon", about: "wall" },
  "04-editorial-grid": { home: "tabloid", lookbook: "spread", about: "index" },
  "05-midnight-system": { home: "command", lookbook: "console", about: "memo" },
  "06-atelier-cream": { home: "atelier", lookbook: "atelier", about: "pinned" },
  "07-monochrome-pill": { home: "axis", lookbook: "capsule", about: "modules" },
  "08-acid-signal": { home: "signal", lookbook: "stagger", about: "manifesto" },
  "09-engineered-blue": { home: "blueprint", lookbook: "manual", about: "spec" },
  "10-soft-hospitality": { home: "brochure", lookbook: "notebook", about: "storybook" },
  "11-washi-minimal": { home: "washi", lookbook: "quiet", about: "rail" },
  "12-tokyo-culture": { home: "culture", lookbook: "flyer", about: "zine" },
  "13-indigo-corporate": { home: "dossier", lookbook: "appendix", about: "executive" },
  "14-soft-service": { home: "service", lookbook: "guided", about: "handbook" },
  "15-market-layer": { home: "market", lookbook: "compare", about: "seller" },
};

function pageHead(title) {
  return `    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${title}</title>
    <link rel="icon" href="../../assets/generated/favicon.svg" type="image/svg+xml" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link rel="stylesheet" href="./assets/styles.css" />`;
}

function header() {
  return `    <a class="skip-link" href="#main">本文へ移動</a>
    <header class="site-header">
      <div class="site-header-inner">
        <a class="brandmark" href="./index.html" aria-label="AUN home">
          <span class="brandmark-word">AUN</span>
          <span class="brandmark-meta" id="brand-location"></span>
        </a>
        <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="site-nav">
          メニュー
        </button>
        <nav class="site-nav" id="site-nav" aria-label="Primary">
          <a data-nav-link="home" href="./index.html">トップ</a>
          <a data-nav-link="lookbook" href="./lookbook.html">ルック</a>
          <a data-nav-link="about" href="./about.html">ブランド</a>
          <a class="cta-link" id="header-contact-link" href="mailto:partners@aun-studio.example">問い合わせ</a>
        </nav>
      </div>
    </header>`;
}

function footer() {
  return `    <footer class="site-footer">
      <div class="site-footer-inner">
        <div>
          <strong id="footer-brand"></strong>
          <p id="footer-summary"></p>
        </div>
        <div class="footer-meta">
          <p id="footer-note"></p>
          <small>© <span id="year"></span> AUN</small>
        </div>
      </div>
    </footer>`;
}

function section(chapterClass, inner, attrs = "") {
  return `      <section class="chapter ${chapterClass}"${attrs}>
        <div class="page-shell">
${inner}
        </div>
      </section>`;
}

function heroCopy(anchor = "#partner-note") {
  return `          <div class="hero-copy card-surface" data-reveal>
            <p class="section-label" id="hero-label"></p>
            <h1 class="display-title">
              <span id="hero-brand-name"></span>
              <span id="hero-theme"></span>
            </h1>
            <p class="hero-summary" id="hero-summary"></p>
            <div class="hero-actions">
              <a class="button button-primary" href="./lookbook.html">ルックを見る</a>
              <a class="button button-secondary" href="${anchor}">取扱のご相談</a>
            </div>
          </div>`;
}

function heroVisual() {
  return `          <figure class="hero-visual visual-surface" data-reveal>
            <img id="hero-image" src="" alt="" />
            <figcaption class="visual-caption" id="hero-visual-caption"></figcaption>
          </figure>`;
}

function heroStats() {
  return `          <aside class="hero-stats card-surface" data-reveal>
            <p class="eyebrow">基本情報</p>
            <dl class="stat-line" id="hero-stat-line"></dl>
          </aside>`;
}

function seasonLead() {
  return `          <div class="block-shell" data-reveal>
            <p class="section-label">今季の見立て</p>
            <h2 class="chapter-title" id="season-heading"></h2>
          </div>`;
}

function seasonCopy() {
  return `          <div class="season-copy card-surface" data-reveal>
            <p class="eyebrow">今季メモ</p>
            <p class="eyebrow-copy" id="season-copy"></p>
          </div>`;
}

function seasonMeta() {
  return `          <div class="season-meta card-surface" data-reveal>
            <div class="meta-pairs">
              <div>
                <span>想定先</span>
                <strong id="audience-copy"></strong>
              </div>
              <div>
                <span>価格の印象</span>
                <strong id="price-copy"></strong>
              </div>
              <div>
                <span>制作拠点</span>
                <strong id="studio-copy"></strong>
              </div>
            </div>
          </div>`;
}

function galleryBlock() {
  return `          <div class="gallery-block">
            <div class="chapter-heading block-shell" data-reveal>
              <p class="section-label">補助ビジュアル</p>
              <h2 class="chapter-title">会話の前に、ラインの温度を補うための補助カットです。</h2>
            </div>
            <div class="gallery-track" id="home-editorial-strip"></div>
          </div>`;
}

function reasonsBlock() {
  return `          <div class="reasons-block">
            <div class="chapter-heading block-shell" data-reveal>
              <p class="section-label">導入の理由</p>
              <h2 class="chapter-title">取扱先、スタイリスト、エディターに向けた短い判断材料です。</h2>
            </div>
            <div class="reason-list" id="reason-grid"></div>
          </div>`;
}

function featureBlock() {
  return `          <div class="feature-cluster">
            <div class="feature-copy card-surface" data-reveal>
              <p class="section-label">代表ルック</p>
              <h2 class="feature-title" id="feature-title"></h2>
              <p class="feature-summary" id="feature-summary"></p>
              <ul class="detail-list" id="feature-details"></ul>
              <div class="button-row">
                <a class="button button-secondary" href="./lookbook.html">全ルックを見る</a>
              </div>
            </div>
            <figure class="feature-visual visual-surface" data-reveal>
              <img id="feature-image" src="" alt="" />
              <figcaption class="visual-caption" id="feature-caption"></figcaption>
            </figure>
          </div>`;
}

function piecesBlock() {
  return `          <div class="pieces-block">
            <div class="chapter-heading block-shell" data-reveal>
              <p class="section-label">注目ピース</p>
              <h2 class="chapter-title">空気を崩さずに、商材としての見え方も担保する構成です。</h2>
            </div>
            <div class="piece-stack" id="selected-piece-list"></div>
          </div>`;
}

function routesBlock(targetId = "partner-rail", label = "For stockists / press / collaboration", title = "Materials, line sheets, and seasonal notes are shared on request.", inverse = false) {
  const localizedLabel =
    /[A-Za-z]/.test(label) && !/[ぁ-んァ-ヶ一-龠]/.test(label) ? "取扱・掲載・協業" : label;
  const localizedTitle =
    /[A-Za-z]/.test(title) && !/[ぁ-んァ-ヶ一-龠]/.test(title)
      ? "資料、ラインシート、補足情報はご要望に応じてお送りします。"
      : title;
  return `          <div class="routes-block${inverse ? " section-inverse" : ""}">
            <div class="chapter-heading block-shell" data-reveal>
              <p class="section-label">${localizedLabel}</p>
              <h2 class="chapter-title">${localizedTitle}</h2>
            </div>
            <div class="route-list" id="${targetId}"></div>
          </div>`;
}

function lookLeadBlock() {
  return `          <div class="block-shell" data-reveal>
            <p class="section-label">ルックブック</p>
            <h1 class="chapter-title">AUN の代表ルックとコレクションノート。</h1>
          </div>`;
}

function lookIntroBlock() {
  return `          <div class="card-surface" data-reveal>
            <p class="eyebrow">導入</p>
            <p class="eyebrow-copy" id="lookbook-intro"></p>
            <p class="muted-note" id="lookbook-disclaimer"></p>
          </div>`;
}

function lookSwitcherBlock() {
  return `          <div class="collection-switcher-shell" data-reveal>
            <p class="eyebrow">収録ライン</p>
            <div class="collection-switcher" id="collection-switcher"></div>
          </div>`;
}

function collectionLeadBlock() {
  return `          <div class="block-shell" data-reveal>
            <p class="section-label">コレクションノート</p>
            <h2 class="chapter-title" id="collection-title"></h2>
          </div>`;
}

function collectionSummaryBlock() {
  return `          <div class="card-surface" data-reveal>
            <p class="eyebrow">要約</p>
            <p class="eyebrow-copy" id="collection-summary"></p>
          </div>`;
}

function lookGridBlock() {
  return `          <div class="looks-block">
            <div class="look-grid" id="look-grid"></div>
          </div>`;
}

function lookbookSpotlightBlock() {
  return `          <div class="spotlight-block" id="lookbook-spotlight"></div>`;
}

function seasonNoteBlock() {
  return `          <div class="note-copy card-surface" data-reveal>
            <p class="section-label">補足ノート</p>
            <h2 class="chapter-title" id="season-note-title"></h2>
            <p class="feature-summary" id="season-note-copy"></p>
          </div>`;
}

function lookbookPiecesBlock() {
  return `          <div class="pieces-block">
            <div class="piece-stack" id="lookbook-piece-list"></div>
          </div>`;
}

function aboutLeadBlock() {
  return `          <div class="block-shell" data-reveal>
            <p class="section-label">ブランドについて</p>
            <h1 class="chapter-title">静かな輪郭と、読みやすい商談導線のための整理。</h1>
          </div>`;
}

function aboutIntroBlock() {
  return `          <div class="card-surface" data-reveal>
            <p class="eyebrow">ブランドノート</p>
            <p class="eyebrow-copy" id="about-intro"></p>
          </div>`;
}

function aboutToneBlock(variant) {
  return `          <div class="card-surface" data-reveal>
            <p class="eyebrow">Variant tone</p>
            <p class="eyebrow-copy">${variant.personality}</p>
          </div>`;
}

function principlesBlock() {
  return `          <div class="principles-block">
            <div class="chapter-heading block-shell" data-reveal>
              <p class="section-label">制作方針</p>
              <h2 class="chapter-title">ライン全体の印象を支える三つの方針です。</h2>
            </div>
            <div class="principle-list" id="principle-list"></div>
          </div>`;
}

function storyBlock() {
  return `          <div class="story-cluster">
            <figure class="story-visual visual-surface" data-reveal>
              <img id="about-image" src="" alt="" />
              <figcaption class="visual-caption" id="about-image-caption"></figcaption>
            </figure>
            <div class="story-copy card-surface" data-reveal>
              <p class="section-label">制作ノート</p>
              <h2 class="chapter-title" id="about-story-title"></h2>
              <p class="feature-summary" id="about-story-copy"></p>
              <ul class="detail-list" id="about-story-points"></ul>
            </div>
          </div>`;
}

function studioBlock() {
  return `          <div class="studio-block">
            <div class="chapter-heading block-shell" data-reveal>
              <p class="section-label">制作風景</p>
              <h2 class="chapter-title">制作の手順やラックの見え方を補うための補助カットです。</h2>
            </div>
            <div class="studio-grid" id="about-studio-gallery"></div>
          </div>`;
}

function homeMain(variant) {
  const shell = structures[variant.id].home;

  switch (shell) {
    case "stage":
      return [
        section("chapter-home-top", `          <div class="home-top-grid">\n${heroCopy()}\n${heroVisual()}\n${heroStats()}\n          </div>`),
        section("chapter-home-mid", `          <div class="home-mid-grid">\n${seasonLead()}\n${seasonCopy()}\n${seasonMeta()}\n          </div>`),
        section("chapter-home-gallery", `          <div class="home-gallery-grid">\n${galleryBlock()}\n          </div>`),
        section("chapter-home-feature", `          <div class="home-feature-grid">\n${reasonsBlock()}\n${featureBlock()}\n          </div>`, ' id="partner-note"'),
        section("chapter-home-tail", `          <div class="home-tail-grid">\n${piecesBlock()}\n${routesBlock("partner-rail", "For stockists / press / collaboration", "Materials, line sheets, and seasonal notes are shared on request.", true)}\n          </div>`),
      ].join("\n");
    case "desk":
      return [
        section("chapter-home-top", `          <div class="home-top-grid">\n            <div class="season-stack">\n${seasonLead()}\n${seasonCopy()}\n${seasonMeta()}\n${heroStats()}\n            </div>\n${heroCopy()}\n${heroVisual()}\n          </div>`),
        section("chapter-home-mid", `          <div class="home-mid-grid">\n${galleryBlock()}\n${reasonsBlock()}\n          </div>`),
        section("chapter-home-feature", `          <div class="home-feature-grid">\n${featureBlock()}\n${piecesBlock()}\n          </div>`),
        section("chapter-home-tail", `          <div class="home-tail-grid">\n${routesBlock("partner-rail", "For stockists / press / collaboration", "Materials, line sheets, and seasonal notes are shared on request.", true)}\n          </div>`, ' id="partner-note"'),
      ].join("\n");
    case "gallery":
      return [
        section("chapter-home-top", `          <div class="home-top-grid">\n${heroVisual()}\n          </div>`),
        section("chapter-home-mid", `          <div class="home-mid-grid">\n${heroCopy()}\n${heroStats()}\n${seasonLead()}\n${seasonCopy()}\n${seasonMeta()}\n          </div>`, ' id="partner-note"'),
        section("chapter-home-gallery", `          <div class="home-gallery-grid">\n${galleryBlock()}\n${featureBlock()}\n          </div>`),
        section("chapter-home-tail", `          <div class="home-tail-grid">\n${reasonsBlock()}\n${piecesBlock()}\n${routesBlock("partner-rail", "Partner routes", "Stockist, press, and collaboration contacts.", true)}\n          </div>`),
      ].join("\n");
    case "tabloid":
      return [
        section("chapter-home-top", `          <div class="home-top-grid">\n${heroCopy()}\n${seasonLead()}\n${seasonCopy()}\n${seasonMeta()}\n${heroStats()}\n${heroVisual()}\n          </div>`),
        section("chapter-home-mid", `          <div class="home-mid-grid">\n${reasonsBlock()}\n${galleryBlock()}\n          </div>`, ' id="partner-note"'),
        section("chapter-home-tail", `          <div class="home-tail-grid">\n${featureBlock()}\n${piecesBlock()}\n${routesBlock("partner-rail", "Partner routes", "Materials and conversations are shared by request.", true)}\n          </div>`),
      ].join("\n");
    case "command":
      return [
        section("chapter-home-top", `          <div class="home-top-grid">\n${heroCopy()}\n${heroVisual()}\n${heroStats()}\n          </div>`),
        section("chapter-home-mid", `          <div class="home-mid-grid">\n${seasonCopy()}\n${seasonMeta()}\n${reasonsBlock()}\n${seasonLead()}\n          </div>`),
        section("chapter-home-gallery", `          <div class="home-gallery-grid">\n${galleryBlock()}\n${featureBlock()}\n          </div>`),
        section("chapter-home-tail", `          <div class="home-tail-grid">\n${routesBlock("partner-rail", "For stockists / press / collaboration", "Signal, materials, and notes are issued on request.", true)}\n${piecesBlock()}\n          </div>`, ' id="partner-note"'),
      ].join("\n");
    case "atelier":
      return [
        section("chapter-home-top", `          <div class="home-top-grid">\n${heroVisual()}\n${heroCopy()}\n${seasonMeta()}\n${heroStats()}\n          </div>`),
        section("chapter-home-mid", `          <div class="home-mid-grid">\n${galleryBlock()}\n${seasonLead()}\n${seasonCopy()}\n          </div>`),
        section("chapter-home-feature", `          <div class="home-feature-grid">\n${reasonsBlock()}\n${featureBlock()}\n${piecesBlock()}\n          </div>`),
        section("chapter-home-tail", `          <div class="home-tail-grid">\n${routesBlock("partner-rail", "Partner routes", "Materials and line sheets are offered as atelier notes.", true)}\n          </div>`, ' id="partner-note"'),
      ].join("\n");
    case "axis":
      return [
        section("chapter-home-top", `          <div class="home-top-grid">\n${heroCopy()}\n${heroVisual()}\n${heroStats()}\n          </div>`),
        section("chapter-home-mid", `          <div class="home-mid-grid">\n${seasonLead()}\n${seasonCopy()}\n${seasonMeta()}\n${reasonsBlock()}\n          </div>`),
        section("chapter-home-gallery", `          <div class="home-gallery-grid">\n${featureBlock()}\n${galleryBlock()}\n          </div>`),
        section("chapter-home-tail", `          <div class="home-tail-grid">\n${piecesBlock()}\n${routesBlock("partner-rail", "Partner routes", "Quietly commercial information for stockists, press, and collaborators.", true)}\n          </div>`, ' id="partner-note"'),
      ].join("\n");
    case "signal":
      return [
        section("chapter-home-top", `          <div class="home-top-grid">\n${heroCopy()}\n${heroStats()}\n${heroVisual()}\n          </div>`),
        section("chapter-home-mid", `          <div class="home-mid-grid">\n${galleryBlock()}\n${seasonLead()}\n${seasonCopy()}\n${seasonMeta()}\n          </div>`),
        section("chapter-home-feature", `          <div class="home-feature-grid">\n${reasonsBlock()}\n${featureBlock()}\n          </div>`, ' id="partner-note"'),
        section("chapter-home-tail", `          <div class="home-tail-grid">\n${routesBlock("partner-rail", "Partner routes", "Request line sheets, press notes, or collaboration conversations.", true)}\n${piecesBlock()}\n          </div>`),
      ].join("\n");
    case "blueprint":
      return [
        section("chapter-home-top", `          <div class="home-top-grid">\n${heroCopy()}\n${heroVisual()}\n${heroStats()}\n${seasonMeta()}\n          </div>`),
        section("chapter-home-mid", `          <div class="home-mid-grid">\n${seasonLead()}\n${seasonCopy()}\n${reasonsBlock()}\n          </div>`),
        section("chapter-home-gallery", `          <div class="home-gallery-grid">\n${featureBlock()}\n${galleryBlock()}\n          </div>`),
        section("chapter-home-tail", `          <div class="home-tail-grid">\n${piecesBlock()}\n${routesBlock("partner-rail", "Partner routes", "Technical notes, line sheets, and logistics by request.", true)}\n          </div>`, ' id="partner-note"'),
      ].join("\n");
    case "brochure":
      return [
        section("chapter-home-top", `          <div class="home-top-grid">\n${heroVisual()}\n${heroCopy()}\n          </div>`),
        section("chapter-home-mid", `          <div class="home-mid-grid">\n${heroStats()}\n${seasonLead()}\n${seasonCopy()}\n${seasonMeta()}\n          </div>`),
        section("chapter-home-gallery", `          <div class="home-gallery-grid">\n${galleryBlock()}\n${featureBlock()}\n          </div>`),
        section("chapter-home-tail", `          <div class="home-tail-grid">\n${reasonsBlock()}\n${piecesBlock()}\n${routesBlock("partner-rail", "Partner routes", "Brochure-ready materials are shared after first contact.", true)}\n          </div>`, ' id="partner-note"'),
      ].join("\n");
    case "washi":
      return [
        section("chapter-home-top", `          <div class="home-top-grid">\n            <div class="home-rail-stack">\n${seasonLead()}\n${heroStats()}\n${reasonsBlock()}\n            </div>\n            <div class="home-main-stack">\n${heroCopy()}\n${heroVisual()}\n${seasonCopy()}\n${seasonMeta()}\n            </div>\n          </div>`),
        section("chapter-home-gallery", `          <div class="home-gallery-grid">\n${featureBlock()}\n${galleryBlock()}\n          </div>`),
        section("chapter-home-tail", `          <div class="home-tail-grid">\n${piecesBlock()}\n${routesBlock("partner-rail", "Partner routes", "静かな商談資料と連絡先をまとめています。", true)}\n          </div>`, ' id="partner-note"'),
      ].join("\n");
    case "culture":
      return [
        section("chapter-home-top", `          <div class="home-top-grid">\n${heroCopy()}\n${heroVisual()}\n${galleryBlock()}\n          </div>`),
        section("chapter-home-mid", `          <div class="home-mid-grid">\n${heroStats()}\n${seasonLead()}\n${seasonCopy()}\n${seasonMeta()}\n${reasonsBlock()}\n          </div>`),
        section("chapter-home-tail", `          <div class="home-tail-grid">\n${featureBlock()}\n${routesBlock("partner-rail", "Partner routes", "Press, stylists, and stockists can request the full packet.", true)}\n${piecesBlock()}\n          </div>`, ' id="partner-note"'),
      ].join("\n");
    case "dossier":
      return [
        section("chapter-home-top", `          <div class="home-top-grid">\n${heroCopy()}\n${seasonLead()}\n${seasonMeta()}\n${heroVisual()}\n${heroStats()}\n          </div>`),
        section("chapter-home-mid", `          <div class="home-mid-grid">\n${seasonCopy()}\n${reasonsBlock()}\n${featureBlock()}\n          </div>`),
        section("chapter-home-tail", `          <div class="home-tail-grid">\n${galleryBlock()}\n${piecesBlock()}\n${routesBlock("partner-rail", "Partner routes", "Materials and schedule ranges are shared through the partner channel.", true)}\n          </div>`, ' id="partner-note"'),
      ].join("\n");
    case "service":
      return [
        section("chapter-home-top", `          <div class="home-top-grid">\n${heroCopy()}\n${reasonsBlock()}\n${heroVisual()}\n          </div>`),
        section("chapter-home-mid", `          <div class="home-mid-grid">\n${seasonLead()}\n${seasonCopy()}\n${seasonMeta()}\n${heroStats()}\n          </div>`),
        section("chapter-home-gallery", `          <div class="home-gallery-grid">\n${featureBlock()}\n${galleryBlock()}\n          </div>`),
        section("chapter-home-tail", `          <div class="home-tail-grid">\n${routesBlock("partner-rail", "Partner routes", "Clear routes for stockists, press, and collaboration.", true)}\n${piecesBlock()}\n          </div>`, ' id="partner-note"'),
      ].join("\n");
    case "market":
      return [
        section("chapter-home-top", `          <div class="home-top-grid">\n${heroCopy()}\n${heroStats()}\n${seasonCopy()}\n${seasonMeta()}\n${heroVisual()}\n          </div>`),
        section("chapter-home-mid", `          <div class="home-mid-grid">\n${seasonLead()}\n${reasonsBlock()}\n${piecesBlock()}\n          </div>`),
        section("chapter-home-tail", `          <div class="home-tail-grid">\n${galleryBlock()}\n${featureBlock()}\n${routesBlock("partner-rail", "Partner routes", "Commercial details, requests, and press routes live here.", true)}\n          </div>`, ' id="partner-note"'),
      ].join("\n");
    default:
      return "";
  }
}

function lookbookMain(variant) {
  const shell = structures[variant.id].lookbook;

  switch (shell) {
    case "poster":
      return [
        section("chapter-lookbook-top", `          <div class="look-top-grid">\n${lookLeadBlock()}\n${lookIntroBlock()}\n${lookSwitcherBlock()}\n          </div>`),
        section("chapter-lookbook-mid", `          <div class="look-mid-grid">\n${collectionLeadBlock()}\n${collectionSummaryBlock()}\n${lookbookSpotlightBlock()}\n${lookGridBlock()}\n          </div>`),
        section("chapter-lookbook-tail", `          <div class="look-tail-grid">\n${seasonNoteBlock()}\n${lookbookPiecesBlock()}\n          </div>`),
      ].join("\n");
    case "chapter":
      return [
        section("chapter-lookbook-top", `          <div class="look-top-grid">\n            <div class="look-rail-stack">\n${lookLeadBlock()}\n${lookSwitcherBlock()}\n            </div>\n            <div class="look-main-stack">\n${lookIntroBlock()}\n${collectionLeadBlock()}\n${collectionSummaryBlock()}\n            </div>\n          </div>`),
        section("chapter-lookbook-mid", `          <div class="look-mid-grid">\n${lookbookSpotlightBlock()}\n${lookGridBlock()}\n${seasonNoteBlock()}\n          </div>`),
        section("chapter-lookbook-tail", `          <div class="look-tail-grid">\n${lookbookPiecesBlock()}\n          </div>`),
      ].join("\n");
    case "salon":
      return [
        section("chapter-lookbook-top", `          <div class="look-top-grid">\n${lookLeadBlock()}\n${lookIntroBlock()}\n${collectionLeadBlock()}\n          </div>`),
        section("chapter-lookbook-mid", `          <div class="look-mid-grid">\n${lookbookSpotlightBlock()}\n${lookGridBlock()}\n${lookSwitcherBlock()}\n${collectionSummaryBlock()}\n          </div>`),
        section("chapter-lookbook-tail", `          <div class="look-tail-grid">\n${seasonNoteBlock()}\n${lookbookPiecesBlock()}\n          </div>`),
      ].join("\n");
    case "spread":
      return [
        section("chapter-lookbook-top", `          <div class="look-top-grid">\n${lookLeadBlock()}\n${lookIntroBlock()}\n${lookSwitcherBlock()}\n${collectionLeadBlock()}\n${collectionSummaryBlock()}\n          </div>`),
        section("chapter-lookbook-mid", `          <div class="look-mid-grid">\n${lookbookSpotlightBlock()}\n${lookGridBlock()}\n          </div>`),
        section("chapter-lookbook-tail", `          <div class="look-tail-grid">\n${seasonNoteBlock()}\n${lookbookPiecesBlock()}\n          </div>`),
      ].join("\n");
    case "console":
      return [
        section("chapter-lookbook-top", `          <div class="look-top-grid">\n${lookLeadBlock()}\n${lookSwitcherBlock()}\n${lookIntroBlock()}\n${collectionSummaryBlock()}\n          </div>`),
        section("chapter-lookbook-mid", `          <div class="look-mid-grid">\n${collectionLeadBlock()}\n${lookbookSpotlightBlock()}\n${lookGridBlock()}\n          </div>`),
        section("chapter-lookbook-tail", `          <div class="look-tail-grid">\n${lookbookPiecesBlock()}\n${seasonNoteBlock()}\n          </div>`),
      ].join("\n");
    case "atelier":
      return [
        section("chapter-lookbook-top", `          <div class="look-top-grid">\n${lookLeadBlock()}\n${lookIntroBlock()}\n${lookSwitcherBlock()}\n          </div>`),
        section("chapter-lookbook-mid", `          <div class="look-mid-grid">\n${collectionLeadBlock()}\n${lookbookSpotlightBlock()}\n${lookGridBlock()}\n${collectionSummaryBlock()}\n          </div>`),
        section("chapter-lookbook-tail", `          <div class="look-tail-grid">\n${lookbookPiecesBlock()}\n${seasonNoteBlock()}\n          </div>`),
      ].join("\n");
    case "capsule":
      return [
        section("chapter-lookbook-top", `          <div class="look-top-grid">\n${lookLeadBlock()}\n${lookIntroBlock()}\n${lookSwitcherBlock()}\n${collectionLeadBlock()}\n          </div>`),
        section("chapter-lookbook-mid", `          <div class="look-mid-grid">\n${collectionSummaryBlock()}\n${lookbookSpotlightBlock()}\n${lookGridBlock()}\n          </div>`),
        section("chapter-lookbook-tail", `          <div class="look-tail-grid">\n${seasonNoteBlock()}\n${lookbookPiecesBlock()}\n          </div>`),
      ].join("\n");
    case "stagger":
      return [
        section("chapter-lookbook-top", `          <div class="look-top-grid">\n${lookLeadBlock()}\n${lookSwitcherBlock()}\n${collectionLeadBlock()}\n          </div>`),
        section("chapter-lookbook-mid", `          <div class="look-mid-grid">\n${lookIntroBlock()}\n${collectionSummaryBlock()}\n${lookbookSpotlightBlock()}\n${lookGridBlock()}\n          </div>`),
        section("chapter-lookbook-tail", `          <div class="look-tail-grid">\n${lookbookPiecesBlock()}\n${seasonNoteBlock()}\n          </div>`),
      ].join("\n");
    case "manual":
      return [
        section("chapter-lookbook-top", `          <div class="look-top-grid">\n${lookLeadBlock()}\n${collectionLeadBlock()}\n${collectionSummaryBlock()}\n${lookSwitcherBlock()}\n          </div>`),
        section("chapter-lookbook-mid", `          <div class="look-mid-grid">\n${lookIntroBlock()}\n${lookbookSpotlightBlock()}\n${lookGridBlock()}\n          </div>`),
        section("chapter-lookbook-tail", `          <div class="look-tail-grid">\n${seasonNoteBlock()}\n${lookbookPiecesBlock()}\n          </div>`),
      ].join("\n");
    case "notebook":
      return [
        section("chapter-lookbook-top", `          <div class="look-top-grid">\n${lookLeadBlock()}\n${lookIntroBlock()}\n${collectionSummaryBlock()}\n          </div>`),
        section("chapter-lookbook-mid", `          <div class="look-mid-grid">\n${lookSwitcherBlock()}\n${lookbookSpotlightBlock()}\n${lookGridBlock()}\n${seasonNoteBlock()}\n          </div>`),
        section("chapter-lookbook-tail", `          <div class="look-tail-grid">\n${lookbookPiecesBlock()}\n          </div>`),
      ].join("\n");
    case "quiet":
      return [
        section("chapter-lookbook-top", `          <div class="look-top-grid">\n${lookLeadBlock()}\n${lookIntroBlock()}\n          </div>`),
        section("chapter-lookbook-mid", `          <div class="look-mid-grid">\n${lookSwitcherBlock()}\n${collectionLeadBlock()}\n${collectionSummaryBlock()}\n${lookbookSpotlightBlock()}\n${lookGridBlock()}\n          </div>`),
        section("chapter-lookbook-tail", `          <div class="look-tail-grid">\n${seasonNoteBlock()}\n${lookbookPiecesBlock()}\n          </div>`),
      ].join("\n");
    case "flyer":
      return [
        section("chapter-lookbook-top", `          <div class="look-top-grid">\n${lookLeadBlock()}\n${lookSwitcherBlock()}\n${lookIntroBlock()}\n${collectionLeadBlock()}\n          </div>`),
        section("chapter-lookbook-mid", `          <div class="look-mid-grid">\n${collectionSummaryBlock()}\n${lookbookSpotlightBlock()}\n${lookGridBlock()}\n          </div>`),
        section("chapter-lookbook-tail", `          <div class="look-tail-grid">\n${lookbookPiecesBlock()}\n${seasonNoteBlock()}\n          </div>`),
      ].join("\n");
    case "appendix":
      return [
        section("chapter-lookbook-top", `          <div class="look-top-grid">\n${lookLeadBlock()}\n${lookIntroBlock()}\n${collectionLeadBlock()}\n${collectionSummaryBlock()}\n          </div>`),
        section("chapter-lookbook-mid", `          <div class="look-mid-grid">\n${lookSwitcherBlock()}\n${lookbookSpotlightBlock()}\n${lookGridBlock()}\n          </div>`),
        section("chapter-lookbook-tail", `          <div class="look-tail-grid">\n${seasonNoteBlock()}\n${lookbookPiecesBlock()}\n          </div>`),
      ].join("\n");
    case "guided":
      return [
        section("chapter-lookbook-top", `          <div class="look-top-grid">\n${lookLeadBlock()}\n${lookIntroBlock()}\n${lookSwitcherBlock()}\n          </div>`),
        section("chapter-lookbook-mid", `          <div class="look-mid-grid">\n${collectionLeadBlock()}\n${collectionSummaryBlock()}\n${seasonNoteBlock()}\n${lookbookSpotlightBlock()}\n${lookGridBlock()}\n          </div>`),
        section("chapter-lookbook-tail", `          <div class="look-tail-grid">\n${lookbookPiecesBlock()}\n          </div>`),
      ].join("\n");
    case "compare":
      return [
        section("chapter-lookbook-top", `          <div class="look-top-grid">\n${lookLeadBlock()}\n${lookSwitcherBlock()}\n${collectionLeadBlock()}\n${collectionSummaryBlock()}\n          </div>`),
        section("chapter-lookbook-mid", `          <div class="look-mid-grid">\n${lookbookSpotlightBlock()}\n${lookGridBlock()}\n${lookbookPiecesBlock()}\n          </div>`),
        section("chapter-lookbook-tail", `          <div class="look-tail-grid">\n${seasonNoteBlock()}\n${lookIntroBlock()}\n          </div>`),
      ].join("\n");
    default:
      return "";
  }
}

function aboutMain(variant) {
  const shell = structures[variant.id].about;

  switch (shell) {
    case "dossier":
      return [
        section("chapter-about-top", `          <div class="about-top-grid">\n${aboutLeadBlock()}\n${aboutIntroBlock()}\n${aboutToneBlock(variant)}\n          </div>`),
        section("chapter-about-mid", `          <div class="about-mid-grid">\n${principlesBlock()}\n${storyBlock()}\n          </div>`),
        section("chapter-about-tail", `          <div class="about-tail-grid">\n${studioBlock()}\n${routesBlock("about-partner-rail", "Partner routes", "For stockists, press, and collaboration partners.", true)}\n          </div>`),
      ].join("\n");
    case "essay":
      return [
        section("chapter-about-top", `          <div class="about-top-grid">\n${aboutLeadBlock()}\n${aboutIntroBlock()}\n${storyBlock()}\n          </div>`),
        section("chapter-about-mid", `          <div class="about-mid-grid">\n${aboutToneBlock(variant)}\n${principlesBlock()}\n          </div>`),
        section("chapter-about-tail", `          <div class="about-tail-grid">\n${studioBlock()}\n${routesBlock("about-partner-rail", "Partner routes", "For stockists, press, and collaboration partners.", true)}\n          </div>`),
      ].join("\n");
    case "wall":
      return [
        section("chapter-about-top", `          <div class="about-top-grid">\n${storyBlock()}\n${aboutLeadBlock()}\n${aboutIntroBlock()}\n${aboutToneBlock(variant)}\n          </div>`),
        section("chapter-about-mid", `          <div class="about-mid-grid">\n${principlesBlock()}\n${studioBlock()}\n          </div>`),
        section("chapter-about-tail", `          <div class="about-tail-grid">\n${routesBlock("about-partner-rail", "Partner routes", "For stockists, press, and collaboration partners.", true)}\n          </div>`),
      ].join("\n");
    case "index":
      return [
        section("chapter-about-top", `          <div class="about-top-grid">\n${aboutLeadBlock()}\n${aboutIntroBlock()}\n${aboutToneBlock(variant)}\n${principlesBlock()}\n          </div>`),
        section("chapter-about-mid", `          <div class="about-mid-grid">\n${storyBlock()}\n${studioBlock()}\n          </div>`),
        section("chapter-about-tail", `          <div class="about-tail-grid">\n${routesBlock("about-partner-rail", "Partner routes", "For stockists, press, and collaboration partners.", true)}\n          </div>`),
      ].join("\n");
    case "memo":
      return [
        section("chapter-about-top", `          <div class="about-top-grid">\n${aboutLeadBlock()}\n${aboutToneBlock(variant)}\n${aboutIntroBlock()}\n          </div>`),
        section("chapter-about-mid", `          <div class="about-mid-grid">\n${storyBlock()}\n${principlesBlock()}\n          </div>`),
        section("chapter-about-tail", `          <div class="about-tail-grid">\n${routesBlock("about-partner-rail", "Partner routes", "For stockists, press, and collaboration partners.", true)}\n${studioBlock()}\n          </div>`),
      ].join("\n");
    case "pinned":
      return [
        section("chapter-about-top", `          <div class="about-top-grid">\n${aboutLeadBlock()}\n${storyBlock()}\n${aboutIntroBlock()}\n          </div>`),
        section("chapter-about-mid", `          <div class="about-mid-grid">\n${principlesBlock()}\n${aboutToneBlock(variant)}\n${studioBlock()}\n          </div>`),
        section("chapter-about-tail", `          <div class="about-tail-grid">\n${routesBlock("about-partner-rail", "Partner routes", "For stockists, press, and collaboration partners.", true)}\n          </div>`),
      ].join("\n");
    case "modules":
      return [
        section("chapter-about-top", `          <div class="about-top-grid">\n${aboutLeadBlock()}\n${aboutIntroBlock()}\n${aboutToneBlock(variant)}\n          </div>`),
        section("chapter-about-mid", `          <div class="about-mid-grid">\n${principlesBlock()}\n${storyBlock()}\n${studioBlock()}\n          </div>`),
        section("chapter-about-tail", `          <div class="about-tail-grid">\n${routesBlock("about-partner-rail", "Partner routes", "For stockists, press, and collaboration partners.", true)}\n          </div>`),
      ].join("\n");
    case "manifesto":
      return [
        section("chapter-about-top", `          <div class="about-top-grid">\n${aboutLeadBlock()}\n${aboutToneBlock(variant)}\n${storyBlock()}\n          </div>`),
        section("chapter-about-mid", `          <div class="about-mid-grid">\n${principlesBlock()}\n${aboutIntroBlock()}\n          </div>`),
        section("chapter-about-tail", `          <div class="about-tail-grid">\n${studioBlock()}\n${routesBlock("about-partner-rail", "Partner routes", "For stockists, press, and collaboration partners.", true)}\n          </div>`),
      ].join("\n");
    case "spec":
      return [
        section("chapter-about-top", `          <div class="about-top-grid">\n${aboutLeadBlock()}\n${aboutIntroBlock()}\n${aboutToneBlock(variant)}\n${storyBlock()}\n          </div>`),
        section("chapter-about-mid", `          <div class="about-mid-grid">\n${principlesBlock()}\n${studioBlock()}\n          </div>`),
        section("chapter-about-tail", `          <div class="about-tail-grid">\n${routesBlock("about-partner-rail", "Partner routes", "For stockists, press, and collaboration partners.", true)}\n          </div>`),
      ].join("\n");
    case "storybook":
      return [
        section("chapter-about-top", `          <div class="about-top-grid">\n${storyBlock()}\n${aboutLeadBlock()}\n${aboutIntroBlock()}\n          </div>`),
        section("chapter-about-mid", `          <div class="about-mid-grid">\n${principlesBlock()}\n${studioBlock()}\n${aboutToneBlock(variant)}\n          </div>`),
        section("chapter-about-tail", `          <div class="about-tail-grid">\n${routesBlock("about-partner-rail", "Partner routes", "For stockists, press, and collaboration partners.", true)}\n          </div>`),
      ].join("\n");
    case "rail":
      return [
        section("chapter-about-top", `          <div class="about-top-grid">\n            <div class="about-rail-stack">\n${aboutLeadBlock()}\n${aboutToneBlock(variant)}\n            </div>\n            <div class="about-main-stack">\n${aboutIntroBlock()}\n${storyBlock()}\n            </div>\n          </div>`),
        section("chapter-about-mid", `          <div class="about-mid-grid">\n${principlesBlock()}\n${studioBlock()}\n          </div>`),
        section("chapter-about-tail", `          <div class="about-tail-grid">\n${routesBlock("about-partner-rail", "Partner routes", "For stockists, press, and collaboration partners.", true)}\n          </div>`),
      ].join("\n");
    case "zine":
      return [
        section("chapter-about-top", `          <div class="about-top-grid">\n${aboutLeadBlock()}\n${storyBlock()}\n${aboutToneBlock(variant)}\n          </div>`),
        section("chapter-about-mid", `          <div class="about-mid-grid">\n${aboutIntroBlock()}\n${principlesBlock()}\n${studioBlock()}\n          </div>`),
        section("chapter-about-tail", `          <div class="about-tail-grid">\n${routesBlock("about-partner-rail", "Partner routes", "For stockists, press, and collaboration partners.", true)}\n          </div>`),
      ].join("\n");
    case "executive":
      return [
        section("chapter-about-top", `          <div class="about-top-grid">\n${aboutLeadBlock()}\n${aboutIntroBlock()}\n${aboutToneBlock(variant)}\n          </div>`),
        section("chapter-about-mid", `          <div class="about-mid-grid">\n${storyBlock()}\n${principlesBlock()}\n          </div>`),
        section("chapter-about-tail", `          <div class="about-tail-grid">\n${studioBlock()}\n${routesBlock("about-partner-rail", "Partner routes", "For stockists, press, and collaboration partners.", true)}\n          </div>`),
      ].join("\n");
    case "handbook":
      return [
        section("chapter-about-top", `          <div class="about-top-grid">\n${aboutLeadBlock()}\n${aboutIntroBlock()}\n${storyBlock()}\n          </div>`),
        section("chapter-about-mid", `          <div class="about-mid-grid">\n${aboutToneBlock(variant)}\n${principlesBlock()}\n${studioBlock()}\n          </div>`),
        section("chapter-about-tail", `          <div class="about-tail-grid">\n${routesBlock("about-partner-rail", "Partner routes", "For stockists, press, and collaboration partners.", true)}\n          </div>`),
      ].join("\n");
    case "seller":
      return [
        section("chapter-about-top", `          <div class="about-top-grid">\n${aboutLeadBlock()}\n${aboutIntroBlock()}\n${aboutToneBlock(variant)}\n${storyBlock()}\n          </div>`),
        section("chapter-about-mid", `          <div class="about-mid-grid">\n${principlesBlock()}\n${studioBlock()}\n          </div>`),
        section("chapter-about-tail", `          <div class="about-tail-grid">\n${routesBlock("about-partner-rail", "Partner routes", "For stockists, press, and collaboration partners.", true)}\n          </div>`),
      ].join("\n");
    default:
      return "";
  }
}

function homePage(variant) {
  const shell = structures[variant.id].home;
  return `<!DOCTYPE html>
<html lang="ja" data-asset-base="../../">
  <head>
${pageHead(`AUN | ${variant.name}`)}
  </head>
  <body data-page="home" class="variant-home home-${shell}">
${header()}
    <main id="main" class="page-frame home-frame">
${homeMain(variant)}
    </main>
${footer()}
    <script type="module" src="../common/variant-app.js"></script>
  </body>
</html>
`;
}

function lookbookPage(variant) {
  const shell = structures[variant.id].lookbook;
  return `<!DOCTYPE html>
<html lang="ja" data-asset-base="../../">
  <head>
${pageHead(`AUN | ${variant.name} ルックブック`)}
  </head>
  <body data-page="lookbook" class="variant-lookbook look-${shell}">
${header()}
    <main id="main" class="page-frame lookbook-frame">
${lookbookMain(variant)}
    </main>
${footer()}
    <script type="module" src="../common/variant-app.js"></script>
  </body>
</html>
`;
}

function aboutPage(variant) {
  const shell = structures[variant.id].about;
  return `<!DOCTYPE html>
<html lang="ja" data-asset-base="../../">
  <head>
${pageHead(`AUN | ${variant.name} ブランド`)}
  </head>
  <body data-page="about" class="variant-about about-${shell}">
${header()}
    <main id="main" class="page-frame about-frame">
${aboutMain(variant)}
    </main>
${footer()}
    <script type="module" src="../common/variant-app.js"></script>
  </body>
</html>
`;
}

function variantCss(variant) {
  return `@import url("${variant.fontImport}");
@import url("../../common/rebuild-base.css");

:root {
  color-scheme: ${variant.colorScheme};
  --display-font: ${variant.displayFont};
  --body-font: ${variant.bodyFont};
  --label-font: ${variant.labelFont};
${variant.vars}
}

${variant.css}
`;
}

function manifest() {
  return variants.map(({ id, name }) => ({
    id,
    name,
    structures: structures[id],
  }));
}

function variantAssets(variant) {
  const base = `./assets/generated/variants/${variant.id}`;

  return {
    heroVisual: {
      src: `${base}-hero.png`,
      alt: `${variant.name} のために設計したヒーロー用コンセプトビジュアル`,
      caption: `メインビジュアル / ${variant.name}`,
    },
    featureImage: {
      src: `${base}-hero.png`,
      alt: `${variant.name} の代表ルックを補強する専用コンセプトビジュアル`,
      caption: `代表ルック補助 / ${variant.name}`,
    },
    lookbookSpotlight: {
      src: `${base}-hero.png`,
      alt: `${variant.name} の lookbook を象徴するスポットライトビジュアル`,
      caption: `ルック補助 / ${variant.name}`,
    },
    aboutStoryImage: {
      src: `${base}-hero.png`,
      alt: `${variant.name} の制作背景を補強するコンセプトビジュアル`,
      caption: `制作背景補助 / ${variant.name}`,
    },
  };
}

function rebuildInstructions() {
  const lines = [
    "# AUN Variant Rebuild Instructions",
    "",
    "15案をゼロベースで再設計するための指示書です。各案でブランド人格を固定せず、配色・レイアウト・読み心地を変えながら、AUN の営業資料コンテンツを再配置します。",
    "",
    "## Shared Rules",
    "",
    "- 対象読者は `stockists / stylists / editors / press / collaborators`。",
    "- Home / Lookbook / About の情報要素は維持し、並び順と見せ方を変える。",
    "- `awesome-design-md-global` の参照はムードの起点に使い、複製にはしない。",
    "- `impeccable-style` の方針に沿って、各案に 1 つ以上の忘れにくいレイアウト署名を持たせる。",
    "- カラーはシックからポップまで幅を持たせるが、各案のアクセントは 1〜2 軸に絞る。",
    "",
  ];

  variants.forEach((variant, index) => {
    lines.push(`## ${String(index + 1).padStart(2, "0")}. ${variant.name}`);
    lines.push("");
    lines.push(`- Refs: ${variant.references.join(" / ")}`);
    lines.push(`- Personality: ${variant.personality}`);
    lines.push(`- Mood: ${variant.mood}`);
    lines.push(`- Accent: ${variant.accent}`);
    lines.push(`- Summary: ${variant.summary}`);
    lines.push(`- Home layout: ${variant.homeLayout}`);
    lines.push(`- Lookbook layout: ${variant.lookbookLayout}`);
    lines.push(`- About layout: ${variant.aboutLayout}`);
    lines.push("");
  });

  return `${lines.join("\n")}\n`;
}

function writeFile(filePath, content) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, content);
}

for (const variant of variants) {
  const dir = path.join(variantsDir, variant.id);
  writeFile(path.join(dir, "index.html"), homePage(variant));
  writeFile(path.join(dir, "lookbook.html"), lookbookPage(variant));
  writeFile(path.join(dir, "about.html"), aboutPage(variant));
  writeFile(path.join(dir, "assets", "styles.css"), variantCss(variant));
  writeFile(
    path.join(dir, "variant.json"),
    `${JSON.stringify(
      {
        id: variant.id,
        slug: variant.id,
        name: variant.name,
        references: variant.references,
        structures: structures[variant.id],
        assets: variantAssets(variant),
        content: VARIANT_COPY[variant.id],
        summary: variant.summary,
        mood: variant.mood,
        accent: variant.accent,
        personality: variant.personality,
      },
      null,
      2,
    )}\n`,
  );
}

writeFile(path.join(variantsDir, "manifest.json"), `${JSON.stringify(manifest(), null, 2)}\n`);
writeFile(path.join(variantsDir, "REBUILD_INSTRUCTIONS.md"), rebuildInstructions());
