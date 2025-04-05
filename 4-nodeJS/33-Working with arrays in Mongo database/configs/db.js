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

    /* const result = await usersCollection
      .find({
        tags: "html", // Find all users who have "html" in their tags array
        tags: ["html"], //Find all users who have only "html" in their tags array
        tags: { $all: ["html", "css"] }, // Find all users who have both "html" and "css" in their tags array
        tags: { $in: ["html", "css"] }, // Find all users who have either "html" or "css" in their tags array
        tags: { $size: 4 }, // Find all users who have exactly 4 tags in their tags array
      })
      .toArray();

    console.log(result); */

    const result = await usersCollection.updateOne(
      { _id: new ObjectId("67b07f76043d0aa08452b3e4") },
      {
        // push This will add a label to our array whether it exists or not
        /* $push: {
          tags: { $each: ["nodejs", "express", "mongodb"] },
        }, */

        //addToSet This will add a label to our array only if it does not exist
        /* $addToSet: {
          tags: { $each: ["nodejs", "express", "mongodb"] },
        }, */

        //pop This will remove the last element from the array
        /*  $pop: {
          tags: 1, //-1 first array ||1 end array
        }, */

        //pull This will remove the specified element from the array
        $pull: {
          // tags: "express",

          tags: { $in: ["nodejs", "mongodb"] },
        },
      }
    ); 

    console.log(result);

    console.log("Database selected: " + dbName);
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  }
};

main();
