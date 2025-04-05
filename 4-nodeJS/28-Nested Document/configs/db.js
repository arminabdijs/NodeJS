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

    /* const result = await usersCollection.insertOne({
      name: "John Doe",
      username: "John_Doe",
      password: "12345678",
      age: 30,
      email: "arminabdi@gmail.com",
      address: {
        street: "123 Main St",
        city: "New York",
        state: "NY",
        zip: "10001",
      },
      phone: "989185467382",
      crime: 900000,
      role: "ADMIN",
      tags: ["html", "css", "javascript","react","nodejs"],
    });

    console.log(result); */

    const result = await usersCollection.findOne({
      _id: new ObjectId("67b063860ff1278a2e318143"),
    });
    console.log(result.tags[4]);

    console.log("Database selected: " + dbName);
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  }
};

main();
