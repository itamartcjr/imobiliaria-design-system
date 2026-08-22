(function () {
  const root = document.documentElement;
  const storageKey = "imobiliaria-ds-theme";
  const themeToggle = document.querySelector("[data-theme-toggle]");
  const sidebar = document.querySelector("[data-shell]");
  const sidebarToggle = document.querySelector("[data-toggle-sidebar]");
  const searchInput = document.querySelector("[data-doc-search]");
  const searchResults = document.querySelector("[data-search-results]");
  const motionButton = document.querySelector("[data-motion-demo]");
  const motionStage = document.querySelector("[data-motion-stage]");

  function safeStorage(action, fallback) {
    try {
      return action();
    } catch {
      return fallback;
    }
  }

  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    safeStorage(() => localStorage.setItem(storageKey, theme));
  }

  const storedTheme = safeStorage(() => localStorage.getItem(storageKey), null);
  if (storedTheme === "light" || storedTheme === "dark") {
    applyTheme(storedTheme);
  }

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const current = root.getAttribute("data-theme") === "light" ? "light" : "dark";
      applyTheme(current === "dark" ? "light" : "dark");
    });
  }

  if (sidebarToggle && sidebar) {
    sidebarToggle.addEventListener("click", () => {
      sidebar.classList.toggle("is-sidebar-open");
    });
  }

  const index = window.DESIGN_SYSTEM_SEARCH_INDEX || [];

  function renderSearchResults(value) {
    if (!searchResults) return;
    const query = value.trim().toLowerCase();
    if (!query) {
      searchResults.innerHTML = "";
      return;
    }

    const matches = index.filter((item) =>
      [item.title, item.description, ...(item.tags || [])].join(" ").toLowerCase().includes(query)
    ).slice(0, 8);

    searchResults.innerHTML = matches.length
      ? matches.map((item) => `<a href="${item.href}"><strong>${item.title}</strong><br><small>${item.description}</small></a>`).join("")
      : "<div class='empty-demo'><strong>Nenhum resultado</strong><p>Tente outro termo.</p></div>";
  }

  if (searchInput) {
    searchInput.addEventListener("input", (event) => renderSearchResults(event.target.value));
    renderSearchResults(searchInput.value || "");
  }

  if (motionButton && motionStage) {
    motionButton.addEventListener("click", () => {
      motionStage.classList.remove("is-animated");
      window.requestAnimationFrame(() => motionStage.classList.add("is-animated"));
      window.setTimeout(() => motionStage.classList.remove("is-animated"), 420);
    });
  }

  document.querySelectorAll("[data-copy-value]").forEach((button) => {
    button.addEventListener("click", async () => {
      const value = button.getAttribute("data-copy-value") || "";
      try {
        await navigator.clipboard.writeText(value);
        button.textContent = "Copiado";
        window.setTimeout(() => {
          button.textContent = "Copiar";
        }, 1200);
      } catch {
        const selection = window.getSelection();
        if (selection) {
          const range = document.createRange();
          const code = button.closest(".code-block")?.querySelector("code");
          if (code) {
            range.selectNodeContents(code);
            selection.removeAllRanges();
            selection.addRange(range);
            document.execCommand("copy");
          }
        }
      }
    });
  });
})();
