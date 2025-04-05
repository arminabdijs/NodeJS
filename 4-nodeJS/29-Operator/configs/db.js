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

    // *! $ne ==> not equal to
    /* const result = await usersCollection
      .find({ role: { $ne: "ADMIN" } })
      .toArray();

    console.log(result); */

    // *! $eq ==> equal to
    /* const result = await usersCollection
      .find({ role: { $eq: "ADMIN" } })
      .toArray();

    console.log(result); */

    // *! $gt ==> greater than
    // *! $lt ==> less than
    /* const result = await usersCollection
      .find({ crime: { $gt: 2000, $lt: 30000 } })
      .toArray();

    console.log(result); */

    // *! $gte ==> greater than equal to
    // *! $lte ==> less than equal to

    /* const result = await usersCollection
      .find({ crime: { $gte: 2000, $lte: 30000 } })
      .toArray();

    console.log(result); */

    // *! $in ==> in[1,2,3]
    /* const result = await usersCollection
      .find({ role: { $in: ["super Admin", "USER+"] } })
      .toArray();
    console.log(result); */

    // *! $nin ==> not in[1,2,3]
    /*   const result = await usersCollection
      .find({ role: { $nin: ["ADMIN", "USER"] } })
      .toArray();
    console.log(result); */

    // *! $or ==> or[{},{},{}]
    /* const result = await usersCollection
      .find({
        $or: [{ role: "ADMIN" }, { role: "USER" }],
      })
      .toArray();
    console.log(result); */

    // *! $and ==> and[{},{},{}]
    /* const result = await usersCollection
      .find({
        $and: [{ role: "ADMIN" }, { crime: { $gte: 20000 } }],
      })
      .toArray();
    console.log(result); */

    // *! $not ==> not{}
    /* const result = await usersCollection
      .find({
        role: {
          $not: { $eq: "ADMIN" },
        },
      })
      .toArray();
    console.log(result); */

    // *! $exists ==> exists
    const result = await usersCollection
      .find({
        address: {
          $exists: true,
        },
      })
      .toArray();

    console.log(result);

    console.log("Database selected: " + dbName);
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  }
};

main();
