import { AUN_CONTENT as SOURCE_CONTENT } from "../../assets/content.js";

const page = document.body.dataset.page;
const assetBase = document.documentElement.dataset.assetBase || "../../";
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
let revealObserver;
const runtimeVersion = "20260414-copy-v3";

function rewriteAssetPaths(value) {
  if (typeof value === "string") {
    if (value.startsWith("./assets/")) {
      return `${assetBase}${value.slice(2)}`;
    }
    return value;
  }

  if (Array.isArray(value)) {
    return value.map(rewriteAssetPaths);
  }

  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value).map(([key, entry]) => [key, rewriteAssetPaths(entry)]),
    );
  }

  return value;
}

function deepMerge(base, overrides) {
  if (Array.isArray(base) || Array.isArray(overrides)) {
    if (
      Array.isArray(base) &&
      Array.isArray(overrides) &&
      base.every((item) => item && typeof item === "object" && "id" in item) &&
      overrides.every((item) => item && typeof item === "object" && "id" in item)
    ) {
      const overrideMap = new Map(overrides.map((item) => [item.id, item]));
      return base.map((item) => {
        const override = overrideMap.get(item.id);
        return override ? deepMerge(item, override) : item;
      });
    }

    return overrides ?? base;
  }

  if (base && typeof base === "object" && overrides && typeof overrides === "object") {
    const merged = { ...base };

    Object.entries(overrides).forEach(([key, value]) => {
      merged[key] =
        key in base ? deepMerge(base[key], value) : value;
    });

    return merged;
  }

  return overrides ?? base;
}

async function loadVariantJson() {
  try {
    const response = await fetch(`./variant.json?v=${runtimeVersion}`);
    if (!response.ok) {
      return {};
    }
    return await response.json();
  } catch {
    return {};
  }
}

async function loadManifest() {
  try {
    const manifestUrl = new URL(`../manifest.json?v=${runtimeVersion}`, window.location.href);
    const response = await fetch(manifestUrl);
    if (!response.ok) {
      return [];
    }
    return await response.json();
  } catch {
    return [];
  }
}

function applyVariantMeta(content, variantMeta) {
  const merged = deepMerge(structuredClone(content), variantMeta.content || {});
  const { assets } = variantMeta;

  if (!assets) {
    return merged;
  }

  if (assets.heroVisual) {
    merged.hero.visual = deepMerge(merged.hero.visual, assets.heroVisual);
  }

  if (assets.homeGallery) {
    merged.home.gallery = assets.homeGallery;
  }

  if (assets.featureImage) {
    merged.home.representativeLook.image = deepMerge(
      merged.home.representativeLook.image,
      assets.featureImage,
    );
  }

  if (assets.lookbookSpotlight) {
    merged.lookbookSpotlight = assets.lookbookSpotlight;
  }

  if (assets.aboutStoryImage) {
    merged.about.story.image = deepMerge(merged.about.story.image, assets.aboutStoryImage);
  }

  if (assets.aboutGallery) {
    merged.about.gallery = assets.aboutGallery;
  }

  return merged;
}

function setText(id, value) {
  const node = document.getElementById(id);
  if (node) {
    node.textContent = value;
  }
}

function setImage(id, { src, alt }) {
  const node = document.getElementById(id);
  if (node) {
    node.src = src;
    node.alt = alt;
  }
}

function buildGallery(targetId, items, variant = "editorial") {
  const rail = document.getElementById(targetId);
  if (!rail) {
    return;
  }

  rail.innerHTML = items
    .map(
      (item, index) => `
        <figure class="${variant}-card ${item.tone ? `${variant}-card-${item.tone}` : ""}" data-reveal>
          <img src="${item.src}" alt="${item.alt}" loading="${index > 0 ? "lazy" : "eager"}" />
          <figcaption class="visual-caption">${item.caption}</figcaption>
        </figure>
      `,
    )
    .join("");
}

function buildSpotlight(targetId, item) {
  const node = document.getElementById(targetId);
  if (!node || !item) {
    return;
  }

  node.innerHTML = `
    <figure class="visual-surface spotlight-figure" data-reveal>
      <img src="${item.src}" alt="${item.alt}" />
      <figcaption class="visual-caption">${item.caption}</figcaption>
    </figure>
  `;
}

function buildFooter(content) {
  setText("brand-location", content.brand.location);
  setText("footer-brand", `${content.brand.name} / ${content.brand.themeTitle}`);
  setText("footer-summary", content.brand.tagline);
  setText("footer-note", content.brand.footerNote);
  setText("year", new Date().getFullYear());

  const headerContact = document.getElementById("header-contact-link");
  if (headerContact) {
    headerContact.href = `mailto:${content.brand.contactEmail}`;
  }

  document.querySelectorAll("[data-nav-link]").forEach((link) => {
    if (link.dataset.navLink === page) {
      link.setAttribute("aria-current", "page");
    }
  });
}

function getPageFilename() {
  if (page === "lookbook") {
    return "lookbook.html";
  }

  if (page === "about") {
    return "about.html";
  }

  return "index.html";
}

function buildVariantSwitcher(manifest, variantMeta) {
  if (!Array.isArray(manifest) || !manifest.length || !variantMeta?.id) {
    return;
  }

  const filename = getPageFilename();
  const current = manifest.find((item) => item.id === variantMeta.id) || {
    id: variantMeta.id,
    name: variantMeta.name || variantMeta.id,
  };

  const shell = document.createElement("aside");
  shell.className = "variant-switcher";
  shell.setAttribute("aria-label", "デザイン切り替え");

  const links = manifest
    .map((item) => {
      const active = item.id === current.id;
      const href = `../${item.id}/${filename}`;
      return `
        <a class="variant-switcher-link ${active ? "is-current" : ""}" href="${href}" ${active ? 'aria-current="page"' : ""}>
          <span class="variant-switcher-name">${item.name}</span>
          <span class="variant-switcher-id">${item.id}</span>
        </a>
      `;
    })
    .join("");

  shell.innerHTML = `
    <details class="variant-switcher-panel">
      <summary class="variant-switcher-trigger">
        <span class="variant-switcher-kicker">別案</span>
        <span class="variant-switcher-current">${current.name}</span>
      </summary>
      <div class="variant-switcher-body">
        <p class="variant-switcher-caption">同じページ位置のまま、別案だけを見比べられます。</p>
        <div class="variant-switcher-list">${links}</div>
        <a class="variant-switcher-showcase" href="../showcase/">18案一覧</a>
      </div>
    </details>
  `;

  document.body.append(shell);
}

function buildHome(content) {
  setText("hero-label", content.brand.label);
  setText("hero-brand-name", content.brand.name);
  setText("hero-theme", content.brand.themeTitle);
  setText("hero-summary", content.brand.summary);
  setImage("hero-image", content.hero.visual);
  setText("hero-visual-caption", content.hero.visual.caption);
  setText("season-heading", content.brand.seasonHeading);
  setText("season-copy", content.brand.seasonCopy);
  setText("audience-copy", content.brand.audience);
  setText("price-copy", content.brand.priceCue);
  setText("studio-copy", content.brand.studio);
  buildGallery("home-editorial-strip", content.home.gallery, "editorial");

  const statLine = document.getElementById("hero-stat-line");
  if (statLine) {
    statLine.innerHTML = content.hero.stats
      .map(
        (item) => `
          <div class="stat-item">
            <dt>${item.label}</dt>
            <dd>${item.value}</dd>
          </div>
        `,
      )
      .join("");
  }

  const reasonGrid = document.getElementById("reason-grid");
  if (reasonGrid) {
    reasonGrid.innerHTML = content.home.reasons
      .map(
        (item) => `
          <article class="reason-block" data-reveal>
            <h3>${item.title}</h3>
            <p>${item.text}</p>
          </article>
        `,
      )
      .join("");
  }

  setImage("feature-image", content.home.representativeLook.image);
  setText("feature-caption", content.home.representativeLook.image.caption);
  setText("feature-title", content.home.representativeLook.title);
  setText("feature-summary", content.home.representativeLook.summary);

  const featureDetails = document.getElementById("feature-details");
  if (featureDetails) {
    featureDetails.innerHTML = content.home.representativeLook.details
      .map((item) => `<li>${item}</li>`)
      .join("");
  }

  const selectedPieceList = document.getElementById("selected-piece-list");
  if (selectedPieceList) {
    selectedPieceList.innerHTML = content.collections[0].selectedPieces
      .map(
        (item) => `
          <article class="selected-piece" data-reveal>
            <h3>${item.name}</h3>
            <p>${item.descriptor}</p>
          </article>
        `,
      )
      .join("");
  }

  buildPartnerRail("partner-rail", content);
}

function buildLookCard(item) {
  return `
    <article class="look-tile" data-reveal>
      <figure>
        <img src="${item.image}" alt="${item.alt}" />
      </figure>
      <div class="look-copy">
        <p class="section-label">${item.name}</p>
        <h3>${item.title}</h3>
        <p>${item.text}</p>
      </div>
    </article>
  `;
}

function renderCollection(content, collectionId) {
  const collection =
    content.collections.find((item) => item.id === collectionId) || content.collections[0];

  setText("collection-title", collection.title);
  setText("collection-summary", collection.summary);
  setText("season-note-title", collection.noteTitle);
  setText("season-note-copy", collection.note);

  const lookGrid = document.getElementById("look-grid");
  if (lookGrid) {
    lookGrid.innerHTML = collection.looks.map(buildLookCard).join("");
  }

  const lookbookPieceList = document.getElementById("lookbook-piece-list");
  if (lookbookPieceList) {
    lookbookPieceList.innerHTML = collection.selectedPieces
      .map(
        (item) => `
          <article class="selected-piece" data-reveal>
            <h3>${item.name}</h3>
            <p>${item.descriptor}</p>
          </article>
        `,
      )
      .join("");
  }

  document.querySelectorAll("[data-collection-trigger]").forEach((button) => {
    const active = button.dataset.collectionTrigger === collection.id;
    button.setAttribute("aria-pressed", String(active));
  });

  registerReveal();
  animateCollectionChange();
}

function buildLookbook(content) {
  setText("lookbook-intro", content.brand.summary);
  setText("lookbook-disclaimer", content.brand.footerNote);

  const switcher = document.getElementById("collection-switcher");
  if (switcher) {
    switcher.innerHTML = content.collections
      .map(
        (item) => `
          <button
            class="collection-pill"
            type="button"
            data-collection-trigger="${item.id}"
            aria-pressed="false"
          >
            ${item.label}
          </button>
        `,
      )
      .join("");

    switcher.querySelectorAll("[data-collection-trigger]").forEach((button) => {
      button.addEventListener("click", () => renderCollection(content, button.dataset.collectionTrigger));
    });
  }

  buildSpotlight("lookbook-spotlight", content.lookbookSpotlight);
  renderCollection(content, content.collections[0].id);
}

function buildAbout(content) {
  setText("about-intro", content.about.intro);
  setImage("about-image", content.about.story.image);
  setText("about-image-caption", content.about.story.image.caption);
  setText("about-story-title", content.about.story.title);
  setText("about-story-copy", content.about.story.copy);

  const principleList = document.getElementById("principle-list");
  if (principleList) {
    principleList.innerHTML = content.about.principles
      .map(
        (item) => `
          <article class="principle-block" data-reveal>
            <h3>${item.title}</h3>
            <p>${item.text}</p>
          </article>
        `,
      )
      .join("");
  }

  const aboutStoryPoints = document.getElementById("about-story-points");
  if (aboutStoryPoints) {
    aboutStoryPoints.innerHTML = content.about.story.points.map((item) => `<li>${item}</li>`).join("");
  }

  buildGallery("about-studio-gallery", content.about.gallery, "studio");
  buildPartnerRail("about-partner-rail", content);
}

function buildPartnerRail(targetId, content) {
  const rail = document.getElementById(targetId);
  if (!rail) {
    return;
  }

  rail.innerHTML = content.brand.partnerItems
    .map(
      (item) => `
        <a class="rail-item" href="${item.href}" data-reveal>
          <span class="rail-title">${item.title}</span>
          <span class="rail-text">${item.text}</span>
        </a>
      `,
    )
    .join("");
}

function getRevealTargets(scope = document) {
  if (scope.matches?.("[data-reveal]")) {
    return [scope];
  }

  return Array.from(scope.querySelectorAll("[data-reveal]"));
}

function getRevealGroup(target) {
  return (
    target.closest(`
      .hero-composition,
      .season-composition,
      .gallery-composition,
      .reasons-composition,
      .feature-composition,
      .pieces-composition,
      .partner-composition,
      .lookbook-top-composition,
      .collection-composition,
      .lookbook-note-composition,
      .about-intro-composition,
      .principle-composition,
      .story-composition,
      .studio-composition,
      .routes-composition,
      .home-top-grid,
      .home-mid-grid,
      .home-tail-grid,
      .look-top-grid,
      .look-mid-grid,
      .look-tail-grid,
      .about-top-grid,
      .about-mid-grid,
      .about-tail-grid,
      .gallery-track,
      .reason-list,
      .piece-stack,
      .principle-list,
      .route-list,
      .look-grid,
      .studio-grid,
      .feature-cluster,
      .story-cluster
    `) || target.parentElement
  );
}

function getRevealMotion(target) {
  if (
    target.matches(
      ".hero-visual, .feature-visual, .story-visual, .spotlight-figure, .editorial-card, .studio-card, .look-tile",
    )
  ) {
    return "media";
  }

  if (target.matches(".hero-copy, .feature-copy, .story-copy, .card-surface, .section-inverse")) {
    return "panel";
  }

  if (target.matches(".reason-block, .selected-piece, .principle-block, .rail-item")) {
    return "compact";
  }

  return "default";
}

function assignRevealMetadata(scope = document) {
  const counters = new Map();
  getRevealTargets(scope).forEach((target) => {
    const group = getRevealGroup(target);
    const index = counters.get(group) || 0;
    counters.set(group, index + 1);
    target.style.setProperty("--reveal-delay", `${Math.min(index, 8) * 72}ms`);
    target.dataset.motion = getRevealMotion(target);
  });
}

function ensureRevealObserver() {
  if (revealObserver) {
    return revealObserver;
  }

  revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.14, rootMargin: "0px 0px -8% 0px" },
  );

  return revealObserver;
}

function registerReveal(scope = document) {
  const targets = getRevealTargets(scope).filter((target) => !target.dataset.revealBound);
  if (!targets.length) {
    return;
  }

  assignRevealMetadata(scope);
  const observer = ensureRevealObserver();
  targets.forEach((target) => {
    target.dataset.revealBound = "true";
    observer.observe(target);
  });
}

function animateCollectionChange() {
  if (prefersReducedMotion) {
    return;
  }

  const animatedTargets = [
    document.getElementById("collection-title"),
    document.getElementById("collection-summary"),
    document.getElementById("season-note-title"),
    document.getElementById("season-note-copy"),
    document.getElementById("look-grid"),
    document.getElementById("lookbook-piece-list"),
  ].filter(Boolean);

  animatedTargets.forEach((target, index) => {
    target.animate(
      [
        { opacity: 0, transform: "translate3d(0, 18px, 0)" },
        { opacity: 1, transform: "translate3d(0, 0, 0)" },
      ],
      {
        duration: 520,
        delay: index * 45,
        easing: "cubic-bezier(0.16, 1, 0.3, 1)",
        fill: "both",
      },
    );
  });
}

function setupNavToggle() {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.getElementById("site-nav");
  if (!toggle || !nav) {
    return;
  }

  toggle.addEventListener("click", () => {
    const expanded = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!expanded));
    nav.classList.toggle("is-open", !expanded);
  });
}

async function init() {
  const [variantMeta, manifest] = await Promise.all([loadVariantJson(), loadManifest()]);
  const content = rewriteAssetPaths(applyVariantMeta(SOURCE_CONTENT, variantMeta));

  buildFooter(content);
  setupNavToggle();
  buildVariantSwitcher(manifest, variantMeta);

  if (page === "home") {
    buildHome(content);
  }

  if (page === "lookbook") {
    buildLookbook(content);
  }

  if (page === "about") {
    buildAbout(content);
  }

  registerReveal();
  requestAnimationFrame(() => {
    document.body.classList.add("motion-ready");
  });
}

init();
