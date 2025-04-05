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

    //find all crime: 0
    /* 
    const noCrimeUsers = await usersCollection.find({ crime: 0 }).toArray();
    
    console.log(noCrimeUsers);
    */

    // findOne first user=Armin Abdi;
    /*const findUsername = await usersCollection.findOne({ username: "Armin Abdi" })
    
    console.log(findUsername);*/

    //find ObjectID
    /* const mainUsers = await usersCollection.findOne({
      _id:new ObjectId("67b00d1fb5f9f17a5c452118"),
    });

    console.log(mainUsers); */

    //find all users
    /* const allUsers = await usersCollection.find({}).toArray();
    console.log(allUsers); */

  /*   const allUsers = await usersCollection
      .find({ username: "Armin Abdi", name: "Armin Abdi" })
      .toArray();
    console.log(allUsers);

    const allUsers2 = await usersCollection.findOne({
      username: "Armin Abdi",
      name: "Armin Abdi",
    });
    console.log(allUsers2); */

    console.log("Database selected: " + dbName);
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  }
};

main();
