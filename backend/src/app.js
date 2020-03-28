const express = require('express');
const cors = require('cors');
const { errors } = require ('celebrate');
const routes = require('./routes');

const app = express();

app.use(cors(
//  {origin: 'http://meuapp.com.br'}
));
app.use(express.json()); // Converte o json do corpo da requisição em um objeto do JavaScript
app.use(routes);
app.use(errors())



module.exports = app;