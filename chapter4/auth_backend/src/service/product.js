class ProductService {
  constructor(productRepository, userRepository) {
    this.productRepository = productRepository;
    this.userRepository = userRepository;
  }

  async getAll() {
    const products = await this.productRepository.getAll();

    return products
  }

  async create(product) {
    const createdProduct = await this.productRepository.insert(product)

    return createdProduct;
  }

  getAllOld() {
    // digabungkan dengan data user yang memiliki produk tersebut
    const products = this.productRepository.getAll();
    const productsUser = [];

    // Isi data productUser dengan products dan user yang sesuai
    for (let i = 0; i < products.length; i++) {
      const user = this.userRepository.getByEmail(products[i].user_email);

      const productWithUser = {
        name: products[i].name,
        price: products[i].price,
        user: {
          name: user.name,
          email: user.email,
        }
      }

      productsUser.push(productWithUser);
    }

    return productsUser;
  }
}

module.exports = ProductService;