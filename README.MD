<img alt="GoStack" src="https://storage.googleapis.com/golden-wind/bootcamp-gostack/header-desafios.png" />

<h3 align="center">
  Desafio 08: Fundamentos do React Native
</h3>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/LucasManto/gostack-desafio-fundamentos-react-native?color=%2304D361">

  <img alt="GitHub language count" src="https://img.shields.io/github/languages/top/LucasManto/gostack-desafio-fundamentos-react-native">

  <a href="https://rocketseat.com.br">
    <img alt="Template by Rocketseat" src="https://img.shields.io/static/v1?label=template%20by&message=Rocketseat&color=7159c1">
  </a>

  <a href="https://github.com/LucasManto">
    <img alt="completion by LucasManto" src="https://img.shields.io/badge/completion%20by-LucasManto-%2304D361">
  </a>
</p>

<p align="center">
  <a href="#rocket-sobre-o-desafio">Sobre o desafio</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#requisitos">Requisitos</a>
</p>

## :rocket: Sobre o desafio

Neste desafio será desenvolvido uma aplicação de duas páginas:
- Pagina inicial: serão mostrados os produtos disponíveis para a compra.
- Carrinho: serão mostrados os itens adicionados ao carrinho.

Ambas as páginas mostrarão um resumo do carrinho, composto pela quantidade de itens adicionados e valor total da compra.

# Requisitos
Para a execução desse projeto, são necessários:

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/)
- [Ambiente para desenvolvimento React Native](https://react-native.rocketseat.dev/)

### Template da aplicação

Para te ajudar nesse desafio, a Rocketseat criou um modelo que você deve utilizar como um template do Github.

O template está disponível na seguinte url: **[Acessar Template](https://github.com/Rocketseat/gostack-template-fundamentos-react-native)**

**Dica**: Caso não saiba utilizar repositórios do Github como template, temos um guia em **[FAQ](https://github.com/Rocketseat/bootcamp-gostack-desafios/tree/master/faq-desafios).**

Agora abra o terminal, navegue até a pasta criada e execute o comando `yarn` para instalar todas as dependências.

### Utilizando uma fake API

Para que você tenha os dados para exibir em tela, a Rocketseat criou um arquivo que você poderá utilizar como fake API para te prover esses dados.

Para isso, está instalado no seu package.json uma dependência chamada `json-server`, e um arquivo chamado `server.json` que contém os dados para uma rota `/products`. Para executar esse servidor você pode executar o seguinte comando:

```js
  yarn json-server server.json -p 3333
```

### Funcionalidades da aplicação

- **`Listar os produtos da fake API`**: A página inicial (`Dashboard`) exibe uma listagem de produtos cadastrados no arquivo [server.json](server.json).

- **`Adicionar itens ao carrinho`**: Ao clicar no botão correspondente, a aplicação adiciona o produto selecionado no carrinho. Caso o produto já esteja cadastrado, sua quantidade no carrinho aumenta em 1.

- **`Exibir itens do carrinho`**: Na página `Cart` são exibidos todos os itens do carrinho, junto com a quantidade, valor único, valor subtotal dos itens e total de todos os items.

- **`Aumentar/Diminuir quantidade de itens do carrinho`**: Na página `Cart` é possível aumentar e diminuir a quantidade de itens no carrinho. Caso exista apenas 1 item de determinado produto no carrinho e o usuário clique para diminuir a quantidade, o item é removido do carrinho.

- **`Exibir valor total dos itens no carrinho`**: Tanto na página `Dashboard`, quanto na página `Cart` é exibido o valor total de todos os itens que estão no seu carrinho.
