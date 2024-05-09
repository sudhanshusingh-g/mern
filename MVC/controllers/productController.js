const fs=require("fs");

const products = JSON.parse(fs.readFileSync("dummy.json")).products;

const getAllProducts=(req, res) => {
  res.send(products);
};



const getProduct = (req, res) => {
  const id = Number(req.params.id);

  const product = products.find((p) => p.id === id);
  res.json(product);
};

const createProduct = (req, res) => {
  const newProduct = req.body;
  products.push(newProduct);
  res.send("Product added.");
};

const updateProduct = (req, res) => {
  const id = Number(req.params.id); //13
  const productIndex = products.findIndex((p) => p.id === id);

  if (productIndex === -1) {
    return res.status(404).json({ error: "Product not found" });
  }
  const updatedProduct = req.body;
  const product = products[productIndex];

  products.splice(productIndex, 1, { ...product, ...updatedProduct });

  res.status(201).json(products[productIndex]);
};


const replaceProduct = (req, res) => {
  //14
  const id = Number(req.params.id);
  const productIndex = products.findIndex((p) => p.id === id);

  if (productIndex === -1) {
    return res.status(404).json({ error: "Product not found" });
  }
  const updatedProduct = req.body;

  products[productIndex] = { ...updatedProduct, id: id };

  res.status(201).json(products[productIndex]);
};

const deleteProduct = (req, res) => {
  const id = Number(req.params.id);
  const productIndex = products.findIndex((p) => p.id === id);

  if (productIndex === -1) {
    return res.status(404).json({ error: "Product not found" });
  }
  products.splice(productIndex, 1);

  res.status(200).json({ message: "Product deleted." });
};

module.exports={
    getAllProducts,
    getProduct,
    createProduct,
    updateProduct,
    replaceProduct,
    deleteProduct
}