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

    // *? replaceOne
    /* const result = await usersCollection.replaceOne(
      { role: "USER" },
      {
        name: "Armin Abdi",
        username: "Armin Abdi",
        password: "Abdi2002",
        email: "arminabdijs@gmail.com",
        address: "iran Javanrud",
        phone: "+989303108615",
        crime: 0,
        role: "USER+",
      }
    );
    console.log(result); */

    // *? find one and replace
   /*  const result = await usersCollection.findOneAndReplace(
      { role: "USER" },
      {
        name: "Armin Abdi",
        username: "Armin Abdi",
      }
    );
    console.log(result); */
    

    

    console.log("Database selected: " + dbName);
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  }
};

main();
