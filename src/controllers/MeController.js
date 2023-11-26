const Product = require("../models/Product");
const { multipleMongooseToObject } = require("../util/mongoose");
class MeController {
    //[GET] /me/stored/products
    storedProducts(req, res, next) {
        Promise.all([Product.find({}), Product.countDocumentsDeleted()])
        .then(([products, deletedProducts])=>{
            res.render("me/stored-products", {
                deletedProducts,
                products: multipleMongooseToObject(products),
            })
        })
        .catch(next)
    }
    //[GET] /me/trash/products
    deletedProducts(req, res, next) {
        Product.findDeleted({})
            .then((products) =>
                res.render("me/trash-products", {
                    products: multipleMongooseToObject(products),
                })
            )
            .catch(next);
    }
}

module.exports = new MeController();
