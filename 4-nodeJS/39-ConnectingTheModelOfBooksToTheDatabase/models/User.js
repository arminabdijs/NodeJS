const { dbConnection, ObjectId } = require("../configs/db");

const findAllUsers = async () => {
  const db = await dbConnection();
  const usersCollection = db.collection("users");

  const users = await usersCollection.find({}).toArray();

  return users;
};

const findUser = async (userID) => {
  const db = await dbConnection();
  const usersCollection = db.collection("users");
  const user = await usersCollection.findOne({
    _id: new ObjectId(userID),
  });

  return user;
};

const remove = async (userID) => {
  try {
    const db = await dbConnection();
    const usersCollection = db.collection("users");
    const user = await usersCollection.deleteOne({
      _id: new ObjectId(userID),
    });

    if (user.deletedCount) {
      return { message: "User deleted" };
    } else {
      throw new Error("User not found");
    }
  } catch (e) {
    throw new Error(`Error: ${e.message}`);
  }
};

const create = async (parsedData) => {
  const db = await dbConnection();
  const usersCollection = db.collection("users");

  const createdUser = await usersCollection.insertOne({
    ...parsedData,
    crime: 0,
    role: "USER",
  });

  return createdUser;
};

const login = (req) => {
  return new Promise((resolve, reject) => {
    try {
      let user = "";
      req.on("data", (data) => {
        user = user + data.toString();
      });

      req.on("end", async () => {
        const db = await dbConnection();
        const usersCollection = db.collection("users");

        const { username, password, email, phone } = JSON.parse(user);

        if ((username || email || phone) && password) {
          const userFound = await usersCollection.findOne({
            $or: [{ username: username }, { email: email }, { phone: phone }],
            password: password,
          });

          resolve(userFound);
        } else {
          reject("All required fields must be provided");
        }
      });
    } catch (e) {
      reject(e);
    }
  });
};

const upgrade = async (userID) => {
  const db = await dbConnection();
  const usersCollection = db.collection("users");
  const updatedRole = await usersCollection.updateOne(
    { _id: new ObjectId(userID) },
    {
      $set: {
        role: "ADMIN",
      },
    }
  );

  return updatedRole;
};

const update = async (userID, crimeParse) => {
  try {
    const db = await dbConnection();
    const usersCollection = db.collection("users");
    const { crime } = crimeParse;
    const updatedUser = await usersCollection.updateOne(
      { _id: new ObjectId(userID) },
      {
        $set: { crime: crime },
      }
    );

    return updatedUser;
  } catch (e) {
    throw new Error(`Error: ${e.message}`);
  }
};

module.exports = {
  findAllUsers,
  create,
  upgrade,
  login,
  update,
  findUser,
  remove,
};
