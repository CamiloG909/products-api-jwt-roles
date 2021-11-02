const { Router } = require("express");
const router = Router();
const { checkRoles, checkDuplicateUser } = require("../middlewares/index");
const authCtrl = require("../controllers/auth.controller");

router.post(
	"/api/auth/signup",
	[checkDuplicateUser, checkRoles],
	authCtrl.signup
);
router.post("/api/auth/login", authCtrl.login);

module.exports = router;
