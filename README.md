# challenge-inGaia-backend

Desafio proposto pela inGaia para desenvolvimento de microservices.

# ⚔ Desafio

Criar 2 API's.
- API 01 - retorna o valor de um m².
- API 02 - recebe uma metragem e calcula o valor do m² e retorna o total.
- A API 02 deve consultar a API 01 para calcluar o valor e retornar o total calculado.

# 📝 Projeto

Foi desenvolvido em NodeJS com Typescript as duas API's.
Ao chamar a API-01 na rota "/imovel/calcular" é feita uma chamada para a API-02 na rota "/preco" pegando o valor de um m² e fazendo o cálculo para retornar o valor total para a aplicação.

Inserido testes de integração e unitário. 
Os testes podem ser feitos ao clonar esse repositório.

Foi desenvolvido também a documentação do projeto nas duas API's, sendo acessado pela rota "/api-docs".

# 📦 Iniciando


### Execução

- ###### Instalar os packages da api-01

`$ cd api-calc-metro-quadrado`

`$ yarn`

- ###### Executar a api-01

`$ yarn dev:server`

- ###### Instalar os packages da api-02

`$ cd api-valor-metro-quadrado`

`$ yarn`

- ###### Executar a api-01

`$ yarn dev:server`

### Testes

#### API-01

`$ cd api-valor-metro-quadrado`

`$ yarn test`

#### API-02

⚠ Informação importante

Para realizar os testes da api-02, é necessário deixar executando a api-01.

`$ cd api-calc-metro-quadrado`

`$ yarn test`

### Docker

⚠ Informação importante

Necessário ter o [Docker](https://www.docker.com/) instalado e precisa editar a variável ambiente no arquivo .env dentro da pasta api-calc-metro-quadrado.

De:

`BASE_URL_API_1=http://localhost:3001`

Para:

`BASE_URL_API_1=http://api01:3001`

Após isso, entrar na pasta challenge-inGaia-backend e rodar o seguinte comando:

`docker-compose up`

Aguardar a instalação e acessar via localhost na porta 3001 para a API-01 e via localhost na porta 3000 para a API-02.

### Documentação

Acessar a rota nas duas API's 

> /api-docs

### Utilização

Fazer uma chamada na rota API-01

> /preco

Fazer uma chamada na rota API-02

> /imovel/calcular


# 🏳 Oficial
 -  [API-01](https://api-01-ingaia-backend.herokuapp.com/)
 -  [API-02](https://api-02-ingaia-backend.herokuapp.com/)



# 💻 Tecnologias

 - [Typescript](https://www.typescriptlang.org/)
 - [Axios](https://github.com/axios/axios)
 - [Docker](https://www.docker.com/)
 - [Express](https://expressjs.com/pt-br/)
 - [SwaggerJsDoc](https://github.com/Surnet/swagger-jsdoc)
 - [Swagger UI Express](https://github.com/scottie1984/swagger-ui-express)
 - [Babel](https://babeljs.io)
 - [Jest](https://jestjs.io/pt-BR/)
  
 
