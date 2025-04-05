const http = require("http");
const fs = require("fs");
const url = require("url");

require("dotenv").config();

const bookController = require("./controllers/bookController");
const userController = require("./controllers/userController");
const rentController = require("./controllers/rentController");

const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/api/books") {
    bookController.getAllBooks(req, res);
  } else if (req.method === "GET" && req.url.startsWith("/api/books")) {
    bookController.getBook(req, res);
  } else if (req.method === "GET" && req.url === "/api/users") {
    userController.getAllUsers(req, res);
  } else if (req.method === "GET" && req.url.startsWith("/api/users")) {
    userController.getUser(req, res);
  } else if (req.method === "DELETE" && req.url.startsWith("/api/books")) {
    bookController.removeOne(req, res);
  } else if (req.method === "DELETE" && req.url.startsWith("/api/users")) {
    userController.removeOne(req, res);
  } else if (req.method === "POST" && req.url === "/api/books") {
    bookController.createBook(req, res);
  } else if (req.method === "POST" && req.url === "/api/users") {
    userController.createUsers(req, res);
  } else if (req.method === "PUT" && req.url.startsWith("/api/books/back")) {
    bookController.backBook(req, res);
  } else if (req.method === "PUT" && req.url.startsWith("/api/books")) {
    bookController.updateBook(req, res);
  } else if (req.method === "PUT" && req.url.startsWith("/api/users/upgrade")) {
    userController.upgradeRoleUser(req, res);
  } else if (req.method === "PUT" && req.url.startsWith("/api/users")) {
    userController.updateUser(req, res);
  } else if (req.method === "POST" && req.url === "/api/users/login") {
    userController.loginUser(req, res);
  } else if (req.method === "POST" && req.url === "/api/books/rent") {
    rentController.addRentUser(req, res);
  }
});

const port = process.env.PORT || 8080;

server.listen(port, (err) => {
  if (err) throw err;
  else console.log(`Server is running on port ${port}`);
});

