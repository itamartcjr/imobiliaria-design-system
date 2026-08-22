const { codeBlock, callout, doDont, hero, pageArticle, previewDevice, previewDeviceRow, section, simpleCards, tokenTable, brandSwatches } = require("./site-renderers");

const groups = [
  ["Getting started", "home", [["Home", "index.html"]]],
  ["Foundations", "foundations", [["Principles","foundations/principles.html"],["Colors","foundations/colors.html"],["Typography","foundations/typography.html"],["Spacing","foundations/spacing.html"],["Radius","foundations/radius.html"],["Grid","foundations/grid.html"],["Motion","foundations/motion.html"],["Dark / Light","foundations/dark-light.html"]]],
  ["Components", "components", [["Button","components/button.html"],["Input","components/input.html"],["Search","components/search.html"],["Card","components/card.html"],["Property Card","components/property-card.html"],["Badge / Status","components/badge-status.html"],["Table / Data List","components/table-datalist.html"],["Sidebar / Navigation","components/sidebar-navigation.html"],["Modal / Sheet","components/modal-sheet.html"],["Toast","components/toast.html"],["Skeleton","components/skeleton.html"],["Empty State","components/empty-state.html"]]],
  ["Patterns", "patterns", [["Filters","patterns/filters.html"],["Forms","patterns/forms.html"],["Admin Collection","patterns/admin-collection.html"],["Property Search","patterns/property-search.html"],["Property Detail","patterns/property-detail.html"]]],
  ["Guidelines", "guidelines", [["Responsive","guidelines/responsive.html"],["Accessibility","guidelines/accessibility.html"],["Writing","guidelines/writing.html"],["Motion","guidelines/motion.html"],["Dark / Light","guidelines/dark-light.html"],["Admin vs Public","guidelines/admin-vs-public.html"]]],
  ["Resources", "resources", [["Tokens","resources/tokens.html"],["React Native","resources/react-native.html"],["CSS","resources/css.html"],["Migration","resources/migration.html"]]],
];
const nav = groups.map(([title,key,items]) => ({ title, items: items.map(([label,href]) => ({ key, label, href })) }));

function makePage(title, category, navKey, description, body = [], extra = "") {
  return { title, category, nav: navKey, type: category, description, hero: hero({ title, category, description }, extra), body: body.join("") };
}
const pageData = {};
function add(slug, ...args) { pageData[slug] = makePage(...args); }

add("index.html", "Imobiliaria Design System", "Getting started", "home",
  "Sistema admin-first: identidade do imobiliaria-admin, arquitetura de interação Carbon e referências de marketplace restritas ao site público.",
  [section("Direção do sistema", "Decision", simpleCards([
    { html: "<h3>1 · Admin</h3><p>Paleta, Manrope, densidade, radius e linguagem visual partem do produto existente.</p>" },
    { html: "<h3>2 · Carbon</h3><p>Controles, tabelas, side navigation, estados, foco, overlays e motion produtivo.</p>" },
    { html: "<h3>3 · Public</h3><p>Airbnb e outras referências entram apenas em descoberta, cards, galeria e detalhe de imóvel.</p>" },
  ])), section("Tokens principais", "Admin source of truth", `${brandSwatches()}<div class="pill-row" style="margin-top:16px"><span class="pill">Manrope</span><span class="pill">Red accent</span><span class="pill">2–8px radius</span><span class="pill">14/20 body</span></div>`)],
  callout("Hierarquia oficial", "Admin define identidade. Carbon define a mecânica do admin. Front/Airbnb ficam na experiência pública."));

add("foundations/principles.html", "Principles", "Foundations", "foundations", "Identidade administrativa própria, comportamento previsível inspirado em Carbon e isolamento claro da linguagem pública.", [section("Hierarquia de referências", "Decision", doDont("<p><strong>Admin →</strong> marca, contraste, densidade, tipografia e radius.</p><p><strong>Carbon →</strong> anatomia, estados, foco, tabelas, navegação e motion.</p><p><strong>Public →</strong> imagem, descoberta, galeria e composição editorial.</p>", "<p>Não transformar o admin em Airbnb. Não importar a identidade IBM. Não criar uma terceira linguagem visual.</p>"))]);

add("foundations/colors.html", "Colors", "Foundations", "foundations", "A paleta principal volta aos valores do imobiliaria-admin; o light é neutro e funcional.", [
  section("Color tokens", "Admin first", tokenTable([
    { token:"background.canvas", dark:"#272727", light:"#F4F4F4", usage:"Canvas principal." }, { token:"background.surface", dark:"#2C2C2C", light:"#FFFFFF", usage:"Superfície base." },
    { token:"text.primary", dark:"#FFFFFF", light:"#161616", usage:"Texto principal." }, { token:"border.default", dark:"rgba(255,255,255,.12)", light:"#C6C6C6", usage:"Borda padrão." },
    { token:"accent.primary", dark:"#DB0423", light:"#DB0423", usage:"Marca e ação primária." }, { token:"focus.ring", dark:"#78A9FF", light:"#0F62FE", usage:"Foco acessível; referência funcional Carbon." },
    { token:"status.danger", dark:"#FF4D61", light:"#DA1E28", usage:"Erro e destruição; separado da marca." },
  ])), section("Accent usage", "Rule", doDont("<p>Vermelho no CTA principal; foco azul somente como sinal de acessibilidade/interação.</p>", "<p>Não usar lime. Não confundir accent com danger.</p>"))
]);

add("foundations/typography.html", "Typography", "Foundations", "foundations", "Manrope e escala compacta do admin como padrão; tamanhos editoriais ficam separados para o site público.", [section("Product scale", "Admin", simpleCards([
  { html:"<p class='type-demo type-demo--display'>Display</p><p>30 / 36 · bold</p>" }, { html:"<p class='type-demo type-demo--h1'>Heading 1</p><p>22 / 29 · bold</p>" },
  { html:"<p class='type-demo type-demo--h2'>Heading 2</p><p>18 / 25 · bold</p>" }, { html:"<p class='type-demo type-demo--body'>Body md</p><p>14 / 20 · regular</p>" },
])), section("Public scale", "Isolated", "<p><code>site-display</code> e <code>site-heading-1</code> existem somente para páginas públicas.</p>")]);

add("foundations/spacing.html", "Spacing", "Foundations", "foundations", "Escala compacta de 4px alinhada ao admin e adequada a interfaces de dados.", [section("Space scale", "Tokens", tokenTable([{token:"space.1",dark:"4",light:"4",usage:"Micro gap."},{token:"space.2",dark:"8",light:"8",usage:"Ícone/texto."},{token:"space.3",dark:"12",light:"12",usage:"Controles densos."},{token:"space.4",dark:"16",light:"16",usage:"Padding padrão."},{token:"space.6",dark:"24",light:"24",usage:"Seções."},{token:"space.9",dark:"48",light:"48",usage:"Grandes separações."}]))]);
add("foundations/radius.html", "Radius", "Foundations", "foundations", "Geometria contida: 2, 4, 6 e 8px como no admin; pill é exceção.", [section("Radius scale", "Admin tokens", tokenTable([{token:"radius.none",dark:"0",light:"0",usage:"Tabelas/divisores."},{token:"radius.sm",dark:"2",light:"2",usage:"Navegação."},{token:"radius.md",dark:"4",light:"4",usage:"Inputs/botões."},{token:"radius.lg",dark:"6",light:"6",usage:"Cards/painéis."},{token:"radius.xl",dark:"8",light:"8",usage:"Overlays."},{token:"radius.pill",dark:"999",light:"999",usage:"Tags e badges; não é padrão de botão."}]))]);
add("foundations/grid.html", "Grid", "Foundations", "foundations", "Breakpoints compartilhados; admin prioriza produtividade e public prioriza mídia.", [section("Breakpoints", "Layout", tokenTable([{token:"mobile",dark:"0",light:"0",usage:"Até 767px."},{token:"tablet",dark:"768",light:"768",usage:"Tablet."},{token:"desktop",dark:"1200",light:"1200",usage:"Desktop produtivo."},{token:"largeDesktop",dark:"1440",light:"1440",usage:"Coleções e mídia ampla."}]))]);
add("foundations/motion.html", "Motion", "Foundations", "foundations", "Motion produtivo de Carbon é o padrão no admin; expressivo fica para casos públicos específicos.", [section("Productive motion", "Carbon", tokenTable([{token:"duration.fast",dark:"70ms",light:"70ms",usage:"Hover/pressed."},{token:"duration.normal",dark:"160ms",light:"160ms",usage:"Menus/feedback."},{token:"duration.slow",dark:"240ms",light:"240ms",usage:"Painéis/modal."}]))]);
add("foundations/dark-light.html", "Dark / Light", "Foundations", "foundations", "Dark preserva a identidade do admin; light é derivação neutra, não uma linguagem Airbnb.", [section("Theme matrix", "Rule", previewDeviceRow([previewDevice("Admin dark","mobile","<div class='theme-demo theme-demo--dark'><strong>#272727</strong><p>Expressão principal.</p></div>"),previewDevice("Neutral light","mobile","<div class='theme-demo theme-demo--light'><strong>#F4F4F4</strong><p>Derivação funcional.</p></div>")]))]);

add("components/button.html", "Button", "Components", "components", "Botões compactos e pouco arredondados, com vermelho apenas na ação primária.", [section("Variants", "Carbon-like anatomy", "<div class='button-samples'><button class='primary-button'>Primary</button><button class='secondary-button'>Secondary</button><button class='ghost-button'>Ghost</button><button class='danger-button'>Danger</button></div>")]);
add("components/input.html", "Input", "Components", "components", "Inputs compactos, labels claras, borda discreta e foco visível.", [section("Preview", "States", "<div class='form-grid'><label class='field'><span>Nome</span><input placeholder='Nome do imóvel'></label><label class='field'><span>Busca</span><input type='search' placeholder='Código, bairro ou proprietário'></label></div>")]);
add("components/search.html", "Search", "Components", "components", "Busca de produto compacta no admin; busca pública pode ser mais expressiva.", [section("Admin search", "Product", "<div class='search-demo'><input type='search' placeholder='Buscar em coleções' data-doc-search><div class='search-results' data-search-results-demo></div></div>")]);
add("components/card.html", "Card", "Components", "components", "Cards agrupam informação; não substituem tabelas e listas como padrão administrativo.", [section("Family", "Product", simpleCards([{html:"<h3>Base</h3><p>Surface e borda discreta.</p>"},{html:"<h3>Selectable</h3><p>Estado explícito.</p>"},{html:"<h3>Expandable</h3><p>Progressive disclosure.</p>"}]))]);
add("components/property-card.html", "Property Card", "Components", "components", "Componente prioritariamente público; aqui referências de marketplace/Airbnb são permitidas.", [section("Boundary", "Site only", doDont("<p>Imagem, favorito, galeria e leitura rápida no public.</p>","<p>Não levar essa linguagem para CRM, cadastros e coleções do admin.</p>"))]);
add("components/badge-status.html", "Badge / Status", "Components", "components", "Badges compactos e semânticos; pill é apropriado aqui.", [section("States", "Semantic", "<div class='pill-row'><span class='badge badge--accent'>Ativo</span><span class='badge badge--success'>Concluído</span><span class='badge badge--warning'>Pendente</span><span class='badge badge--danger'>Perdido</span></div>")]);
add("components/table-datalist.html", "Table / Data List", "Components", "components", "Data table é componente central do admin, com densidade e comportamento inspirados em Carbon.", [section("Desktop", "Admin core", "<div class='table-wrap'><table class='data-table'><thead><tr><th>Código</th><th>Imóvel</th><th>Bairro</th><th>Valor</th></tr></thead><tbody><tr><td>AP-001</td><td>Apartamento</td><td>Moema</td><td>R$ 1.250.000</td></tr></tbody></table></div>")]);
add("components/sidebar-navigation.html", "Sidebar / Navigation", "Components", "components", "Side navigation administrativa com densidade, seleção e hierarquia próximas de Carbon.", [section("Shell", "Admin core", "<div class='shell-preview'><aside class='shell-preview__sidebar'><a class='shell-preview__item is-active'>Dashboard</a><a class='shell-preview__item'>Imóveis</a><a class='shell-preview__item'>Leads</a></aside><div class='shell-preview__content'><div class='shell-preview__panel'></div></div></div>")]);
add("components/modal-sheet.html", "Modal / Sheet", "Components", "components", "Progressive disclosure com modal e side panel; radius e motion contidos.");
add("components/toast.html", "Toast", "Components", "components", "Feedback não bloqueante e semântico.");
add("components/skeleton.html", "Skeleton", "Components", "components", "Loading discreto para preservar contexto e estrutura.");
add("components/empty-state.html", "Empty State", "Components", "components", "Estado vazio objetivo, com próximo passo explícito.");

add("patterns/filters.html", "Filters", "Patterns", "patterns", "Toolbar e filtros produtivos no admin; chips apenas para filtros aplicados.");
add("patterns/forms.html", "Forms", "Patterns", "patterns", "Formulários administrativos seguem labels, seções, validação e progressive disclosure previsíveis.");
add("patterns/admin-collection.html", "Admin Collection", "Patterns", "patterns", "Padrão central do produto: toolbar, filtros, tabela/lista, paginação e ações.");
add("patterns/property-search.html", "Property Search", "Patterns", "patterns", "Padrão público de descoberta; aqui podem entrar referências como Airbnb sem alterar o admin.", [section("Public", "Marketplace boundary", "<p>Imagem, localização, filtros, favoritos e mapa pertencem ao contexto público.</p>")]);
add("patterns/property-detail.html", "Property Detail", "Patterns", "patterns", "Detalhe público orientado a galeria, atributos, valor, localização e contato.");

add("guidelines/responsive.html", "Responsive", "Guidelines", "guidelines", "Admin adapta densidade e navegação; public adapta composição e mídia.");
add("guidelines/accessibility.html", "Accessibility", "Guidelines", "guidelines", "Contraste, keyboard, foco e estados são requisitos do sistema, com Carbon como referência funcional.", [section("Checklist", "A11y", "<ul class='checklist'><li>Foco visível.</li><li>Labels e erros associados.</li><li>Sem dependência exclusiva de cor.</li><li>Reduced motion.</li></ul>")]);
add("guidelines/writing.html", "Writing", "Guidelines", "guidelines", "Texto administrativo direto e operacional; texto público pode ser mais editorial.");
add("guidelines/motion.html", "Motion", "Guidelines", "guidelines", "Productive motion por padrão no admin; expressive motion somente quando conteúdo público justificar.");
add("guidelines/dark-light.html", "Dark / Light", "Guidelines", "guidelines", "Tema muda superfície e contraste; não muda a hierarquia de referências.", [section("Rules", "Theme", doDont("<p>Dark mantém #272727 e vermelho do admin. Light é neutro.</p>","<p>Light não é Airbnb e dark não é dashboard sci-fi.</p>"))]);
add("guidelines/admin-vs-public.html", "Admin vs Public", "Guidelines", "guidelines", "Separação explícita evita que referências do site dominem o produto administrativo.", [section("Comparison", "Boundary", "<div class='comparison-grid'><div class='comparison-card'><h3>Admin</h3><p><strong>Fonte:</strong> imobiliaria-admin + Carbon.</p><p>Denso, produtivo, flat, radius 2–8.</p></div><div class='comparison-card comparison-card--public'><h3>Public</h3><p><strong>Fonte:</strong> imobiliaria-front + referências de marketplace/Airbnb.</p><p>Imagem, galeria, favoritos e descoberta.</p></div></div>")]);

add("resources/tokens.html", "Tokens", "Resources", "resources", "Tokens oficiais alinhados ao admin, com extensões funcionais Carbon e tokens públicos isolados.", [section("Core", "Reference", tokenTable([{token:"--background-canvas",dark:"#272727",light:"#F4F4F4",usage:"Canvas."},{token:"--accent-primary",dark:"#DB0423",light:"#DB0423",usage:"Ação primária."},{token:"--focus-ring",dark:"#78A9FF",light:"#0F62FE",usage:"Foco."}])),section("Quick reference", "Admin", codeBlock("body-md = 14/20\nradius.md = 4px\nradius.lg = 6px\ntouch target = 44px", "Admin tokens"))]);
add("resources/react-native.html", "React Native", "Resources", "resources", "Consumo dos tokens no admin Expo/React Native.");
add("resources/css.html", "CSS", "Resources", "resources", "Consumo dos tokens em web e documentação.");
add("resources/migration.html", "Migration", "Resources", "resources", "Migrar preservando primeiro a identidade do admin e depois padronizando interação com Carbon.");

module.exports = { nav, pageData };
