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

    //This method tells how many documents are in our collection
    /*     const result = await usersCollection.countDocuments();*/
    /* const result = await usersCollection.countDocuments({
      crime: { $gte: 900000 },
    }); */

    //This will return the first two data for us
    /*     const result = await usersCollection.find().limit(2).toArray();
     */
    //This will return the first two data for us in descending order
    const result = await usersCollection
      .find()
      .limit(2)
      .sort({ _id: -1 }) // 1 for ascending order, -1 for descending order
      .toArray();

    

    console.log(result);

    console.log("Database selected: " + dbName);
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  }
};

main();
