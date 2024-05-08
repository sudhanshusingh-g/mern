const { error } = require("console");
const express =require("express");//1
const fs=require("fs");//5
const app=express()//2

const port=8000 //3
// const products=(fs.readFileSync("dummy.json"));//6

// console.log(products);//8 :Currently it is showing json data as buffer so to convert it in JSON we will parse it

const products=JSON.parse((fs.readFileSync("dummy.json"))).products;//9

// console.log(products);//10
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
app.patch("/products/:id",((req,res)=>{//12
    const id=Number(req.params.id)//13
    const productIndex=products.findIndex(p=>p.id === id)

    if(productIndex === -1){
        return res.status(404).json({error:"Product not found"})
    }
    const updatedProduct=req.body;
    const product=products[productIndex]

    products.splice(productIndex,1,{...product,...updatedProduct})

    res.status(201).json(products[productIndex])
}))


//HTTP patch method
app.put("/products/:id",((req,res)=>{//14
    const id=Number(req.params.id)
    const productIndex=products.findIndex(p=>p.id === id)

    if(productIndex === -1){
        return res.status(404).json({error:"Product not found"})
    }
    const updatedProduct=req.body;

    products[productIndex] = { ...updatedProduct, id: id };

    res.status(201).json(products[productIndex])
}))

//HTTP delete method

app.delete("/products/:id",(req,res)=>{//15
    const id=Number(req.params.id)
    const productIndex=products.findIndex(p=>p.id === id)

    if(productIndex === -1){
        return res.status(404).json({error:"Product not found"})
    }
    products.splice(productIndex,1)

    res.status(200).json({message:"Product deleted."})

})








app.listen(port,()=>{    //4
    console.log(`Server started on ${port}`);
})