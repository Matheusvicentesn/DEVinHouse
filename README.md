<p align="center"><img src="src/assets/logo.png" alt="" style="vertical-align:middle;max-height:50%;"></p>

<p align="center">
 <h2 align="center">DevRestaurant</h2>
</p>
  <p align="center">
    <a href="">
      <img src="https://img.shields.io/badge/HTML-239120?style=for-the-badge&logo=html5&logoColor=white" alt="">
    </a>
    <a href="">
      <img src="https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white" alt="">
    </a>
    <a href="">
      <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="">
    </a>        
    <a href="">
      <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" alt="">
    </a>    
    <a href="">
      <img src="https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=black" alt="">
    </a>
  </p>

## Sobre

Projeto feito baseando-se nos exercícios semanais do curso DEVinHouse - Turma Intelbras
Primeiros passos com React onde estamos construindo um cardápio e o projeto será atualizado semanalmente até o fim do módulo de React.

### A ser desenvolvido

Melhorias que poderão ser feitas no projeto posteriormente.

- [ ] Construir uma API para consumir os pratos
- [ ] Deploy da aplicação no Heroku
- [ ] Melhorias gerais ( CSS, REACT) // Por estarmos no começo da sessão de React o projeto vai ganhar mais corpo com o passar das semanas

### Clonar repositório

Para rodar o projeto localmente

```
git clone https://github.com/Matheusvicentesn/DEVinHouse.git
git fetch --all
git pull origin semana07
```

Para instalar as dependências é preciso executar o comando **npm install**:
<br/>
Instalar as dependências do projeto (Dentro da página onde foi clonado o projeto)

```
npm install
```

## Rodar o projeto

Para rodar o projeto basta rodar o comando dentro da página onde foi clonado o projeto

```
npm run dev
```

## Projeto DevRestaurant

Algumas prints do projeto

<p align="center"><img src="src/assets/page.png" alt="" style="height:500px;width:auto;"></p>
<p align="center"><img src="src/assets/page2.png" alt="" style="height:500px;width:auto;"></p>

### Contato

Projeto desenvolvido com base na atividade do curso DEVinHouse
Qualquer dúvida ou sugestão estou disponível no e-mail:
<a href="mailto:contato@matheusvicente.dev.br?subject=Questions" title=""> contato@matheusvicente.dev.br</a>

# [M1S08] Roteiro de projeto - Restaurante 😍

Oieee!

Leia atentamente as informações desse card, pois ele será um guia para a realização dos exercícios dessa semana!

---

O objetivo será a criação de uma aplicação web utilizando React.
Basicamente se trata de um cardápio online que tem por objetivo apresentar as opções disponíveis de um restaurante, de forma categorizada.

---

**Observações:** Os exercícios devem ser realizados em ordem, pois um depende do outro.
**Dica:** Após realizar cada exercício teste se tudo está funcionando, sem erros no console do navegador, e já crie um commit ou branch em seu github.

**Descrição**: \
O conjunto de exercícios dessa semana resulta em uma página básica HTML com alguns estilos CSS. Com exceção do primeiro, cada exercício depende da conclusão do anterior. Faça os exercícios da Semana 1 do Módulo 1 em ordem para que, ao final, seja concluída nossa primeira página web aqui do DEVinHouse. 😉

---

## [M1S08] Ex 1 - Setup Inicial

Uma das habilidades de um desenvolvedor no dia a dia é a capacidade de evoluir um projeto que já existe.

Estes exercícios utilizam como base o projeto no repositório [exercicios-semana7](https://github.com/DEVin-Intelbras/exercicios-semana7).

Baixe o repositório na sua máquina e instale as dependências para realizar os exercícios propostos.

## [M1S08] Ex 2 - Modificando o Card

Modifique o componente `Card`. Adicione 2 novas props: `selecionado`, `onSelecionar`. _Selecionado_ é um booleano (bool) e _onSelecionar_ é uma função (func). Crie um novo estilo para o Card para modificar seu visual quando este estiver selecionado (por exemplo: adicionar bordas vermelhas, sombras, etc). Não se esqueça de atualizar o **propTypes** do Card.

## [M1S08] Ex 3 - Adicionando estilo condicionalmente

Faça com que este estilo seja renderizado condicionalmente no card, com base na prop `selecionado`. Caso selecionado seja `true`, adiciona o estilo. Caso contrário, não adiciona. Você pode usar condicional ternário para renderizar o nome da classe que aplica o estilo de seleção.

## [M1S08] Ex 4 - Adicionando comando ao Card

Passe a função `onSelecionar` para o evento `onClick` do Card, para que, quando clicado, este evento chame a função passada como prop.

## [M1S08] Ex 5 - Modificando ListaCards

Adicione um estado ao componente de `ListaCards`. Este estado será um **array** com os identificadores (ids) dos produtos que foram selecionados e é **inicializado como um array vazio**.

## [M1S08] Ex 6 - Passando as props para o Card da ListaCards

Modifique, dentro do componente de `ListaCards`, o componente `Card` para que ele receba as props `selecionado` e `onSelecionar`.

O valor da prop `selecionado` deve ser **o resultado da verificação se o ID do card está incluso no estado de cards selecionados**.

A prop `onSelecionar` deve receber uma função de callback que será chamada com **o ID do card como argumento**.

Use como nome `handleSelecionar` para esta função. Declare esta função no corpo do componente `ListaCard`. Iremos implementar a lógica no próximo exercício.

## [M1S08] Ex 7 - A lógica do handler

A função `handleSelecionar` deve verificar se o ID do card selecionado já existe no estado de cards selecionados.

Caso a resposta seja positiva, atualize o estado de cards selecionados, filtrando o ID que foi recebido como argumento (dica: **id já selecionado ≠ id recebido**). Use o método `filter` para realizar esta operação.

Caso o ID não exista no estado de cards selecionados, realize a adição deste ID. Lembre-se que a função setter pode receber como argumento uma função de callback com o valor do estado anterior (dica: `[…selecionados, recebido]` ).

## [M1S08] Ex 8 - Seções como objetos

Modifique o componente `App` para que, ao invés de renderizar um componente de seção para cada seção do cardápio, você tenha um array de objetos contendo as propriedades `nome` , `produtos` e `subSecoes` para cada uma das seções.

Use este array de objetos para renderizar, usando o `map`, cada uma das seções. Você deve passar agora, para cada seção, o nome, lista de produtos e, para a prop `subSecoes` do componente `Secao`, fazer uma verificação de se a propriedade `subSecoes` do objeto de seções existe e, caso exista, fazer a transformação de array (Array.from( … )), ou então retornar `null`

## [M1S08] Ex 9 - Componente de filtro

Crie um novo componente chamado `FiltroSecao`. Este componente deve receber um array de seções e uma função `onSelecionarSecao` como prop. Não se esqueça de adicionar o **propType** corretamente.

Este componente deve renderizar uma lista de botões lado a lado na horizontal, com cada um desses botões exibindo o titulo da seção, e o evento `onClick` de cada botão deve chamar uma função de callback com a `onSelecionarSecao` recebendo como argumento o título da seção.

Adicione este componente abaixo do componente `Header` no `App` do seu projeto, passando como prop `secoes` o array objetos de seções do cardápio criado no exercício anterior e como `onSelecionarSecao` uma função `handleSelecionarSecao`. Declare essa função no corpo do seu componente `App`, recebendo como argumento o titulo da seção (uma string), mas não adicione a lógica ainda.

## [M1S08] Ex 10 - Filtrando seções

Adicione um estado para seção selecionada no componente `App`, iniciando com o estado `null`.

A função `handleSelecionarSecao` deve verificar se o valor selecionado é igual ao valor recebido como argumento. Caso seja, faça o estado virar `null` (reseta o estado para nenhuma seção selecionada). Caso contrário, faça o estado receber este novo valor.

Por fim, modifique a renderização da lista de seções para que atenda a seguinte condição: se o estado for `null`, renderiza todas as seções, senão renderiza somente a seção selecionada.

