const { codeBlock, callout, doDont, hero, previewDevice, previewDeviceRow, section, simpleCards, tokenTable, brandSwatches, escapeHtml } = require("./site-renderers");

const { sources } = require("./catalog/sources");
const { groups } = require("./catalog/navigation");
const { componentDefs, realEstateDefs, patternDefs } = require("./catalog/definitions");
const { registerStaticPages } = require("./catalog/static-pages");

const nav = groups.map(([title, items]) => ({ title, items: items.map(([label, href]) => ({ key: href, label, href })) }));
const pageData = {};

function makePage(slug, title, category, description, body = [], extra = "", tags = []) {
  return { title, category, nav: slug, type: category, description, hero: hero({ title, category, description }, extra), body: body.join(""), tags };
}
function add(slug, title, category, description, body = [], extra = "", tags = []) { pageData[slug] = makePage(slug, title, category, description, body, extra, tags); }
function list(items) { return `<ul class="checklist">${items.map((item) => `<li>${item}</li>`).join("")}</ul>`; }
function chips(items) { return `<div class="pill-row">${items.map((item) => `<span class="pill">${escapeHtml(item)}</span>`).join("")}</div>`; }
function specGrid(items) { return `<div class="spec-grid">${items.map((item) => `<article class="spec-item"><span>${escapeHtml(item.label)}</span><strong>${escapeHtml(item.value)}</strong><p>${escapeHtml(item.note || "")}</p></article>`).join("")}</div>`; }
function externalLinks(items) { return `<div class="reference-list">${items.map(([label, href]) => `<a class="reference-link" href="${href}" target="_blank" rel="noreferrer"><span>${escapeHtml(label)}</span><small>${escapeHtml(href.replace(/^https?:\/\//, ""))}</small></a>`).join("")}</div>`; }
function stateMatrix(states) { return `<div class="state-matrix">${states.map((state) => `<div class="state-cell"><span class="state-dot state-dot--${String(state).toLowerCase().replace(/[^a-z]+/g,"-")}"></span><strong>${escapeHtml(state)}</strong><small>Documentado e testável</small></div>`).join("")}</div>`; }
function sectionNav(items) { return `<nav class="on-this-page" aria-label="Nesta página"><strong>Nesta página</strong>${items.map((item) => `<a href="#${item.id}">${escapeHtml(item.label)}</a>`).join("")}</nav>`; }

const defaultStates = ["Default", "Hover", "Focus", "Active", "Disabled"];
const defaultTests = [
  "Texto curto e texto longo sem quebrar hierarquia.", "Conteúdo ausente sem gerar buracos ou controles órfãos.",
  "Keyboard focus visível e ordem de tabulação previsível.", "Dark e light com contraste adequado.",
  "320px, 768px, 1200px e 1440px sem overflow inesperado.", "Estados loading, error e disabled quando aplicáveis.",
];

function componentPreview(kind, title, context) {
  if (kind === "button") return `<div class="component-stage"><div class="button-samples"><button class="primary-button">Primary</button><button class="secondary-button">Secondary</button><button class="ghost-button">Ghost</button><button class="danger-button">Danger</button></div></div>`;
  if (kind === "icon") return `<div class="component-stage"><div class="icon-samples"><button class="icon-button" aria-label="Adicionar">＋</button><button class="icon-button" aria-label="Editar">✎</button><button class="icon-button" aria-label="Mais ações">•••</button></div></div>`;
  if (kind === "field") return `<div class="component-stage"><label class="field"><span>${escapeHtml(title)}</span><input placeholder="Digite um valor" /></label><p class="helper-text">Helper text e validação ficam associados ao campo.</p></div>`;
  if (kind === "textarea") return `<div class="component-stage"><label class="field"><span>Descrição</span><textarea placeholder="Descreva o imóvel"></textarea></label></div>`;
  if (kind === "choice") return `<div class="component-stage choice-stack"><label class="choice"><input type="checkbox" checked><span>Selecionado</span></label><label class="choice"><input type="checkbox"><span>Não selecionado</span></label><label class="choice"><input type="checkbox" disabled><span>Disabled</span></label></div>`;
  if (kind === "select") return `<div class="component-stage"><label class="field"><span>${escapeHtml(title)}</span><select><option>Selecione</option><option>Apartamento</option><option>Casa</option></select></label></div>`;
  if (kind === "nav") return `<div class="component-stage"><div class="mini-nav"><a class="is-active">Visão geral</a><a>Detalhes</a><a>Histórico</a><a>Documentos</a></div></div>`;
  if (kind === "menu") return `<div class="component-stage"><div class="menu-demo"><button class="menu-item">Editar</button><button class="menu-item">Duplicar</button><button class="menu-item">Arquivar</button><button class="menu-item menu-item--danger">Excluir</button></div></div>`;
  if (kind === "overlay") return `<div class="component-stage"><div class="overlay-demo"><div class="overlay-demo__surface"><p class="eyebrow">${escapeHtml(title)}</p><h3>Confirme a ação</h3><p>Conteúdo curto, ação principal e saída clara.</p><div class="button-samples"><button class="primary-button">Confirmar</button><button class="secondary-button">Cancelar</button></div></div></div></div>`;
  if (kind === "feedback") return `<div class="component-stage"><div class="toast-stack"><div class="toast toast--success"><strong>Sucesso</strong><p>A alteração foi salva.</p></div><div class="toast toast--info"><strong>Informação</strong><p>Há dados para revisar.</p></div><div class="toast toast--danger"><strong>Erro</strong><p>Não foi possível concluir.</p></div></div></div>`;
  if (kind === "loading") return `<div class="component-stage"><div class="skeleton-card"><div class="skeleton skeleton--hero"></div><div class="skeleton skeleton--line"></div><div class="skeleton skeleton--line short"></div></div></div>`;
  if (kind === "data") return `<div class="component-stage"><div class="table-wrap"><table class="data-table"><thead><tr><th>Código</th><th>Imóvel</th><th>Status</th><th>Valor</th></tr></thead><tbody><tr><td>AP-001</td><td>Apartamento Moema</td><td><span class="badge badge--accent">Ativo</span></td><td>R$ 1.250.000</td></tr><tr><td>CA-204</td><td>Casa Jardins</td><td><span class="badge badge--warning">Revisão</span></td><td>R$ 2.900.000</td></tr></tbody></table></div></div>`;
  if (kind === "progress") return `<div class="component-stage"><div class="progress-demo"><div class="progress-demo__bar"><span style="width:68%"></span></div><small>68% concluído</small></div></div>`;
  if (kind === "content") return `<div class="component-stage"><article class="card-demo"><p class="eyebrow">${escapeHtml(context)}</p><h3>${escapeHtml(title)}</h3><p>Conteúdo principal, metadata e ações alinhadas à densidade do produto.</p></article></div>`;
  if (kind === "public-property") return `<div class="component-stage component-stage--public"><article class="property-preview"><div class="property-preview__media"><span class="property-preview__badge">Destaque</span><button class="property-preview__favorite" aria-label="Favoritar">♡</button></div><div class="property-preview__body"><strong>R$ 1.250.000</strong><span>Apartamento · Moema</span><small>2 quartos · 2 vagas · 92 m²</small></div></article></div>`;
  if (kind === "metric") return `<div class="component-stage"><div class="metric-grid"><article class="metric-card"><span>Leads novos</span><strong>28</strong><small>+12% esta semana</small></article><article class="metric-card"><span>Imóveis ativos</span><strong>164</strong><small>7 em revisão</small></article></div></div>`;
  return `<div class="component-stage"><article class="card-demo"><p class="eyebrow">${escapeHtml(context)}</p><h3>${escapeHtml(title)}</h3><p>Specimen HTML documentado no catálogo.</p></article></div>`;
}

function componentDoc(def) {
  const context = def.context || "Admin";
  const states = def.states || defaultStates;
  const anatomy = def.anatomy || ["Container", "Label / content", "Interactive state", "Optional helper / action"];
  const variants = def.variants || ["Default", "Compact", "With icon / metadata"];
  const sizes = def.sizes || ["sm", "md", "lg"];
  const behavior = def.behavior || ["Mantém feedback imediato para hover, pressed e focus.", "Não muda layout de forma inesperada durante interação.", "Usa progressive disclosure quando há ações secundárias."];
  const a11y = def.a11y || ["Nome acessível claro.", "Focus ring azul independente da cor de marca.", "Não depender apenas de cor para comunicar estado.", "Área interativa mínima de 44px quando o controle é touch."];
  const tests = def.tests || defaultTests;
  const navItems = [{id:"overview",label:"Overview"},{id:"preview",label:"Preview"},{id:"anatomy",label:"Anatomy"},{id:"variants-sizes",label:"Variants & sizes"},{id:"states",label:"States"},{id:"behavior",label:"Behavior"},{id:"accessibility",label:"Accessibility"},{id:"testing",label:"Testing"},{id:"do-dont",label:"Do / Don't"}];
  add(def.slug, def.title, def.category || "Components", def.description, [
    section("Overview", "Usage", `${sectionNav(navItems)}<div class="doc-summary"><span class="context-badge context-badge--${context.toLowerCase().replace(/[^a-z]+/g,"-")}">${escapeHtml(context)}</span><p>${escapeHtml(def.description)}</p></div>`, "", "overview"),
    section("Live preview", "HTML specimen", componentPreview(def.kind, def.title, context), "", "preview"),
    section("Anatomy", "Structure", simpleCards(anatomy.map((item, index) => ({ html:`<span class="anatomy-index">${index + 1}</span><h3>${escapeHtml(item)}</h3><p>Responsabilidade explícita na composição do componente.</p>` }))), "", "anatomy"),
    section("Variants & sizes", "API surface", `${specGrid([{label:"Variants",value:variants.join(" · "),note:"Somente variantes com necessidade real."},{label:"Sizes",value:sizes.join(" · "),note:"Escala compacta do admin por padrão."},{label:"Context",value:context,note: context.toLowerCase().includes("public") ? "Marketplace permitido neste contexto." : "Admin-first; Carbon orienta interação."}])}`, "", "variants-sizes"),
    section("States", "Interaction", stateMatrix(states), "", "states"),
    section("Behavior", "Carbon-informed", list(behavior), "", "behavior"),
    section("Accessibility", "Required", list(a11y), "", "accessibility"),
    section("Testing", "Episode 4 discipline", list(tests), "", "testing"),
    section("Do / Don't", "Guidance", doDont(`<p>${escapeHtml(def.do || "Use o componente quando ele representar claramente esta função no produto.")}</p>`, `<p>${escapeHtml(def.dont || "Não use apenas por aparência nem misture linguagem pública dentro do admin.")}</p>`), "", "do-dont"),
  ], callout("Definition of done", "O componente só é considerado pronto quando anatomy, estados, acessibilidade, conteúdo extremo e responsividade estiverem documentados."), [def.title, def.kind, context, "component", "states", "accessibility"]);
}

function patternDoc(def) {
  add(def.slug, def.title, "Patterns", def.description, [
    section("Intent", "When to use", `<p>${escapeHtml(def.description)}</p>${chips(def.contexts || ["Desktop admin", "Responsive", "Keyboard"] )}`),
    section("Structure", "Composition", simpleCards((def.structure || ["Header / context", "Primary content", "Actions / state", "Feedback"]).map((item, index) => ({ html:`<span class="anatomy-index">${index+1}</span><h3>${escapeHtml(item)}</h3><p>Responsabilidade definida dentro do fluxo.</p>` })))),
    section("Sequence", "Behavior", list(def.sequence || ["Entrar com contexto e objetivo claros.", "Mostrar ação primária sem esconder ações essenciais.", "Persistir estado relevante ao navegar.", "Confirmar resultado ou erro no mesmo contexto."])),
    section("Responsive", "Adaptation", list(def.responsive || ["Preservar prioridade de ações em telas estreitas.", "Converter painel lateral em drawer/sheet quando necessário.", "Evitar tabelas ilegíveis: usar prioridades ou data list no mobile."])),
    section("Edge cases", "Resilience", list(def.edge || ["Empty", "Loading", "Error", "Permission denied", "Long content", "Offline / retry quando aplicável"])),
    section("Testing", "Definition of done", list(defaultTests)),
    section("Do / Don't", "Boundary", doDont(`<p>${escapeHtml(def.do || "Use o padrão para manter fluxos semelhantes consistentes.")}</p>`, `<p>${escapeHtml(def.dont || "Não invente uma estrutura nova quando este padrão já resolve o fluxo.")}</p>`)),
  ], callout("Pattern rule", def.public ? "Este padrão é público: referências de marketplace são permitidas sem alterar os componentes administrativos." : "Padrão administrativo: identidade do admin, comportamento inspirado em Carbon."), [def.title, "pattern", def.public ? "public" : "admin"]);
}

registerStaticPages({ add, section, simpleCards, specGrid, brandSwatches, chips, doDont, callout, tokenTable, list, externalLinks, sources, previewDevice, previewDeviceRow, codeBlock });
componentDefs.forEach(componentDoc);
realEstateDefs.forEach((def) => componentDoc({ ...def, category: "Real estate" }));
patternDefs.forEach(patternDoc);

module.exports = { nav, pageData };
