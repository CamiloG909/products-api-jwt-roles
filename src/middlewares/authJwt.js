const jwt = require("jsonwebtoken");
const config = require("../config");
const User = require("../models/User");
const Role = require("../models/Role");

const verifyToken = async (req, res, next) => {
	try {
		const token = req.headers["x-access-token"];

		if (!token) return res.status(403).json({ message: "No token provided." });

		const decodedToken = jwt.verify(token, config.SECRET);

		// Save in req variables
		req.userId = decodedToken.id;

		const user = await User.findById(req.userId, { password: 0 });

		if (!user) return res.status(404).json({ message: "User not found." });

		next();
	} catch (e) {
		return res.status(401).json({ message: "Invalid token." });
	}
};

const isModerator = async (req, res, next) => {
	const user = await User.findById(req.userId);
	const roles = await Role.find({ _id: { $in: user.roles } });

	for (let role of roles) {
		if (role.name === "moderator") {
			next();
			return;
		}
	}

	return res.status(403).json({ message: "You are not a moderator." });
};

const isAdmin = async (req, res, next) => {
	const user = await User.findById(req.userId);
	const roles = await Role.find({ _id: { $in: user.roles } });

	for (let role of roles) {
		if (role.name === "admin") {
			next();
			return;
		}
	}

	return res.status(403).json({ message: "You are not a admin." });
};

module.exports = { verifyToken, isModerator, isAdmin };
