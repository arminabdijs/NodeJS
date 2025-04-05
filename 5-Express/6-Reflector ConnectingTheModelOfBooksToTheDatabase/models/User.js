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

const create = (req, res) => {
  return new Promise((resolve, reject) => {
    try {
      let user = "";

      req.on("data", (data) => {
        user = user + data.toString();
      });
      req.on("end", async () => {
        const db = await dbConnection();
        const usersCollection = db.collection("users");

        const parsedData = JSON.parse(user);

        const {
          lastName,
          firstName,
          username,
          password,
          email,
          phone,
          address,
        } = parsedData;

        if (!lastName || !firstName || !username || !password || !email) {
          res.reject({ error: "All required fields must be provided" });
        }

        const createdUser = await usersCollection.insertOne({
          lastName,
          firstName,
          username,
          password,
          email,
          phone,
          address,
          crime: 0,
          role: "USER",
        });

        resolve(createdUser);
      });
    } catch (err) {
      console.error(err);
      reject(err);
    }
  });
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

const update = (userID, req) => {
  return new Promise((resolve, reject) => {
    try {
      let crimeUP = "";

      req.on("data", (data) => {
        crimeUP = crimeUP + data.toString();
      });

      req.on("end", async () => {
        const crimeParse = JSON.parse(crimeUP);
        const { crime } = crimeParse;

        const db = await dbConnection();
        const usersCollection = db.collection("users");

        const updatedUser = await usersCollection.updateOne(
          { _id: new ObjectId(userID) },
          {
            $set: { crime: crime },
          }
        );

        if (updatedUser.modifiedCount === 0) {
          reject("User not updated")
        }
        
        resolve(updatedUser)
      });
    } catch (e) {
      reject(e);
    }
  });
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
