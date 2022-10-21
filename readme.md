# Projeto ainda está sendo desenvolvido
Ainda estou migrando projeto da sexta semana <a href="https://github.com/Matheusvicentesn/DEVinKnowledge">DEVinKnowledge</a> para React com todas as funcionalidades do projeto original.

## [M1S10] Ex 1 - Setup Inicial

Durante a semana 06, recebemos uma demanda da **M1P1 Software House Ltda** para construirmos um sistema de base de conhecimento chamado **DEVInKnowledge**. Agora chegou a hora de implementarmos este sistema utilizando os conhecimentos adquiridos até aqui nas aulas de React.

Para esta aplicação, você pode:

- utilizar o mesmo código do seu projeto desenvolvido durante a avaliação
- fazer a implementação a partir do projeto abaixo: [link para o repositório padrão](https://github.com/mikansc/devinknowledge)
- fazer uma nova implementação completamente do zero

Como passo inicial, crie uma aplicação React chamada _devinknowledge_. Prepare a aplicação, instalando o **prop-types** e, caso ache necessário, as ferramentas de lint e formatação de código (prettier). Modifique o **index.html** e adicione no título o nome da aplicação **DEVInKnowledge**.

## [M1S10] Ex 2 - Trazendo o HTML para JSX

Como primeira tarefa, vamos criar as estruturas iniciais da aplicação. Como o projeto não é muito grande, podemos organizar os componentes em **components** e **pages**.

- Crie, dentro de **src**, uma pasta **components** e uma paste **pages**.
- Crie, dentro da página **pages**, um componente **Home**. Traga todo o _código HTML_ da sua aplicação para este componente.
- Traga os seus _estilos CSS_ para a aplicação e importe o arquivo no **index.jsx**
- Apague o conteúdo padrão do **App.jsx** e importe o componente **Home**. Por enquanto, o **App.jsx** deve apenas retornar o **Home.jsx**.

> A estrutura do seu componente fica a seu critério. Uma dica é criar uma pasta com o nome do componente, um arquivo `.jsx` com o nome do componente e um arquivo `index.js` que faz a exportação do conteúdo do arquivo `.jsx`. Caso deseje, você ainda pode criar um arquivo `Componente.module.css` para encapsular os estilos.

---

Ao rodar a aplicação, o seu projeto deve abrir normalmente, sem as funcionalidades implementadas com JavaScript. A partir do código no componente **Home**, vamos extrair os demais componentes.

**PS**: _Se você estiver implementando o projeto do zero, você pode estruturar toda a parte HTML e CSS neste momento, usando HTML (JSX) dentro do componente Home e o CSS em um arquivo de folha de estilos importado no index.js_

## [M1S10] Ex 3 - Criando os componentes

Vamos começar a quebrar nossa aplicação em componentes. A princípio, vamos criar os arquivos e, depois, trazer o código JSX de cada pedaço da aplicação (por enquanto podemos deixar cada componente retornando apenas uma `div` com algum texto).

Dentro da pasta **components**, crie os componentes:

- Sidebar
- MainContent
- Button
- Summary
- SummaryCard
- Filter
- CardList
- TipCard

---

Após criar os componentes:

- Extraia _somente_ o código JSX responsável pela renderização da sidebar para o componente **Sidebar**
- Extraia _somente_ o código JSX responsável pelo conteúdo restante do projeto para o componente **MainContent**
- Importe e utilize os componentes **Sidebar** e **MainContent** dentro do componente **Home**.

Após essas modificações, a aplicação ainda deve funcionar corretamente (sem as funcionalidades do javascript, claro)

## [M1S10] Ex 4 - Quebrando o código em componentes

Vamos extrair mais alguns componentes a partir do código que agora está no **MainContent**.

- Extraia todo o código responsável por renderizar a lista de cards de resumo (os que exibem a quantidade de dicas por categoria) para o componente **Summary**
- Deste código extraído, dentro do **Summary**, extraia o código responsável pela renderização de um único card de resumo para o componente **SummaryCard**

O componente **SummaryCard** vai receber duas props: **title** e **count**. Faça com que o `title` e o `count` sejam renderizados no lugar do título e números que estavam _hardcoded_ no HTML. **Não se esqueça de usar prop-types!**

Insira alguns **SummaryCard**, com dados falsos passados como prop, no componente **Summary** para verificar se a tela está sendo renderizada corretamente.

Por último, insira o componente **Summary** no componente **MainContent**. A página deve renderizar normalmente.

## [M1S10] Ex 5 - Mais alguns componentes

Agora é a vez do componente **Filter** e **TipCard** sairem do **MainContent**

- Extraia todo o código JSX do campo de texto e botões de filtro para o componente **Filter**
- Insira o componente **Filter** no **MainContent**
- Extraia o código responsável pela renderização de um card completo para o componente **TipCard**. Neste ponto, se você criava os cards de forma dinâmica através do JS na sua aplicação, o JSX do componente deve ser criado com base no HTML gerado pela sua aplicação no momento da adição de um card.

---

> **TipCard** deve receber, como props, os dados de uma _dica_. Você pode receber as props separadamente (`titulo`, `descricao`, `categoria`, `linguagem`, `video`) ou receber um objeto **dica** com todas estas propriedades.

---

- Remova o antigo código dos cards de **MainContent** e insira algumas instancias de **TipCard** para simular a renderização dos cards.
- Substitua os valores _hardcoded_ dos dados da dica pelo valor recebido via props no **TipCard**

---

### Composição de componentes

Para trabalharmos com composição, vamos fazer com que o nosso componente **CardList** retorne um elemento com o **children** sendo os **TipCards**.

- Modifique o **CardList** para que ele receba `children` como props.
- Retire do componente **MainContent** o elemento responsável por agrupar a lista de cards (provavelmente um `ul` ou uma `div`)
- Faça com que o **CardList** retorne este elemento e, dentro dele, retorne o `children`.
- Não se esqueça de fazer a correta tipagem do `children` com o prop-types.

Um exemplo de implementação:

```js
const CardList = ({ children }) => {
  return <ul className="estilos-da-lista"> {children} </ul>;
};
```

Modifique o **MainContent** para que a lista de cards **TipCard** seja passada dentro do componente **CardList**

## [M1S10] Ex 6 - Utilizando o React Hook Form

### React Hook Form

Vamos implementar a manipulação do formulário em nosso componente **Sidebar** utilizando o **React Hook Form**.

Instale na aplicação a ferramenta `react-hook-form`:

```bash
npm install react-hook-form
```

---

Para a correta implementação do RHF, precisamos utilizar o custom hook **useForm** disponibilizado pela biblioteca. Este custom hook nos fornece as propriedades **register**, **handleSubmit** e **formState**, que iremos utilizar na nossa implementação.

Dentro do **Sidebar**:

- Dentro de cada elemento `input` do nosso formulário, _espalhe_ (usando _spread operator_) o retorno da função `register`. Lembre-se de passar como primeiro argumento o nome do campo e, como segundo argumento, o objeto com as validações necessárias.
- Crie uma função `handleCreateTip` dentro do componente **Sidebar**. Essa função vai receber como argumento um parâmetro `data`. A princípio, faça o `console.log` de `data` para testar se a função está recebendo os valores corretamente
- No evento `onSubmit` do elemento `form`, chame a função `handleSubmit` passando como argumento a referência da função `handleCreateTip`.

Insira alguns dados de exemplo e submeta o formulário para verificar se um objeto com os valores dos campos está sendo impresso corretamente no console.

---

** Bônus **

O objeto **formState** mapeia automaticamente a lista de campos registrados e, para cada campo, cria um objeto cujo a propriedade `type` retorna o tipo de erro de validação. Você consegue utilizar esse objeto para exibir mensagens de erro para o usuário?

## [M1S10] Ex 7 - Criando o contexto

Chegou o momento de começarmos a implementar a lógica do nosso projeto. Para isso, utilizaremos **context** para distribuir os dados e as funções entre os componentes de maneira centralizada.

- Na pasta `src`, adicione uma pasta `contexts` e, dentro dela, um arquivo `app-context.jsx`
- Crie um contexto com **createContext**
- Crie um componente **AppContext**. Este componente vai agrupar toda a lógica da nossa aplicação. Ele deve retornar o _Provider_ do contexto criado. Lembre-se de receber `children` como prop desse componente e, em seguida, renderizar o `children` dentro do _Provider_.
- Ainda dentro do arquivo _app-context.jsx_, crie um _custom hook_ chamado **useAppContext**, que deve retornar o contexto da aplicação. Usaremos o **useAppContext** para extrair as funções e dados do contexto.
- No componente **AppContext**, passe para o `value` do Provider uma string `conectado!`. Vamos usá-la para testar nosso contexto.

#### IMPORTANTE!!!

Lembre-se de exportar o **useAppContext** e o **AppContext** do arquivo _app-context.jsx_

---

Vamos conectar nosso contexto na aplicação.

- No arquivo **App.jsx**, adicione o componente **AppContext** como _container_ do componente **Home**.
- No componente **MainContent**, chame o hook `useAppContext()`, salvando seu retorno em uma variável `result`.

Ao fazer um `console.log` na varíavel `result`, deverá ser impresso no console o valor passado no _Provider_ (_"conectado!"_)

## [M1S10] Ex 8 - Adicionando a lógica

Para manipular nossos cards de dicas, vamos precisar de algumas funções. Essas funções precisam estar acessíveis à nossa aplicação através do contexto.

Crie as seguintes variáveis dentro do componente **AppContext**:

- `const createTip = (data) => { }`
- `const filterTips = (query) => { }`
- `const tips = null` (vamos implementar a lógica dessa variável mais a frente)

Crie também estados para guardar todas as dicas (**allTips** como array vazio) e o filtro (**filter** como `null`).

---

> ## createTip
>
> Esta função deve receber os dados de uma dica e adicionar um objeto de dica ao estado **allTips**. Lembrando: os objetos allTips que já estiverem no estado devem permanecer lá (dica: use spread no estado anterior)
>
> Você pode receber como argumento um _objeto de dica_.

---

> ## filterTips
>
> Esta função deve receber a string com o filtro desejado e, caso exista um valor, deve settar o estado do filtro (_setFilter_) para o valor recebido. Se não, deve settar o estado para `null`

---

> ## tips
>
> A variável **tips** deve receber o valor da lista de dicas filtradas, sendo que:
>
> - **SE** filter for igual a `null`, deve retornar **allTips**
> - **SE NÃO**, deve retornar **allTips** filtrando o `tip.titulo` e verificando se `tip.titulo.includes(filter)`
>
> Altere o valor `null` atribuido inicialmente à variável e implemente a lógica acima.

---

Ainda dentro do componente **AppContext**, adicione as funções `createTip`, `filterTips` e a variável `tip` dentro de um objeto dentro do `value` do _Provider_:

```js
<Provider value={{createTip, filterTips, tips  }} ... />
```

---

Verifique se a aplicação está sendo exibido no `console` o objeto com as funções e a propriedade corretamente

## [M1S10] Ex 9 - Um presente e as categorias

Um desenvolvedor da equipe deixou pronta para utilizar na aplicação uma função que monta uma lista de objetos que indicam a **quantidade de dicas em cada uma das categorias** cadastradas pelo usuário.

A função é essa a seguir:

```js
const sortByCategory = () => {
  const categories = Array.from(new Set(allTips.map((tip) => tip.categoria)));
  return categories.map((catName) => {
    const count = allTips.filter((tip) => tip.categoria == catName).length;
    return { title: catName, count: count };
  });
};
```

---

## Desafio

De alguma forma, precisamos passar essa lista de `categories` para o nosso contexto, para ser utilizado pelo componente **Filter**.

### Você consegue implementar esta função?

## Dica: deve ser incluída no arquivo **app-context.jsx**

## [M1S10] Ex 10 - Finalizando a aplicação

Para finalizar, vamos consumir o nosso _context_ nos componentes onde se faz necessário.

### #MainContent

Neste componente, vamos consumir a lista de **tips**. Para cada **tip**, vamos renderizar um **TipCard**. Cada **TipCard** deve receber, como props, os dados da **tip**.

### #Filter

Neste componente, recebemos a função **filterTips** que deve ser chamada com o valor do `input` de texto do campo de busca. Você pode usar tanto o `event.target.value` como um **componente controlado** para fazer esta manipulação. Lembrando que a filtragem ocorre tanto quando o botão "buscar" é clicado como quando o botão "limpar" é clicado. A diferença é que, ao limpar a busca, o valor do argumento passado para **filterTips** deve ser `null`

### #Summary

Neste componente, através do contexto, devemos receber a lista de categorias com a contagem criada no exercício anterior (9) e deve renderizar um **SummaryCard** para cada categoria. Cada **SummaryCard** deve receber como título o nome da categoria e como valor a contagem dos itens.

Lembrando: o **SummaryCard** recebe, como props, `title` e `count`. Cada objeto de categoria tem esta estrutura: ` { title: "categoria", count: 1111 };`

---

### DESAFIO FINAL: Completando a aplicação

Ainda será preciso implementar a edição e a deleção dos cards. Tente realizar a implementação e conte com o auxílio dos docentes para tirar suas dúvidas!

Dicas:

- Utilize as funções do próprio React Hook Form para recarregar os dados do card em edição no formulário
- Utilize o método filter para realizar a deleção de um card
