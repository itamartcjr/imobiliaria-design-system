# Imobiliaria Design System

Design system oficial da plataforma imobiliária. O `imobiliaria-admin` é a fonte visual principal do produto, Carbon Design System é a referência funcional para interação administrativa e referências de marketplace ficam isoladas no site público.

## Hierarquia de referência

1. **imobiliaria-admin — identidade principal**
   - paleta, contraste, Manrope, densidade, spacing, radius e linguagem visual;
   - shell, navegação, coleções, formulários e fluxos operacionais partem do produto existente.
2. **Carbon Design System — referência funcional do admin**
   - anatomia e comportamento de controls;
   - data tables, side navigation, headers, dialogs/panels, notifications, states, focus, accessibility e productive motion;
   - Carbon orienta estrutura e interação sem importar a identidade IBM.
3. **imobiliaria-front / marketplace — somente site público**
   - descoberta, property cards, busca, filtros, mapa, galeria, detalhe e composição editorial;
   - não define paleta, radius, botões, densidade ou shell do admin.
4. **Figma Community reference — cobertura, não identidade**
   - serve como referência do nível de completude esperado: foundations, componentes, variantes, states, Auto Layout/variables e documentação ampla;
   - não é referência para copiar glassmorphism, brand ou estética externa.

## Contrato de documentação

Cada componente documentado no HTML contém, no mínimo:

- Overview
- Live preview
- Anatomy
- Variants & sizes
- States
- Behavior
- Accessibility
- Testing
- Do / Don't

O catálogo atual gera mais de 120 páginas estáticas entre foundations, core components, componentes imobiliários, patterns, testing, guidelines, resources e sitemap.

## Regras de layout e navegação da documentação

- o canvas de conteúdo (`.content`) não recebe padding global;
- `hero` e cada seção de documentação usam `space.6` (`24px`) como padding interno oficial; esse valor vem da Foundation de Spacing e não deve ser substituído por um gutter arbitrário;
- specimens, tabelas, formulários, panels, cells e cards reais podem ter spacing interno próprio quando a documentação do componente exigir;
- a side navigation é um componente independente da página de informação e permanece no mesmo nível visual entre rotas;
- os grupos da side navigation são colapsáveis e abrem/fecham ao clicar no cabeçalho do grupo;
- referências externas ficam recolhidas por padrão em um painel `Referências`;
- a saída do Node usa rotas estáticas amigáveis, por exemplo `/components/button/` e `/foundations/colors/`, adequadas ao GitHub Pages.

## Regra de precedência e sincronização

A documentação aprovada é a fonte de verdade para decisões já registradas. A implementação deve seguir os tokens e regras documentados. Quando um pedido alterar uma decisão existente, a mudança deve atualizar **documentação + implementação no mesmo commit**. Não é permitido manter CSS, componentes ou patterns contradizendo a documentação, nem manter documentação descrevendo um estado anterior da implementação.

## Sources

As referências de foundations, components e testing fornecidas para o projeto são preservadas por nome em:

- `getting-started/sources/` no site gerado;
- `research/documentation-sources.md` no repositório.

## Build

```bash
npm run build
npm run validate
npm run dev
```

A saída estática é gerada em `dist/` e publicada pelo workflow do GitHub Pages após build e validação.
