### Mongoose
- JavaScript library for MongoDB object modeling designed to work in an asynchronous environment
- provides a straightforward schema-based solution to model your application data
- simplifies the process of working with MongoDB in Node.js applications by providing features such as schema validation, middleware, query building, and more, making it a popular choice for developers building applications with MongoDB.

> writing MongoDB validation, casting and business logic boilerplate is a drag.That's why we use Mongoose.


### Connect database using mongoose
```javascript
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

```


### Reading
[Mongoose](https://mongoosejs.com/)