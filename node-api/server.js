const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

//iniciando o App
const app = express();
app.use(express.json());//Permitir receber dados em formato JSON

//Iniciando o DB
mongoose.connect('mongodb://localhost:27017/nodeapi',
  { useNewUrlParser:true, useUnifiedTopology: true});
requireDir('./src/models');

//use: recebe todo tipo de requisição: GET, POST, PUT, etc
app.use("/api", require("./src/routes"));

app.listen(3001);