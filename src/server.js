const express = require("express");
const app = express();
const morgan = require("morgan");

require("./database");

app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) =>
  res.json({
    message: "Welcome to my API",
  })
);

app.use(require("./routes/auth.routes"));
app.use(require("./routes/products.routes"));
app.use(require("./routes/user.routes"));

module.exports = app;
