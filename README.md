Sistema de NPS

Essa é uma API de armazenamento de informações e coleta feedbacks de usuários.


# Sumário

- [Contexto](#contexto)
- [Tecnologias utilizadas](#tecnologias-utilizadas)
- [Dependências](#dependências)
- [Como rodar a aplicação](#como-rodar-a-aplicação)
- [Documentação da API](#documentação-da-api)

# Contexto 

Criar uma pesquisa com os seguintes campos: nome, email, value. A APi deve retornar também os valores do calculo NPS

# Tecnologias utilizadas

- **Ferramentas:** NodeJs, NPM, Insomnia, Swagger, Git e GitHub.
- **Linguagem:** JavaScript.
- **Frameworks, bibliotecas e plugins:** 
 - **Frontend**: ReactJs, Vite, Tailwind, Postcss, Eslint, Axios.
 - **Backend**: NodeJs, Express, Cors, date-fns, JOI.
- **Banco de dados:** MongoDB

# Dependências

Você precisará de [Git](https://git-scm.com/downloads), e [Mongo](https://www.mongodb.com) e talvez uma chave [SSH](https://docs.github.com/pt/authentication/connecting-to-github-with-ssh/about-ssh).


# Como rodar a aplicação

1. No terminal, clone o repositório:
```sh
git clone git@github.com:Raph2ll/Sistema-NPS.git
```

2. Entre na pasta do repositório clonado:

```sh
cd Sistema-NPS
```

3. Instale as dependencias 

```sh
npm i && npm run buildAll
```

4. Inicie a aplicação:

```sh
 npm start
```

# Documentação da API

Com a aplicação já em execução, acesse a documentação em seu navegador pela URL http://localhost:3000/api-docs.
