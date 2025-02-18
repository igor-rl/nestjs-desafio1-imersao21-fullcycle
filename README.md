![header-igor-projetos](https://github.com/igor-rl/assets/blob/main/img/github-projetcs-header.jpg)

![header-igor-projetos](https://events-fullcycle.s3.amazonaws.com/events-fullcycle/media/images/a06b6a97db354487b1ee6bee9ef9f123.svg)

# Criando API de chat no Nest.js

### Informações do desafio
Neste desafio, você deve criar uma aplicação Nest.js com Docker que rode na porta 3000.

### Esta aplicação precisa expor 2 rotas de API Rest:

- Criar chat - POST /api/chats

- Listar chats - GET /api/chats


### Um chat tem os seguintes dados:

- ID (auto-incrementado)

- Mensagem (string)


O Nest.js precisa salvar e buscar os dados do banco de dados usando o Prisma, o banco de dados a ser utilizado precisa ser o SQLite e precisa ser commitado no projeto.

Crie o arquivo api.http para declarar as 2 chamadas a serem realizadas.

## Iniciar a aplicação com Docker
Instale as dependências:
```bash
docker compose up
```

Agora é só acessar a aplicação em [localhost:3000](http://127.0.0.1:3000).

<div align="center">

[![GitHub](https://img.shields.io/badge/GitHub-Igor_Lage-blue?style=social&logo=github)](https://github.com/igor-rl) 

![Static Badge](https://img.shields.io/badge/18--02--2024-black)


</div>