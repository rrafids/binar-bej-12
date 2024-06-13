const products = [
    {
        name: 'laptop macbook',
        price: 2000,
        email: 'hanvir@gmail.com'
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
        return products.find(product => product.email === email)
    }


    createProduct = (product) => {
        this.products.push(product)
    }
}

module.exports = ProductRepository;