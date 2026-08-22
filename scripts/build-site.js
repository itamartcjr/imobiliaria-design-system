const fs = require("node:fs");
const path = require("node:path");
const { nav, pageData } = require("../src/site-data");
const { renderPageShell, relativePrefix } = require("../src/site-renderers");

const root = process.cwd();
const dist = path.join(root, "dist");
const assetsJsDir = path.join(dist, "assets", "js");

function ensureDir(dir) { fs.mkdirSync(dir, { recursive: true }); }
function writeFile(filePath, content) { ensureDir(path.dirname(filePath)); fs.writeFileSync(filePath, content); }

ensureDir(dist);
ensureDir(assetsJsDir);

for (const [slug, page] of Object.entries(pageData)) {
  const filePath = path.join(dist, slug);
  const prefix = relativePrefix(filePath);
  const content = renderPageShell({ page, prefix, nav, content: page.hero + page.body });
  writeFile(filePath, content);
}

fs.copyFileSync(path.join(root, "src", "assets", "js", "app.js"), path.join(assetsJsDir, "app.js"));
writeFile(path.join(dist, "_redirects"), "");
writeFile(path.join(assetsJsDir, "search-index.js"), `window.DESIGN_SYSTEM_SEARCH_INDEX = ${JSON.stringify(Object.entries(pageData).map(([href, page]) => ({
  title: page.title,
  href,
  description: page.description,
  tags: [page.category, page.type, ...(page.tags || [])].filter(Boolean),
})), null, 2)};\n`);

const links = Object.entries(pageData).map(([slug, page]) => ({ slug, title: page.title, category: page.category }));
writeFile(path.join(dist, "sitemap.html"), renderPageShell({
  page: { title: "Sitemap", description: "Mapeamento completo das páginas do design system.", nav: "index.html" },
  prefix: "./",
  nav,
  content: `<section class="section"><div class="section__header"><div><p class="eyebrow">Resources</p><h2>Sitemap</h2></div><span class="coverage-badge">${links.length} páginas</span></div><div class="feature-grid">${links.map((item) => `<article class="preview-card"><a href="${item.slug}"><p class="eyebrow">${item.category}</p><h3>${item.title}</h3><p>${item.slug}</p></a></article>`).join("")}</div></section>`,
}));
