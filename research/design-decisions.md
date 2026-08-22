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

## Regra prática

- conflito de identidade → seguir `imobiliaria-admin`;
- conflito de interação administrativa → usar Carbon como referência;
- necessidade de descoberta/merchandising público → consultar `imobiliaria-front` e referências de marketplace.
