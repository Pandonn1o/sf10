const Product = require('../models/productModel');

exports.checkProductId = async (req, res, next) => {
  const { id } = req.params;
  const product = await Product.findByPk(id.id);
  if (!product) {
    return res.status(404).json({
      status: 'fail',
      message: 'Invalid products id',
    });
  }
  else {
    req.product = product;
    next();
  }
};

exports.checkProduct = async (req, res, next) => {
  try {
    console.log("inside of try");
    let product = Product.build(req.body);
    await product.validate();
  } catch (error) {
    console.log("catched");
    return res.status(400).json(error.errors.map((error) => error.message));
  }
  next();
};
exports.getAllProducts = async (req, res) => {
  const products = await Product.findAll();
  res.status(200).json(products);
};
exports.getProductById = async (req, res) => {
  res.status(200).json(res.locals);
};
exports.createProduct = async (req, res) => {
  const newProduct = await Product.create(req.body);
  res.status(201).json(newProduct);
};

exports.updateProduct = async (req, res) => {
  const product = await Product.update(req.body, {
    where: { id: req.params.id },
  });
  res.status(200).json(req.body);
};

exports.deleteProduct = async (req, res) => {
  await Product.destroy({ where: { id: req.params.id } });
  res.status(204);
};