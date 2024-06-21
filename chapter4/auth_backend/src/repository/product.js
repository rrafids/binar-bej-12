const pgConn = require('../config/postgres')

class ProductRepository {
  constructor() { }

  async getAll() {
    const getProducts = await pgConn`select id, name, price from products`;

    return getProducts;
  }

  async insert(product) {
    const createdProduct = await pgConn`
      insert into products (name, price) values (${product.name}, ${product.price})`;

    return createdProduct;
  }
}

module.exports = ProductRepository;