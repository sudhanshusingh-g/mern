> Express.js is a popular web application framework for Node.js.
## Why Express
- **Simple** : Compared to native Node.js ,the server need fewer lines of code. 
- **Middleware** : Offers middleware system to easily extend the functionality of application.
- **Routing** : Express.js provides a powerful routing system that allows developers to define routes for different HTTP methods and URLs. This makes it easy to create RESTful APIs and organize the application's code in a logical manner.
- **Performance** : It is lightweight and efficient.

## Installation
> npm i express

## Implementation
```javascript

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
```