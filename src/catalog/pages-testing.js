function registerTesting(ctx) {
  const { add, section, simpleCards, specGrid, brandSwatches, chips, doDont, callout, tokenTable, list, externalLinks, sources, previewDevice, previewDeviceRow, codeBlock } = ctx;

add("testing/component-matrix.html", "Component Test Matrix", "Testing", "Checklist mínimo de teste para cada componente antes de considerá-lo pronto.", [
  section("Matrix", "Testing reference", tokenTable([
    {token:"Content",dark:"short / long / empty",light:"short / long / empty",usage:"Reflow, truncation, wrapping."},
    {token:"State",dark:"default / hover / focus / active / disabled",light:"same",usage:"Visual + behavior."},
    {token:"System",dark:"loading / error / success",light:"same",usage:"When applicable."},
    {token:"Theme",dark:"dark",light:"light",usage:"Contrast and semantics."},
    {token:"Viewport",dark:"320 / 768 / 1200 / 1440",light:"same",usage:"Responsive."},
    {token:"Input",dark:"keyboard / pointer / touch",light:"same",usage:"Interaction."},
  ])),
  section("Rule", "Definition of done", doDont("<p>Registrar falhas encontradas pelo stress test e ajustar anatomy/tokens.</p>","<p>Testar somente o exemplo ideal desenhado no Figma.</p>")),
]);

add("testing/content-stress.html", "Content Stress", "Testing", "Testa componentes com conteúdo realista, extremo e inconsistente antes de estabilizar a API visual.", [
  section("Text cases", "Stress", simpleCards([
    {html:"<h3>Short</h3><p>AP-1</p>"},
    {html:"<h3>Long</h3><p>Apartamento cobertura duplex com terraço gourmet e vista permanente em endereço extenso</p>"},
    {html:"<h3>Missing</h3><p>—</p>"},
    {html:"<h3>Numeric</h3><p>R$ 12.987.654,32</p>"},
  ])),
  section("Tools", "References", externalLinks(sources.testingPlugins.filter(([name]) => ["Change Text","Content Reel","Data Populator","Faker"].includes(name)))),
]);

add("testing/accessibility.html", "Accessibility Testing", "Testing", "Passes manuais e ferramentas para contraste, keyboard, focus e simulação de percepção de cor.", [
  section("Manual pass", "Required", list(["Keyboard only: Tab, Shift+Tab, Enter, Space, Escape e arrows quando aplicável.","Zoom 200% sem perda de conteúdo/controle.","Focus nunca escondido por sticky header ou overlay.","Status possui texto/ícone além da cor.","Labels, errors e descriptions associados."])),
  section("Plugins", "References", externalLinks(sources.accessibilityPlugins)),
]);

add("testing/responsive.html", "Responsive Testing", "Testing", "Testa componentes e patterns nos pontos onde estrutura muda, não apenas em screenshots de devices populares.", [
  section("Widths", "Baseline", specGrid([{label:"320px",value:"small mobile",note:"Worst-case width."},{label:"768px",value:"tablet breakpoint",note:"Navigation/layout transition."},{label:"1200px",value:"desktop breakpoint",note:"Full admin shell."},{label:"1440px",value:"wide desktop",note:"Dense collections."}])),
  section("Checks", "Behavior", list(["No horizontal scroll from content.","Touch targets remain 44px.","Tables switch strategy intentionally.","Drawers/sheets preserve close and focus behavior."])),
]);

add("testing/images-data.html", "Images & Data", "Testing", "Testa ratios, arquivos, números e dados populados para detectar layouts frágeis.", [
  section("Media cases", "Stress", list(["Portrait, landscape, square and very wide images.","Missing image and failed load.","Very high resolution / lazy loading.","One image versus many images.","Long filename and multiple uploads."])),
  section("Data cases", "Real estate", list(["Preço alto e preço sob consulta.","Endereço longo.","Lead sem telefone ou email.","Imóvel sem quartos/vagas aplicáveis.","Tabela com 0, 1, 50 e centenas de registros."])),
]);
}

module.exports = { registerTesting };
