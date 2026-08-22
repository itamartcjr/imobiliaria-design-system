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

O catálogo atual gera mais de 120 páginas HTML entre foundations, core components, componentes imobiliários, patterns, testing, guidelines, resources e sitemap.

## Sources

A documentação de foundations/components/testing fornecida para o projeto foi preservada em:

- `getting-started/sources.html` no site gerado;
- `research/documentation-sources.md` no repositório.

## Build

```bash
npm run build
npm run validate
npm run dev
```

A saída estática é gerada em `dist/`.
