const url = require("url");
const UserModel = require("../models/User");

const getAllUsers = async (req, res) => {
  try {
    const users = await UserModel.findAllUsers();

    console.log(users);
    res.status(200).send(users);
  } catch (e) {
    console.error(e);
    res.status(404).send({ message: "User not found" });
  }
};

const getUser = async (req, res) => {
  const userID = req.params._id;

  try {
    const user = await UserModel.findUser(userID);
    console.log(user);
    res.status(200).send(user);
  } catch (err) {
    console.error(err);
    res.status(404).send(err);
  }
};

const removeOne = async (req, res) => {
  const userID = req.params._id;

  try {
    const removedUser = await UserModel.remove(userID);

    console.log({ message: "removed user" });

    res.status(200).send({ message: "removed user" });
  } catch (err) {
    console.error(err);
    res.status(404).send(err);
  }
};

const createUsers = async (req, res) => {
  try {
    const createdUsers = await UserModel.create(req, res);
    res.status(201).send(createdUsers);
  } catch (err) {
    console.error(err);
    res.status(404).send(err);
  }
};

const loginUser = async (req, res) => {
  try {
    const user = await UserModel.login(req);
    if (!user) {
      res.writeHead(400, { "Content-Type": "application/json" });
      return res.end(JSON.stringify({ error: "User not found" }));
    }
    res.status(200).send({ message: "login user successfully" });
  } catch (err) {
    console.error(err);
    res.status(404).send({ message: "Login failed" });
  }
};

const upgradeRoleUser = async (req, res) => {
  const userID = req.params._id;

  try {
    const upgradeableUser = await UserModel.upgrade(userID);
    res.status(200).send({ message: "user upgrade successful" });
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: "user upgrade failed" });
  }
};

const updateUser = async (req, res) => {
  const userID = req.params._id;

  try {
    const updatedUser = await UserModel.update(userID, req);

    res.status(200).send({message:"User updated"})
  } catch (err) {
    console.error(err);
    res.status(404).send({message:"User not found"})
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
