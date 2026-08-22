# Carbon Notes

Fonte de referência: Carbon Design System.

## Papel no projeto

Carbon é a **referência funcional principal para o admin**, imediatamente depois da identidade já existente em `imobiliaria-admin`. Ele orienta como os componentes se organizam e se comportam, não como a marca deve parecer.

## O que adotar no admin

- densidade produtiva e alinhamento consistente;
- side navigation e header com hierarquia clara;
- data tables, listas e toolbars para grandes coleções;
- inputs, selects e formulários com labels e mensagens de erro previsíveis;
- modais e side panels para progressive disclosure;
- loading, skeleton, empty, warning, error e success como estados de primeira classe;
- foco visível, navegação por teclado e contraste verificável;
- motion produtivo curto para hover, pressed, menus e overlays;
- radius contido e superfícies mais planas, evitando transformar toda a interface em cards arredondados.

## O que não importar

- marca IBM;
- paleta Carbon como identidade principal;
- tipografia IBM Plex como fonte da marca;
- componentes copiados literalmente quando conflitarem com React Native/Expo ou com o admin existente.

## Regra de composição

**Admin visual + Carbon interaction = linguagem administrativa oficial.**

O vermelho `#DB0423` continua sendo o acento de marca. Azul pode aparecer em foco/acessibilidade quando necessário, mas não substitui o vermelho como CTA principal.
