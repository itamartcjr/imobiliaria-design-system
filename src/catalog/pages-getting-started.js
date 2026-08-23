function registerGettingStarted(ctx) {
  const { add, section, simpleCards, specGrid, brandSwatches, chips, doDont, callout, tokenTable, list, externalLinks, sources, previewDevice, previewDeviceRow, codeBlock } = ctx;
// Getting started
add("index.html", "Imobiliaria Design System", "Getting started",
  "Documentação de produto completa: foundations, catálogo de componentes, domínio imobiliário, patterns e testing. A identidade vem do admin; Carbon orienta interação; marketplace fica no público.", [
  section("Direction", "Source hierarchy", simpleCards([
    { html:"<h3>1 · imobiliaria-admin</h3><p>Fonte de identidade: Manrope, dark canvas, vermelho, densidade, radius e linguagem operacional.</p>" },
    { html:"<h3>2 · Carbon</h3><p>Fonte funcional para interação administrativa: controls, navigation, data tables, focus, feedback, overlays e productive motion.</p>" },
    { html:"<h3>3 · Public / marketplace</h3><p>Airbnb e referências de marketplace entram somente em descoberta, mídia, galeria e detalhe público.</p>" },
  ])),
  section("Library coverage", "Figma-style completeness", specGrid([
    {label:"Foundations",value:"15 pages",note:"Tokens, grids, type, motion e accessibility."},
    {label:"Core components",value:"51 pages",note:"Actions, forms, navigation, feedback e data."},
    {label:"Real estate",value:"25 pages",note:"Peças específicas do produto imobiliário."},
    {label:"Patterns + testing + guidelines",value:"23 pages",note:"Fluxos completos, edge cases, stress tests e regras de uso."},
  ])),
  section("Core tokens", "Admin source of truth", `${brandSwatches()}${chips(["Manrope", "14/20 body", "2–8px radius", "44px touch target", "4px spacing base"])}`),
  section("Documentation shell", "Layout and navigation", doDont("<p>Canvas sem padding global; side navigation independente e colapsável; referências fechadas sob demanda; conteúdo interno possui o próprio spacing.</p>", "<p>Não transferir padding global para hero/section nem criar novos níveis de menu para cada rota.</p>")),
  section("Definition of done", "Documentation first", doDont("<p>Construir anatomy, variants, sizes, states, behavior, content, accessibility, testing e examples antes de considerar o componente pronto.</p>", "<p>Não aceitar páginas com apenas um preview bonito e nenhuma regra de comportamento.</p>")),
  section("Synchronization", "Required maintenance rule", doDont("<p>Se implementação, tokens, spacing, navegação, estados ou comportamento mudarem, atualizar a documentação relacionada no mesmo commit.</p>", "<p>Não manter texto antigo descrevendo uma implementação que já foi alterada.</p>")),
], callout("Coverage principle", "A referência grande de Figma define o nível de cobertura esperado; não define a identidade visual do produto."), ["design system", "coverage", "Figma", "Carbon", "admin", "public"]);

add("getting-started/coverage.html", "Coverage", "Getting started", "Mapa do que precisa existir no HTML para que a biblioteca seja útil como documentação de produto e não apenas vitrine visual.", [
  section("Definition of complete", "Catalog contract", tokenTable([
    {token:"Foundations",dark:"15 docs",light:"15 docs",usage:"Cor, tipografia, spacing, sizing, radius, border, shadow, opacity, grid, breakpoint, icon, motion, accessibility e themes."},
    {token:"Components",dark:"51 docs",light:"51 docs",usage:"Cada componente com anatomy, variants, sizes, states, behavior, a11y e testing."},
    {token:"Real estate",dark:"25 docs",light:"25 docs",usage:"Componentes específicos para imóvel, lead, cliente, corretor e operação."},
    {token:"Patterns",dark:"12 docs",light:"12 docs",usage:"Fluxos completos do admin e do site público."},
    {token:"Testing",dark:"5 docs",light:"5 docs",usage:"Stress de conteúdo, responsividade, a11y, imagens e dados."},
  ])),
  section("Per-component contract", "Required sections", chips(["Overview", "Anatomy", "Variants", "Sizes", "States", "Behavior", "Content", "Accessibility", "Testing", "Do / Don't"])),
  section("Reference boundary", "Design decision", doDont("<p>Usar a biblioteca de Figma como referência de amplitude, variantes e disciplina de organização.</p>", "<p>Copiar glassmorphism, cores, tipografia ou linguagem visual externa para o admin.</p>")),
  section("Maintenance rule", "Documentation synchronization", doDont("<p>Alterar a documentação junto com qualquer mudança que invalide uma regra já publicada.</p>", "<p>Separar mudança visual/comportamental da atualização da documentação correspondente.</p>")),
]);

add("getting-started/sources.html", "Documentation sources", "Getting started", "Referências fornecidas para foundations, components e testing, preservadas por nome e abertas sob demanda.", [
  section("Typography", "References", externalLinks(sources.typography)),
  section("Color palette plugins", "References", externalLinks(sources.colorPlugins)),
  section("Accessibility plugins", "References", externalLinks(sources.accessibilityPlugins)),
  section("Grids & spacers", "References", externalLinks(sources.grids)),
  section("Component references", "References", externalLinks(sources.components)),
  section("Testing plugins", "References", externalLinks(sources.testingPlugins)),
  section("Figma coverage reference", "References", externalLinks(sources.figmaCoverage)),
], callout("How to use these links", "As fontes orientam método, escala, acessibilidade, grids e testing. A decisão visual final continua subordinada ao imobiliaria-admin e ao Carbon no contexto administrativo."), ["sources", "Figma", "typography", "accessibility", "testing", "components"]);

}

module.exports = { registerGettingStarted };
