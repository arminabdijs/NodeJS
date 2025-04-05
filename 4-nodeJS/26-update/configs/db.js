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

    const result = await usersCollection.insertMany([
      {
        name: "John Doe",
        username: "John_Doe",
        password: "12345678",
        email: "john121@gmail.com",
        phone: "989185467382",
        crime: 900000,
        role: "ADMIN",
        tags: ["html", "json", "css", "javascript"],
      },
      {
        name: "Alice Johnson",
        username: "Alice_Johnson",
        password: "12345678",
        email: "alice121@gmail.com",
        phone: "989395678210",
        crime: 50000,
        role: "USER",
        tags: ["html", "json", "css", "javascript"],
      },
      {
        name: "Bob Brown",
        username: "Bob_Brown",
        password: "12345678",
        email: "bob121@gmail.com",
        phone: "989654789012",
        crime: 70000,
        role: "USER",
        tags: ["html", "json", "css", "javascript"],
      },
      {
        name: "Charlie Davis",
        username: "Charlie_Davis",
        password: "12345678",
        email: "charlie121@gmail.com",
        phone: "989876543210",
        crime: 20000,
        role: "USER",
        tags: ["html", "json", "css", "javascript"],
      },
      {
        name: "David Wilson",
        username: "David_Wilson",
        password: "12345678",
        email: "david121@gmail.com",
        phone: "989987654321",
        crime: 20000,
        role: "ADMIN",
        tags: ["html", "json", "css", "javascript"],
      },
      {
        name: "Jane Smith",
        username: "Jane_Smith",
        password: "12345678",
        email: "jane121@gmail.com",
        phone: "989214568392",
        crime: 0,
        role: "USER",
        address: {
          city: "Javanrud",
          state: "Kermanshah",
          country: "Iran",
        },
        tags: ["html", "json", "css", "javascript"],
      },
    ]);

    console.log(result);

    // *? update the one item in document
    /* const result = await usersCollection.updateOne(
      { _id: new ObjectId("67b01abd1bc68ad277a72547") },
      {
        $set: {
          name: "Armin Abdi",
          username: "Armin_AbdiJS",
          password: "ArminAbdiJS",
          email: "arminabdijs@gmail.com",
          address: "iran Javanrud",
          phone: "+989303108615",
          crime: 0,
          role: "ADMIN",
        },
      }
    );

    console.log(result); */

    // *? update the all
    /* const result = await usersCollection.updateMany(
      { name: "Armin Abdi" },
      {
        $set: {
          username: "Armin Abdi",
          password: "Armin Abdi",
        },
      }
    ); 
    
    console.log(result);
    */

    // *? find items and update item
    /* const result = await usersCollection.findOneAndUpdate(
      { name: "Armin Abdi" },
      {
        $set: {
          username: "Armin Abdi",
          password: "Abdi2002",
        },
      }
    );

    console.log(result); */

    console.log("Database selected: " + dbName);
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  }
};

main();
