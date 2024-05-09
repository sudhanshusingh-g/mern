const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const databseURI = process.env.MONGODB_URI;
mongoose
  .connect(databseURI, { useNewUrlParser: true })
  .then(() => {
    console.log("Connected to MongoDB successfully!");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });
  

  //Schema
  const productSchema=new mongoose.Schema({
    name:String,
    price:String,
    rating:Number
  })

  const Products=mongoose.model("Products",productSchema)


  // Create product
  async function createProduct(){
    const product=new Products({
      name:"Mobile",
      price:5000,
      rating:4
    })

    const productCreated=await product.save();
    console.log(productCreated);
  }

  createProduct();

  module.exports=Products