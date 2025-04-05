const { dbConnection, ObjectId } = require("../configs/db");

const rent = (req) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { userID, bookID, startDate, endDate } = {
        userID: req.body.userID,
        bookID: req.body.bookID,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
      };
      const db = await dbConnection();
      const rentCollection = db.collection("rents");
      const bookCollection = db.collection("books");
      const userCollection = db.collection("users");

      const user = await userCollection.findOne({
        _id: new ObjectId(userID),
      });
      const book = await bookCollection.findOne({
        _id: new ObjectId(bookID),
      });

      if (!user) {
        reject("User not found");
      }

      if (!book) {
        reject("Book not found");
      }

      const rent = {
        userID: new ObjectId(userID),
        bookID: new ObjectId(bookID),
      };

      const convert = new Date().getTime() + 24 * 60 * 60 * 1000;
      const insertedRent = await rentCollection.insertOne({
        ...rent,
        startDate: new Date(),
        endDate: new Date(convert),
      });

      resolve(insertedRent);
    } catch (e) {
      reject(e);
    }
  });
};

module.exports = {
  rent,
};
