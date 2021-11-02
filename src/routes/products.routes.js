const { Router } = require("express");
const router = Router();
const productsCtrl = require("../controllers/products.controller");
const { verifyToken, isModerator, isAdmin } = require("../middlewares/index");

router
	.route("/api/products")
	.get(productsCtrl.getProducts)
	.post([verifyToken, isModerator], productsCtrl.createProduct)
	.put([verifyToken, isModerator], productsCtrl.updateProduct)
	.delete([verifyToken, isAdmin], productsCtrl.deleteProduct);

module.exports = router;
