const { Schema, model } = require("mongoose");
const bcrypt = require("bcryptjs");

const User = new Schema(
	{
		username: {
			type: String,
			unique: true,
		},
		email: {
			type: String,
			unique: true,
		},
		password: {
			type: String,
			required: true,
		},
		roles: [
			{
				ref: "Role",
				type: Schema.Types.ObjectId,
			},
		],
	},
	{
		timestamps: true,
		versionKey: false,
	}
);

User.statics.comparePassword = async (password, receivedPassword) => {
	return await bcrypt.compare(password, receivedPassword);
};

module.exports = model("User", User);
