# Imobiliaria Design System

Design system oficial da plataforma imobiliária, com o `imobiliaria-admin` como fonte visual principal para produto e Carbon Design System como referência estrutural de interação para o ambiente administrativo.

## Hierarquia de referência

1. **imobiliaria-admin — identidade principal**
   - paleta, contraste, Manrope, densidade, spacing, radius e linguagem visual do produto;
   - shell, navegação, coleções, formulários e fluxos operacionais partem do admin existente.
2. **Carbon Design System — referência funcional do admin**
   - anatomia e comportamento de controles;
   - data tables, side navigation, headers, modais/painéis, notificações, estados, foco, acessibilidade e motion produtivo;
   - Carbon orienta estrutura e interação, sem importar a identidade IBM.
3. **imobiliaria-front / referências tipo Airbnb — somente site público**
   - descoberta, busca de imóveis, cards com imagem, galeria, detalhe e composição editorial;
   - não define paleta, radius, botões, densidade nem shell do admin.

## Regra de decisão

Quando houver conflito visual, o admin vence. Quando houver dúvida de interação administrativa, Carbon orienta. Referências de marketplace/hospitality ficam limitadas às experiências públicas.

## Build

```bash
npm run build
npm run validate
npm run dev
```

A saída estática é gerada em `dist/`.
