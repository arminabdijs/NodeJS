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

    /* const result = await usersCollection.deleteMany({
      _id: { $ne: new ObjectId("67af7b245d23df67368002cf") },
    });
    console.log(result.deletedCount); */

    /* const result = await usersCollection.deleteOne({
      "address.city": "Javanrud",
        });
    console.log(result.deletedCount); */

    /* const result = await usersCollection.drop();
    console.log(result); */

    /* const rentsCollection=await db.collection("rents").drop();
    console.log(rentsCollection);
     */

    /* const result = await db.dropCollection("books");
    console.log(result); */

    const result = await db.dropDatabase();
    console.log(result);
  


    console.log("Database selected: " + dbName);
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  }
};

main();
