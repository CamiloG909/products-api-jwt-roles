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
	}
);

module.exports = model("Product", Product);
