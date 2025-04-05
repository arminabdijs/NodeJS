const express = require("express");

const bookController = require("./controllers/bookController");
const userController = require("./controllers/userController");
const rentController = require("./controllers/rentController");

require("dotenv").config();

const app = express();

app.use(express.json())


app.get("/api/books", (req, res) => {
  bookController.getAllBooks(req, res);
});

app.get("/api/books/:_id", (req, res) => {
  bookController.getBook(req, res);
});

app.get("/api/users", (req, res) => {
  userController.getAllUsers(req, res);
});

app.get("/api/users/:_id", (req, res) => {
  userController.getUser(req, res);
});

app.delete("/api/books/:_id", (req, res) => {
  bookController.removeOne(req, res);
});

app.delete("/api/users/:_id", (req, res) => {
  userController.removeOne(req, res);
});

app.post("/api/books", (req, res) => {
  bookController.createBook(req, res);
});

app.post("/api/users", (req, res) => {
  userController.createUsers(req, res);
});

app.post("/api/users/login", (req, res) => {
  userController.loginUser(req, res);
});

app.post("/api/books/rent", (req, res) => {
  rentController.addRentUser(req, res);
});

app.put("/api/books/back/:_id", (req, res) => {
  bookController.backBook(req, res);
});

app.put("/api/books/:_id", (req, res) => {
  bookController.updateBook(req, res);
});

app.put("/api/users/upgrade/:_id", (req, res) => {
  userController.upgradeRoleUser(req, res);
});

app.put("/api/users/:_id", (req, res) => {
  userController.updateUser(req, res);
});

const port = process.env.PORT || 8080;

app.listen(port, (err) => {
  if (err) throw err;
  else console.log(`Server is running on port ${port}`);
});
