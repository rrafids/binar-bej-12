class ProductHandler {
  constructor(productService) {
    this.productService = productService;

    // Binding
    this.getAll = this.getAll.bind(this);
    this.create = this.create.bind(this);
  }

  getAll(req, res) {
    const products = this.productService.getAll();

    res.status(200).send({
      products: products
    });
  }

  create(req, res) {
    const product = req.body;
    const createdProduct = this.productService.create(product);

    res.status(201).send({
      message: createdProduct
    })
  }
}

module.exports = ProductHandler;