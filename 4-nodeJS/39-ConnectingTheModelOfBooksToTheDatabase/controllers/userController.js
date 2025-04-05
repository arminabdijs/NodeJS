const url = require("url");
const UserModel = require("../models/User");

const getAllUsers = async (req, res) => {
  const users = await UserModel.findAllUsers();

  console.log(users);
  res.writeHead(200, { "content-type": "application/json" });
  res.write(JSON.stringify(users));
  res.end();
};

const getUser = async (req, res) => {
  const urlParser = url.parse(req.url, true);
  const userID = urlParser.query._id;

  try {
    const user = await UserModel.findUser(userID);
    res.writeHead(200, { "content-type": "application/json" });
    res.write(JSON.stringify(user));
    res.end();
  } catch (err) {
    console.error(err);
    res.writeHead(404, { "content-type": "application/json" });
    res.write(JSON.stringify(err));
    res.end();
  }
};
const removeOne = async (req, res) => {
  const urlParser = url.parse(req.url, true);
  const userID = urlParser.query._id;

  try {
    const removedUser = await UserModel.remove(userID);
    res.writeHead(200, { "content-type": "application/json" });
    res.write(JSON.stringify(removedUser));
    res.end();
  } catch (err) {
    console.error(err);
    res.writeHead(404, { "content-type": "application/json" });
    res.write(JSON.stringify(err));
    res.end();
  }
};

const createUsers = async (req, res) => {
  try {
    let user = "";

    req.on("data", (data) => {
      user = user + data.toString();
    });
    req.on("end", async () => {
      const parsedData = JSON.parse(user);

      const { lastName, firstName, username, password, email, phone, address } =
        parsedData;

      if (!lastName || !firstName || !username || !password || !email) {
        res.writeHead(400, { "Content-Type": "application/json" });
        return res.end(
          JSON.stringify({ error: "All required fields must be provided" })
        );
      }

      const createdUsers = await UserModel.create(parsedData);
      res.writeHead(201, { "content-type": "application/json" });
      res.write(JSON.stringify(createdUsers));
      res.end();
    });
  } catch (err) {
    console.error(err);
    res.writeHead(404, { "content-type": "application/json" });
    res.write(JSON.stringify(err));
    res.end();
  }
};



const loginUser = async (req, res) => {
  try {
    const user = await UserModel.login(req);
    if (!user) {
      res.writeHead(400, { "Content-Type": "application/json" });
      return res.end(JSON.stringify({ error: "User not found" }));
    }
    res.writeHead(200, { "content-type": "application/json" });
    res.write(JSON.stringify(user));
    res.end();
  } catch (err) {
    console.error(err);
    res.writeHead(404, { "content-type": "application/json" });
    res.write(JSON.stringify(err));
    res.end();
  }
};


const upgradeRoleUser = async (req, res) => {
  const urlParser = url.parse(req.url, true);
  const userID = urlParser.query._id;

  try {
    const upgradeableUser = await UserModel.upgrade(userID);
    res.writeHead(200, { "content-type": "application/json" });
    res.write(JSON.stringify(upgradeableUser));
    res.end();
  } catch (err) {
    console.error(err);
    res.writeHead(404, { "content-type": "application/json" });
    res.write(JSON.stringify(err));
    res.end();
  }
};

const updateUser = async (req, res) => {
  const urlParser = url.parse(req.url, true);
  const userID = urlParser.query._id;

  try {
    let crimeUP = "";
    req.on("data", (data) => {
      crimeUP = crimeUP + data.toString();
    });
    req.on("end", async () => {
      const crimeParse = JSON.parse(crimeUP);
      const updatedUser = await UserModel.update(userID, crimeParse);

      if (updatedUser.modifiedCount === 0) {
        res.writeHead(404, { "Content-Type": "application/json" });
        return res.end(JSON.stringify({ error: "User not updated" }));
      } else {
        res.writeHead(200, { "content-type": "application/json" });
        res.write(JSON.stringify(updatedUser));
        res.end();
      }
    });
  } catch (err) {
    console.error(err);
    res.writeHead(500, { "content-type": "application/json" });
    res.write(JSON.stringify(err));
    res.end();
  }
};

module.exports = {
  getAllUsers,
  createUsers,
  upgradeRoleUser,
  loginUser,
  updateUser,
  getUser,
  removeOne,
};
