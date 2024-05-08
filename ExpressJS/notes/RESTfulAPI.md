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


### Implementation

[Products](../code//RestAPi/)


### More Readings

[REST APIs](https://mannhowie.com/rest-api)