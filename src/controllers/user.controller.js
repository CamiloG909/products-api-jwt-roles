const userCtrl = {};

userCtrl.createUser = (req, res) => {
	res.json({ message: "User created" });
};

module.exports = userCtrl;
