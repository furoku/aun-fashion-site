import { AUN_CONTENT } from "./content.js";

const page = document.body.dataset.page;

function setText(id, value) {
  const node = document.getElementById(id);
  if (node) {
    node.textContent = value;
  }
}

function setHTML(id, value) {
  const node = document.getElementById(id);
  if (node) {
    node.innerHTML = value;
  }
}

function setImage(id, { src, alt }) {
  const node = document.getElementById(id);
  if (node) {
    node.src = src;
    node.alt = alt;
  }
}

function setCaptionWithPrice(id, caption, price, label = "参考価格") {
  const node = document.getElementById(id);
  if (!node) {
    return;
  }

  if (typeof price !== "number" || Number.isNaN(price)) {
    node.textContent = caption;
    node.classList.remove("has-price");
    return;
  }

  node.classList.add("has-price");
  node.innerHTML = `
    <span class="visual-caption-text">${caption}</span>
    <span class="visual-caption-price">
      <span class="figure-price-label">${label}</span>
      <strong class="figure-price-value">${formatPrice(price)}</strong>
    </span>
  `;
}

function formatPrice(value) {
  if (typeof value !== "number" || Number.isNaN(value)) {
    return "";
  }

  return new Intl.NumberFormat("ja-JP", {
    style: "currency",
    currency: "JPY",
    maximumFractionDigits: 0,
  }).format(value);
}

function collectPrices(content) {
  const values = [];

  content.collections.forEach((collection) => {
    (collection.looks || []).forEach((item) => {
      if (typeof item.price === "number") {
        values.push(item.price);
      }
    });

    (collection.selectedPieces || []).forEach((item) => {
      if (typeof item.price === "number") {
        values.push(item.price);
      }
    });
  });

  return values;
}

function summarizePriceRange(content) {
  const values = collectPrices(content);
  if (!values.length) {
    return content.brand.priceCue;
  }

  const min = Math.min(...values);
  const max = Math.max(...values);

  if (min === max) {
    return `参考価格 ${formatPrice(min)}`;
  }

  return `参考価格 ${formatPrice(min)} - ${formatPrice(max)}`;
}

function representativeLookPrice(content) {
  if (typeof content.home?.representativeLook?.price === "number") {
    return content.home.representativeLook.price;
  }

  const primaryLooks = content.collections?.[0]?.looks || [];
  return primaryLooks[1]?.price ?? primaryLooks[0]?.price ?? null;
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

function buildPartnerRail(targetId) {
  const rail = document.getElementById(targetId);
  if (!rail) {
    return;
  }

  rail.innerHTML = AUN_CONTENT.brand.partnerItems
    .map(
      (item) => `
        <a class="rail-item" href="${item.href}">
          <span class="rail-title">${item.title}</span>
          <span class="rail-text">${item.text}</span>
        </a>
      `,
    )
    .join("");
}

function buildFooter() {
  setText("brand-location", AUN_CONTENT.brand.location);
  setText("footer-brand", `${AUN_CONTENT.brand.name} / ${AUN_CONTENT.brand.themeTitle}`);
  setText("footer-summary", AUN_CONTENT.brand.tagline);
  setText("footer-note", AUN_CONTENT.brand.footerNote);
  setText("year", new Date().getFullYear());

  const headerContact = document.getElementById("header-contact-link");
  if (headerContact) {
    headerContact.href = `mailto:${AUN_CONTENT.brand.contactEmail}`;
  }

  document.querySelectorAll("[data-nav-link]").forEach((link) => {
    if (link.dataset.navLink === page) {
      link.setAttribute("aria-current", "page");
    }
  });
}

function buildHome() {
  setText("hero-label", AUN_CONTENT.brand.label);
  setText("hero-brand-name", AUN_CONTENT.brand.name);
  setText("hero-theme", AUN_CONTENT.brand.themeTitle);
  setText("hero-summary", AUN_CONTENT.brand.summary);
  setImage("hero-image", AUN_CONTENT.hero.visual);
  setText("hero-visual-caption", AUN_CONTENT.hero.visual.caption);
  setText("season-heading", AUN_CONTENT.brand.seasonHeading);
  setText("season-copy", AUN_CONTENT.brand.seasonCopy);
  setText("audience-copy", AUN_CONTENT.brand.audience);
  setText("price-copy", summarizePriceRange(AUN_CONTENT));
  setText("studio-copy", AUN_CONTENT.brand.studio);
  buildGallery("home-editorial-strip", AUN_CONTENT.home.gallery, "editorial");

  const statLine = document.getElementById("hero-stat-line");
  if (statLine) {
    statLine.innerHTML = AUN_CONTENT.hero.stats
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
    reasonGrid.innerHTML = AUN_CONTENT.home.reasons
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

  setImage("feature-image", AUN_CONTENT.home.representativeLook.image);
  setCaptionWithPrice(
    "feature-caption",
    AUN_CONTENT.home.representativeLook.image.caption,
    representativeLookPrice(AUN_CONTENT),
    "参考ルック価格",
  );
  setText("feature-title", AUN_CONTENT.home.representativeLook.title);
  setText("feature-summary", AUN_CONTENT.home.representativeLook.summary);

  const featureDetails = document.getElementById("feature-details");
  if (featureDetails) {
    featureDetails.innerHTML = AUN_CONTENT.home.representativeLook.details
      .map((item) => `<li>${item}</li>`)
      .join("");
  }

  const selectedPieceList = document.getElementById("selected-piece-list");
  if (selectedPieceList) {
    selectedPieceList.innerHTML = AUN_CONTENT.collections[0].selectedPieces
      .map(
        (item) => `
          <article class="selected-piece" data-reveal>
            <h3>${item.name}</h3>
            ${item.price ? `<p class="price-note"><span class="price-label">参考価格</span><strong class="price-value">${formatPrice(item.price)}</strong></p>` : ""}
            <p>${item.descriptor}</p>
          </article>
        `,
      )
      .join("");
  }

  buildPartnerRail("partner-rail");
}

function buildLookCard(item) {
  return `
    <article class="look-tile" data-reveal>
      <figure>
        <img src="${item.image}" alt="${item.alt}" />
        ${item.price ? `<div class="figure-price-badge"><span class="figure-price-label">参考スタイリング価格</span><strong class="figure-price-value">${formatPrice(item.price)}</strong></div>` : ""}
      </figure>
      <div class="look-copy">
        <p class="section-label">${item.name}</p>
        <h3>${item.title}</h3>
        ${item.price ? `<p class="price-note"><span class="price-label">参考スタイリング価格</span><strong class="price-value">${formatPrice(item.price)}</strong></p>` : ""}
        <p>${item.text}</p>
      </div>
    </article>
  `;
}

function renderCollection(collectionId) {
  const collection =
    AUN_CONTENT.collections.find((item) => item.id === collectionId) || AUN_CONTENT.collections[0];

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
            ${item.price ? `<p class="price-note"><span class="price-label">参考価格</span><strong class="price-value">${formatPrice(item.price)}</strong></p>` : ""}
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
}

function buildLookbook() {
  setText("lookbook-intro", AUN_CONTENT.brand.summary);
  setText("lookbook-disclaimer", AUN_CONTENT.brand.footerNote);

  const switcher = document.getElementById("collection-switcher");
  if (switcher) {
    switcher.innerHTML = AUN_CONTENT.collections
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
      button.addEventListener("click", () => renderCollection(button.dataset.collectionTrigger));
    });
  }

  renderCollection(AUN_CONTENT.collections[0].id);
}

function buildAbout() {
  setText("about-intro", AUN_CONTENT.about.intro);
  setImage("about-image", AUN_CONTENT.about.story.image);
  setText("about-image-caption", AUN_CONTENT.about.story.image.caption);
  setText("about-story-title", AUN_CONTENT.about.story.title);
  setText("about-story-copy", AUN_CONTENT.about.story.copy);

  const principleList = document.getElementById("principle-list");
  if (principleList) {
    principleList.innerHTML = AUN_CONTENT.about.principles
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
    aboutStoryPoints.innerHTML = AUN_CONTENT.about.story.points.map((item) => `<li>${item}</li>`).join("");
  }

  buildGallery("about-studio-gallery", AUN_CONTENT.about.gallery, "studio");
  buildPartnerRail("about-partner-rail");
}

function registerReveal() {
  const targets = document.querySelectorAll("[data-reveal]");
  if (!targets.length) {
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.18 },
  );

  targets.forEach((target) => observer.observe(target));
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

buildFooter();
setupNavToggle();

if (page === "home") {
  buildHome();
}

if (page === "lookbook") {
  buildLookbook();
}

if (page === "about") {
  buildAbout();
}

registerReveal();
