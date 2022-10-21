# [M1S04] Roteiro de projeto - Conta bancária

Vamos desenvolver um fluxo para criação de um sistema de conta bancária, onde o usuário poderá sacar ou depositar um determinado valor em sua conta.

Os exercícios 1 a 7 são dependentes, então precisam ser feitos na sequência.

## [M1S04] Ex 1 - Conta bancaria Parte 1

Vamos criar a estrutura inicial do projeto para desenvolvimento do sistema de conta bancária.

- Crie um arquivo index.html com a estrutura básica do html adicionando o título do seu sistema (escolha o nome que quiser)
- Crie um arquivo index.js e adicione ele o link dele no arquivo index.html
- Caso queira estilizar e deixar sua página lindona crie um index.css e adicione o link dele no html
- Realize o commit no github dessa parte

## [M1S04] Ex 2 - Conta bancaria Parte 2

Vamos criar os campos para que o usuário consiga fazer as operações bancárias:

- Adicione um select para exibir as contas dos clientes (por enquanto sem nenhuma opção);
- Adicione um input com o placeholder Valor;
- Adicione um select com as opções:
  -- Sacar
  -- Depositar
- Adicione um botão com o texto Confirmar

## [M1S04] Ex 3 - Conta bancaria Parte 3

Vamos criar as contas dos nossos cliente e adicionar opções ao select de contas:

- No arquivo index.js declare como variável em seu código o array de contas de clientes abaixo (fique a vontade para mudar os valores):
  `const contasClientes = [ { id: 1, nome: 'Cliente 01', saldo: 500, }, { id: 2, nome: 'Cliente 02', saldo: 3000, }, { id: 3, nome: 'Cliente 03', saldo: 5000, }, ];`
- Crie uma função para adicionar as opções do select de contas com os itens do array.
- No evento de onload do body chame essa função para popular o select de contas.

## [M1S04] Ex 4 - Conta bancaria Parte 4

Vamos criar a função de saque que deve ser executada caso a opção selecionada no select seja saque

1. Crie uma função para sacar dinheiro que deve receber como parâmetro o valor a ser sacado e o id da conta;
   1.1. Se o valor for menor ou igual zero deve exibir a mensagem de valor inválido e não realizar nenhuma operação;
   1.2. Se o valor for maior que o saldo em conta deve exibir a mensagem de saldo insuficiente e exibir o saldo atual;
   1.3. Se o valor for maior que zero e menor que o saldo em conta deve exibir a mensagem informado que o saque ocorreu com sucesso e o saldo atual da conta após o saque, além de atualizar o array com esse novo valor;

_Dica: Dê uma olhadinha em find, map, if..._

## [M1S04] Ex 5 - Conta bancaria Parte 5

Vamos

3. Criar função para depositar dinheiro que deve receber como parâmetro o valor a ser depositado e o id da conta;
   3.1. Se o valor for menor ou igual zero deve exibir a mensagem de valor inválido e não realizar nenhuma operação;
   3.2. Se o valor for maior que zero deve exibir a mensagem informado que o deposito ocorreu com sucesso e o saldo atual da conta após o deposito, além de atualizar o array com esse novo valor;

_Dica: Dê uma olhadinha em find, map, if..._

## [M1S04] Ex 6 - Conta bancaria Parte 6

Agora vamos conectar as funções criadas nos exercícios 6 e 7.

- Criar função para efetuar a operação de saque ou deposito de acordo com o que foi selecionado no select.
- A função deve ser chamada ao clicar no botão confirmar.
- Validar se todos os campos estão preenchidos, caso algum não esteja apresentar mensagem ao usuário.
- Por garantia validar se a conta selecionada no select existe no array.

## [M1S04] Ex 7 - Conta bancaria Parte 7

Vamos adicionar mais seguraça a nossa aplicação.

- No arrray de contas em cada cliente adicionar uma nova propriedade para armazenar uma senha. Crie valores diferentes de senha para cada cliente.
- Adicionar input para digitar a senha.
- Na função chamada no botão confirmar validar se a senha digitada no input é igual a senha que contém na conta desse cliente:
  -- Se a senha for diferente exibir mensagem de senha inválida
  -- Se a senha for igual seguir o fluxo normalmente para realizar a operação desejada.

## [M1S04] Ex 8 - Número é par ou ímpar

Dado um número verifique se ele é par, caso seja exibe a mensagem de que ele é par, caso não exibe a mensagem de que ele é impar.

- Adicionar um input html
- Adicionar um botão html
- Criar uma função para fazer a verificação
- Exibir o resultado

_dica: operador ternário pode ser uma boa_

## [M1S04] Ex 9 - Dado uma idade exibe a classificação dela

Utilizando estrutura condicional **exiba** a descrição da classificação da **idade** da pessoa de acordo com os dados abaixo:

Jovens - Indivíduos de até 15 anos;
Adultos - Indivíduos com idade entre 16 até 64 anos;
Idosos - Indivíduos de 65 anos em diante.

- Adicione um input html com o placeholder "Informe sua idade"
- Adicione um button html com o texto Classificar
- Crie a função JS para realializar a classificação da idade que deve ser chamada no evento de click do botão classificar
- Exiba o resultado da classificação para o usuário.

## [M1S04] Ex 10 - Estação do ano

Vamos criar uma página para exibir a estação do ano

- Adicione um input do tipo data
- No evento de onchange do input chamar a função para verificar a estação
- Criar função para verificar qual a estação atual do ano no hemisfério sul, ela deve adicionar o texto e a imagem que representa a estação da data.
  Considere:
  -- 22/12 a 21/03 - Verão;
  -- 22/03 a 21/06 - Outono;
  -- 22/06 a 21/09 - Inverno;
  -- 22/09 a 21/12 - Primavera.
- A página deve conter um texto e uma imagem, ambos representando a estação.

---
