const { dbConnection, ObjectId } = require("../configs/db");

const findAllBooks = async () => {
  const db = await dbConnection();
  const booksCollection = db.collection("books");
  const finderAllBooks = await booksCollection.find({}).toArray();
  return finderAllBooks;
};

const findBook = async (bookID) => {
  const db = await dbConnection();
  const booksCollection = db.collection("books");
  const finderBook = await booksCollection.findOne({
    _id: new ObjectId(bookID),
  });

  return finderBook;
};

const remove = (bookID) => {
  return new Promise(async (resolve, reject) => {
    try {
      const db = await dbConnection();
      const booksCollection = db.collection("books");
      const removedBook = await booksCollection.findOneAndDelete({
        _id: new ObjectId(bookID),
      });
      if (!removedBook) {
        reject("Book not found");
      }

      resolve(removedBook);
    } catch (e) {
      reject("Book not found");
    }
  });
};

const create = (req) => {
  return new Promise(async (resolve, reject) => {
    try {
      const db = await dbConnection();
      const booksCollection = db.collection("books");
      const { title, author, price } = {
        title: req.body.title,
        author: req.body.author,
        price: parseFloat(req.body.price),
      };

      const createdBook = await booksCollection.insertOne({
        title,
        author,
        price,
        free: 1,
      });
      resolve({ message: "Book added successfully" });
    } catch (e) {
      reject(e);
    }
  });
};

const back = (bookID) => {
  return new Promise(async (resolve, reject) => {
    try {
      const db = await dbConnection();
      const booksCollection = db.collection("books");
      const rentCollection = db.collection("rents");
      const updatedBook = await booksCollection.findOneAndUpdate(
        { _id: new ObjectId(bookID) },
        { $set: { free: true } }
      );

      const updatedRent = await rentCollection.findOneAndDelete({
        bookID: new ObjectId(bookID),
      });

      console.log(updatedRent);

      if (!updatedRent) {
        reject("Book not found");
      }
      resolve(updatedBook);
    } catch (e) {
      reject("Book not found");
    }
  });
};

const update = (bookID, req) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { title, author, price, free } = {
        title: req.body.title,
        author: req.body.author,
        price: parseFloat(req.body.price),
        free: req.body.free,
      };
      const db = await dbConnection();
      const booksCollection = db.collection("books");
      const updatedBook = await booksCollection.updateOne(
        {
          _id: new ObjectId(bookID),
        },
        {
          $set: {
            title,
            author,
            price,
            free,
          },
        }
      );
      if (!updatedBook) {
        reject("Book not found");
      }
      resolve("Book updated successfully");
    } catch (err) {
      reject("Book not found");
    }
  });
};

module.exports = { findAllBooks, remove, create, back, update, findBook };
