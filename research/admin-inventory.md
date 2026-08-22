# Admin Inventory

Fonte analisada: `imobiliaria-admin`

## Estrutura

- Expo Router com rotas em `app/`
- tema central em `src/ui/theme`
- shell adaptativo em `src/ui/layout/adaptive-shell.tsx`
- componentes compartilhados em `src/ui/components`
- domínio em `src/features`
- contratos GraphQL em `src/shared/graphql`

## Identidade visual encontrada

- fundo principal escuro
- superfícies próximas a preto/cinza
- bordas discretas
- acento forte e utilitário
- navegação densa
- cards contidos
- botões em formato pill/retangular arredondado
- tipografia Manrope

## Padrões recorrentes

- header com navegação e busca
- sidebar com navegação principal e secundária
- listas densas para coleções
- cards de resumo e ações rápidas
- campos com destaque visual no foco
- estados claros de loading, empty e error

## Tokens observados no código local

- `background`: `#272727`
- `backgroundElevated`: `#2c2c2c`
- `backgroundSoft`: `#242424`
- `accent`: `#db0423`
- `accentStrong`: `#ff3854`
- `border`: `rgba(255, 255, 255, 0.12)`
- `spacing`: `4, 8, 12, 16, 20, 24, 32, 48`
- `radius`: `2, 4, 6, 8, 999`
- `breakpoints`: mobile, tablet, desktop

## Observações

- O código local usa acento vermelho no tema atual.
- A especificação do design system oficial pede um acento lima para a identidade da plataforma.
- A documentação do novo sistema adota o acento lima como token oficial e mantém o vermelho apenas para estados semânticos de perigo.
