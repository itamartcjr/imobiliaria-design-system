const componentFeedbackDataDefs = [
  {slug:"components/accordion.html",title:"Accordion",kind:"content",description:"Progressive disclosure vertical para conteúdo secundário e FAQs, não para fluxo obrigatório.",variants:["Single","Multiple open"],sizes:["40–48px header"]},
  {slug:"components/progress.html",title:"Progress",kind:"progress",description:"Progresso determinado com valor e contexto quando duração não é instantânea.",variants:["Linear","Steps"],sizes:["4px bar","Inline"]},
  {slug:"components/spinner.html",title:"Spinner",kind:"loading",description:"Loading indeterminado curto; deve preservar contexto e evitar substituir a tela inteira.",variants:["Inline","Button","Section"],sizes:["16","20","24"]},
  {slug:"components/skeleton.html",title:"Skeleton",kind:"loading",description:"Loading estrutural para conteúdo previsível, preservando layout e reduzindo salto visual.",variants:["Text","Media","Card","Table row"],sizes:["Matches content"]},
  {slug:"components/empty-state.html",title:"Empty State",kind:"content",description:"Explica por que não há conteúdo e oferece próximo passo quando existe ação útil.",variants:["First use","No results","Cleared state"],sizes:["Content driven"]},
  {slug:"components/alert.html",title:"Alert",kind:"feedback",description:"Mensagem inline persistente com status, title e ação opcional.",variants:["Info","Success","Warning","Error"],sizes:["Content driven"]},
  {slug:"components/notification.html",title:"Notification",kind:"feedback",description:"Mensagem de sistema mais rica que toast; pode persistir até ser resolvida.",variants:["Inline","Global","Actionable"],sizes:["Content driven"]},
  {slug:"components/toast.html",title:"Toast",kind:"feedback",description:"Feedback não bloqueante, breve e semântico após uma ação.",variants:["Success","Info","Warning","Error"],sizes:["320–420px"]},
  {slug:"components/dialog.html",title:"Dialog",kind:"overlay",description:"Interrupção modal para decisão, confirmação ou tarefa curta que exige foco.",variants:["Confirm","Form","Destructive"],sizes:["sm","md","lg"]},
  {slug:"components/table-datalist.html",title:"Data Table",kind:"data",description:"Componente central do admin para dados comparáveis, sorting, selection e bulk actions.",variants:["Dense","Selectable","Expandable","Sticky header"],sizes:["36–40px row"],states:["Default","Hover","Selected","Sorted","Loading","Empty","Error"]},
  {slug:"components/table-toolbar.html",title:"Table Toolbar",kind:"data",description:"Search, filters, view options, bulk actions e result count no mesmo contexto da tabela.",variants:["Default","Bulk selection","Compact"],sizes:["40–48px"]},
  {slug:"components/filter.html",title:"Filter",kind:"menu",description:"Refina conjuntos de dados; applied filters ficam visíveis e removíveis.",variants:["Single","Multi-select","Range","Applied chip"],sizes:["40px control"]},
  {slug:"components/sort.html",title:"Sort",kind:"menu",description:"Ordenação explícita, estável e visível para listas e tabelas.",variants:["Single criterion","Multi-column table sort"],sizes:["40px control"]},
];

module.exports = { componentFeedbackDataDefs };
