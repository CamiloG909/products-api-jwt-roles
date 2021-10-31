const User = require("../models/User");
const bcrypt = require("bcryptjs");
const authCtrl = {};

authCtrl.signup = async (req, res) => {
	const { username, email, password, roles } = req.body;

	// Validate user email
	const userFound = await User.find({ email });

	if (userFound.length > 0) {
		return res.json({ message: "User already exists" });
	}

	// Hash password
	const salt = await bcrypt.genSalt(10);
	const passwordHash = await bcrypt.hash(password, salt);

	const newUser = new User({
		username,
		email,
		password: passwordHash,
	});

	const savedUser = await newUser.save();

	res.status(201).json({ message: "Signup" });
};

authCtrl.login = (req, res) => {
	res.json({ message: "Login" });
};

module.exports = authCtrl;
