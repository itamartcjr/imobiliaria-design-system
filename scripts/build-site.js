const fs = require("node:fs");
const path = require("node:path");
const { nav, pageData } = require("../src/site-data");
const { renderPageShell, relativePrefix } = require("../src/site-renderers");

const root = process.cwd();
const dist = path.join(root, "dist");
const assetsJsDir = path.join(dist, "assets", "js");

function ensureDir(dir) { fs.mkdirSync(dir, { recursive: true }); }
function writeFile(filePath, content) { ensureDir(path.dirname(filePath)); fs.writeFileSync(filePath, content); }

function routeHref(slug) {
  if (!slug || slug === "index.html") return "";
  return `${slug.replace(/\.html$/, "").replace(/^\/+|\/+$/g, "")}/`;
}

function routeFilePath(slug) {
  if (!slug || slug === "index.html") return path.join(dist, "index.html");
  return path.join(dist, routeHref(slug), "index.html");
}

function redirectDocument(target, title) {
  return `<!doctype html>
<html lang="pt-BR">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta http-equiv="refresh" content="0; url=${target}" />
    <title>${title}</title>
  </head>
  <body>
    <p>Esta página mudou. <a href="${target}">Continuar</a>.</p>
  </body>
</html>`;
}

ensureDir(dist);
ensureDir(assetsJsDir);

const staticNav = nav.map((group) => ({
  ...group,
  items: group.items.map((item) => ({ ...item, href: routeHref(item.href) })),
}));

for (const [slug, page] of Object.entries(pageData)) {
  const filePath = routeFilePath(slug);
  const prefix = relativePrefix(filePath);
  const content = renderPageShell({ page, prefix, nav: staticNav, content: page.hero + page.body });
  writeFile(filePath, content);

  if (slug !== "index.html" && slug.endsWith(".html")) {
    const legacyFile = path.join(dist, slug);
    const target = `./${path.basename(slug, ".html")}/`;
    writeFile(legacyFile, redirectDocument(target, `${page.title} · Imobiliaria Design System`));
  }
}

for (const jsFile of fs.readdirSync(path.join(root, "src", "assets", "js")).filter((file) => file.endsWith(".js"))) {
  fs.copyFileSync(path.join(root, "src", "assets", "js", jsFile), path.join(assetsJsDir, jsFile));
}

const enhancementParts = ["enhancements-1.js.part", "enhancements-2.js.part", "enhancements-3.js.part"];
const enhancementSource = enhancementParts.map((file) => fs.readFileSync(path.join(root, "src", "assets", "js", file), "utf8")).join("");
writeFile(path.join(assetsJsDir, "enhancements.js"), enhancementSource);

writeFile(path.join(dist, ".nojekyll"), "");
writeFile(path.join(assetsJsDir, "search-index.js"), `window.DESIGN_SYSTEM_SEARCH_INDEX = ${JSON.stringify(Object.entries(pageData).map(([href, page]) => ({
  title: page.title,
  href: routeHref(href),
  description: page.description,
  tags: [page.category, page.type, ...(page.tags || [])].filter(Boolean),
})), null, 2)};\n`);

const links = Object.entries(pageData).map(([slug, page]) => ({ slug, href: routeHref(slug), title: page.title, category: page.category }));
const sitemapFile = path.join(dist, "sitemap", "index.html");
const sitemapPrefix = relativePrefix(sitemapFile);
writeFile(sitemapFile, renderPageShell({
  page: { title: "Sitemap", description: "Mapeamento completo das páginas do design system.", nav: "index.html" },
  prefix: sitemapPrefix,
  nav: staticNav,
  content: `<section class="section"><div class="section__header"><div><p class="eyebrow">Resources</p><h2>Sitemap</h2></div><span class="coverage-badge">${links.length} páginas</span></div><div class="feature-grid">${links.map((item) => `<article class="preview-card"><a href="${sitemapPrefix}${item.href}"><p class="eyebrow">${item.category}</p><h3>${item.title}</h3><p>/${item.href}</p></a></article>`).join("")}</div></section>`,
}));
writeFile(path.join(dist, "sitemap.html"), redirectDocument("./sitemap/", "Sitemap · Imobiliaria Design System"));

writeFile(path.join(dist, "404.html"), renderPageShell({
  page: { title: "Página não encontrada", description: "A rota solicitada não existe no design system.", nav: "index.html" },
  prefix: "./",
  nav: staticNav,
  content: `<section class="hero"><div><p class="eyebrow">404</p><h1>Página não encontrada</h1><p class="hero__description">A página pode ter mudado de endereço. Use a navegação ou volte para a página inicial.</p><p><a class="primary-button" href="./">Voltar para o início</a></p></div></section>`,
}));
