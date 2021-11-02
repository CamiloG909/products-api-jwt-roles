const ROLES = ["user", "moderator", "admin"];
const User = require("../models/User");

const checkDuplicateUser = async (req, res, next) => {
	const username = await User.findOne({ username: req.body.username });

	if (username)
		return res.status(400).send({ message: "Username already exists" });

	const email = await User.findOne({ email: req.body.email });

	if (email) return res.status(400).send({ message: "Email already exists" });

	next();
};

const checkRoles = (req, res, next) => {
	if (req.body.roles) {
		for (let role of req.body.roles) {
			if (!ROLES.includes(role)) {
				return res.status(400).send({
					message: "Invalid role",
				});
			}
		}
	}
	next();
};

module.exports = { checkDuplicateUser, checkRoles };
