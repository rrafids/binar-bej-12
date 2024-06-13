class ProductHandler {
    constructor(productService) {
        this.productService = productService;
    }

    getAll = (req, res) => {
        const allProducts = this.productService.getAll();
        res.status(200).send(allProducts)
    }

    create = (req, res) => {
        try {
            this.productService.register(req.body)
            res.status(201).send()
        } catch (err) {
            res.status(400).send(err)
        }
    }
}

module.exports = ProductHandler;