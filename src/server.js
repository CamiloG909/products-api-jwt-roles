const express = require("express");
const app = express();
const morgan = require("morgan");

const createRoles = require("./libs/initialSetup");
require("./database");

createRoles();

app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) =>
	res.json({
		message: "Welcome to my API",
	})
);

app.use(require("./routes/auth.routes"));
app.use(require("./routes/products.routes"));

module.exports = app;
