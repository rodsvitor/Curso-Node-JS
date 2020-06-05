const express = require('express');

const app = express();

//req: é a requisição do cliente, por onde vem todos os parâmetros:
//   corpo, cabeçalho, usuário, autenticação, ip, etc.
//res: resposta que o servidor dá ao cliente.

app.get('/', (req, res) => res.send("Hello Pau no cú."))

app.listen(3001);
