# Design Decisions

## Hierarquia de referência

1. `imobiliaria-admin`: fonte visual e de produto principal.
2. Carbon Design System: referência de arquitetura de interação para o admin.
3. `imobiliaria-front` e referências tipo Airbnb: referência apenas para o site público.

## Decisões principais

- o admin existente define a identidade: fundo `#272727`, superfícies cinza-escuras, Manrope e acento vermelho `#DB0423`;
- o vermelho é marca/ação; `danger` continua sendo um token semântico separado;
- Carbon orienta densidade, anatomia, foco, estados, tabelas, navegação lateral, overlays e motion produtivo;
- a linguagem administrativa é mais plana, compacta e pouco arredondada;
- radius do admin (`2, 4, 6, 8`) é a escala padrão; pill fica restrito a tags, badges e casos específicos;
- dark é a expressão principal do admin; light é uma derivação neutra, não uma releitura editorial;
- o site público pode usar mais imagem, respiro e composição editorial sem contaminar o shell administrativo;
- referências tipo Airbnb são permitidas em busca pública, cards de imóvel, galeria e detalhe, nunca como base visual do admin.

## Layout operacional aprovado no admin

- o frame de página não recebe padding global;
- o `Page Header` é edge-to-edge no workspace e possui padding interno `20px` horizontal / `12px` vertical;
- o conteúdo abaixo do header recebe gutter operacional de `16px` (`space.4`);
- em coleções, header e filtros pertencem ao mesmo bloco sticky, enquanto os dados rolam abaixo;
- ações de header de alta frequência usam icon buttons de `42px`; criação usa `+` primário e filtro usa ícone neutro/ativo;
- filtros ficam fechados por padrão. A primeira camada contém busca/filtro principal e uma segunda camada `Filtros avançados` revela os controles secundários;
- paginação administrativa usa 20 registros por página como padrão atual e sempre comunica página, intervalo e total;
- edição simples pode acontecer inline em rows por select/input, preservando o painel de detalhe para edição contextual mais ampla;
- detail panels permanecem dentro do content workspace. O estado expandido ocupa apenas esse workspace e nunca cobre a navegação global;
- no CRM board, drag de card altera etapa; pointer-drag em espaço vazio desloca horizontalmente o quadro sem competir com o drag do card.

## Motion operacional

- productive motion segue os tempos Carbon `70`, `110`, `150`, `240`, `400` e `700ms`;
- entradas curtas de menus, filtros e popovers usam `productiveEnter`, normalmente em `150ms`;
- painéis e feedbacks maiores podem usar `240ms`;
- press de ações pode usar escala discreta próxima de `0.985`, sem efeito elástico;
- toda animação deve respeitar reduced motion do sistema / `prefers-reduced-motion`.

## Documentação do design system

- o canvas de cada página da documentação (`.content`) é edge-to-edge e não recebe padding global;
- `hero` e cada `.section` recebem `space.6` (`24px`) de padding interno, conforme a Foundation de Spacing;
- esse `24px` é regra do site de documentação e não substitui o gutter operacional de `16px` do admin;
- padding adicional pertence aos elementos internos que precisam de respiro, como cells, panels, specimens, forms, tables e cards reais, e deve usar tokens documentados;
- a side navigation é um componente independente da página de conteúdo e permanece no mesmo nível visual entre rotas;
- grupos da side navigation são colapsáveis por clique;
- referências externas ficam fechadas por padrão em um painel `Referências` e são abertas sob demanda;
- as rotas publicadas são estáticas e amigáveis ao GitHub Pages, geradas pelo Node em diretórios com `index.html`.

## Regra de precedência e sincronização obrigatória

A documentação aprovada é a resolução principal para decisões já registradas. A implementação deve consumir os tokens e comportamentos documentados. Toda mudança que afete uma regra existente deve atualizar a documentação correspondente e a implementação no mesmo commit. Isso inclui tokens, spacing, layout, navegação, comportamento, estados, nomenclatura, breakpoints, acessibilidade e padrões de produto.

Quando o `imobiliaria-admin` já tiver sido corrigido por decisão explícita posterior, o design system deve ser atualizado para refletir esse estado aprovado antes de qualquer tentativa de reverter o produto para um specimen antigo.

## Regra prática

- conflito de identidade → seguir `imobiliaria-admin`;
- conflito de interação administrativa → usar Carbon como referência;
- necessidade de descoberta/merchandising público → consultar `imobiliaria-front` e referências de marketplace;
- divergência entre specimen antigo e admin corrigido → atualizar o design system para o admin corrigido;
- pedido que muda uma regra documentada → atualizar documentação e implementação juntas.
