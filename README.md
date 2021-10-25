<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Estrutura do projeto

Este projeto está estruturado com base no padrão MVC. Todos os arquivos que contém tanto a lógica de negócios quanto os testes de unidade de services podem ser encontrados na pasta 'src'.

## Depêdencias

- [Yarn](https://yarnpkg.com/)
- [Mongo](https://www.mongodb.com/pt-br)
- [Docker](https://www.docker.com/)

## Variaveis de ambiente

- PORT= #Porta utilizada para iniciar o serviço
- MONGO_URL= #URL do banco
- SECRET= #Valor para auxiliar na criaçao do token
- EXPIRES_IN= #Tempo de expiração do token
- SHOPIFY_KEY= #Chave da shopify
- SHOPIFY_PASSWORD= #Senha da shopify
- SHOPIFY_URL= #URL da shopify
- SALT= #Quantidade de saltos para fazer hash da senha
- SERVICE_SMTP= #Serviço utilizado para o envio de email
- USER_SMTP= #Email de usuário
- PASSWORD_SMTP= #Senha de usuário
- TIME_INTERVAL= #Tempo para envio de emails

## Instalação com docker no Linux

1. Instale o docker e o docker-compose

2. clone este repositório:

   ```shell
     git clone https://github.com/yuregl/backend-sa.git
     cd backend-as
   ```

3. Crie um arquivo chamado .env com o conteúdo de `.env.example` e preencha os campos:

   ```shell
    cp .env.example .env
    vi .env
   ```

4. Crie e levante o container usando o `docker-compose`:

   ```shell
     docker-compose up  -d
   ```

5. Testes

   ```shell
     yarn test
   ```

6. Para acessar o serviço `http://localhost:${PORT}`

7. Para acessar a documentação `http://localhost:${PORT}/api`

## License

Nest is [MIT licensed](LICENSE).
