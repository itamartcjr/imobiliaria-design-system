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

## Documentação do design system

- o canvas de cada página da documentação (`.content`) é edge-to-edge e não recebe padding global;
- `hero` e cada `.section` recebem `space.6` (`24px`) de padding interno, conforme a Foundation de Spacing;
- padding adicional pertence aos elementos internos que precisam de respiro, como cells, panels, specimens, forms, tables e cards reais, e deve usar tokens documentados;
- a side navigation é um componente independente da página de conteúdo e permanece no mesmo nível visual entre rotas;
- grupos da side navigation são colapsáveis por clique;
- referências externas ficam fechadas por padrão em um painel `Referências` e são abertas sob demanda;
- as rotas publicadas são estáticas e amigáveis ao GitHub Pages, geradas pelo Node em diretórios com `index.html`.

## Regra de precedência e sincronização obrigatória

A documentação aprovada é a resolução principal para decisões já registradas. A implementação deve consumir os tokens e comportamentos documentados. Toda mudança que afete uma regra existente deve atualizar a documentação correspondente e a implementação no mesmo commit. Isso inclui tokens, spacing, layout, navegação, comportamento, estados, nomenclatura, breakpoints, acessibilidade e padrões de produto.

## Regra prática

- conflito de identidade → seguir `imobiliaria-admin`;
- conflito de interação administrativa → usar Carbon como referência;
- necessidade de descoberta/merchandising público → consultar `imobiliaria-front` e referências de marketplace;
- divergência entre implementação e documentação aprovada → corrigir a implementação para a documentação;
- pedido que muda uma regra documentada → atualizar documentação e implementação juntas.
