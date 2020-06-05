const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

//iniciando o App
const app = express();

//Iniciando o DB
mongoose.connect('mongodb://localhost:27017/nodeapi',
  { useNewUrlParser:true, useUnifiedTopology: true});
requireDir('./src/models');

const Product = mongoose.model('Product');

//req: é a requisição do cliente, por onde vem todos os parâmetros:
//   corpo, cabeçalho, usuário, autenticação, ip, etc.
//res: resposta que o servidor dá ao cliente.
app.get('/', (req, res) => {
  Product.create({
    title: 'React Native',
    description: 'Build native apps with React',
    url: 'http://github.com/facebook/react-native'
  });
  return res.send("Hello chefe.");
});

app.listen(3001);
