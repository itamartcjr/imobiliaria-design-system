(function () {
  const root = document.documentElement;
  const storageKey = "imobiliaria-ds-theme";
  const sidebarScrollKey = "imobiliaria-ds-sidebar-scroll";
  const themeToggle = document.querySelector("[data-theme-toggle]");
  const shell = document.querySelector("[data-shell]");
  const sidebar = document.querySelector("[data-sidebar-scroll]");
  const sidebarToggle = document.querySelector("[data-toggle-sidebar]");
  const searchInput = document.querySelector("[data-doc-search]");
  const searchResults = document.querySelector("[data-search-results]");
  const docRoot = document.body?.getAttribute("data-doc-root") || "./";

  function safeStorage(action, fallback) {
    try { return action(); } catch { return fallback; }
  }

  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    safeStorage(() => localStorage.setItem(storageKey, theme));
  }

  const storedTheme = safeStorage(() => localStorage.getItem(storageKey), null);
  if (storedTheme === "light" || storedTheme === "dark") applyTheme(storedTheme);

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const current = root.getAttribute("data-theme") === "light" ? "light" : "dark";
      applyTheme(current === "dark" ? "light" : "dark");
    });
  }

  if (sidebar) {
    const savedScroll = Number(safeStorage(() => sessionStorage.getItem(sidebarScrollKey), "0")) || 0;
    requestAnimationFrame(() => { sidebar.scrollTop = savedScroll; });
    sidebar.addEventListener("scroll", () => safeStorage(() => sessionStorage.setItem(sidebarScrollKey, String(sidebar.scrollTop))), { passive: true });
  }

  if (sidebarToggle && shell) sidebarToggle.addEventListener("click", () => shell.classList.toggle("is-sidebar-open"));
  document.querySelectorAll(".sidebar a").forEach((link) => link.addEventListener("click", () => {
    if (sidebar) safeStorage(() => sessionStorage.setItem(sidebarScrollKey, String(sidebar.scrollTop)));
    shell?.classList.remove("is-sidebar-open");
  }));

  const index = window.DESIGN_SYSTEM_SEARCH_INDEX || [];
  function renderSearchResults(value) {
    if (!searchResults) return;
    const query = value.trim().toLowerCase();
    if (!query) { searchResults.innerHTML = ""; return; }
    const matches = index.filter((item) =>
      [item.title, item.description, ...(item.tags || [])].join(" ").toLowerCase().includes(query)
    ).slice(0, 10);
    searchResults.innerHTML = matches.length
      ? matches.map((item) => `<a href="${docRoot}${item.href}"><strong>${item.title}</strong><br><small>${item.description}</small></a>`).join("")
      : "<div class='empty-demo'><strong>Nenhum resultado</strong><p>Tente outro termo.</p></div>";
  }

  if (searchInput) {
    searchInput.addEventListener("input", (event) => renderSearchResults(event.target.value));
    searchInput.addEventListener("keydown", (event) => { if (event.key === "Escape") { searchInput.value = ""; renderSearchResults(""); searchInput.blur(); } });
  }

  document.querySelectorAll("[data-copy-value]").forEach((button) => {
    button.addEventListener("click", async () => {
      const value = button.getAttribute("data-copy-value") || "";
      try {
        await navigator.clipboard.writeText(value);
        button.textContent = "Copiado";
        window.setTimeout(() => { button.textContent = "Copiar"; }, 1200);
      } catch {
        const selection = window.getSelection();
        const code = button.closest(".code-block")?.querySelector("code");
        if (selection && code) {
          const range = document.createRange();
          range.selectNodeContents(code);
          selection.removeAllRanges();
          selection.addRange(range);
          document.execCommand("copy");
        }
      }
    });
  });

  function loadScript(src) {
    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = `${docRoot}assets/js/${src}`;
      script.onload = resolve;
      script.onerror = reject;
      document.body.appendChild(script);
    });
  }

  loadScript("specimens.js")
    .then(() => loadScript("enhancements.js"))
    .catch(() => {});
})();
