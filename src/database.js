const mongoose = require("mongoose");

mongoose
	.connect("mongodb://localhost/api-company-products")
	.then(() => console.log("Connected to MongoDB..."))
	.catch((e) => console.error(e));
