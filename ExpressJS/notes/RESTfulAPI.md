REST API use standard `HTTP` methods like `GET`,`POST`,`PUT`,`PATCH`,`DELETE` to perform action on resources and the typically communicate using JSON or XML for data interchange.

Other standards and architectural syles for building APIs.Some of them are:

- SOAP (Simple Object Access Protocol)
- GraphQL
- gRPC
- JSON-RPC
- OData (Open Data Protocol)

Good practices when designing and using a RESTful API
The format of a RESTful API has three main components:

1. URL endpoint : `example.com/users`
2. HTTP verb

   - `GET`: Read
    - `POST`:Create
    - `PUT/PATCH`:Update
    - `DELETE`:Delete

### HTTP common status codes

| Status Code | Meaning                                                                               |
|-------------|---------------------------------------------------------------------------------------|
| 200         | OK - Request was successful.                                                          |
| 301         | Moved Permanently - For SEO purposes when a page has been moved permanently.           |
| 401         | Unauthorized - Server requires authentication.                                         |
| 403         | Forbidden - Client authenticated but does not have permissions to view resource.       |
| 404         | Not Found - Page not found because no search results or may be out of stock.            |
| 500         | Internal Server Error - Server-side error usually due to bugs and exceptions.          |
| 503         | Server Unavailable - Server-side error usually due to platform hosting overload or maintenance issue. |

The `PUT` and `PATCH` methods are both used in RESTful API designs to update resources, but they have different semantics and use cases:

### PUT Method:
- The `PUT` method is used to update or replace an existing resource entirely with a new representation.
- It requires the client to send the entire updated representation of the resource.
- When a client sends a PUT request to update a resource, it replaces the resource entirely with the representation provided in the request payload.
- If the resource with the specified identifier (e.g., ID) exists, it is replaced with the new representation. If it doesn't exist, a new resource may be created.
- `PUT` requests are idempotent, meaning that making the same request multiple times will have the same effect as making it once. The resource state will be the same after each request.
- Use PUT when you want to replace the entire resource with a new representation.


### PATCH Method:
- The `PATCH` method is used to apply partial modifications to an existing resource.
- It allows clients to send only the modified fields or attributes of the resource, rather than sending the entire updated representation.
- When a client sends a `PATCH` request to update a resource, it specifies only the changes to be made, and the server applies these changes to the resource.
- `PATCH` requests are not necessarily idempotent. Depending on how the server handles PATCH requests, making the same request multiple times may result in different outcomes.
- Use `PATCH` when you want to apply partial updates to a resource without replacing the entire representation.


### Implementation

[Products](../code//RestAPi/)


### More Readings

[REST APIs](https://mannhowie.com/rest-api)