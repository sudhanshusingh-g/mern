const mongoose=require("mongoose")
const dotenv=require("dotenv")

dotenv.config();

const databseURI = process.env.MONGODB_URI;

mongoose.connect(databseURI, { useNewUrlParser: true, useUnifiedTopology: true }).then(()=>{
    console.log("Connected to MongoDB successfully!");
})
.catch((err)=>{
    console.error("Error connecting to MongoDB:", err);
})