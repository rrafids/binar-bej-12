const products = [
    {
      name: "laptop macbook",
      price: 1234124,
      user_email: "adit@gmail.com",
      category_code: "lp"
    },
    {
      name: "laptop windows",
      price: 1234124,
      user_email: "hanvir@gmail.com",
      category_code: "lp"
    },
    {
      name: "hp samsung",
      price: 1234124,
      user_email: "hanvir@gmail.com",
      category_code: "hp"
    }
  ];

class ProductRepository {
    constructor() {
        this.products = products
    }

    getAll = () => {
        return this.products
    }

    #getByEmail = (email) => {
        return products.find(product => product.user_email === email)
    }


    createProduct = (product) => {
        this.products.push(product)
    }
}

module.exports = ProductRepository;