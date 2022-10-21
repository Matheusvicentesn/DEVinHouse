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

# Baseado em:


## [M1S07] - Ex 1 - Criar Projeto - Setup do Inicial

Criação do projeto:

- Criar um projeto React utilizando o vite:
  - npm create vite@latest **NOME_DO_PROJETO** --template react
- Remova os códigos que não serão utilizados, deixando a página apenas com um h1 com o nome do seu restaurante;
- Adicione no título da página o nome do seu restaurante, para que seja exibido na aba do navegador;
- Adicione o favicon com a logo do seu restaurante.
- Instale a dependência do propTypes em seu projeto, para poder realizar a validacão de props dos seus componetes.

---

## [M1S07] - Ex 2 - Criar Navbar

- Criação de menu (navbar) no topo do site
  - Crie um componente e adicione a logo, nome da aplicação e um item de menu chamado cardápio;
  - Adicione o componente no app da aplicação;
  - Valide se está tudo funcionando;
  - Realize o commit no github.

---

## [M1S07] - Ex 3 - Criar Footer

- Criação de rodapé (footer)
  - Crie um componente e adicione informações da empresa, como endereço, redes sociais, horários de funcionamento e copyright
  - Adicione o componente no app da aplicação;
  - Valide se está tudo funcionando;
  - Realize o commit no github.

## [M1S07] - Ex 4 - Criar componente de card para exibição dos produtos

- Crie um componente de card que será responsável por exibir os produtos do restaurante, sejam eles pratos, bebidas...
  - Adicione uma imagem do produto;
  - Adicione o nome do produto;
  - Adicione uma breve descricão do produto;
  - Adicione o valor do produto;
  - Adicione a informacão de tempo de preparo;
- Todas essas informações devem ser recebidas como props do componente;
- Adicione validação das propriedades usando PropTypes;
- Adicione no app o componente criado passando as propriedades solicitadas;
- Valide se está tudo funcionando;
- Realize o commit no github.

## [M1S07] - Ex 5 - Criar componente de Seção dos produtos

- Crie um componente para criar as seções dos produtos, por exemplo, entradas, pratos principais, bebidas...
  - Adicione titulo da seção (h2);
  - Adicione a renderização da lista de produtos utilizando o componente card criado no exercicio 3 e o array recebido por props;
    - Lembre-se de utilizar key na renderização da lista.
- Receba por props o titulo da seção e um array contendo os produtos a serem renderizados;
- Adicione validação das propriedades usando PropTypes;
- Remova do app o card adicionado no exercício 3;
- Adicione no app o componente criado passando as propriedades solicitadas;
- Valide se está tudo funcionando;
- Realize o commit no github.

## [M1S07] - Ex 6 - Adicionar seções no app

- No app crie as seguintes seções utilizando o componente de secões criadas no exercício anterior
  - Entradas;
  - Saladas;
  - Pratos principais;
  - Sobremesas;
  - Bebidas;
- Adicione pelo pelos 5 itens em cada seção.
  - Os itens devem possuir as seguintes propriedades:
    - Imagem;
    - Nome;
    - Descrição;
    - Preço;
    - Tempo de preparo
    - Sub-seção (opcional) - (por exemplo: carnes, massas...)
- Valide se está tudo funcionando;
- Realize o commit no github.

**Importante:** Para ficar mais legível o código, crie um arquivo json, adicione os itens nele, e importe esses itens criados no app.

**Cardápios com ideias de pratos para auxiliar na criação dos itens: **

- [lacaceria](https://www.lacaceria.com.br/_files/ugd/a4d4e4_0d251e43fde54f39ac64991737869bba.pdf)
- [cantinadodelio](http://www.menudigital.site/cantinadodelio/)

## [M1S07] - Ex 7 - Criar sub-seções

Para facilitar a organização do nosso cardápio vamos adicionar a possibilidade de criar sub-seções dentro de algumas seções do cardápio.

- Vamos alterar o componente de seções criado anteriormente para suportar as sub-seções, para isso vamos receber uma propriedade opcional contendo um array de string com as sub-seções;
- Caso o array tenha um tamanho maior que 0 vamos percorrer (map) as sub-seções do array:
  - Adicionar um subtitulo (h3) com a descrição da sub-seção;
  - Adicionar um filter no array de produtos filtrando apenas os itens da seção e um map para renderizando os cards;
- Caso o array de sub-seções não exista ou tenha tamanho 0, o comportamento deve ser renderizar apenas a seção com os itens, ou seja, continuar com o corportamento anterior.
- Para testar no app adicione na seção de pratos principais a prop de sub seções passando o array com os itens carnes e massas;
- Realize o commit no github.

## [M1S07] - Ex 8 - Adicionar sub-seções no app

- No app adicione na seção de pratos principais as seguintes sub-seções:
  - Carnes vermelhas;
  - Aves;
  - Peixes e frutos do mar;
  - Massas;
  - Risotos
- No app adicione na seção de bebidas as se
  - Sem àlcool;
  - Vinhos;
  - Drinks;
  - Cervejas;
- Adicione mais itens no array de produtos para que tenha pelo menos 3 itens em cada sub-seção;
- Teste se tudo está funcionando corretamente;
- Realize o commit no github

## [M1S07] - Ex 9 - Adicionar estilos à aplicação

Vamos estilizar nossa aplicação

- Deixe a Navbar no top da página mas não precisa ser fixa;
- Deixe o footer sempre no final da página, mas sem ser fixo.
- Deve ser exibido 3 cards por linha;
- Estilize os cards e os titulos de seções e sub-seções como preferir;
- Valide se tudo está funcionando corretamente;
- Realize o commit no github.

## [M1S07] - Ex 10 - Adicionar responsividade à aplicação

- Quando a resolução for tablet deve ser exibido 2 cards por linha;
- Quando a resolução for mobile deve ser exibido apenas um card por linha;

## [M1S07] - Ex 11 - Documentar o projeto

- Vamos criar um readme.md que deve conter:
  - Uma breve descrição sobre o que se trata o projeto;
  - Tecnologias utilizadas;
  - Comandos para conseguir executar o projeto;
  - Print da tela contendo o conteúdo desenvolvido;
  - Demais informações que achar interessante.
- Realizar o commit no github.

**Dica:** [Como escrever um bom readme](https://blog.rocketseat.com.br/como-fazer-um-bom-readme/)

## [M1S01] Ex 11 - Trabalhando com Flex em coluna

- Etiquetas:
  - Módulo 1
  - Baixa Prioridade
  - Fácil

**Descrição**: \
Adicione na página “index.html” um layout com flexbox com direção de coluna. Aplique ao elemento body ou crie um elemento container que abrace todo o conteúdo da página e, com display flex, distribua os elementos verticalmente, uma abaixo do outro.

Sugestão: Experimente alinhar os itens para a esquerda, para a direita e ao centro.

---


