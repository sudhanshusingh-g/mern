const express =require("express");//1
const fs=require("fs");//5
const app=express()//2

const port=8000 //3
// const products=(fs.readFileSync("dummy.json"));//6

// console.log(products);//8 :Currently it is showing json data as buffer so to convert it in JSON we will parse it

const products=JSON.parse((fs.readFileSync("dummy.json"))).products;//9

console.log(products);//10
app.use(express.json());//11


//HTTP get method
app.get("/products",((req,res)=>{//4
    res.send(products)
})) 

//HTTP post method
app.post("/products",((req,res)=>{//7: 
    const newProduct=req.body
    products.push(newProduct);
    res.send("Product added.")
}))

//HTTP put method
app.put("/products/:id",((req,res)=>{
    
}))









app.listen(port,()=>{    //4
    console.log(`Server started on ${port}`);
})