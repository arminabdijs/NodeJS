const BookModel = require("../models/Book");

const getAllBooks = async (req, res) => {
  try {
    const books = await BookModel.findAllBooks();

    console.log(books);
    res.status(200).send(books);
  } catch (err) {
    console.error(err);
    res.status(200).send({ message: "Error fetching books" });
  }
};

const getBook = async (req, res) => {
  const bookID = req.params._id;

  try {
    const book = await BookModel.findBook(bookID);

    res.status(200).send(book);
  } catch (err) {
    console.error(err);
    res.status(404).send({ message: "Error fetching book" });
  }
};

const removeOne = async (req, res) => {
  const bookID = req.params._id;

  try {
    const removedBook = await BookModel.remove(bookID);

    res.status(200).send(removedBook);
  } catch (err) {
    console.error(err);
    res.status(404).send({ message: "Error Book not found" });
  }
};

const createBook = async (req, res) => {
  try {
    const createdBook = await BookModel.create(req);

    console.log(createdBook);
    res.status(201).send({ message: `Book added successfully` });
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: "Error creating book" });
  }
};

const backBook = async (req, res) => {
  const bookID = req.params._id;

  try {
    const backedBook = await BookModel.back(bookID);
    console.log({ message: "Book returned successfully" });
    res.status(200).send({ message: "Book returned successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: "Error backing book" });
  }
};

const updateBook = async (req, res) => {
  const bookID = req.params._id;

  try {
    const updatedBook = await BookModel.update(bookID, req);
    console.log(updatedBook);
    res.status(200).send({ message: "Book updated successfully" });
  } catch (e) {
    console.error(e);
    res.status(500).send({ message: "Error updating book" });
  }
};

module.exports = {
  getAllBooks,
  removeOne,
  createBook,
  backBook,
  updateBook,
  getBook,
};
