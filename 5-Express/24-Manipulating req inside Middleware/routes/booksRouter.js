 const express = require("express");
const booksController = require("../Controllers/books");
const isAdminMiddleware = require("../middlewares/isAdmin");


const booksRouter = express.Router();

booksRouter.use(isAdminMiddleware);

booksRouter
  .route("/")
  .get(booksController.getAllBooks)
  .post(booksController.registerBook);

booksRouter
  .route("/:id")
  .get(booksController.getSingleBook)
  .delete(booksController.removeOne)
  .put(booksController.updateBook);

module.exports = booksRouter;
