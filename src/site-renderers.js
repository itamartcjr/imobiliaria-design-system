const path = require("node:path");

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function joinPath(...parts) {
  return parts.filter(Boolean).join("/").replace(/\\+/g, "/");
}

function relativePrefix(filePath) {
  const relative = path.relative(path.join(process.cwd(), "dist"), filePath);
  const dir = path.dirname(relative);
  if (!dir || dir === ".") return "./";
  const depth = dir.split(path.sep).filter((part) => part && part !== ".").length;
  return depth ? "../".repeat(depth) : "./";
}

function navLink(item, activeNav, prefix) {
  const active = item.key === activeNav ? " is-active" : "";
  return `<a class="nav-link${active}" href="${prefix}${item.href}"><span>${escapeHtml(item.label)}</span></a>`;
}

function renderSidebar(nav, activeNav, prefix) {
  return `
    <aside class="sidebar">
      <div class="sidebar__section sidebar__intro">
        <p class="sidebar__eyebrow">Imobiliaria DS</p>
        <a class="sidebar__brand" href="${prefix}index.html">Admin-first</a>
        <p class="sidebar__description">Identidade do imobiliaria-admin + arquitetura de interação Carbon. Referências tipo Airbnb ficam no site público.</p>
      </div>
      ${nav.map((group) => `
        <section class="sidebar__section">
          <h2 class="sidebar__title">${escapeHtml(group.title)}</h2>
          <div class="sidebar__links">${group.items.map((item) => navLink(item, activeNav, prefix)).join("")}</div>
        </section>
      `).join("")}
    </aside>`;
}

function renderHeader(page, prefix) {
  return `
    <header class="topbar">
      <button class="icon-button topbar__menu" type="button" data-toggle-sidebar aria-label="Abrir navegação">☰</button>
      <a class="topbar__brand" href="${prefix}index.html">
        <span class="topbar__brand-mark"></span>
        <span>Imobiliaria Design System</span>
        <small>Admin + Carbon</small>
      </a>
      <div class="topbar__actions">
        <div class="search-shell">
          <label class="search-field">
            <span class="sr-only">Buscar na documentação</span>
            <input type="search" placeholder="Buscar páginas, componentes e tokens" data-doc-search />
          </label>
          <div class="search-results" data-search-results></div>
        </div>
        <button class="icon-button" type="button" data-theme-toggle aria-label="Alternar tema">◐</button>
      </div>
    </header>`;
}

function renderPageShell({ page, prefix, nav, content }) {
  return `<!doctype html>
<html lang="pt-BR" data-theme="dark">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${escapeHtml(page.title)} · Imobiliaria Design System</title>
    <meta name="description" content="${escapeHtml(page.description)}" />
    <link rel="stylesheet" href="${prefix}assets/css/tokens.css" />
    <link rel="stylesheet" href="${prefix}assets/css/styles.css" />
  </head>
  <body>
    ${renderHeader(page, prefix)}
    <div class="shell" data-shell>
      ${renderSidebar(nav, page.nav, prefix)}
      <main class="content">${content}</main>
    </div>
    <script src="${prefix}assets/js/search-index.js"></script>
    <script src="${prefix}assets/js/app.js"></script>
  </body>
</html>`;
}

function section(title, subtitle, body, actions = "") {
  return `
    <section class="section">
      <div class="section__header">
        <div><p class="eyebrow">${escapeHtml(subtitle || "")}</p><h2>${escapeHtml(title)}</h2></div>
        ${actions}
      </div>
      <div class="section__body">${body}</div>
    </section>`;
}

function tokenTable(rows) {
  return `<div class="table-wrap"><table class="token-table">
    <thead><tr><th>Token</th><th>Dark</th><th>Light</th><th>Uso</th></tr></thead>
    <tbody>${rows.map((row) => `<tr><td><code>${escapeHtml(row.token)}</code></td><td><code>${escapeHtml(row.dark)}</code></td><td><code>${escapeHtml(row.light)}</code></td><td>${escapeHtml(row.usage)}</td></tr>`).join("")}</tbody>
  </table></div>`;
}

function simpleCards(items, className = "preview-grid") {
  return `<div class="${className}">${items.map((item) => `<article class="preview-card ${item.modifier || ""}">${item.html}</article>`).join("")}</div>`;
}

function codeBlock(code, label = "Código") {
  return `<div class="code-block"><div class="code-block__header"><span>${escapeHtml(label)}</span><button class="ghost-button" type="button" data-copy-code data-copy-value="${escapeHtml(code)}">Copiar</button></div><pre><code>${escapeHtml(code)}</code></pre></div>`;
}

function previewDevice(title, widthClass, body) {
  return `<div class="device device--${widthClass}"><div class="device__label">${escapeHtml(title)}</div><div class="device__screen">${body}</div></div>`;
}
function previewDeviceRow(items) { return `<div class="device-row">${items.join("")}</div>`; }
function doDont(doHtml, dontHtml) { return `<div class="do-dont"><div class="do-dont__good"><h3>DO</h3>${doHtml}</div><div class="do-dont__bad"><h3>DON'T</h3>${dontHtml}</div></div>`; }
function callout(label, text) { return `<aside class="callout"><strong>${escapeHtml(label)}</strong><p>${escapeHtml(text)}</p></aside>`; }

function hero(page, extraHtml = "") {
  return `<section class="hero">
    <div><p class="eyebrow">${escapeHtml(page.category || "Getting started")}</p><h1>${escapeHtml(page.title)}</h1><p class="hero__description">${escapeHtml(page.description)}</p></div>
    <div class="hero__aside"><div class="pill-row"><span class="pill">Admin first</span><span class="pill">Carbon interaction</span><span class="pill">Public isolated</span></div>${extraHtml}</div>
  </section>`;
}

function pageArticle(title, body, extra = "") { return `<article class="prose"><h2>${escapeHtml(title)}</h2>${body}${extra}</article>`; }

function brandSwatches() {
  return `<div class="swatch-grid">
    <div class="swatch"><span>Admin canvas</span><strong>#272727</strong></div>
    <div class="swatch"><span>Admin surface</span><strong>#2C2C2C</strong></div>
    <div class="swatch"><span>Brand accent</span><strong>#DB0423</strong></div>
    <div class="swatch"><span>Carbon focus</span><strong>#78A9FF</strong></div>
  </div>`;
}

module.exports = { escapeHtml, joinPath, relativePrefix, renderPageShell, section, tokenTable, simpleCards, codeBlock, previewDevice, previewDeviceRow, doDont, callout, hero, pageArticle, brandSwatches };
