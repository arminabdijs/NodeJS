const { MongoClient, ObjectId } = require("mongodb");

require("dotenv").config();

const dbConnection = new MongoClient(process.env.MONGODB_URI);

const dbName = process.env.DB_NAME;

module.exports = {
  db: async () => {
    try {
      await dbConnection.connect();
      console.log("Connected to MongoDB at " + process.env.MONGODB_URI);

      const db = dbConnection.db(dbName);

      return db;
    } catch (err) {
      console.error("Error connecting to MongoDB:", err);
    }
  },
};
