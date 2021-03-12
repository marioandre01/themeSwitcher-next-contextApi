[![Author](https://img.shields.io/badge/author-marioandre01-61dafb?style=flat-square)](https://github.com/marioandre01)
[![Languages](https://img.shields.io/github/languages/count/marioandre01/themeSwitcher-next-contextApi?color=%2361dafb&style=flat-square)](#)
[![Stars](https://img.shields.io/github/stars/marioandre01/themeSwitcher-next-contextApi?color=61dafb&style=flat-square)](https://github.com/marioandre01/themeSwitcher-next-contextApi/stargazers)
[![Forks](https://img.shields.io/github/forks/marioandre01/themeSwitcher-next-contextApi?color=%2361dafb&style=flat-square)](https://github.com/marioandre01/themeSwitcher-next-contextApi/network/members)
[![Contributors](https://img.shields.io/github/contributors/marioandre01/themeSwitcher-next-contextApi?color=61dafb&style=flat-square)](https://github.com/marioandre01/themeSwitcher-next-contextApi/graphs/contributors)
[![Licence](https://img.shields.io/github/license/marioandre01/themeSwitcher-next-contextApi?color=%2361dafb&style=flat-square)](https://github.com/marioandre01/themeSwitcher-next-contextApi/blob/master/LICENCE.md)


<h1 align="center">
  themeSwitcher-next-contextApi
</h1>

<p align="center"> 
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <!-- <a href="#-layout">Layout</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; -->
  <a href="#-executando-a-aplicação">Executando a aplicação</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#gear-contribuição">Contribuição</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licença">Licença</a>
</p>

## 💻 Projeto

Este projeto foi desenvolvido para entender e praticar como fazer um **themeSwitcher** em uma aplicação **React** com **NextJS** usando **styled-components** e **context API**. O conhecimento foi adquirido através do vídeo [Theme Switcher com ReactJS e nova Context API](https://www.youtube.com/watch?v=oDgxUodLwGU) do canal da **Rocketseat** no Youtube, orientado pelo instrutor **Diego Fernandes**


## 📋 Tecnologias

O projeto foi desenvolvido com as seguintes tecnologias:

- [React](https://reactjs.org/)
- [Next.JS](https://nextjs.org/)
- [Styled-components](https://styled-components.com/)
- Context API

<!-- ## 🎨 Layout

### 💻 Web 

<p align="center">
  <img alt="themeSwitcher-next-contextApi" title="themeSwitcher-next-contextApi" src="" width="800px">
  
</p> -->

<!-- ### 📱 Mobile  -->
<!-- <p align="center">
  <img alt="Move.it mobile" title="Move.it mobile" src="img/onePiece_quiz_tela_mobile.png" width="250px">
</p> -->

## 💻 Executando a aplicação

### :octocat: Clonando o Repositório

```bash
$ git clone https://github.com/marioandre01/themeSwitcher-next-contextApi.git

# entre na pasta do projeto
$ cd themeSwitcher-next-contextApi
```
### 💻 Executando a aplicação

Instale as dependências

```bash
# Com yarn
$ yarn

# ou pelo npm
$ npm install
```

Execute a aplicação (inicie o servidor)

```bash
# Com yarn
$ yarn dev

# ou pelo npm
$ npm run dev
```
Agora acesse **localhost:3000** no seu navegador.

## :warning: Erro "React server mismatches: Prop className did not match" no uso de styled-componets com o Next

Durante o desenvolvimento do projeto que foi criado com o comando:

```bash
yarn create next-app themeswitcher-next-contextapi
```
Notou-se que a inserir o uso de styled-components ao projeto surgiu uma mensagem de **Warnning** no console do navegador com a mensagem **"Warning: Prop className did not match"** que pelo que se pesquisou, está relatando que o **className** gerado no lado do servidor do Next está diferente do **className** que é gerado no lado do front. Na prática ao executar o app o mesmo funciona normalmente, mas quando no código é feita alguma alteração e salvo isso, o app perde as propriedades CSS, ficando só o HTML, e a mensagem citada aparece no console. Para resolver isso, a solução inicial encontrada foi parar o app e executar novamente. Como esse processo não é muito prático, foi descoberto uma solução através desse [Link](https://github.com/vercel/next.js/issues/11600#issuecomment-745165507). Com isso deve-se seguir os seguintes passos:

1 - Instalar o seguinte pluguin
```bash
yarn add "babel-plugin-styled-components" -D
```

2 - Criar o arquivo **.babelrc** na raiz do projeto e adicionar e salvar o seguinte conteúdo
```bash
{
    "presets": ["next/babel"],
    "plugins": [["styled-components", { "ssr": true }]]
}
```
3 - Na pasta **pages** criar o arquivo **_documentos.js** e adiconar e salvar o seguite conteúdo

```bash
import React from 'react';
import Document from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () => originalRenderPage({
        // eslint-disable-next-line react/jsx-props-no-spreading
        enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
      });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
}
```
Feito esses 3 passos, ao executar o projeto a mensagem de Warnning e perda do CSS no app será resolvida.

## :clock1::warning: Automatizando a correção do problema

Uma outra maneira que se encontrou para resolver isso, foi criar o projeto já configurado com um template para o uso com **styled-components**. Fazendo isso, os 3 passos citados para ser feito no sub item anterior já vem configurado no projeto, não sendo necessário executa-lo. Para isso execute o seguinte comando para criar o projeto:

```bash
npx create-next-app --example with-styled-components
```
Ao pressionar ENTER, será pedido para escolher um nome para o projeto. Escolha um nome e pressione ENTER novamente para criar o projeto. Ao utilizar esse template o projeto já é criado com o uso de styled-components.

## :gear: Contribuição

Para contribuir com esse projeto faça os seguintes passos:

- Faça um fork desse repositório;
- Crie uma branch com a sua feature: `git checkout -b minha-feature`;
- Faça commit das suas alterações: `git commit -m 'feat: Minha nova feature'`;
- Faça push para a sua branch: `git push origin minha-feature`.

## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](./LICENSE) para mais detalhes.




