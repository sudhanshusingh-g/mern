const express = require("express"); 
const app = express(); 
const port = 8000;
const productRouter=require("./routes/productRoutes")
const Products=require("./models/productModel")
app.use("/",productRouter.router)
app.use(express.json())

app.listen(port,()=>{
    console.log(`Server started on ${port}`);
})
