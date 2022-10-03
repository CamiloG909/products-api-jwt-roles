const { Schema, model } = require("mongoose");

const Product = new Schema(
	{
		name: String,
		category: String,
		price: Number,
		imgURL: String,
	},
	{
		timestamps: true,
		versionKey: false,
		collection: "products-api-jwt-roles__product",
	}
);

module.exports = model("Product", Product);
