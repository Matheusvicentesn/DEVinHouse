## [M1S05] - Ex 1 - Criando módulos

Crie dois módulos JavaScript: um deles deve conter uma função "saudacao", exportada de forma nomeada, que retorna apenas uma string "Olá!". Chame este módulo de _saudacao.js_

O outro deve importar a função do módulo saudacao.js e exibir o resultado da chamada da função saudacao( ) em um console.log. Este módulo deve se chamar _index.js_

Em um arquivo HTML, importe o index.js com uma importação do tipo módulo. A saudação deve ser exibida no console do navegador quando o projeto html é aberto.

---

## [M1S05] - Ex 2 - Criando módulos

Crie um terceiro módulo JavaScript que contenha uma função, e esta função deverá receber um nome como argumento. Quando chamada, esta função deve retornar a string `Olá, ${ nome }! Seja muito bem vindo!`. O módulo javascript deve se chamar _saudacao-especial.js_ e a função deve ser exportada de forma "default" (padrão).

No módulo index.js, importe a função do módulo saudacao-especial.js, nomeando a importação como "saudacaoEspecial", e exiba o resultado da chamada da função saudacaoEspecial( ... ) em um console.log. Passe como argumento o seu nome.

A saudação deve ser exibida corretamente no console do navegador quando o projeto é aberto.

## [M1S05] - Ex 3 - Criando classes

Crie uma classe **Produto**, com as seguintes propriedades: **nome**, **preco**, **emEstoque**, **quantidade**.

Todas essas propriedades precisam ser recebidas e definidas no construtor da classe.

## [M1S05] - Ex 4 - Criando classes

Crie uma classe **Pedido**, com as propriedades **numeroPedido**, **dataPedido**, **estaPago**, **listaProdutos** e **nomeCliente**.

Utilize o método construtor para que, a cada instancia dessa classe, um número do pedido e o nome do cliente seja informado, a **dataPedido** seja a data atual ( _new Date( ).toLocaleDateString( )_ ), o **estaPago** seja falso e a **listaProdutos** seja um array vazio.

## [M1S05] - Ex 5 - Criando métodos

Dentro da classe **Pedido**, adicione um método **adicionarProduto**, que recebe como argumento um objeto do tipo **Produto** ( _caso deseje_, você pode realizar uma validação utilizando o operador _instanceof_).

Este método deve adicionar (**push**) à propriedade **listaProdutos** o produto passado como argumento.

## [M1S05] - Ex 6 - Criando métodos

Dentro da classe **Pedido**, crie outro método, chamado **calcularTotal**, que deve iterar sobre a **listaProdutos** e retornar o valor total do pedido.

Lembre-se de multiplicar a quantidade de cada produto pelo seu valor quando realizar a soma (quantidade e valor são propriedades da classe **Produto**!).

## [M1S05] - Ex 7 - Instanciando classes

Crie 5 instâncias de produtos, com as características que desejar.

Crie 2 instâncias de pedidos. O primeiro pedido deve ter o número '20220001' e o nome do cliente à sua escolha. O segundo pedido deve ser o '20220002'.

Utilizando o método **adicionarProduto**, adicione 3 dos 5 produtos ao pedido '20220001' e, o restante, ao pedido '20220002'.

## [M1S05] - Ex 8 - Chamando métodos de classe

Estas classes criadas durante os exercícios estão prontas para serem utilizadas em uma aplicação real. Por exemplo: podemos criar um sistema de pedidos, e, através da propriedade **listaProdutos**, podemos realizar uma iteração nos produtos de determinado pedido e imprimir cada um deles em tela.

Podemos chamar o método **calcularTotal** para exibir em tela o valor total de um determinado pedido.

Crie uma página HTML para exibir os nossos produtos. Use sua criatividade para criar como desejar. Segue um exemplo (vide anexo):

https://www.figma.com/file/DmL9QdpGuOcZGj9YnDgDNv/Exemplo-P%C3%A1gina-de-Pedidos?node-id=0%3A1

A página deve exibir cada pedido e, em cada pedido, exibir cada produto. Você pode criar cada _card_ de pedido dentro de uma div ou pode criar uma função que receba como argumento o pedido e monte toda a estrutura HTML. Depois, utilizando **appendChild**, você poderá adicionar esse _card_ de pedido em qualquer lugar da página que você desejar.

**Sugestões**

- Inicie com uma página HTML estática, colocando dados fictícios simulando um pedido e uma lista de produtos
- Depois que a página estiver pronta, crie um módulo JavaScript que reunirá todas as funções de montagem da tela.
- Cada classe pode ficar em seu próprio módulo JavaScript e todos os módulos podem ser importados em um único módulo `index.js`, que será importado no HTML posteriormente.

**Bônus!!!! **
Dica: você pode utilizar o **toLocaleString** em um número para formata-lo como moeda. [Dê uma olhadinha neste link...](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString)

## [M1S05] - Ex 9 - Funções assíncronas

Crie uma função chamada **sleep**, que recebe como argumento um valor qualquer.

Quando chamada, essa função precisa retornar, após 3 segundos (setTimeout), uma Promise resolvida com o valor que foi passado como argumento.

Ex.:

```
function sleep ( valor ) {
  return new Promise ( (res, rej) => {
     setTimeout( ... )
  })
}
```

Chame esta função e confirme o funcionamento dela (lembre-se que o valor do tempo de espera é aproximado!)

## [M1S05] - Ex 10 - Promises

Utilizando o **setInterval**, crie uma função que mostre o horário atual e atualize automaticamente a cada 2 segundos.

O horário deve ser mostrado no console, no formato **HH:MM:SS**.


