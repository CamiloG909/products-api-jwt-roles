const { Router } = require("express");
const router = Router();
const {
	verifyToken,
	isAdmin,
	checkRoles,
	checkDuplicateUser,
} = require("../middlewares/index");
const { createUser } = require("../controllers/user.controller");

router.post(
	"/users",
	[verifyToken, isAdmin, checkDuplicateUser, checkRoles],
	createUser
);

module.exports = router;
