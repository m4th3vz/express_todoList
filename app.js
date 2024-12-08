// app.js
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const routes = require('./routes');

const app = express();

// Middleware para servir arquivos estáticos (necessário módulo 'path')
app.use(express.static(path.join(__dirname, 'public')));

// Middleware para analisar dados de formulários URL-encoded
app.use(express.urlencoded({ extended: true }));

// Middleware para analisar dados de formulários URL-encoded
app.use(bodyParser.urlencoded({ extended: false }));

// Configuração do mecanismo de visualização para usar EJS
app.set('view engine', 'ejs');

// Define o diretório onde as views (páginas EJS) estão localizadas
app.set('views', path.join(__dirname, 'views'));

// Usa as rotas definidas em routes/index.js
app.use('/', routes);

// Inicia o servidor na porta 3000
app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
