const { isValidObjectId } = require("mongoose");
const mongoose = require("mongoose");
const rentsModel = require("../models/rents");
const booksModel = require("../models/books");
const usersModel = require("../models/users");

exports.addRentUser = async (req, res) => {
  try {
    const { book_id, user_id } = req.body;

    if (!book_id || !user_id) {
      return res.status(400).json({ message: "All Fields Required" });
    }

    if (
      !mongoose.Types.ObjectId.isValid(book_id) ||
      !mongoose.Types.ObjectId.isValid(user_id)
    ) {
      return res.status(400).json({ message: "Invalid Book or User ID" });
    }

    const finderBook = await booksModel.findById(book_id);

    if (!finderBook) {
      return res.status(404).json({ message: "Book Not Found" });
    }

    const finderBookAndUpdate = await booksModel.findOneAndUpdate(
      { _id: finderBook._id },
      { $set: { free: false } },
      { new: true }
    );

    if (!finderBookAndUpdate) {
      return res.status(404).json({ message: "Book Not Found" });
    }

    const finderUser = await usersModel.findById(user_id);
    if (!finderUser) {
      return res.status(404).json({ message: "User Not Found" });
    }

    const rentDateObject = new Date();

    const maxReturnDate = new Date(rentDateObject);
    maxReturnDate.setMonth(rentDateObject.getMonth() + 1);

    const result = await rentsModel.create({
      user_id: finderUser._id,
      book_id: finderBook._id,
      rentDate: rentDateObject,
      returnDate: maxReturnDate,
    });

    res.status(201).json({
      message: "Book Rent Successfully",
      result,
    });
  } catch (err) {
    res.status(500).json({ message: "Server Error", error: err.message });
  }
};

exports.backBook = async (req, res) => {
  try {
    const { id } = req.params;

    if (isValidObjectId(id)) {
      const finderBook = await booksModel.findById(id);
      if (!finderBook) {
        return res.status(404).json({ message: "Book Not Found" });
      }
      const finderBookAndUpdate = await booksModel.findOneAndUpdate(
        { _id: finderBook._id },
        { $set: { free: true } },
        { new: true }
      );

      const findAndDeleteRents = await rentsModel.findOneAndDelete({
        book_id: finderBook._id,
      });

      if (!findAndDeleteRents) {
        return res
          .status(404)
          .json({ message: "Book Not Found in collection rent" });
      }

      if (!finderBookAndUpdate) {
        return res.status(404).json({ message: "Book Not Found" });
      }

      res.status(200).json({ message: "Book Return Successfully" });
    } else {
      res.status(400).json({ message: "Invalid Book ID" });
    }
  } catch (err) {
    res.status(500).json(err);
  }
};
