const { Router } = require("express");
const router = Router();
const productsCtrl = require("../controllers/products.controller");

router
	.route("/api/products")
	.get(productsCtrl.getProducts)
	.post(productsCtrl.createProduct)
	.put(productsCtrl.updateProduct)
	.delete(productsCtrl.deleteProduct);

module.exports = router;
