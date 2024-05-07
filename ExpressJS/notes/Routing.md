**Routing** refers to determining how an application responds to a client request to a particular endpoint, which is a URI (or path) and a specific HTTP request method (GET, POST, and so on).

Each route can have one or more handler functions, which are executed when the route is matched.

> app.METHOD(PATH, HANDLER)

> app: instance of express

> METHOD: `HTTP` request method

> PATH : path on the server

> HANDLER: function which get executed when the route is matched.
