const mongoose = require('mongoose');
const Product = mongoose.model('Product');

//req: é a requisição do cliente, por onde vem todos os parâmetros:
//   corpo, cabeçalho, usuário, autenticação, ip, etc.
//res: resposta que o servidor dá ao cliente.
module.exports = {
  async index(req, res) {
    const products = await Product.find();
    return res.json(products);
  },
  async store(req, res) {
    const product = await Product.create(req.body);
    return res.json(product);
  }
};