> The HTTP module in Node.js allows you to create HTTP servers and make HTTP requests.

### Creating an HTTP server

```javascript

const http = require('http');

// Create a server
const server = http.createServer((req, res) => {
  // Set the response HTTP header with status code 200 and Content-Type as text/plain
  res.writeHead(200, {'Content-Type': 'text/plain'});

  // Send the response body as "Hello, World!"
  res.end('Hello, World!\n');
});

// Server listens on port 3000
server.listen(3000, '127.0.0.1', () => {
  console.log('Server running at http://127.0.0.1:3000/');
});

```

### Making HTTP requests
```javascript
const http = require('http');

// Options for the HTTP request
const options = {
  hostname: 'www.example.com',
  port: 80,
  path: '/',
  method: 'GET'
};

// Make the HTTP request
const req = http.request(options, (res) => {
  console.log(`statusCode: ${res.statusCode}`);

  res.on('data', (data) => {
    console.log(data.toString());
  });
});

// Handle errors
req.on('error', (error) => {
  console.error(error);
});

// End the request
req.end();

```

[HTTP status codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)