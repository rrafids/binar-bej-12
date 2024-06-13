class ProductService {
    constructor(userRepository, productRepository) {
        this.userRepository = userRepository
        this.productRepository = productRepository
    }

    getAll = () => {
        const allProducts = this.productRepository.getAll()
        var finalProducts = []
        if (allProducts.length > 0) {
            allProducts.forEach(product => {
                const foundUser = this.userRepository.getByEmail(product.email)
                console.log(foundUser)
                if (foundUser) {
                    const validProduct = {
                        name: product.name,
                        price: product.price,
                        user: {
                            name: foundUser.name,
                            email: foundUser.email
                        }
                    }
                    finalProducts.push(validProduct)
                }
            });
        }

        return finalProducts

    }

    register = (product) => {
        const existingUser = this.userRepository.getByEmail(product.email)
        if (existingUser) {
            return(this.productRepository.createProduct(product))
        } else {
            throw "User's email has not been registered"
        }
    }
}

module.exports = ProductService;