const express=require("express");
const app=express();
const port=3000;

const myLogger=(req,res,next)=>{
    console.log("Looged in");
    next();
}

app.use(myLogger)

app.get("/",(req,res)=>{
    res.send("Hey")
})

app.listen(port,()=>{
    console.log("Server started on port 3000");
})