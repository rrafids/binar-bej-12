class ProductHandler {
  constructor(productService) {
    this.productService = productService;

    // Binding
    this.getAll = this.getAll.bind(this);
    this.create = this.create.bind(this);
  }

  async getAll(req, res) {
    const products = await this.productService.getAll();

    res.status(200).send({
      products: products
    });
  }

  async create(req, res) {
    const productToCreate = req.body;
    const createdProduct = await this.productService.create(productToCreate);

    res.status(201).send({
      created_product: createdProduct
    })
  }

  updateById(req, res) {
    const productId = req.params.id;
  }
}

module.exports = ProductHandler;