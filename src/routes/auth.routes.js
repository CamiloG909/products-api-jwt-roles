const { Router } = require("express");
const router = Router();
const authCtrl = require("../controllers/auth.controller");

router.post("/api/auth/signup", authCtrl.signup);
router.post("/api/auth/login", authCtrl.login);

module.exports = router;
