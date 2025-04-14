const booksModel = require("../models/books");
const { isValidObjectId } = require("mongoose");
const registerBookValidator = require("../Validators/registerBookValidator");

exports.getAllBooks = async (req, res) => {
  try {
    const finderAllBooks = await booksModel.find({}).lean()

    if (!finderAllBooks || finderAllBooks.length === 0) {
      return res.status(404).json({ message: "Books Not Found" });
    }

    res.status(200).json(finderAllBooks);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.getSingleBook = async (req, res) => {
  try {
    const { id } = req.params;
    if (isValidObjectId(id)) {
      const finderBook = await booksModel.findById(id).lean()
      if (!finderBook) {
        return res.status(404).json({ message: "Book Not Found" });
      }
      res.status(200).json(finderBook);
    } else {
      res.status(400).json({ message: "Invalid Book ID" });
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.removeOne = async (req, res) => {
  try {
    const { id } = req.params;
    if (isValidObjectId(id)) {
      const finderBook = await booksModel.findByIdAndDelete(id).lean()
      if (!finderBook) {
        return res.status(404).json({ message: "Book Not Found" });
      }
      res.status(200).json({ message: "Book Deleted Successfully" });
    } else {
      res.status(400).json({ message: "Invalid Book ID" });
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.registerBook = async (req, res) => {
  try {
    const validationResult = registerBookValidator(req.body);

    if (validationResult !== true) {
      return res.status(422).json(validationResult);
    }

    let { title, author, publication_year, genre, price, free } = req.body;

    const result = await booksModel.create({
      title,
      author,
      publication_year,
      genre,
      price,
      free,
    })

    res.status(201).json({
      message: "New Book create successfully",
      result,
    });
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.updateBook = async (req, res) => {
  try {
    const { id } = req.params;

    if (!isValidObjectId(id)) {
      return res.status(400).json({ message: "Invalid Book ID" });
    }

    if (Object.keys(req.body).length === 0) {
      return res.status(400).json({ message: "No fields to update" });
    }
    const allowedFields = [
      "title",
      "author",
      "publication_year",
      "genre",
      "price",
      "free",
    ];
    const updateData = {};

    allowedFields.forEach((field) => {
      if (req.body[field]) {
        updateData[field] = req.body[field];
      }
    });

    const InvalidFields = Object.keys(req.body).filter(
      (field) => !allowedFields.includes(field)
    );
    if (InvalidFields.length > 0) {
      return res
        .status(400)
        .json({ message: `Invalid fields: ${InvalidFields.join(", ")}` });
    }

    const finderBookAndUpdate = await booksModel.findOneAndUpdate(
      { _id: id },
      { $set: updateData },
      { new: true }
    ).lean()

    if (!finderBookAndUpdate) {
      return res.status(404).json({ message: "Book Not Found" });
    }

    res.status(200).json({ message: "Book Updated Successfully" });
  } catch (err) {
    res.status(500).json(err);
  }
};


