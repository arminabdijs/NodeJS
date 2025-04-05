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

    const result = await userCollections.insertMany([
      {
         
        name: "John Doe",
        username: "John_Doe",
        password: "12345678",
        email: "john121@gmail.com",
        address: "123 Main St",
        phone: "989185467382",
        crime: 900000,
        role: "ADMIN",
      },
      {
        name: "Alice Johnson",
        username: "Alice_Johnson",
        password: "12345678",
        email: "alice121@gmail.com",
        address: "789 Oak St",
        phone: "989395678210",
        crime: 50000,
        role: "USER",
      },
      {
        name: "Bob Brown",
        username: "Bob_Brown",
        password: "12345678",
        email: "bob121@gmail.com",
        address: "321 Maple St",
        phone: "989654789012",
        crime: 70000,
        role: "USER",
      },
      {
        name: "Charlie Davis",
        username: "Charlie_Davis",
        password: "12345678",
        email: "charlie121@gmail.com",
        address: "654 Willow St",
        phone: "989876543210",
        crime: 20000,
        role: "USER",
      },
      {
        name: "David Wilson",
        username: "David_Wilson",
        password: "12345678",
        email: "david121@gmail.com",
        address: "987 Pine St",
        phone: "989987654321",
        crime: 20000,
        role: "ADMIN",
      },
      {
        name: "Jane Smith",
        username: "Jane_Smith",
        password: "12345678",
        email: "jane121@gmail.com",
        address: "456 Elm St",
        phone: "989214568392",
        crime: 0,
        role: "USER",
      },
    ]);

    console.log(result);

    console.log("Database selected: " + dbName);
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  }
};

main()


