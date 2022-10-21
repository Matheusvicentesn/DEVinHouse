## [M1S03] Ex 1 - Dobrando números

Utilizando o `forEach`, faça com que todos os valores do array abaixo dobrem de valor:

```js
var listaNumeros = [2, 3, 9, 12, 16, 55, 90, 78, 17];
```

---

## [M1S03] Ex 2 - Iterando sobre arrays de objetos

Itere sobre o array abaixo, exibindo para cada um dos objetos o seu nome completo (nome + sobrenome). Você pode exibir em um `console.log`, mas como desafio tente exibir os nomes completos em uma `<ul>` na página HTML!

```jsx
var listaConvidados = [
  { nome: "José", sobrenome: "Carlos" },
  { nome: "Alessandro", sobrenome: "Viana" },
  { nome: "Paula", sobrenome: "Souza" },
  { nome: "Cristian", sobrenome: "Schimit" },
  { nome: "Beatriz", sobrenome: "Viana" },
  { nome: "Fernanda", sobrenome: "Silveira" },
  { nome: "Cláudia", sobrenome: "Torres" },
  { nome: "Augusto", sobrenome: "Cesar" },
  { nome: "Noemi", sobrenome: "Nakamura" },
  { nome: "Pedro", sobrenome: "Lobo" },
];
```

## [M1S03] Ex 3 - Criar uma calculadora

Para resolver este exercício, você precisará criar um script **JavaScrip** e vinculá-lo em uma página HTML (pode ser em branco).

Crie um programa que pergunte ao usuário o valor do numero1, valor do numero2 e operação **(+, -, \*** ou **/ )**. A partir dos dados recebidos, exiba em um `console.log` com o resultado da operação escolhida entre os dois números digitados.

Utilize `prompt` para perguntar os números e a operação, e utilize uma estrutura de controle de fluxo condicional para realizar a operação ( `if` ou `switch case` ).

## [M1S03] Ex 4 - Projeto: iniciando

Vamos desenvolver um sistema simples para identificar qual o setor de cada um dos convidados de um evento: **camarote**, **pista** ou **arquibancada**

O objeto para representar uma pessoa convidada deve conter as seguintes propriedades:

- nome
- sobrenome
- setor (”camarote”, “pista”, “arquibancada”)
- idade

Crie ao menos 2 objetos para cada **setor**, variando o **nome**, **sobrenome** e **idade** ao seu gosto. Sugiro usar idades maiores e menores de 18 anos para podermos brincar com estruturas de controle condicionais.

## [M1S03] Ex 5 - Projeto: usando arrays

Crie um array no seu programa, com o nome `listaDeConvidados`, e adicione o objeto criado no exercício anterior (basta apenas inicializar o array com o objeto - não precisa chamar a função “push”). Exemplo:

```js
var lista = [objeto];
```

Este array vai ser utilizado para adicionar os demais convidados

## [M1S03] Ex 6 - Projeto: funções e transformação de objetos

Crie uma função chamada `liberarBebidas` que receba uma lista de objetos de convidados e, para cada objeto dentro da lista, verifique se a **idade** do convidado é maior que **17 anos**. Caso seja maior, adicione uma propriedade “openBar” com o valor `true` ao objeto deste convidado. Caso seja menor, adicione a **mesma propriedade**, mas com o valor `false`.

Esta função deve criar um novo array vazio e, para cada iteração, adiciona a propriedade e adiciona o objeto modificado ao array vazio. Exemplo:

Chame a função recém criada passando o array de lista de convidados e salve o array retornado em uma variável `convidadosComBebidasProcessada`. O objeto deste array deve conter agora a propriedade `openBar` com o valor de acordo com a idade que você adicionou ao objeto inicial do exercício 4!

```jsx
function modificarUmArrayDeObjetos(oArray) {
  var arrayResultante = [];
  for (var i = 0; i < oArray.length; i++) {
    // aqui dentro rola o algoritmo de comparação, adição de propriedades, etc...
    var objetoDoArray = oArray[i];
    objetoDoArray.novaPropriedade = "valor da propriedade";
    arrayResultante.push(objetoDoArray);
    // fim do algoritmo
  }
  return arrayResultante; // vai retornar uma cópia do array com os objetos modificados
}

modificarUmArrayDeObjetos(umArrayDeObjetosQualquer); // aqui, a função é chamada
```

---

## [M1S03] Ex 7 - Projeto: funções e filtros de arrays

Crie três funções: `separarCamarote`, `separarPista` e `separarArquibancada`.

Cada uma dessas funções deve receber uma lista como arumento e deve retornar essa lista filtrada constando somente os valores do setor camarote, pista e arquibancada (cada função deve retornar a lista com um dos setores).

Utilize para esta função o método `filter` de array. Exemplo:

    ```jsx
    function fazerUmFiltro(umaListaDeObjetos) {
      var listaFiltrada = umaListaDeObjetos.filter((objeto) => objeto.propriedade === "valor");
    	return listaFiltrada;
    }
    ```

Chame **cada uma das três funções**, passando como argumento a `convidadosComBebidasProcessada`; Salve **cada um dos resultados em uma variável diferente**. Exemplo

```jsx
// um exemplo com a função de camarote...
var listaCamarote = separarCamarote(convidadosComBebidasProcessada);
```

## [M1S03] Ex 8 - Projeto: criando um HTML e manipulando a DOM

Agora que nossas funções de filtros estão prontas, vamos manipular o DOM e montar uma interface. Construa uma interface utilizando o mock up abaixo, ou, se preferir, pegue os códigos prontos HTML e CSS disponibilizados nos links.

(https://www.figma.com/file/BH3j77Y4EQcEINoeuBciDG/Mock-Exemplo-da-Lista?node-id=0%3A1)

Capture cada uma das listas `ul` de cada uma das colunas da página HTML em uma variável utilizando um dos métodos document.getElementById (precisa adicionar um ID na tag HTML) ou document.querySelector (selecionar por uma das classes CSS). No código disponibilizado pelo professor, os elementos `ul` já possuem um ID.

Cada uma das funções `separarCamarote`, `separarPista` e `separarArquibancada` criadas no exercício 7 retorna um array de elementos filtrados. O seu desafio será fazer com que cada uma das colunas HTML exiba a lista de convidados com base no seu setor. Você pode utilizar o método `forEach` para iterar sobre cada objeto na lista e adicionar ao `innerHTML`um `li` com o nome completo do convidado (nome e sobrenome).

Códigos HTML e CSS de exemplo: [https://gist.github.com/mikansc/052c1494f7efdf0f90d818299dfdc669](https://gist.github.com/mikansc/052c1494f7efdf0f90d818299dfdc669)

## [M1S03] Ex 9 - Projeto: desafio final

Agora que já temos o código praticamente todo implementado, adicione em cada uma das iterações forEach do exercício uma verificação para saber se `openBar` do convidado é `true`. Caso seja true, imprima, junto ao seu nome, um emoji 🍹!

```jsx
// exemplo de implementação:

listaDeObjetos.forEach((objeto) => {
  if (objeto.propriedadeBooleana) {
    elemento.innerHTML += "<li> Deu verdadeiro! 😀</li>";
  } else {
    elemento.innerHTML += "<li> Deu falso... 😪</li>";
  }
});
```

Dica: o Emoji é um caractere de texto. Você pode copiar e colar dentro da sua string como se fosse uma letra! [https://emojipedia.org/](https://emojipedia.org/)

## [M1S03] Ex 10 - Alívio mental: JSON e LocalStorage

Chegamos ao fim! Para aliviar a cabeça, vamos fazer um exercício simples.

Explique o que é um JSON e como funcionam os métodos JSON.parse e JSON.stringify.

## Pode utilizar o comentário do card para escrever a resposta.

