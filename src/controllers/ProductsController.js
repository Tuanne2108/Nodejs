const Product = require("../models/Product");
const { mongooseToObject } = require("../util/mongoose");
class ProductsController {
    // [GET] /products/:slug
    show(req, res, next) {
        Product.findOne({ slug: req.params.slug })
            .then((product) => {
                res.render("products/show", {
                    product: mongooseToObject(product),
                });
            })
            .catch(next);
    }
    //[POST] /products/create
    create(req, res, next) {
        res.render("products/create");
    }
    //[POST] /products/store
    store(req, res, next) {
        const formData = req.body;
        const product = new Product(formData);
        product
            .save()
            .then(() => res.redirect("/"))
            .catch((error) => {});
    }
    //[POST] /products/:id/edit
    edit(req, res, next) {
        Product.findById(req.params.id)
            .then((product) =>
                res.render("products/edit", {
                    product: mongooseToObject(product),
                })
            )
            .catch(next);
    }
    //[PUT] /products/:id
    update(req, res, next) {
        Product.updateOne({ _id: req.params.id }, req.body)
        .then(()=>res.redirect("/me/stored/products"))
        .catch(next)
    }
}

module.exports = new ProductsController();
