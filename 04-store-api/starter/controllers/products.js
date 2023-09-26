const Product = require("../models/product");

const getAllProductsStatic = async (req, res) => {
  const search = "ab";
  const products = await Product.find({
    name: { $regex: search, $options: "i" },
  });
  res.status(200).json({ msg: products, nbHits: products.length });
};

const getAllProducts = async (req, res) => {
  const { featured, company, name } = req.query;
  const queryObject = {};

  if (featured) {
    queryObject.featured = featured === "true" ? true : false;
  }
  if (company) {
    queryObject.company = company;
  }
  if (name) {
    queryObject.name = { $regex: search, $options: "i" };
  }

  const products = await Product.find(queryObject);
  res.status(200).json({ products, nbHits: products.length });
};

const getProduct = async (req, res) => {};

module.exports = {
  getAllProducts,
  getAllProductsStatic,
};
