## [M1S09] Roteiro de projeto - Restaurante - Parte 3

Oieee!

Leia atentamente as informações desse card, pois ele será um guia para a realização dos exercícios dessa semana!

---

O objetivo será a continuação do desenvolvimento do projeto iniciado na semana 7.
Esta semana iremos adicionar a possibilidade de ter mais de uma rota em nossa aplicação, além de compartilhamento de estado global

- O foco será o uso da **Context API** e do **React Router DOM**

---

**Observações:** Os exercícios devem ser realizados em ordem, pois um depende do outro.
**Dica:** Após realizar cada exercício teste se tudo está funcionando, sem erros no console do navegador, e já crie um commit ou branch em seu github.

## [M1S09] Ex 1 - Setup Inicial

Uma das habilidades de um desenvolvedor no dia a dia é a capacidade de evoluir um projeto que já existe.

Estes exercícios utilizam como base o projeto no repositório [exercicios-semana8](https://github.com/DEVin-Intelbras/exercicios-react-modulo-1).

Baixe o repositório na sua máquina, acesse a branch feat/resolucao-semana-08 e instale as dependências para realizar os exercícios propostos.

Dica:

- Para clonar o projeto utilize o comando:
  `git clone git@github.com:DEVin-Intelbras/exercicios-react-modulo-1.git`
- Se já possuir o projeto baixado utilize o comando:
  `git pull`
- Para acessar a branch utilize o comando:
  `git checkout feat/resolucao-semana-08`
- Para instalar as dependencias utilize o comando
  `npm install`

## [M1S09] Ex 2 - Criar um contexto com provider

Vamos criar um contexto para armazenar a lista dos produtos selecionados

- Crie o contexto
- Crie o provider
  - Adicione um estado para armazenar os produtos selecionados
    - Dica: utilize use useState
  - Crie uma função para selecionar/des-selecionar o card
    - Dica: mova a função handleSelecionar desenvolvida no exercicio 7 da semana passada e altere ela para ao invés de receber apenas o id receber todas as informações do produto, ou seja, o objeto produto
  - Crie um função para retornar se o card está selecionado, ela deve receber por parâmetro um id e retornar se o card está selecionado ou não
    - Dica: utilize o método some do array
  - Exponha no contexto através da prop value do provider a lista dos produtos selecionados e as funções criadas
- Adicione o provider por volta da aplicação

## [M1S09] Ex 3 - Criar custom hook para o contexto criado

Vamos criar um custom hook para facilitar a utilização dos valores do contexto

- Crie um custom hook que exponha os valores do contexto;

## [M1S01] Ex 4 - Links e bordas

- Etiquetas:
  - Módulo 1
  - Baixa Prioridade
  - Fácil

**Descrição**: \
No index.html, adicione um botão (anchor) contendo o texto "Avançar" e, utilizando apenas HTML, faça com que o usuário, ao clicar nesse botão, vá para a página das imagens (imagens.html).

Substitua o texto "Avançar" do botão do por uma imagem.

Agora, usando CSS, faça com que o botão tenha uma borda curvada.

Aumente o padding do botão em 10 pixels, coloque uma borda sólida de 2 pixels na cor preta, e uma margem superior de 20 pixels.

**Dicas**:
[🌐 CSS Box Model](https://www.w3schools.com/css/css_boxmodel.asp)

---

## [M1S09] Ex 4 - Utilizar custom hook do contexto

Vamos utilizar os valores do contexto para modificar item selecionado e verificar se está selecionado

- No componente de card:
  - Remova as props `selecionado` e `onSelecionar`
  - Adicione o hook criado e obtenha dele as funções de onSelecionar e validar card selecionado
  - Altere o jsx para respeitar os valores do contexto e não mais os que eram recebidos por parâmetro.
    - Dica: lembre que agora a propriedade de selecionado não vem mais um booleano e sim uma função que precisa ser chamada, então pode criar uma variável dentro do projeto e nela chamar a função. Ex: const selecionado = validaCardSelecionado(id)
- No componente ListaCards remova o state e a função de handle além de remover as props `selecionado` e `onSelecionar` passadas para o card
- Validar e garantir que tudo continua funcionando como antes.

## [M1S09] Ex 5 - Adicionar rotas

Vamos configurar o projeto para utilização de rotas:

- Instalar o React Router DOM.
- Crie uma pasta chamada pages.
  - Dentro dela crie uma nova pasta chamada produtos e dentro dela os arquivos Produtos.jsx e index.jsx.
  - Mova as seções que estão dentro da main do app para a nova página criada.
- Criar um arquivo de rotas contendo a rota '/' que deve exibir a lista dos produtos, ou seja, a nova página criada
  (Routes, Route).
- Adicionar a configuração das rotas no App.jsx.
  - Adicione por volta de toda a aplicação o BrowserRouter.
  - Adicione dentro da tag main o arquivo criado com as rotas.

## [M1S09] Ex 6 - Criar esqueleto da nova página de produtos selecionados

Vamos criar a página para exibir os produtos selecionados:

- Crie dentro da pasta paginas uma nova pasta chamada: ProdutosSelecionados e adicione os arquivos necessários.
- Adicione apenas um h1 com o título Produtos selecionados.

---

## [M1S09] Ex 7 - Criar novo item de menu

Adicionar novo item de menu com link para uma página de itens selecionados.

- Alterar a tag <a> para Link e adicionar o path como '/' para o item menu existente.
- No header adicionar novo item de menu utilizando link chamado Minhas Escolhas ou outro nome de sua preferência.
- No arquivo de rotas adicionar a rota para essa página que deve exibir a página criada no exercício anterior.
- Teste se tudo está funcionando.

## [M1S09] Ex 8 - Exibição dos produtos selecionados

Vamos começar a criar a lógica para exibição dos produtos selecionados:

- Utilizando o custom hook criado obtenha os produtos selecionados.
- Mantenha o h1 com o título de produtos selecionados.
- Renderize a lista dos produtos selecionados utilizando o componente ListaCards.

## [M1S09] Ex 9 - Adicionar total dos produtos selecionados

Vamos adicionar os totais dos valores selecionados:

- Na página de produtos selecionados adicione uma tag p ou outra que preferir para exibir os valores.
- Realize o cálculo somando os valores de todos os produtos selecionados.

Dica: de uma olhadinha no funcionamento do método reduce.

const total = seuArray.reduce((soma, item) => {
return soma + item.SuaPropriedadeValor;
}, 0);

---

## [M1S09] Ex 10 - Excluir todos os produtos selecionados

Vamos adicionar na página de produtos selecionados uma opcão de remover todos os itens selecionados.

- No provider adicione uma função que remova todos os produtos selecionados.
  - Dica: set o state para um array vazio.
- Na página de produtos selecionados:
  - Obtenha a função utilizando o hook.
  - Adicione um ícone/botão para excluir todos os itens.
  - Adicione no evento de clique a chamada para a função do provider obtida através do hook.
