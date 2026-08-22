const { codeBlock, callout, doDont, hero, pageArticle, previewDevice, previewDeviceRow, section, simpleCards, tokenTable, brandSwatches } = require("./site-renderers");

const nav = [
  {
    title: "Getting started",
    items: [
      { key: "home", label: "Home", href: "index.html" },
    ],
  },
  {
    title: "Foundations",
    items: [
      { key: "foundations", label: "Principles", href: "foundations/principles.html" },
      { key: "foundations", label: "Colors", href: "foundations/colors.html" },
      { key: "foundations", label: "Typography", href: "foundations/typography.html" },
      { key: "foundations", label: "Spacing", href: "foundations/spacing.html" },
      { key: "foundations", label: "Radius", href: "foundations/radius.html" },
      { key: "foundations", label: "Grid", href: "foundations/grid.html" },
      { key: "foundations", label: "Motion", href: "foundations/motion.html" },
      { key: "foundations", label: "Dark / Light", href: "foundations/dark-light.html" },
    ],
  },
  {
    title: "Components",
    items: [
      { key: "components", label: "Button", href: "components/button.html" },
      { key: "components", label: "Input", href: "components/input.html" },
      { key: "components", label: "Search", href: "components/search.html" },
      { key: "components", label: "Card", href: "components/card.html" },
      { key: "components", label: "Property Card", href: "components/property-card.html" },
      { key: "components", label: "Badge / Status", href: "components/badge-status.html" },
      { key: "components", label: "Table / Data List", href: "components/table-datalist.html" },
      { key: "components", label: "Sidebar / Navigation", href: "components/sidebar-navigation.html" },
      { key: "components", label: "Modal / Sheet", href: "components/modal-sheet.html" },
      { key: "components", label: "Toast", href: "components/toast.html" },
      { key: "components", label: "Skeleton", href: "components/skeleton.html" },
      { key: "components", label: "Empty State", href: "components/empty-state.html" },
    ],
  },
  {
    title: "Patterns",
    items: [
      { key: "patterns", label: "Filters", href: "patterns/filters.html" },
      { key: "patterns", label: "Forms", href: "patterns/forms.html" },
      { key: "patterns", label: "Admin Collection", href: "patterns/admin-collection.html" },
      { key: "patterns", label: "Property Search", href: "patterns/property-search.html" },
      { key: "patterns", label: "Property Detail", href: "patterns/property-detail.html" },
    ],
  },
  {
    title: "Guidelines",
    items: [
      { key: "guidelines", label: "Responsive", href: "guidelines/responsive.html" },
      { key: "guidelines", label: "Accessibility", href: "guidelines/accessibility.html" },
      { key: "guidelines", label: "Writing", href: "guidelines/writing.html" },
      { key: "guidelines", label: "Motion", href: "guidelines/motion.html" },
      { key: "guidelines", label: "Dark / Light", href: "guidelines/dark-light.html" },
      { key: "guidelines", label: "Admin vs Public", href: "guidelines/admin-vs-public.html" },
    ],
  },
  {
    title: "Resources",
    items: [
      { key: "resources", label: "Tokens", href: "resources/tokens.html" },
      { key: "resources", label: "React Native", href: "resources/react-native.html" },
      { key: "resources", label: "CSS", href: "resources/css.html" },
      { key: "resources", label: "Migration", href: "resources/migration.html" },
    ],
  },
];

const pageData = {
  "index.html": {
    hero: hero({ category: "Getting started", title: "Imobiliaria Design System", description: "Fonte oficial de identidade visual, tokens, componentes, padrões, motion e documentação para toda a plataforma." }, callout("Referências", "Admin é a fonte principal, front é a referência secundária e Carbon entra como guia de padrões de interação.")),
    body: [
      section("Princípios", "Overview", `
        <div class="feature-grid">
          ${simpleCards([
            { html: "<h3>Sóbrio</h3><p>Surface escura, bordas discretas e contraste alto.</p>" },
            { html: "<h3>Premium</h3><p>Detalhes contidos sem exagero de brilho ou sombra.</p>" },
            { html: "<h3>Contemporâneo</h3><p>Boa leitura, densidade controlada e hierarquia clara.</p>" },
            { html: "<h3>Responsivo</h3><p>Mesma identidade para admin e public, com densidades diferentes.</p>" },
          ])}
        </div>
      `),
      section("System snapshot", "Tokens", `
        ${brandSwatches()}
        <div class="pill-row" style="margin-top:16px">
          <span class="pill">Manrope</span>
          <span class="pill">Lima accent</span>
          <span class="pill">Dark-first</span>
          <span class="pill">Offline HTML</span>
        </div>
      `),
      section("Quick links", "Navigation", `
        ${simpleCards([
          { html: '<a href="foundations/colors.html"><h3>Colors</h3><p>Dark e light com tokens semânticos.</p></a>' },
          { html: '<a href="components/button.html"><h3>Button</h3><p>Primary, secondary, ghost e danger.</p></a>' },
          { html: '<a href="components/property-card.html"><h3>Property Card</h3><p>Imagem, badge, preço e localização.</p></a>' },
          { html: '<a href="patterns/filters.html"><h3>Filters</h3><p>FilterBar, chips e painéis.</p></a>' },
        ])}
      `),
    ].join(""),
  },

  "foundations/principles.html": {
    hero: hero({ category: "Foundations", title: "Principles", description: "A identidade parte do admin, absorve o melhor da composição do front e usa Carbon como referência de padrões." }),
    body: [
      section("Hierarquia de referências", "Decision", `
        ${doDont(
          "<p><strong>Admin →</strong> identidade, sobriedade, densidade e contraste.</p><p><strong>Front →</strong> respiro, imagem e composição pública.</p><p><strong>Carbon →</strong> motion, feedback e progressivo disclosure.</p>",
          "<p>Não misturar três sistemas visuais. Um único sistema deve resultar da fusão desses aprendizados.</p>"
        )}
      `),
      section("Personality", "Guidance", `
        ${simpleCards([
          { html: "<h3>Sóbrio</h3><p>Evitar excesso de gradiente, glow e borda.</p>" },
          { html: "<h3>Premium</h3><p>Elevar qualidade sem parecer luxo exagerado.</p>" },
          { html: "<h3>Claro</h3><p>Estados e hierarquia precisam ser óbvios.</p>" },
          { html: "<h3>Prático</h3><p>Admin denso, front respirado, mesmo sistema.</p>" },
        ])}
      `),
    ].join(""),
  },

  "foundations/colors.html": {
    hero: hero({ category: "Foundations", title: "Colors", description: "Sistema semântico com dark e light derivados da mesma identidade." }),
    body: [
      section("Color tokens", "Semantic", tokenTable([
        { token: "background.canvas", dark: "#090909", light: "#F5F0E8", usage: "Background principal." },
        { token: "background.surface", dark: "#111214", light: "#FFFDF8", usage: "Cards e superfícies base." },
        { token: "background.surfaceElevated", dark: "#18191C", light: "#FFFFFF", usage: "Dropdowns, modal e painéis." },
        { token: "text.primary", dark: "#F5F0E8", light: "#171717", usage: "Texto principal." },
        { token: "text.secondary", dark: "#C7C1B7", light: "#55514A", usage: "Texto de apoio." },
        { token: "border.default", dark: "rgba(245,240,232,0.14)", light: "rgba(23,23,23,0.14)", usage: "Bordas padrão." },
        { token: "accent.primary", dark: "#D4FB00", light: "#D4FB00", usage: "Ação primária e seleção." },
        { token: "status.danger", dark: "#FF5B6E", light: "#D53F54", usage: "Erros e destruição." },
      ])),
      section("Accent usage", "Do / Don't", doDont(
        "<p>Usar o lime para o CTA principal, seleção importante e foco estratégico.</p><p>Usar accent subtle em chips, tags e highlights pontuais.</p>",
        "<p>Evitar preencher telas inteiras com o accent. Não usar o lime em toda borda, sombra ou fundo.</p>"
      )),
    ].join(""),
  },

  "foundations/typography.html": {
    hero: hero({ category: "Foundations", title: "Typography", description: "Manrope como base para produto, editorial e densidade de dados." }),
    body: [
      section("Type scale", "Tokens", `
        ${simpleCards([
          { html: "<p class='type-demo type-demo--display'>Display</p><p>56 / 64 · extra bold</p>" },
          { html: "<p class='type-demo type-demo--h1'>Heading 1</p><p>40 / 48 · extra bold</p>" },
          { html: "<p class='type-demo type-demo--h2'>Heading 2</p><p>32 / 40 · bold</p>" },
          { html: "<p class='type-demo type-demo--body'>Body md</p><p>16 / 24 · regular</p>" },
        ])}
      `),
      section("Usage", "Guidance", codeBlock(`font-family: var(--font-family-primary);
font-size: var(--font-size-body-md);
line-height: var(--line-height-body-md);
font-weight: var(--font-weight-regular);`, "CSS example")),
    ].join(""),
  },

  "foundations/spacing.html": {
    hero: hero({ category: "Foundations", title: "Spacing", description: "Escala compacta e consistente para layout, cards e formulários." }),
    body: [
      section("Space scale", "Tokens", tokenTable([
        { token: "space.0", dark: "0", light: "0", usage: "Sem espaço." },
        { token: "space.1", dark: "4", light: "4", usage: "Micro gaps." },
        { token: "space.2", dark: "8", light: "8", usage: "Entre texto e ícone." },
        { token: "space.4", dark: "16", light: "16", usage: "Padding de input e botão." },
        { token: "space.6", dark: "24", light: "24", usage: "Gap de cards." },
        { token: "space.8", dark: "40", light: "40", usage: "Seções e hero blocks." },
      ])),
    ].join(""),
  },

  "foundations/radius.html": {
    hero: hero({ category: "Foundations", title: "Radius", description: "Arredondamento racional: nem rígido demais, nem exagerado." }),
    body: [
      section("Radius scale", "Tokens", tokenTable([
        { token: "radius.none", dark: "0", light: "0", usage: "Bordas retas." },
        { token: "radius.sm", dark: "4", light: "4", usage: "Separadores e chips densos." },
        { token: "radius.md", dark: "8", light: "8", usage: "Inputs e cards comuns." },
        { token: "radius.lg", dark: "16", light: "16", usage: "Cards destacados e tiles." },
        { token: "radius.xl", dark: "24", light: "24", usage: "Hero blocks e painéis amplos." },
        { token: "radius.pill", dark: "9999", light: "9999", usage: "Botões e tags pill." },
      ])),
    ].join(""),
  },

  "foundations/grid.html": {
    hero: hero({ category: "Foundations", title: "Grid", description: "Breakpoints e largura de conteúdo para web, mobile e desktop." }),
    body: [
      section("Breakpoints", "Layout", tokenTable([
        { token: "mobile", dark: "0", light: "0", usage: "Até 767px." },
        { token: "tablet", dark: "768", light: "768", usage: "768px a 1199px." },
        { token: "desktop", dark: "1200", light: "1200", usage: "Desktop padrão." },
        { token: "largeDesktop", dark: "1440", light: "1440", usage: "Desktop amplo." },
      ])),
      section("Content widths", "Guidance", simpleCards([
        { html: "<h3>Narrow</h3><p>720px para formulários e textos longos.</p>" },
        { html: "<h3>Default</h3><p>1120px para páginas padrão.</p>" },
        { html: "<h3>Wide</h3><p>1440px para navegação e coleções.</p>" },
        { html: "<h3>Display</h3><p>1760px para home e layouts editoriais.</p>" },
      ])),
    ].join(""),
  },

  "foundations/motion.html": {
    hero: hero({ category: "Foundations", title: "Motion", description: "Motion produtivo como padrão e motion expressivo como exceção." }),
    body: [
      section("Tokens", "Carbon inspired", tokenTable([
        { token: "duration.instant", dark: "0ms", light: "0ms", usage: "Atualizações imediatas." },
        { token: "duration.fast", dark: "70ms", light: "70ms", usage: "Hover e pressed." },
        { token: "duration.normal", dark: "160ms", light: "160ms", usage: "Transições comuns." },
        { token: "duration.slow", dark: "240ms", light: "240ms", usage: "Abrir painéis." },
        { token: "easing.productiveStandard", dark: "cubic-bezier(0.2,0,0.38,0.9)", light: "cubic-bezier(0.2,0,0.38,0.9)", usage: "Microinterações." },
        { token: "easing.expressiveStandard", dark: "cubic-bezier(0.4,0.14,0.3,1)", light: "cubic-bezier(0.4,0.14,0.3,1)", usage: "Entradas editoriais." },
      ])),
      section("Demo", "Productive motion", `
        <div class="motion-demo">
          <button class="primary-button" type="button" data-motion-demo>Reproduzir animação</button>
          <div class="motion-stage" data-motion-stage>
            <div class="motion-block"></div>
            <div class="motion-block motion-block--accent"></div>
          </div>
        </div>
      `),
    ].join(""),
  },

  "foundations/dark-light.html": {
    hero: hero({ category: "Foundations", title: "Dark / Light", description: "Duas expressões da mesma linguagem, sem criar dois produtos distintos." }),
    body: [
      section("Theme matrix", "Guidance", previewDeviceRow([
        previewDevice("Dark", "mobile", "<div class='theme-demo theme-demo--dark'><strong>Dark first</strong><p>Surfaces escuras, contraste alto e accent lima.</p></div>"),
        previewDevice("Light", "mobile", "<div class='theme-demo theme-demo--light'><strong>Light derived</strong><p>Mesmo sistema com superfícies claras e warm white.</p></div>"),
      ])),
    ].join(""),
  },

  "components/button.html": {
    hero: hero({ category: "Components", title: "Button", description: "Primary, secondary, ghost e danger com tamanhos e estados consistentes." }),
    body: [
      section("Variants", "Preview", `
        <div class="button-samples">
          <button class="primary-button" type="button">Primary</button>
          <button class="secondary-button" type="button">Secondary</button>
          <button class="ghost-button" type="button">Ghost</button>
          <button class="danger-button" type="button">Danger</button>
        </div>
      `),
      section("Sizes", "Preview", `
        <div class="button-samples">
          <button class="primary-button button-sm" type="button">Small</button>
          <button class="primary-button" type="button">Medium</button>
          <button class="primary-button button-lg" type="button">Large</button>
        </div>
      `),
      section("Code", "Example", codeBlock(`<button class="button button--primary">Salvar</button>`)),
      section("Do / Don't", "Guidance", doDont(
        "<p>Usar primary para uma ação principal por vez.</p><p>Usar ghost para navegação e ações secundárias.</p>",
        "<p>Não empilhar vários primários lado a lado. Não usar accent em todos os botões.</p>"
      )),
    ].join(""),
  },

  "components/input.html": {
    hero: hero({ category: "Components", title: "Input", description: "Text input, password, search e textarea com estados claros." }),
    body: [
      section("Preview", "States", `
        <div class="form-grid">
          <label class="field"><span>Text input</span><input type="text" placeholder="Nome do imóvel" /></label>
          <label class="field"><span>Search input</span><input type="search" placeholder="Pesquisar imóveis" /></label>
          <label class="field"><span>Password input</span><input type="password" placeholder="••••••••" /></label>
          <label class="field field--wide"><span>Textarea</span><textarea rows="4" placeholder="Descrição"></textarea></label>
        </div>
      `),
      section("Code", "Example", codeBlock(`<label class="field">
  <span>Nome</span>
  <input type="text" />
</label>`)),
    ].join(""),
  },

  "components/search.html": {
    hero: hero({ category: "Components", title: "Search", description: "Busca offline simples para a documentação e para coleções." }),
    body: [
      section("Preview", "Offline search", `
        <div class="search-demo">
          <input type="search" placeholder="Buscar componentes, padrões e tokens" data-doc-search />
          <div class="search-results" data-search-results-demo></div>
        </div>
      `),
    ].join(""),
  },

  "components/card.html": {
    hero: hero({ category: "Components", title: "Card", description: "BaseCard, ClickableCard, SelectableCard e ExpandableCard." }),
    body: [
      section("Preview", "Family", simpleCards([
        { html: "<h3>BaseCard</h3><p>Superfície simples com borda discreta.</p>" },
        { html: "<h3>ClickableCard</h3><p>Feedback de hover e pressed.</p>" },
        { html: "<h3>SelectableCard</h3><p>Estado ativo com accent.</p>" },
        { html: "<h3>ExpandableCard</h3><p>Disclosure progressivo.</p>" },
      ])),
    ].join(""),
  },

  "components/property-card.html": {
    hero: hero({ category: "Components", title: "Property Card", description: "Une experiência pública, visual de imóvel e sobriedade do admin." }),
    body: [
      section("Preview", "Property", `
        <div class="property-preview">
          <div class="property-preview__media">
            <span class="property-preview__badge">Destaque</span>
            <span class="property-preview__favorite">♡</span>
          </div>
          <div class="property-preview__body">
            <strong>Casa em Condomínio</strong>
            <span>Jardins | Goiânia</span>
            <span>R$ 1.250.000</span>
            <small>3 quartos · 2 vagas · 178 m²</small>
          </div>
        </div>
      `),
      section("Anatomy", "Guidance", doDont(
        "<p>Imagem, badge, título, localização, preço e CTA de detalhe.</p><p>Usar aspect ratio consistente e sobreposição contida.</p>",
        "<p>Não transformar o card em mini dashboard. Não lotar o card de ações.</p>"
      )),
    ].join(""),
  },

  "components/badge-status.html": {
    hero: hero({ category: "Components", title: "Badge / Status", description: "Badges e estados semânticos para coleções e fluxos imobiliários." }),
    body: [
      section("Preview", "States", `
        <div class="pill-row">
          <span class="badge badge--accent">Ativo</span>
          <span class="badge badge--success">Concluído</span>
          <span class="badge badge--warning">Pendente</span>
          <span class="badge badge--danger">Perdido</span>
        </div>
      `),
    ].join(""),
  },

  "components/table-datalist.html": {
    hero: hero({ category: "Components", title: "Table / Data List", description: "Tabela densa para desktop e data list responsiva para mobile." }),
    body: [
      section("Desktop", "Table", `
        <div class="table-wrap">
          <table class="data-table">
            <thead><tr><th>Código</th><th>Imóvel</th><th>Bairro</th><th>Valor</th><th>Status</th></tr></thead>
            <tbody>
              <tr><td>AP-001</td><td>Apartamento em Moema</td><td>Moema</td><td>R$ 1.250.000</td><td>Ativo</td></tr>
              <tr><td>CA-204</td><td>Casa em condomínio</td><td>Jardins</td><td>R$ 2.100.000</td><td>Destaque</td></tr>
            </tbody>
          </table>
        </div>
      `),
      section("Mobile", "Cards", simpleCards([
        { html: "<strong>AP-001</strong><p>Apartamento em Moema</p><small>Moema · R$ 1.250.000</small>" },
        { html: "<strong>CA-204</strong><p>Casa em condomínio</p><small>Jardins · R$ 2.100.000</small>" },
      ])),
    ].join(""),
  },

  "components/sidebar-navigation.html": {
    hero: hero({ category: "Components", title: "Sidebar / Navigation", description: "Navegação principal, secundária e comportamento mobile." }),
    body: [
      section("Preview", "Shell", `
        <div class="shell-preview">
          <aside class="shell-preview__sidebar">
            <a class="shell-preview__item is-active">Dashboard</a>
            <a class="shell-preview__item">Imóveis</a>
            <a class="shell-preview__item">Leads</a>
            <a class="shell-preview__item">Mais</a>
          </aside>
          <div class="shell-preview__content">
            <div class="shell-preview__panel"></div>
          </div>
        </div>
      `),
    ].join(""),
  },

  "components/modal-sheet.html": {
    hero: hero({ category: "Components", title: "Modal / Sheet", description: "Overlays com progressive disclosure e comportamento responsivo." }),
    body: [
      section("Preview", "Overlay", `
        <div class="overlay-demo">
          <div class="overlay-demo__surface">
            <strong>Modal</strong>
            <p>Usar para decisões importantes.</p>
          </div>
          <div class="overlay-demo__surface overlay-demo__surface--sheet">
            <strong>Sheet</strong>
            <p>Preferível no mobile quando fizer sentido.</p>
          </div>
        </div>
      `),
    ].join(""),
  },

  "components/toast.html": {
    hero: hero({ category: "Components", title: "Toast", description: "Feedback não bloqueante para sucesso, erro e informação." }),
    body: [
      section("Preview", "Feedback", `
        <div class="toast-stack">
          <div class="toast toast--success">Imóvel salvo com sucesso.</div>
          <div class="toast toast--info">Sincronização atualizada.</div>
          <div class="toast toast--danger">Não foi possível concluir a ação.</div>
        </div>
      `),
    ].join(""),
  },

  "components/skeleton.html": {
    hero: hero({ category: "Components", title: "Skeleton", description: "Loading state leve e discreto." }),
    body: [
      section("Preview", "Loading", `
        <div class="skeleton-card">
          <div class="skeleton skeleton--hero"></div>
          <div class="skeleton skeleton--line"></div>
          <div class="skeleton skeleton--line short"></div>
        </div>
      `),
    ].join(""),
  },

  "components/empty-state.html": {
    hero: hero({ category: "Components", title: "Empty State", description: "Estado vazio com mensagem clara e ação opcional." }),
    body: [
      section("Preview", "State", `
        <div class="empty-demo">
          <strong>Nenhum registro encontrado</strong>
          <p>Altere os filtros ou tente novamente.</p>
          <button class="secondary-button" type="button">Atualizar</button>
        </div>
      `),
    ].join(""),
  },

  "patterns/filters.html": {
    hero: hero({ category: "Patterns", title: "Filters", description: "FilterBar, chips, painéis e ordenação para o FilterInput genérico." }),
    body: [
      section("Preview", "Desktop + mobile", `
        <div class="filter-demo">
          <div class="pill-row">
            <span class="chip">Venda</span>
            <span class="chip">Moema</span>
            <span class="chip">3 quartos</span>
          </div>
          <div class="filter-demo__bar">
            <button class="secondary-button" type="button">Filtros</button>
            <button class="ghost-button" type="button">Ordenar</button>
          </div>
        </div>
      `),
    ].join(""),
  },

  "patterns/forms.html": {
    hero: hero({ category: "Patterns", title: "Forms", description: "Formulários simples, seccionados e longos para admin e public." }),
    body: [
      section("Form types", "Guidance", simpleCards([
        { html: "<h3>SimpleForm</h3><p>Uma coluna, foco em velocidade.</p>" },
        { html: "<h3>SectionedForm</h3><p>Seções agrupadas para formulários longos.</p>" },
        { html: "<h3>SearchForm</h3><p>Busca e filtros com poucos campos.</p>" },
        { html: "<h3>LongForm</h3><p>Usar progressivo e com autosave quando necessário.</p>" },
      ])),
    ].join(""),
  },

  "patterns/admin-collection.html": {
    hero: hero({ category: "Patterns", title: "Admin Collection", description: "Coleção administrativa: lista, filtros, paginação e ações." }),
    body: [
      section("Preview", "Admin", `
        <div class="collection-demo">
          <div class="collection-demo__sidebar">
            <span>Filtros</span>
            <button class="ghost-button" type="button">Limpar</button>
          </div>
          <div class="collection-demo__list">
            <div class="collection-row"><span>AP-001</span><span>Ativo</span></div>
            <div class="collection-row"><span>CA-204</span><span>Destaque</span></div>
          </div>
        </div>
      `),
    ].join(""),
  },

  "patterns/property-search.html": {
    hero: hero({ category: "Patterns", title: "Property Search", description: "Busca pública com respiro, imagem e leitura rápida." }),
    body: [
      section("Preview", "Public", previewDeviceRow([
        previewDevice("Mobile", "mobile", "<div class='theme-demo theme-demo--light'><strong>AP-001</strong><p>Apartamento em Moema · R$ 1.250.000</p></div>"),
        previewDevice("Desktop", "desktop", "<div class='theme-demo theme-demo--light'><strong>Resultados</strong><p>Busca com filtros e cards de imóveis em linha.</p></div>"),
      ])),
    ].join(""),
  },

  "patterns/property-detail.html": {
    hero: hero({ category: "Patterns", title: "Property Detail", description: "Imagem principal, galerias, valores e relações." }),
    body: [
      section("Preview", "Detail", `
        <div class="property-detail-demo">
          <div class="property-detail-demo__hero"></div>
          <div class="property-detail-demo__grid">
            <div class="property-detail-demo__card"></div>
            <div class="property-detail-demo__card"></div>
            <div class="property-detail-demo__card"></div>
          </div>
        </div>
      `),
    ].join(""),
  },

  "guidelines/responsive.html": {
    hero: hero({ category: "Guidelines", title: "Responsive", description: "Mobile, tablet, desktop e large desktop com a mesma identidade." }),
    body: [
      section("Breakpoints", "Layout", simpleCards([
        { html: "<h3>Mobile</h3><p>1 coluna e gestos simples.</p>" },
        { html: "<h3>Tablet</h3><p>2 colunas e densidade intermediária.</p>" },
        { html: "<h3>Desktop</h3><p>Sidebar, grid e densidade produtiva.</p>" },
        { html: "<h3>Large Desktop</h3><p>Mais espaço e coleções amplas.</p>" },
      ])),
    ].join(""),
  },

  "guidelines/accessibility.html": {
    hero: hero({ category: "Guidelines", title: "Accessibility", description: "Contraste, foco visível, labels, keyboard e reduced motion." }),
    body: [
      section("Checklist", "A11y", `
        <ul class="checklist">
          <li>Contraste suficiente em dark e light.</li>
          <li>Alvos de toque com pelo menos 44px.</li>
          <li>Foco visível com accent.</li>
          <li>Sem dependência de cor apenas.</li>
          <li>Motion reduzido quando necessário.</li>
        </ul>
      `),
    ].join(""),
  },

  "guidelines/writing.html": {
    hero: hero({ category: "Guidelines", title: "Writing", description: "Tom claro, direto e consistente com a operação imobiliária." }),
    body: [
      section("Microcopy", "Tone", pageArticle("Boas práticas", "<p>Use verbos curtos e informações objetivas. Mostre o próximo passo de forma explícita. Evite jargão técnico quando o contexto público pedir leitura rápida.</p>")),
    ].join(""),
  },

  "guidelines/motion.html": {
    hero: hero({ category: "Guidelines", title: "Motion", description: "Usar motion para orientar, nunca para distrair." }),
    body: [
      section("Use cases", "Motion", simpleCards([
        { html: "<h3>Productive</h3><p>Hover, pressed, menus, filtros e loading.</p>" },
        { html: "<h3>Expressive</h3><p>Hero, expansão importante e transições relevantes.</p>" },
        { html: "<h3>Reduced motion</h3><p>Sempre oferecer alternativa discreta.</p>" },
      ])),
    ].join(""),
  },

  "guidelines/dark-light.html": {
    hero: hero({ category: "Guidelines", title: "Dark / Light", description: "A mudança é apenas de superfície e contraste, não de identidade." }),
    body: [
      section("Rules", "Theme", doDont(
        "<p>Mantém a mesma tipografia, radius, spacing e accent.</p>",
        "<p>Light não é Airbnb e dark não é dashboard sci-fi.</p>"
      )),
    ].join(""),
  },

  "guidelines/admin-vs-public.html": {
    hero: hero({ category: "Guidelines", title: "Admin vs Public", description: "Mesma identidade com densidades diferentes para o contexto." }),
    body: [
      section("Comparison", "Usage", `
        <div class="comparison-grid">
          <div class="comparison-card"><h3>Admin</h3><p>Mais denso, orientado à produtividade e à decisão rápida.</p></div>
          <div class="comparison-card"><h3>Public</h3><p>Mais imagem, mais respiro e leitura mais editorial.</p></div>
        </div>
      `),
    ].join(""),
  },

  "resources/tokens.html": {
    hero: hero({ category: "Resources", title: "Tokens", description: "Todos os tokens oficiais em um só lugar, com valor dark e light." }),
    body: [
      section("Color tokens", "Copyable", tokenTable([
        { token: "--color-background-canvas", dark: "#090909", light: "#F5F0E8", usage: "Canvas principal." },
        { token: "--color-background-surface", dark: "#111214", light: "#FFFDF8", usage: "Card base." },
        { token: "--color-accent-primary", dark: "#D4FB00", light: "#D4FB00", usage: "CTA principal." },
        { token: "--color-text-primary", dark: "#F5F0E8", light: "#171717", usage: "Texto principal." },
      ])),
      section("Spacing and radius", "Reference", codeBlock(`space.4 = 16px
radius.md = 8px
radius.lg = 16px
touch target = 44px`, "Token quick reference")),
    ].join(""),
  },

  "resources/react-native.html": {
    hero: hero({ category: "Resources", title: "React Native", description: "Exemplo de consumo dos tokens em Expo e React Native." }),
    body: [
      section("Example", "Usage", codeBlock(`import { tokens } from "@/design-system";

<View
  style={{
    backgroundColor: tokens.colors.background.surface,
    borderRadius: tokens.radius.lg,
    padding: tokens.spacing[4],
  }}
/>`, "React Native")),
    ].join(""),
  },

  "resources/css.html": {
    hero: hero({ category: "Resources", title: "CSS", description: "Exemplo de uso dos tokens em CSS e documentação estática." }),
    body: [
      section("Example", "Usage", codeBlock(`.card {
  background: var(--color-background-surface);
  color: var(--color-text-primary);
  border-radius: var(--radius-lg);
  padding: var(--space-4);
}`, "CSS")),
    ].join(""),
  },

  "resources/migration.html": {
    hero: hero({ category: "Resources", title: "Migration", description: "Como migrar admin e front gradualmente para o design system." }),
    body: [
      section("Migration path", "Guidance", simpleCards([
        { html: "<h3>1. Tokens</h3><p>Substituir valores hardcoded por variáveis.</p>" },
        { html: "<h3>2. Components</h3><p>Trocar botões, inputs, cards e badges.</p>" },
        { html: "<h3>3. Patterns</h3><p>Aplicar filtros, tabelas e shells oficiais.</p>" },
        { html: "<h3>4. Pages</h3><p>Refinar home, detalhe e coleções com o sistema novo.</p>" },
      ])),
    ].join(""),
  },
};

module.exports = {
  nav,
  pageData,
};
