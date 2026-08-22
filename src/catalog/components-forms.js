const componentFormDefs = [
  {slug:"components/text-field.html",title:"Text Field",kind:"field",description:"Entrada de texto com label persistente, helper e validation state.",variants:["Default","With prefix/suffix","Read-only"],sizes:["40px","44px touch"],states:["Default","Hover","Focus","Filled","Error","Disabled","Read-only"]},
  {slug:"components/textarea.html",title:"Textarea",kind:"textarea",description:"Texto multilinha com altura mínima, resize controlado e contagem quando necessário.",variants:["Default","Auto-grow","With counter"],sizes:["112px min","Auto"]},
  {slug:"components/search.html",title:"Search Field",kind:"field",description:"Busca administrativa compacta; a versão pública pode ter composição mais expressiva.",variants:["Admin","Public","With suggestions"],sizes:["40px admin","44px public"]},
  {slug:"components/select.html",title:"Select",kind:"select",description:"Escolha de uma opção em lista estável e curta/média.",variants:["Default","Grouped","Read-only"],sizes:["40px","44px touch"]},
  {slug:"components/combobox.html",title:"Combobox",kind:"select",description:"Busca + seleção quando o conjunto de opções é grande ou dinâmico.",variants:["Single","Multi-select","Async"],sizes:["40px","44px touch"],states:["Default","Focus","Open","Loading","Empty","Error","Disabled"]},
  {slug:"components/checkbox.html",title:"Checkbox",kind:"choice",description:"Seleção independente de zero, uma ou várias opções.",variants:["Unchecked","Checked","Indeterminate"],sizes:["20px control / 44px hit"]},
  {slug:"components/radio.html",title:"Radio",kind:"choice",description:"Escolha única dentro de um conjunto mutuamente exclusivo.",variants:["Unchecked","Checked"],sizes:["20px control / 44px hit"]},
  {slug:"components/toggle.html",title:"Toggle",kind:"choice",description:"Liga/desliga uma configuração com efeito imediato e label explícita.",variants:["Off","On"],sizes:["Default"],states:["Off","On","Focus","Disabled"]},
  {slug:"components/date-picker.html",title:"Date Picker",kind:"field",description:"Entrada de data com teclado e calendário; formato e timezone precisam ser explícitos.",variants:["Single date","Date range"],sizes:["40px field"]},
  {slug:"components/number-input.html",title:"Number Input",kind:"field",description:"Entrada numérica com unidade, min/max e parsing previsível.",variants:["Plain","Currency","Unit"],sizes:["40px"]},
  {slug:"components/file-upload.html",title:"File Upload",kind:"field",description:"Upload com tipos aceitos, progresso, erro e lista de arquivos clara.",variants:["Button","Dropzone","Multiple"],sizes:["Content driven"],states:["Idle","Drag over","Uploading","Success","Error","Disabled"]},
  {slug:"components/form-group.html",title:"Form Group",kind:"content",description:"Agrupa campos por tarefa com title, description e validation summary quando necessário.",variants:["Section","Fieldset","Inline group"],sizes:["Content driven"]},
  {slug:"components/form-validation.html",title:"Form Validation",kind:"field",description:"Padrão de erro, warning e success para campos e formulários, preservando o valor digitado e oferecendo recuperação.",variants:["Field error","Section summary","Async validation"],sizes:["Inline","Summary"],states:["Valid","Invalid","Warning","Validating","Disabled"]},
];

module.exports = { componentFormDefs };
