(function(){
const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)];
const e=s=>String(s??'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
const list=s=>String(s||'Default').split(/\s+·\s+/).map(x=>x.trim()).filter(Boolean);
const key=s=>String(s||'').toLowerCase();
const dis=s=>/disabled|inactive/.test(key(s))?' disabled':'';
const badge=v=>/danger|error|lost|cancel|reject|expired|inactive/.test(key(v))?'badge--danger':/warning|review|pending|draft|negotiat/.test(key(v))?'badge--warning':/success|active|won|signed|closed|accepted|confirmed/.test(key(v))?'badge--success':'badge--accent';
const btn=v=>/danger|destructive/.test(key(v))?'danger-button':/secondary|outline/.test(key(v))?'secondary-button':/ghost|flat/.test(key(v))?'ghost-button':'primary-button';
function sample(t,v='Default',s='Default',i=1){
 const V=e(v),D=dis(s),K=key(t),C=/selected|checked|active|on/.test(key(s))?' checked':'';
 if(t==='Button')return `<button class="${btn(v)} family-size-${i}"${D}>${V}</button>`;
 if(/Icon Button/.test(t))return `<button class="family-icon" aria-label="${V}"${D}>${/danger/.test(key(v))?'×':/primary/.test(key(v))?'+':/ghost/.test(key(v))?'•••':'≡'}</button>`;
 if(/Button Group/.test(t))return `<div class="family-actions"><button class="secondary-button">Voltar</button><button class="primary-button">Salvar</button></div>`;
 if(/Badge|Status$/.test(t))return `<span class="badge ${badge(v)}">${V}</span>`;
 if(/Tag/.test(t))return `<span class="chip">${V} ×</span>`;
 if(/Text Field|Search|Date Picker|Number Input/.test(t))return `<label class="family-field"><span>${e(t)}</span><input placeholder="${V}"${D}></label>`;
 if(/Textarea/.test(t))return `<label class="family-field"><span>${V}</span><textarea placeholder="Descrição"${D}></textarea></label>`;
 if(/Select|Combobox/.test(t))return `<label class="family-field"><span>${e(t)}</span><select${D}><option>${V}</option><option>Apartamento</option></select></label>`;
 if(/Checkbox/.test(t))return `<label class="family-choice"><input type="checkbox"${C}${D}><span>${V}</span></label>`;
 if(/Radio/.test(t))return `<label class="family-choice"><input type="radio"${C}${D}><span>${V}</span></label>`;
 if(/Toggle/.test(t))return `<label class="family-toggle"><input type="checkbox"${C}${D}><i></i><span>${V}</span></label>`;
 if(t==='Filter')return `<div class="family-filter"><button class="family-icon" aria-label="Mostrar filtros">≡</button><div><label class="family-field"><span>Busca</span><input placeholder="Buscar"></label><button class="ghost-button">Filtros avançados⌄</button></div></div>`;
 if(/Menu|Dropdown|Sort/.test(t))return `<div class="family-menu"><b>${V}</b><span>Editar</span><span>Duplicar</span><span class="is-danger">Excluir</span></div>`;
 if(/Tabs/.test(t))return `<nav class="family-tabs"><b>${V}</b><span>Detalhes</span><span>Histórico</span></nav>`;
 if(/Breadcrumb/.test(t))return `<div class="family-crumb">Imóveis / São Paulo / <b>${V}</b></div>`;
 if(/Pagination/.test(t))return `<div class="family-pages"><button>←</button><span>1–20 de 84</span><button>→</button></div>`;
 if(/Side Navigation/.test(t))return `<nav class="family-side"><b>Dashboard</b><span>Imóveis</span><span>Leads</span><span>Clientes</span></nav>`;
 if(/Page Header/.test(t))return `<div class="family-bar family-bar--page"><b>${V}</b><span></span><button class="family-icon" aria-label="Mostrar filtros">≡</button><button class="family-icon family-icon--primary" aria-label="Criar">+</button></div>`;
 if(/Table Toolbar/.test(t))return `<div class="family-bar family-bar--toolbar"><label class="family-toolbar-search"><input placeholder="Buscar"></label><span></span><button class="family-icon" aria-label="Mostrar filtros">≡</button><button class="family-icon family-icon--primary" aria-label="Criar">+</button></div>`;
 if(/Header|Topbar|Toolbar/.test(t))return `<div class="family-bar"><b>${V}</b><span></span><button class="secondary-button">Filtrar</button><button class="primary-button">Novo</button></div>`;
 if(/Tooltip/.test(t))return `<div class="family-tip">${V}</div>`;
 if(/Popover|Drawer|Dialog/.test(t))return `<div class="family-panel"><b>${V}</b><p>Conteúdo contextual do componente.</p><button class="primary-button">Confirmar</button></div>`;
 if(/Alert|Notification|Toast/.test(t))return `<div class="family-alert ${badge(v)}"><b>${V}</b><span>Mensagem de sistema.</span></div>`;
 if(/Progress/.test(t))return `<div class="family-progress"><i style="width:${[32,58,82,100][i]||68}%"></i></div>`;
 if(/Spinner/.test(t))return `<i class="family-spinner"></i>`;
 if(/Skeleton/.test(t))return `<div class="family-skeleton"><i></i><i></i><i></i></div>`;
 if(/Data Table/.test(t))return `<div class="family-table"><b>Código</b><b>Imóvel</b><b>Status</b><span>AP-001</span><span>Moema</span><span class="badge badge--success">Ativo</span></div>`;
 if(/Property (Card|Gallery|Media|Result|Map|Detail)/.test(t))return `<article class="family-property"><i></i><b>R$ 1.250.000</b><span>${V} · Moema</span><small>2 quartos · 92 m²</small></article>`;
 if(/Price/.test(t))return `<div class="family-price"><b>${/rent/.test(key(v))?'R$ 8.500/mês':'R$ 1.250.000'}</b><span>${V}</span></div>`;
 if(/Metric/.test(t))return `<div class="family-metric"><span>${V}</span><b>${/currency/.test(key(v))?'R$ 4,8M':'164'}</b><small>+12%</small></div>`;
 if(/Card/.test(t))return `<article class="family-card"><span class="family-avatar">IT</span><div><b>${V}</b><span>${e(t)}</span><small>Próxima ação · hoje</small></div></article>`;
 if(/Form/.test(t))return `<div class="family-form"><input placeholder="Nome"><input placeholder="Contato"><button class="primary-button">Salvar</button></div>`;
 if(/Avatar/.test(t))return `<span class="family-avatar">IT</span>`;
 if(/Divider/.test(t))return `<hr class="family-divider">`;
 if(/Media|Image/.test(t))return `<div class="family-media"><span>${V}</span></div>`;
 if(/Link/.test(t))return `<a class="family-link">${V} →</a>`;
 return `<div class="family-generic"><small>${e(t)}</small><b>${V}</b><span>${e(s)}</span></div>`;
}
function matrix(t,rows,cols,mode,states=false){rows=rows.length?rows:['Default'];cols=cols.length?cols:['Default'];let h=`<div class="family-matrix__corner">Variant</div>${cols.map(x=>`<div class="family-axis">${e(x)}</div>`).join('')}`;rows.forEach((r,ri)=>{h+=`<div class="family-label"><b>${e(r)}</b></div>`;cols.forEach((c,ci)=>h+=`<div class="family-cell"><div class="family-sample">${sample(t,states?rows[0]:r,states?c:'Default',Math.min(states?ri:ci,3))}</div></div>`)});return `<div class="family-board family-board--${mode}"><header><b>${mode==='dark'?'Dark':'Light'} · ${states?'States':'Variants × sizes'}</b><span>${rows.length} × ${cols.length}</span></header><div class="family-matrix" style="--family-cols:${cols.length}">${h}</div></div>`}
function components(){let p=$('#preview'),vs=$('#variants-sizes'),st=$('#states');if(!p||!vs||!st||$('#family'))return;let t=$('.hero h1')?.textContent.trim()||'Component',spec=$$('.spec-item',vs),get=n=>spec.find(x=>$('span',x)?.textContent.trim().toLowerCase()===n)?.querySelector('strong')?.textContent||'Default',v=list(get('variants')),z=list(get('sizes')),q=$$('.state-cell strong',st).map(x=>x.textContent.trim()).filter(Boolean);let s=document.createElement('section');s.className='section section--family';s.id='family';s.innerHTML=`<div class="section__header"><div><p class="eyebrow">Component set</p><h2>Family board</h2></div><span class="coverage-badge">${v.length} variants · ${z.length} sizes · ${q.length} states</span></div><div class="family-stack">${matrix(t,v,z,'dark')}${matrix(t,v,z,'light')}${matrix(t,[v[0]],q,'dark',true)}</div>`;p.after(s);let n=$('#overview .on-this-page'),a=n?.querySelector('a[href="#preview"]');if(n&&!n.querySelector('a[href="#family"]')){let l=document.createElement('a');l.href='#family';l.textContent='Family';a?.after(l)}}
const type=[['display','Display',30,36,700],['heading-1','Heading 1',22,29,700],['heading-2','Heading 2',18,25,700],['heading-3','Heading 3',16,22,600],['heading-4','Heading 4',14,20,600],['body-lg','Body large',16,22,400],['body-md','Body medium',14,20,400],['body-sm','Body small',12,17,400],['label','Label',12,17,600],['caption','Caption',11,15,400],['overline','Overline',11,15,700],['data','Data',14,20,600]],pub=[['site-display','Site display',48,56,700],['site-heading-1','Site heading 1',36,44,700]];
const typeRows=a=>a.map(([k,l,s,h,w])=>`<div class="type-row"><div><code>${k}</code><span>${s}/${h} · ${w}</span></div><b style="font-size:${s}px;line-height:${h}px;font-weight:${w}">${l}</b></div>`).join('');
function typography(){let b=$('#product-scale .section__body');if(!b||$('.type-board',b))return;b.querySelector('.visual-grid,.preview-grid')?.remove();b.insertAdjacentHTML('afterbegin',`<div class="type-board"><section><em>Admin · Manrope</em>${typeRows(type)}</section><section class="is-public"><em>Public only</em>${typeRows(pub)}</section></div>`)}
const pal=[['background.canvas','#272727','#F4F4F4'],['background.surface','#2C2C2C','#FFFFFF'],['surfaceElevated','#303030','#FFFFFF'],['surfaceInteractive','#383838','#E8E8E8'],['text.primary','#FFFFFF','#161616'],['text.secondary','rgba(255,255,255,.62)','#525252'],['text.tertiary','rgba(255,255,255,.38)','#6F6F6F'],['border.subtle','rgba(255,255,255,.08)','#E0E0E0'],['border.default','rgba(255,255,255,.12)','#C6C6C6'],['border.strong','rgba(255,255,255,.22)','#8D8D8D'],['accent.primary','#DB0423','#DB0423'],['accent.hover','#FF3854','#C4031F'],['accent.active','#B9021C','#A90019'],['status.success','#43A85B','#198038'],['status.warning','#D69B2D','#B28600'],['status.danger','#FF4D61','#DA1E28'],['status.info','#6F96FF','#0F62FE'],['focus.ring','#78A9FF','#0F62FE']];
function palette(mode,i){return `<div class="palette-board palette-board--${mode}"><header><b>${mode==='dark'?'Dark':'Light'} mode</b><span>${pal.length} semantic tokens</span></header><div>${pal.map(x=>`<article><i style="background:${x[i]}"></i><code>${x[0]}</code><small>${x[i]}</small></article>`).join('')}</div></div>`}
function colors(){let b=$('#core .section__body');if(!b||$('.palette-board',b))return;b.insertAdjacentHTML('afterbegin',`<div class="palette-stack">${palette('dark',1)}${palette('light',2)}</div>`)}
function icons(){let b=$('#sizing .section__body')||$('main .section__body');if(!b||$('.icon-board',b))return;b.insertAdjacentHTML('afterbegin',`<div class="icon-board">${[16,20,24,32].map(s=>`<div><code>${s}px</code><span style="font-size:${s}px">⌕</span><span style="font-size:${s}px">＋</span><span style="font-size:${s}px">✎</span><span style="font-size:${s}px">•••</span></div>`).join('')}</div>`)}
let t=$('.hero h1')?.textContent.trim()||'';components();if(t==='Typography')typography();if(t==='Colors')colors();if(t==='Icons')icons();
})();
