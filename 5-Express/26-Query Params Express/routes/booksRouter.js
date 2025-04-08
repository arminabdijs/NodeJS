const express = require("express");
const booksController = require("../Controllers/books");

const booksRouter = express.Router();

booksRouter.get("/", booksController.getAllBooks);

booksRouter.get("/:id", booksController.getSingleBook);

booksRouter.delete("/:id", booksController.removeOne);

booksRouter.post("/", booksController.registerBook);

booksRouter.put("/:id", booksController.updateBook);

module.exports = booksRouter;
