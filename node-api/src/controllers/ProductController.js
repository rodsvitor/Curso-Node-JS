const mongoose = require('mongoose');
const Product = mongoose.model('Product');

//req: é a requisição do cliente, por onde vem todos os parâmetros:
//   corpo, cabeçalho, usuário, autenticação, ip, etc.
//res: resposta que o servidor dá ao cliente.
module.exports = {
  async index(req, res) {
    const { page = 1 } = req.query;

    // const products = await Product.find();
    const products = await Product.paginate({}, { page, limit: 10 });
    return res.json(products);
  },

  async show(req, res) {
    const product = await Product.findById(req.params.id);

    return res.json(product);
  },

  async store(req, res) {
    const product = await Product.create(req.body);
    return res.json(product);
  },

  async update(req, res) {
    const product = await Product.findByIdAndUpdate(
      req.params.id, req.body,
      { new: true}); //Parametro 'new: true' retorna o produto atualizado para a variável product
                            //Caso contrário, retornará a variável antiga

    return res.json(product);
  },

  async destroy(req, res) {
     await Product.findByIdAndRemove(req.params.id);
     return res.send();
  }
};