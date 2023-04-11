# Create a CRUD Full-stack Application

## About
Create a simple CRUD full stack app with the following tech stack:

<img src="https://img.shields.io/badge/React-61DAFB.svg?style=for-the-badge&logo=React&logoColor=black"></img>
<img src="https://img.shields.io/badge/Node.js-339933.svg?style=for-the-badge&logo=nodedotjs&logoColor=white"></img>
<img src="https://img.shields.io/badge/Express-000000.svg?style=for-the-badge&logo=Express&logoColor=white"></img>
<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black"></img>
<img src="https://img.shields.io/badge/TypeScript-3178C6.svg?style=for-the-badge&logo=TypeScript&logoColor=white"></img>

and whichever database you prefer. For this exercise, the following databases I've used are:

<img src="https://img.shields.io/badge/MongoDB-47A248.svg?style=for-the-badge&logo=MongoDB&logoColor=white"></img>
<img src="https://img.shields.io/badge/MySQL-4479A1.svg?style=for-the-badge&logo=MySQL&logoColor=white"></img>
<img src="https://img.shields.io/badge/PostgreSQL-4169E1.svg?style=for-the-badge&logo=PostgreSQL&logoColor=white"></img>

## Table of Contents
- [Create a CRUD Full-stack Application](#create-a-crud-full-stack-application)
  - [About](#about)
  - [Table of Contents](#table-of-contents)
  - [Getting Started](#getting-started)
    - [package.json and prettier/eslint/editorconfig wombocombo](#packagejson-and-prettiereslinteditorconfig-wombocombo)
  - [webpack dev server bundler and swc compiler](#webpack-dev-server-bundler-and-swc-compiler)
    - [Initial Files (src/dist)](#initial-files-srcdist)
    - [Test on the Browser](#test-on-the-browser)
  - [Creating a Server and Database](#creating-a-server-and-database)
    - [Setting up our Database](#setting-up-our-database)
    - [Setting up our Express.js Server](#setting-up-our-expressjs-server)
  - [Contributors](#contributors)

Please follow the steps below, step-by-step, to setup the appropriate packages in order to get a running application up locally. Create a new git repository and begin following the instructions below.

## Getting Started

### package.json and prettier/eslint/editorconfig wombocombo

1. To create <a ref="https://blog.ezekielekunola.com/understanding-the-package.json-file">package.json</a> and skip <a ref="https://docs.npmjs.com/cli/v9/commands/npm-init">the questionnaire altogether</a>, open VS code terminal with `ctrl + tilda` and write in the terminal the following command:

```
npm init -y
```

2. To setup <a ref="https://prettier.io/docs/en/options.html">prettier</a>, <a ref="https://eslint.org/">eslint</a>, <a ref="https://editorconfig.org/">editorconfig</a> wombocombo as <a ref="https://www.knowledgehut.com/blog/web-development/npm-install-dev-dependencies">dev dependencies.</a> These extensions are essential when working in codebases where many people are collaborating. Eslint will help enforce code styles, prettier will format code, and editorconfig will enforce defined coding styles for multiple developers across multiple devices: you can think linux, mac, and windows operating systems. Please make sure you have prettier and eslint installed on vscode.

```
npm i -D prettier eslint-plugin-prettier eslint-config-prettier eslint-plugin-node eslint-config-node
```

3. In terms of style guides, Airbnb has one of the most popular for writing concise, clean and readable JavaScript code. Here are a few <a ref="https://tinyurl.com/5cmhcfxf">examples</a> if you're interested in learning more. The Airbnb style guide is quite strict, so this is an <b>optional step</b>.

```
npx install-peerdeps --dev eslint-config-airbnb
```

1. Now that you have the wombocombo setup, please <b>copy and paste the `.editorconfig`, `.eslintrc.json` and `.prettierrc` files</b> in this github repo over to your new project. I've already created the config files so that you can start coding. If you'd like to make your own changes, please refer to docs and online resources. To setup the config files yourself and learn more, refer to this <a ref="https://www.youtube.com/watch?v=SydnKbGc7W8&t=378s&ab_channel=TraversyMedia">video</a>. At this stage, your repository should look similar to the photo below.

| Checkpoint 1
:-:
<img src="https://user-images.githubusercontent.com/104607182/230505198-86deb36d-3bcb-4d4d-bbce-2f4220e0f55b.png">|

## webpack dev server bundler and swc compiler

Webpack is the OG of module bundlers and it's main purpose is bundling JavaScript files with dependencies into static assets for the browser. With an appropriate loader, we can also bundle HTML, CSS, and images into static assets as well. swc is a rust-based platform that compiles JavaScript files and outputs code that is supported by a majority of browsers. As of April 2022, swc is 20x faster than Babel. We'll be using the swc loader because of this.

Module bundlers are the way to organize and combine many files of JavaScript code into one file. This is important because the browser can only read from one file when generating your code. The loader helps with compiling and transpiling. Compiling is important to translate source code from a high-level programming language (js, python, java) to a low-level programming language (machine code) such that your computer program can understand. A transpiler helps convert code writtin in one programming language (js ES6) into another (js ES5) while preserving the original code's functionality. In the case of JavaScript, we can convert modern JavaScript code into a format that can run in older environments that don't support the latest language features (backwards compatability).

1. Now we want to install webpack dev server and swc loader to get our code up on the browser. To get started, run the following commands below.

```
npm i --save-dev webpack-dev-server
npm i --save-dev @swc/core swc-loader webpack webpack-cli
```

2. In order to configure our webpack bundler, we need to install and import a few packages.

```
npm i --save path
npm i --save-dev html-webpack-plugin mini-css-extract-plugin
npm i --save-dev css-loader file-loader
```

3. Copy over the `webpack.config.js` in this repo over to your new project. Webpack is quite complex and has a steep learning curve, so if you want to learn more about the technicalities of it I suggest you learn it individually if interested, but for purposes of this repo I have provided a good foundation to start from.

### Initial Files (src/dist)

1. Create a src and dist folder. Src is where we write all of our source code and dist is where all of our static files are outputted.

The file structure we should have is:
- dist (this is where our bundled files will output too)
- src
  - App.jsx (beginning of our React code)
  - index.jsx (attach React/HTML to the DOM)
  - index.html (where we initialize our root/app)

As an exercise, please fill out `App.jsx`, `index.jsx`, and `index.html` yourself. Refer to the official react docs and look up <a ref="https://react.dev/reference/react-dom/client/createRoot">react-dom/client</a> on how to get started. If needed, feel free to return to the github repo to see how I've got it set up.

1. Install react and react-dom packages

```
npm i react react-dom
```

Now we're at the point where we can start seeing our code up on the browser.

2. Navigate to `package.json` and under the `scripts` property write the following script commands:

```json
"scripts": {
  "build": "webpack",
  "dev": "npx webpack-dev-server --port=3000",
  "server": "nodemon server/index.js",
  "lint": "npx eslint -c ./.eslintrc.json src/**/*"
},
```

### Test on the Browser

1. Write `npm run build` in the terminal. Build involves telling webpack we want to generate the files and put them in the `/dist` folder. You should see two files output to the dist folder called bundle.js and index.html. These are the files webpack has bundled and the browser is parsing. Now write `npm run dev` to begin the webpack-dev server and to get the code on the browser locally.

2. Now open up your favorite browser, put
```
http://localhost:3000
```
and you should see your code from your App.jsx rendered on the window.

| Checkpoint 2
:-:
<img src="https://user-images.githubusercontent.com/104607182/230524619-2ea30163-76e6-420b-8c3e-3a20a7155084.png">|

## Creating a Server and Database
For our server, we'll be mainly using `Express.js`, and the choice of database is up to you. For the instructions, I'll be going over a simple `MongoDB database` setup.

1. Create a server and db folder. I wish there was a universal all-in-one guide on folder naming conventions, but there really isn't. If you find yourself finding better naming conventions for these folders, feel free too. Anyways, your file structure should look like the below.

- server
  - index.js (where we create our express application)
  - model.js (where we create our queries for our database)
  - controller.js (where we handle our requests and routes)
  - db.js (where we set up our database)

Generally, if there isn't a configuration set that specifies which file to look for first, Node.js  will default to using index.js if there is a file of that name in the folder it's searching in. Thus, why we are using index.js as our main files above. Learn more <a ref="https://forum.freecodecamp.org/t/why-is-there-always-an-index-html-file-and-an-index-js-file/479063/2">here</a>.

Why I am using certain naming conventions like `model.js` and `controller.js` is because I'm generally following the MVC pattern of web development. MVC is a popular architecture for build web applications.

From my time self-studying, I've learned that working from backend to frontend has allowed my application to be less prone to errors. Which is why this part is so essential. This is where we're going to look up documentation to get help setting up our database. Seeing our database visually is pretty difficult given the nature of the work, unless you have a GUI. From here on, I'll be listing some `general steps` we must do whenever we set up a database.

### Setting up our Database

1. Make sure to have the <b>selected database</b> and <b>Node.js</b> downloaded on your computer. Remember for this exercise, we'll be using MongoDB as our selected database.
2. Next, install MongoDB and Mongoose from the command line using npm. For this exercise, we'll be using Mongoose, which is an ORM for MongoDB. ORM stands for Object Relational Mapping and essentially creates a bridge between object-oriented programs, and in mose cases, relational databases. In short, we can write queries in SQL (SELECT id FROM table_name WHERE id = 20) as `table_name.GetById(20)` with an ORM.

Run the command below:
```
npm install mongoDB mongoose --save
```

Listed below are some steps to set up our database and connect it to our model and server. Please interpret the below as skeleton code if you will.

1. Import mongoose in the file
2. Open a connection to our MongoDB database via <a ref="https://mongoosejs.com/docs/connections.html">URI</a>
3. Create our <a ref='https://mongoosejs.com/docs/guide.html'>Schema(s)</a>. Each schema maps to a MongoDB collection and defines the shape of the documents within that collection. For purposes of this demonstration, we'll be making a simple anime watchlist application. Try to create a schema yourself using documentation, but refer below if needed to see how I've made it.

```js
const animeSchema = new mongoose.Schema({
  title: {
    type: String,
    unique: true
  },
  description: String,
  watched: {
    type: Boolean,
    default: false,
  },
})
```

4. To use our schema definition, we need to convert our Schema into a <a ref="https://mongoosejs.com/docs/models.html">Model</a>. An instance of a model is called a document/record.
5. Once we have our schema(s) and model(s) completed, we'll <a ref="https://www.geeksforgeeks.org/what-is-export-default-in-javascript/#">export</a> our database

### Setting up our Express.js Server
Remember we're working from back to front. Now that we have our database set up, we want to set up our server locally. We'll be using Express for this exercise because its simple and the documentation is easy to navigate.

1. Install Express from the command line using npm and import it into our project.
2. Create an instance of your express application.
3. Implement middlewares. Common middlewares are morgan, cors, and a body parser (I will be using express.json).
4. Set the port you want your local express application to listen too, and start the local instance.
5. Please run the following command in the command line `npm run server` and if you added `console.log` statements it should reply back with:

| Checkpoint 3
:-:
<img src="https://user-images.githubusercontent.com/104607182/231067059-7851d219-447f-4922-81f8-3eb718812c85.png">|

You've now completed the basic set up for a simple CRUD application. This repository only contains the setup files to get you started coding up an application. If you want to see what a complete application looks like, please refer here.

Thank you for following my tutorial and I'm happy to answer any questions, comments, or feedback to make this repo better and more beginner friendly.

## Contributors
**Quyen Hoang**\
<img src="https://user-images.githubusercontent.com/104607182/198861294-a3c1a341-0f11-4cdd-bba1-c4a254c40fc6.png" alt="Quyen Hoang" width="72">\
[![Linkedin: LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white&link=https://www.linkedin.com/in/caleb-kim0510/)](https://www.linkedin.com/in/quyenduhoang/)
[![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white&link=https://github.com/cariboukim)](https://github.com/quyencodes/)

