const Product = require("../models/Product");
const productsCtrl = {};

productsCtrl.getProducts = async (req, res) => {
  // Find product by id
  if (req.query.id) {
    const response = await Product.findById(req.query.id);

    res.status(200).json(response);

    return;
  }

  // Find all products
  const response = await Product.find();

  res.status(200).json(response);
};

productsCtrl.createProduct = async (req, res) => {
  const { name, category, price, imgURL } = req.body;

  const newProduct = new Product({
    name,
    category,
    price,
    imgURL,
  });

  const productSaved = await newProduct.save();

  res.status(201).json({ message: "Created product", data: productSaved });
};

productsCtrl.updateProduct = async (req, res) => {
  const { name, category, price, imgURL } = req.body;

  const response = await Product.findByIdAndUpdate(
    req.query.id,
    {
      name,
      category,
      price,
      imgURL,
    },
    {
      new: true,
    }
  );

  res.status(200).json({ message: "Product updated", data: response });
};

productsCtrl.deleteProduct = async (req, res) => {
  await Product.findByIdAndDelete(req.query.id);
  res.json({ message: "Product deleted" });
};

module.exports = productsCtrl;
