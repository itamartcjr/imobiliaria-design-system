# Admin Inventory

Fonte analisada: `imobiliaria-admin`.

## Papel no design system

O admin é a **fonte visual principal** do sistema. Seus tokens e sua densidade não são uma referência secundária: são o ponto de partida para componentes e padrões de produto.

## Estrutura

- Expo Router em `app/`;
- tema central em `src/ui/theme`;
- shell adaptativo em `src/ui/layout/adaptive-shell.tsx`;
- componentes compartilhados em `src/ui/components`;
- domínio em `src/features`;
- contratos GraphQL em `src/shared/graphql`.

## Tokens canônicos observados

- `background`: `#272727`;
- `backgroundElevated`: `#2C2C2C`;
- `backgroundSoft`: `#242424`;
- `accent`: `#DB0423`;
- `accentSoft`: `rgba(219, 4, 35, 0.18)`;
- `accentStrong`: `#FF3854`;
- `border`: `rgba(255, 255, 255, 0.12)`;
- `spacing`: `4, 8, 12, 16, 20, 24, 32, 48`;
- `radius`: `2, 4, 6, 8, 999`;
- tipografia: Manrope, com corpo administrativo em torno de `14/20` e display compacto em `30/36`.

## Linguagem administrativa

- navegação densa;
- superfícies discretas e pouca elevação;
- controles compactos;
- listas/tabelas como padrão para coleções;
- cards usados para agrupamento, não como linguagem dominante;
- feedback de foco, loading, empty e error sempre explícito.

## Relação com Carbon

Carbon deve melhorar anatomia, hierarquia, estados e previsibilidade dos componentes sem substituir a identidade encontrada acima.
