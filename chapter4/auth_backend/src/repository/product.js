const products = [
  {
    id: 1,
    name: "laptop macbook",
    price: 1234124,
    user_email: "adit@gmail.com",
    category_code: "lp",
    image: "binar.png"
  },
  {
    id: 2,
    name: "laptop windows",
    price: 1234124,
    user_email: "hanvir@gmail.com",
    category_code: "lp",
    image: "windows.png" // frontend: http://localhost:8000/windows.png
  },
  {
    id: 3,
    name: "hp samsung",
    price: 1234124,
    user_email: "hanvir@gmail.com",
    category_code: "hp"
  }
];

class ProductRepository {
  constructor() {
    this.products = products;
  }

  getAll() {
    return this.products;
  }

  insert(product) {
    this.products.push(product);

    return product;
  }
}

module.exports = ProductRepository;