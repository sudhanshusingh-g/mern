const express=require("express");

const {getAllProducts,getProduct,createProduct,replaceProduct,updateProduct,deleteProduct}=require("../controllers/productController")

const router=express.Router();

router
  .get("/products", getAllProducts)
  .get("/products/:id", getProduct)
  .post("/products", createProduct)
  .put("/products/:id", replaceProduct)
  .patch("/products/:id", updateProduct)
  .delete("/products/:id", deleteProduct);

  exports.router=router;