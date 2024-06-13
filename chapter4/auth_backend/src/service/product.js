class ProductService {
  constructor(productRepository, userRepository) {
    this.productRepository = productRepository;
    this.userRepository = userRepository;
  }

  getAll() {
    // TODO: mengembalikan semua data product 
    // digabungkan dengan data user yang memiliki produk tersebut
    const products = this.productRepository.getAll();
    const productsUser = [];

    // Isi data productUser dengan products dan user yang sesuai
    for (let i = 0; i < products.length; i++) {
      // buat objek baru sesuai format yang diminta
      //  {
      //    name: 'asd',
      //    price: 20000,
      //    user: {
      //      name: "han vir",
      //      email: 'hanvir@gmail.com'
      //    }
      //  }
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

  create(product) {
    this.productRepository.insert(product)

    return "berhasil menambahkan product";
  }
}

module.exports = ProductService;