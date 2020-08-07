<h1 align="center">
    <img alt="NextLevelWeek" title="#NextLevelWeek" src="img/logo.svg" width="250px" />
</h1>

<h4 align="center"> 
	:construction: NextLevelWeek 2.0 🚀 In progress.. :construction:<br></br>
	<h2 align="center"><a href="https://hellyson-ferreira.github.io/NLW-2/">Ver site do 💻 Projeto</a></h2>
</h4>

## :information_source: O que é o Next Level Week?

O NLW é uma semana prática com muito código, desafios, networking e um único objetivo: te levar para o próximo nível.

Através do nosso método você vai aprender novas ferramentas, conhecer novas tecnologias e descobrir hacks que vão impulsionar a sua carreira.

Um evento online e totalmente gratuito que vai te ajudar a dar o próximo passo na sua evolução como dev.

## 💻 Projeto

O Proffy é uma proposta de projeto que facilita a vida de professores e alunos, uma plataforma onde  professores e alunos para conectar e organizar aulas de diferentes disciplinas.

## :rocket: Tecnologias

Este projeto contém as seguintes tecnologias:

- <code><img height="20" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png"></code>[React](https://reactjs.org)
- <code><img height="20" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png"></code>[Node.js](https://nodejs.org/en/)
- <code><img height="20" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/express/express.png"></code>[Express](https://expressjs.com/pt-br/)
- <code><img height="20" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/typescript/typescript.png"></code>[TypeScript](https://www.typescriptlang.org/)
- <code><img height="20" src="https://cdn.icon-icons.com/icons2/2389/PNG/512/expo_logo_icon_145293.png"></code>[Expo](https://expo.io/)
- <code><img height="20" src="http://knexjs.org/assets/images/knex.png"></code>[Knex](http://knexjs.org/)
- <code><img height="20" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/sql/sql.png"></code>[Sqlite3](https://www.sqlite.org/index.html)


## 🔖 Como Executar

#### Clonando o projeto
```sh

git clone https://github.com/Hellyson-Ferreira/NLW-2.git

```
#### Instalação Web
No seu terminal, siga as instruções abaixo para instalar a dependência no projeto.
```sh

cd web
yarn add react-router-dom
yarn add @types/react-router-dom -D

```
É nescessário passar @types pois no projeto é utilizado linguagem tipada (TypeScript).

#### Instalação Server
No seu terminal, siga as instruções abaixo para instalar a dependência no projeto.
```sh

cd server
yarn add ts-node-dev -D
yarn add express
yarn add @types/express -D
yarn add knex sqlite3
yarn add cors

```
É nescessário passar @types pois no projeto é utilizado linguagem tipada (TypeScript).

#### Gerar banco de dados
```sh

cd server
yarn knex:migrate

```

#### Iniciando a aplicação Web
```sh

cd web
yarn start

```

#### Iniciando a aplicação Server
```sh

cd server
yarn start

```

## License
<p align="justify">
This project is licensed under the <a href="https://github.com/Hellyson-Ferreira/NLW-2/blob/master/LICENSE">MIT<a/> License
</p>
    
---
