# [M1S01] Roteiro de Exercícios

**Olá Dev!**

Leia atentamente as informações deste card pois ele servirá para lhe guiar na realização dos projetos **1 a 7**.

---

O objetivo desses exercícios é criar uma página para exibição de **eventos** utilizando **HTML Semântico e CSS**.
Esta página deve conter:

- Barra de navegação (nav)
- Cabeçalho (header)
- Um evento destacado como se fosse um banner
- Listagem dos demais eventos
- Formulário para entrar em contato
- Footer

Os exercícios devem ser **realizados** na **sequencia proposta**, pois um complementa o outro.

---

Sites para se inspirar:

- https://www.sympla.com.br/
- https://www.eventim.com.br/
- https://www.even3.com.br/eventos/

**Descrição**: \
O conjunto de exercícios dessa semana resulta em uma página básica HTML com alguns estilos CSS. Com exceção do primeiro, cada exercício depende da conclusão do anterior. Faça os exercícios da Semana 1 do Módulo 1 em ordem para que, ao final, seja concluída nossa primeira página web aqui do DEVinHouse. 😉

---

## [M1S02] Ex 1 - Primeiros passos

Nesta tarefa você deve criar um projeto adicionando os arquivos necessários para desenvolver os próximos exercícios.

Pré-requisitos:

- Possuir a extensão [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) instalada

---

## [M1S02] Ex 2 - Barra de navegação e Cabeçalho

Nesta tarefa deve ser criada uma barra de navegação (navbar):

- Deve possuir um menu com links para "Eventos", "sobre" e "contato"
- Deve exibir o nome do site (você deve escolher um nome)
- Podem ser adicionadas mais informações que você achar relevante, como por exemplo logo.
- Deve ser criada utilizando HTML semântico

---

## [M1S02] Ex 3 - Evento destacado

Nesta tarefa deve ser adicionado um evento destacado contendo:

- Informações do evento como data, detalhes, e demais informações que achar relevante
- Deve ocupar toda a largura da tela
- Deve conter uma imagem
- Deve ser criada utilizando HTML semântico

---

## [M1S02] Ex 4 - Listagem de eventos

Nesta tarefa deve ser adicionado uma listagem de eventos:

- Deve conter uma imagem
- Deve conter demais informações que achar relevante, como data, detalhes...
- Deve ser exibidos 3 eventos por linha quando for desktop
- Deve ser exibido apenas 1 evento por linha quando for mobile
- Deve ser utilizado HTML semântico

## [M1S02] Ex 5 - Formulário Contato

Nesta tarefa deve ser adicionado um formulário para os interessados entrarem em contato.

- Deve possuir um campo de nome, e-mail e descrição
- Deve possuir um botão de enviar _(não precisa adicionar nenhuma ação, apenas adicionar o botão na tela)_
- Utilizar HTML Semântico

## [M1S02] Ex 6 - Footer

Nesta tarefa deve ser adicionado um footer contendo:

- Informações para contato
- Informações de endereço
- Demais informações que achar importante.
- Informações de copyright
- Deve ficar no final da página mas não deve ser fixo
- Deve ser utilizado HTML semântico

## [M1S02] Ex 7 - Adicionar funcionalidade ao botão de enviar do formulário

Nesta tarefa de ser adicionado evento de click ao botão de enviar do formulário de contato desenvolvido no exercício 5.

- Desenvolver código JavaScript que deve exibir no console log (console.log) os dados digitados no formulário com o seguinte formato:
  Formulário de contato => Nome: xxxx - E-mail: xxxx - Descriçao: xxx
- Deve ser exibido alerta para o usuário que o formulário foi enviado com sucesso. (alert)

## [M1S02] Ex 8 - Calcule a diferença de anos e exiba na tela

- Faça 1 prompt ao usuário perguntando um ano.
- Calcule a diferença de ano entre o ano digitado e o ano atual, para obter o ano atual utilize new Date().getFullYear();
- Exiba na tela um alert contendo o resultado;

## [M1S02] Ex 9 - Crie um contador

- Adicione no HTML um botão com o texto -
- Adicione no HTML um botão com o texto +
- Adicione no HTML um p com com o texto 0
- Crie uma variável e inicie ela com o valor 0
- Codifique o script JS responsável por decrementar o valor da variável contador e adicionar esse valor ao elemento p criado e vincule ela ao evento de click do botão com o texto -
- Codifique o script JS responsável por incrementar o valor da variável contador e adicionar esse valor ao elemento p criado e vincule ela ao evento de click do botão com o texto +

## [M1S02] Ex 10 - Manipulando DOM

- Crie uma página html e adicione um título h1 com a descrição "Título da página";
- Adicione um input com o placeholder conteúdo do título
- Adicione um botão com a descrição "Alterar título" e adicione o evento de click nele para uma função javascript;
- Crie a função javascript para alterar o título, nela deve ser buscado o elemento h1 e alterado o texto para o valor digitado no input;
