const products = [
  {
    id: 1,
    name: "laptop macbook 1",
    price: 1234124,
    user_id: 1,
    category_id: 1
  },
  {
    id: 2,
    name: "laptop macbook 2",
    price: 1234124,
    user_id: 1,
    category_id: 1
  },
  {
    id: 3,
    name: "laptop windows",
    price: 1234124,
    user_id: 2,
    category_id: 1
  },
  {
    id: 4,
    name: "hp samsung",
    price: 1234124,
    user_id: 2,
    category_id: 2
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
    // insert to database

    return product;
  }
}

module.exports = ProductRepository;

// begin
// create commit
// get commit
// update commit
// end

// rollback kalo gagal

// code selanjutnya