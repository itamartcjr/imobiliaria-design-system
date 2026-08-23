function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function groupId(value) {
  return String(value ?? "navigation")
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "navigation";
}

function navLink(item, activeNav, prefix) {
  const active = item.key === activeNav ? " is-active" : "";
  const current = active ? " aria-current=\"page\"" : "";
  return `<a class="nav-link${active}" href="${prefix}${item.href}"${current}><span>${escapeHtml(item.label)}</span></a>`;
}

function renderSidebar(nav, activeNav, prefix) {
  return `
    <aside class="sidebar" data-sidebar-scroll>
      <div class="sidebar__section sidebar__intro">
        <p class="sidebar__eyebrow">Imobiliaria DS</p>
        <a class="sidebar__brand" href="${prefix}index.html">Product library</a>
        <p class="sidebar__description">Identidade do imobiliaria-admin + arquitetura de interação Carbon. Marketplace/Airbnb fica isolado no produto público.</p>
      </div>
      <nav class="sidebar__navigation" aria-label="Navegação da documentação">
        ${nav.map((group) => {
          const activeGroup = group.items.some((item) => item.key === activeNav);
          const id = groupId(group.title);
          return `
            <details class="sidebar__section sidebar__group" data-sidebar-group="${id}"${activeGroup ? " open" : ""}>
              <summary class="sidebar__group-summary">
                <span class="sidebar__title">${escapeHtml(group.title)}</span>
                <span class="sidebar__group-meta"><span class="sidebar__count">${group.items.length}</span><span class="sidebar__chevron" aria-hidden="true">⌄</span></span>
              </summary>
              <div class="sidebar__links">${group.items.map((item) => navLink(item, activeNav, prefix)).join("")}</div>
            </details>`;
        }).join("")}
      </nav>
    </aside>`;
}

module.exports = { renderSidebar };
