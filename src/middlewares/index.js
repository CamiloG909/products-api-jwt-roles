const authJwt = require("./authJwt");
const verifySignup = require("./verifySignup");

const indexMiddlewares = {
	verifyToken: authJwt.verifyToken,
	isModerator: authJwt.isModerator,
	isAdmin: authJwt.isAdmin,
	checkRoles: verifySignup.checkRoles,
	checkDuplicateUser: verifySignup.checkDuplicateUser,
};

module.exports = indexMiddlewares;
