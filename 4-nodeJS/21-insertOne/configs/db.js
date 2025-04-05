const { MongoClient } = require("mongodb");

const url = "mongodb://localhost:27017/";

const dbConnection = new MongoClient(url);

const dbName = "library";

const main = async () => {
  try {
    await dbConnection.connect();
    console.log("Connected to MongoDB at " + url);

    const db = dbConnection.db(dbName);

    const userCollections = db.collection("users");
    const booksCollections = db.collection("books");

    userCollections.insertOne({
      name: "John Doe",
      username: "John_Doe",
      password: "12345678",
      email: "john121@gmail.com",
      address: "123 Main St",
      phone: "989185467382",
      crime: 900000,
      role: "ADMIN",
    });

    booksCollections.insertOne({
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      publication_year: 1937,
      genre: "Fantasy",
      price: "160000$",
      free: 0
    })
    console.log("Database selected: " + dbName);
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  }
};

main();





