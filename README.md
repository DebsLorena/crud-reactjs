
Como me preparei para uma entrevista

Roadmap
- [] HTML / CSS 
- [] Github / Git
- [] JavaScript 
- [] TypeScript
- [] Backend Node.Js
    - Banco de dados: * Relacionais: Postgres / MySQL
    - Não Relacionais: MongoDB
  - CRUD
  - Login com JWT
- [] Frontend React
  - Criar uma app
  - Componentes
  - Hooks
  - Rotas
  - Context
  - Styled Components

Teste de desenvolvimento de sistemas (ReactJs e NodeJs) Vaga Júnior

1 - Criar um site e gereciamento de repositórios do GitHub com login e senha que permita adicionar repositórios de outras pessoas em um banco de dado não relacional. (Usarei MongoDB)
2 - O sistema apresetará uma página iniciap para o usuário informar o Login e senha, com o botão de entrar.
3 - Na segunda tela deverá listar automaticamente ao entrar todos os repositórios que o usuário tiver no banco de dados, com o nome do usuário e o url do repositório. (Sem que liste repositórios de outros usuários)
4 - Deverá ter uma maneira de pesquisar os repositórios já cadastrados.
5 - Exibir alista de repositórios e um botão para excluir um determiado repositório, fazendo um pergunta se o usuário relamente deseja excluir.
6 - Deverá ter uma forma de adicionar um novo repositório, validando se ele existe.


Backend
- mkdir react-node-mongo-backend
- npm init -y
- - criar pasta src 
- criar app.js dentro de src
- criar server.js dentro de src
- npm i cors [é um pacote node.js para fornecer um middleware Connect / Express]
- npm i express [é um framework que fornece recursos para a construção de servidores web]
- npm i --save-dev sucrase [é uma alternativa ao Babel que permite compilações de desenvolvimento]
- npm i --save-dev nodemon [reinicia automaticamente o aplicativo quando são detectadas alterações]
- criar arquivo nodemon.json
- incluir scripts no package.json
- npm run dev [inicia o local hocalhost5000]
- criar pasta controllers dentro de src
- criar HelloController dentro de controllers
- npm i mongoose [ferramenta de modelagem de objetos]
- npm i dotenv --save [armazenamento da configuração no ambiente separado do código]
- criar pasta config dentro de src
- criar database dentro de config
- criar .env
- criar .gitignore
- criar pasta database
- criar arquivo index dentro de database
- criar pasta models
- criar arquivo User em models
- criar arquivo Repository em models
- criar UsersController em controllers
- testes de rotas executados com Insommia Rest
- instalar npm install bcryptjs [criptografar password]
- criar a pasta services
- criar o arquivo auth.js em services
- criar o arquivo RepositoriesController em controllers
- criar pasta middlewares 
- criar o arquivo auth.js em middlewares
- npm i jsonwebtoken [jwt]
- criar o arquivo auth.js em config
- criar o arquivo SessionsController.js em controllers


- 

Criar App React 
- npx create-react-app
- npm start [para iniciar]
- excluir de arquivos desnecessários
- criar pasta page - pasta MainPage - criar arquivo index.jsx
- criar pasta LoginPage em pages - criar arquivo index.jsx
Instalar bibliotecas
- npm i react-router-dom
- 