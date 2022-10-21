## [M1S11] Ex 1 - Setup Inicial

Vamos começar criando o projeto e instalando as dependencias necessários para o desenvolvimento dos exercícios da semana.

- Criar um projeto usando Vite;
- Instalar a dependencia do styled components;
- Configurar o ESLint [Manual configuração](https://github.com/DEVin-Intelbras/documentacoes-react/blob/main/lint.md).

## [M1S11] Ex 2 - Configuração do tema utilizando styled components

Vamos configurar os temas da nossa aplicação.

- Criar uma pasta de temas e dentro dela adicione arquivos contendo um tema dark e um light. 
   - Cada tema deve conter pelo menos: 
      - cor do background;
      - cor do background do header;
      - cor primária;
      - cor secundária.
- Crie um style global dentro da pasta de temas removendo margin, padding e defina box-sizing: border-box

## [M1S11] Ex 3 - Criar um contexto para armazenar o tema

Vamos criar um contexto que será responsável por armazenar o tema escolhido pelo usuário.

- Crie um contexto utilizando createContext
- Crie um provider para o contexto
   - Adicione um useState que irá armazenar a informação do tema selecionado (dark ou light) inicie ele com o tema dark;
   - Crie uma função para atualizar o tema selecionado (atualizar o useState):
      - Se for dark altera para light;
      - Se for light altera para dark.
   - Salve no local storage o tema selecionado a cada alteração;
   - Recupere o tema salvo no local storage ao renderizar o componente (useEffect);
   - Exporte no provider o tema selecionado e a função para trocar de tema;
- Crie um custom hook para export o contexto (useContext)
- Adicione no App o provider criado.

## [M1S11] Ex 4 - Criar o layout da aplicação

Vamos criar o layout de nossa aplicação

- Crie uma pasta chamada layout e dentro dela o arquivo do componente e o index para realizar o export;
- Adicione o custom hook para obter o tema selecionado;
- Adicione o provider do styled components definindo o theme de acordo com o valor selecionado;
   - Como estamos armazenando a string precisa ser feito uma validação e adicionar o tema correto, lembre de importar os temas criados no exercício 2;
- Adicione o style global criado no exercício 2;
- No app dentro do provider adicione esse componente criado.

## [M1S11] Ex 5 - Criar o header

Vamos criar o componente de Header da aplicação

- Crie um componente de Navbar contendo:
   - Logo;
   - Nome da aplicação;
   - Botão para alterar o tema.
- Estilize utilizando styled components;
   - Adicione o background utilizando a cor definida no tema;
   - Adicione o nome da aplicação com a cor definida na cor primária;
   - Adicione o background do botão com a cor secundária e o texto com a cor primária.
- No click do botão execute a função de troca de tema exportada pelo provider utilizando o custom hook para obter ela.
- Adicione esse componente no arquivo do layout;

## [M1S11] Ex 6 - Criar um contexto para armazenar os perfis

Vamos criar um contexto que será responsável por armazenar os perfils de usuários:

- Crie um arquivo JSON contendo os perfils (array):
   - O esqueleto do item pode ser o seguinte:
      ```json
      [{
          "id": 1,
          "iniciaisNome": "TB",
          "nome": "Thais Bertoldo",
          "descricao": "Desenvoldora de software JavaScript",
          "seguindo": false 
      }]
      ```
- Crie um contexto utilizando createContext
- Crie um provider para o contexto
   - Adicione um useState que irá armazenar os perfis de usuários o valor inicial dele deve ser o json criado;
   - Crie uma função para seguir/deixar de seguir o perfil (atualizar o useState) receba o id do perfil como parametro:
      - Se for seguindo alterar para não seguindo;
      - Se for não seguindo altera para seguindo.
   - Salve no local storage a lista dos perfils a cada alteração;
   - Recupere os perfils salvos no local storage ao renderizar o componente (useEffect);
   - Exporte no provider os perfils e a função de seguir/deixar de seguir
- Crie um custom hook para exportar o contexto (useContext)
- Adicione no arquivo do layout o provider criado.

## [M1S11] Ex 7 - Criar o card

Vamos criar o componente do card para exibir os perfis

- Crie um componente para o card contendo: 
   - Iniciais do nome do usuário;
   - Nome;
   - Descrição;
   - Botão de seguir/desseguir.
- Deve ser utilizado duas cores diferentes para o botão, se estiver seguindo será uma cor, se não estiver deve ser outra cor;
- Utilize styled components para realizar a estilização. 
- Utilize apenas cores do tema, fique livre para adicionar mais cores nele além das solicitadas no exercício 2.

## [M1S11] Ex 8 - Criar a página de listar perfils

Vamos criar uma página para listar os perfils criados.

- Crie uma página;
- Obtenha os perfils através do custom hook;
- Renderize a lista de perfils utilizando o card criado no exercício anterior;
- Adicione a página no arquivo do layout.


## [M1S11] Ex 9 - Adicionar função de seguir/deixar de seguir no card

Vamos adicionar a chamada a função de seguir/deixar de seguir no card

- Adicionar no evento de onClick do botão de seguir/deixar de seguir do card a chamada para a função exportada no provider utilizando o custom hook.

## [M1S11] Ex 10 - Realizar o deploy da aplicação

Vamos realizar o deploy da aplicação utilizando Netlify

- Realizar o push dos códigos no github;
- Acessar o Netlify e criar um novo site seguindo o passo a passo;
- Verificar se o site foi publicado e está funcionando corretamente.