# Comic Book Inventory API

This API allows the management of comic books in an inventory system. You can add, edit, delete, and fetch comic books using different endpoints.

## Installation

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (for local development, or MongoDB Atlas for production)

### Steps to Install

1 npm install
2 add .env file in root directory

ATLAS_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/mydatabase?retryWrites=true&w=majority
LOCAL_URI=mongodb://localhost:27017/comic-books  # Local MongoDB connection
NODE_ENV=development  # Can be 'development', 'production', etc.



3-> to start project-> nodemon server.js

### steps to run/execute all the endpoints

# 5 endpoints description
  # a->
   endpiont:http://localhost:4000/api/comic-books
   method:GET
   response:[
    {
        "_id": "671097573430117f4758aecd",
        "bookName": "Spider-Man: Koi ghar nhi hai",
        "authorName": "Stan Lee",
        "yearOfPublication": 2022,
        "price": 20,
        "discount": 10,
        "numberOfPages": 200,
        "condition": "new",
        "description": "A thrilling adventure of Spider-Man",
        "createdAt": "2024-10-17T04:49:27.361Z",
        "__v": 0
    }
]

# b ->
   endpoint:http://localhost:4000/api/comic-books
   method: POST:
   requestBody:
   {
  "bookName": "Spider-Man: Koi ghar nhi hai",
  "authorName": "Stan Lee",
  "yearOfPublication": 2022,
  "price": 20.00,
  "discount": 10,
  "numberOfPages": 200,
  "condition": "new",
  "description": "A thrilling adventure of Spider-Man"
}
 response:{
    "_id": "671097573430117f4758aecd",
    "bookName": "Spider-Man: Koi ghar nhi hai",
    "authorName": "Stan Lee",
    "yearOfPublication": 2022,
    "price": 20,
    "discount": 10,
    "numberOfPages": 200,
    "condition": "new",
    "description": "A thrilling adventure of Spider-Man",
    "createdAt": "2024-10-17T04:49:27.361Z",
    "__v": 0
}

# c->
  endpoint:http://localhost:4000/api/comic-books/detail/67109ed058e2064b2dfe7042
  method:GET
  responseBody:
  {
    "_id": "671097573430117f4758aecd",
    "bookName": "Spider-Man: Koi ghar nhi hai",
    "authorName": "Stan Lee",
    "yearOfPublication": 2022,
    "price": 20,
    "discount": 10,
    "numberOfPages": 200,
    "condition": "new",
    "description": "A thrilling adventure of Spider-Man",
    "createdAt": "2024-10-17T04:49:27.361Z",
    "__v": 0
}

# d->
endpoint: http://localhost:4000/api/comic-books/67109ed058e2064b2dfe7042
method:DELETE
responseBody:{
    "message": "Comic book deleted successfully"
}


# e->
endpoint: http://localhost:4000/api/comic-books/671097573430117f4758aecd
method:PUT
requestBody:{
  "bookName": "Spider-Man: Koi ghar nhi hai",
  "authorName": "Stan Lee",
  "yearOfPublication": 2022,
  "price": 20.00,
  "discount": 10,
  "numberOfPages": 200,
  "condition": "new",
  "description": "A thrilling adventure of Spider-Man"
}

responseBody:{
    "_id": "671097573430117f4758aecd",
    "bookName": "Spider-Man: Koi ghar nhi hai",
    "authorName": "Stan Lee",
    "yearOfPublication": 2022,
    "price": 20,
    "discount": 10,
    "numberOfPages": 200,
    "condition": "new",
    "description": "A thrilling adventure of Spider-Man",
    "createdAt": "2024-10-17T04:49:27.361Z",
    "__v": 0
}