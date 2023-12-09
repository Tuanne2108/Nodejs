const Product = require("../models/Product");
const { multipleMongooseToObject } = require("../util/mongoose");
class MeController {
    //[GET] /me/stored/products
    storedProducts(req, res, next) {
        let productQuery = Product.find({});
        if (req.query.hasOwnProperty("_sort")) {
            productQuery = productQuery.sort({
                [req.query.column]: req.query.type,
            });
        }
        Promise.all([productQuery, Product.countDocumentsDeleted()])
            .then(([products, deletedProducts]) => {
                res.render("me/stored-products", {
                    deletedProducts,
                    products: multipleMongooseToObject(products),
                });
            })
            .catch(next);
    }
    //[GET] /me/trash/products

    deletedProducts(req, res, next) {
        let productQuery = Product.findDeleted({});
        if (req.query.hasOwnProperty("_sort")) {
            productQuery = productQuery.sort({
                [req.query.column]: req.query.type,
            });
        }
        Promise.all([productQuery, Product.countDocumentsDeleted()])
            .then(([products, deletedProducts]) => {
                res.render("me/trash-products", {
                    deletedProducts,
                    products: multipleMongooseToObject(products),
                });
            })
            .catch(next);
    }
}

module.exports = new MeController();
