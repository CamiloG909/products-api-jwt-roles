const { Schema, model } = require("mongoose");

const Role = new Schema(
	{
		name: String,
	},
	{
		versionKey: false,
		collection: "products-api-jwt-roles__role",
	}
);

module.exports = model("Role", Role);
