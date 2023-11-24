const express = require("express");
const router = express.Router();
const productsController = require("../controllers/ProductsController");

router.get("/create", productsController.create)
router.post("/store", productsController.store);
router.get("/:slug", productsController.show);
router.put("/:id", productsController.update);
router.patch("/:id/restore", productsController.restore);
router.delete("/:id", productsController.delete);
router.delete("/:id/force", productsController.forceDelete);
router.get("/:id/edit", productsController.edit);

module.exports = router;
