const { MongoClient, ObjectId } = require("mongodb");

require("dotenv").config();

const dbConnection = new MongoClient(process.env.MONGODB_URI);

const dbName = process.env.DB_NAME;

const main = async () => {
  try {
    await dbConnection.connect();
    console.log("Connected to MongoDB at " + process.env.MONGODB_URI);

    const db = dbConnection.db(dbName);

    const usersCollection = db.collection("users");
    // *! createdAt: This field is automatically set to the date and time when the document is first created.
    // *! updatedAt: This field is automatically set to the date and time whenever the document is updated.
    const result = await usersCollection.updateMany(
      {
        createdAt: { $exists: true },
      },
      {
        /* $set: {
          createdAt: new Date(),
          updatedAt: new Date(),
        }, */

        /* $currentDate: {
          createdAt: true,
          updatedAt: true,
        }, */
      }
    );

    console.log(result);
    

    console.log("Database selected: " + dbName);
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  }
};

main();
