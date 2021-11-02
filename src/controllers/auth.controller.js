const User = require("../models/User");
const Role = require("../models/Role");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("../config");
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

	if (roles) {
		const foundRoles = await Role.find({
			name: { $in: roles },
		});

		newUser.roles = foundRoles.map((role) => role._id);
	} else {
		const role = await Role.findOne({ name: "user" });
		newUser.roles = [role._id];
	}

	const savedUser = await newUser.save();

	// Create token
	const token = jwt.sign({ id: savedUser._id }, config.SECRET, {
		expiresIn: 3600,
	});

	res.status(201).json({ token });
};

authCtrl.login = async (req, res) => {
	const { email, password } = req.body;

	const userFound = await User.findOne({ email }).populate("roles");

	// Check if user exists
	if (!userFound) return res.status(400).json({ message: "Wrong credentials" });

	const matchPassword = await User.comparePassword(
		password,
		userFound.password
	);

	// Check if password is correct
	if (!matchPassword)
		return res.status(400).json({ message: "Wrong credentials" });

	const token = jwt.sign(
		{
			id: userFound._id,
		},
		config.SECRET,
		{
			expiresIn: 3600,
		}
	);

	res.json({ token });
};

module.exports = authCtrl;
