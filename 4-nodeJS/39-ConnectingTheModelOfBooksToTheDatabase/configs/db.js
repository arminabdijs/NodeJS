const { MongoClient, ObjectId } = require("mongodb");

require("dotenv").config();

const url = process.env.MONGODB_URI;
const dbConnection = new MongoClient(url);

const dbName = process.env.DB_NAME;

module.exports = {
  dbConnection: async () => {
    try {
      await dbConnection.connect();
      console.log("Connected to MongoDB at " + url);

      const db = dbConnection.db(dbName);

      return db;
    } catch (err) {
      console.error("Error connecting to MongoDB:", err);
    }
  },
  ObjectId,
};
