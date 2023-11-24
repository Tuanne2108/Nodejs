const express = require("express");
const router = express.Router();
const meController = require("../controllers/MeController");

router.get("/stored/products", meController.storedProducts);
router.get("/deleted/products", meController.deletedProducts)


module.exports = router;
