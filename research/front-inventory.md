# Front Inventory

Fonte analisada: `imobiliaria-front`.

## Papel no design system

O front é referência para **experiências públicas**, não para o admin. Ele pode receber referências de marketplaces e produtos como Airbnb apenas quando isso melhora descoberta e apresentação de imóveis.

## Padrões úteis para o site público

- busca e descoberta;
- cards de imóvel com imagem e metadados;
- galerias, favoritos e detalhe do imóvel;
- páginas institucionais e editoriais;
- maior respiro e largura de conteúdo;
- composição responsiva orientada a mídia.

## Tokens observados

- `background`: `#FFFFFF`;
- `surface`: `#F7F7F8`;
- `surfaceDark`: `#252525`;
- `surfaceDarker`: `#171717`;
- `primary`: `#DB0423`;
- spacing: `6, 10, 16, 24, 32, 48, 72`;
- tipografia atual: Karla;
- `layout.containerMaxWidth`: `1760`.

## Limite explícito

Referências tipo Airbnb podem influenciar **property search, property card, galeria, favoritos, mapa e property detail** no site público. Elas não devem definir o shell do admin, botões administrativos, radius global, densidade, formulários, tabelas ou paleta principal.
