const stage = {
  kicker: document.getElementById("stage-kicker"),
  title: document.getElementById("stage-title"),
  summary: document.getElementById("stage-summary"),
  mood: document.getElementById("stage-mood"),
  accent: document.getElementById("stage-accent"),
  refs: document.getElementById("stage-refs"),
  preview: document.getElementById("stage-preview"),
  home: document.getElementById("open-home"),
  lookbook: document.getElementById("open-lookbook"),
  about: document.getElementById("open-about"),
};

const thumbVersion = Date.now();
const runtimeVersion = "20260414-copy-v3";

function setStage(variant) {
  stage.kicker.textContent = `案 ${variant.id.slice(0, 2)}`;
  stage.title.textContent = variant.name;
  stage.summary.textContent = variant.summary;
  stage.mood.textContent = variant.mood;
  stage.accent.textContent = variant.accent;
  stage.refs.textContent = `参照: ${variant.references.join(" / ")}`;
  stage.preview.src = `../${variant.id}/index.html`;
  stage.home.href = `../${variant.id}/index.html`;
  stage.lookbook.href = `../${variant.id}/lookbook.html`;
  stage.about.href = `../${variant.id}/about.html`;
}

async function fetchJson(url, fallback) {
  try {
    const response = await fetch(`${url}${url.includes("?") ? "&" : "?"}v=${runtimeVersion}`);
    if (!response.ok) {
      return fallback;
    }
    return await response.json();
  } catch {
    return fallback;
  }
}

async function loadVariants() {
  const manifest = await fetchJson("../manifest.json", []);

  return Promise.all(
    manifest.map(async (item) => {
      const data = await fetchJson(`../${item.id}/variant.json`, item);
      return {
        ...item,
        ...data,
        references: Array.isArray(data.references) ? data.references : [],
      };
    }),
  );
}

function buildGrid(items) {
  const grid = document.getElementById("variant-grid");
  grid.innerHTML = items
    .map(
      (variant, index) => `
        <article class="variant-card">
          <a class="variant-thumb-link" href="../${variant.id}/index.html">
            <figure class="variant-thumb">
              <img src="./assets/thumbs/${variant.id}.png?v=${thumbVersion}" alt="${variant.name} のサムネイル" loading="lazy" />
            </figure>
          </a>
          <p class="variant-meta">案 ${String(index + 1).padStart(2, "0")}</p>
          <h3><a class="variant-title-link" href="../${variant.id}/index.html">${variant.name}</a></h3>
          <p>${variant.summary}</p>
          <div class="variant-direct-links">
            <a class="variant-direct-link" href="../${variant.id}/index.html">トップ</a>
            <a class="variant-direct-link" href="../${variant.id}/lookbook.html">ルック</a>
            <a class="variant-direct-link" href="../${variant.id}/about.html">ブランド</a>
          </div>
          <div class="variant-card-footer">
            <div class="variant-pills">
              <span class="variant-pill">${variant.mood}</span>
              <span class="variant-pill">${variant.accent}</span>
            </div>
            <button type="button" data-variant="${variant.id}">プレビュー</button>
          </div>
        </article>
      `,
    )
    .join("");

  grid.querySelectorAll("[data-variant]").forEach((button) => {
    button.addEventListener("click", () => {
      const variant = items.find((item) => item.id === button.dataset.variant);
      if (!variant) {
        return;
      }
      setStage(variant);
      stage.preview.scrollIntoView({ behavior: "smooth", block: "nearest" });
    });
  });
}

async function init() {
  const variants = await loadVariants();
  buildGrid(variants);
  if (variants[0]) {
    setStage(variants[0]);
  }
}

init();
