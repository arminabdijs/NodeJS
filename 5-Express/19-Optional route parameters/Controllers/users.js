const { isValidObjectId } = require("mongoose");
const usersModel = require("../models/users");

exports.getUsers = async (req, res) => {
  if (req.params.id) {
    try {
      const { id } = req.params;
      if (isValidObjectId(id)) {
        const finderUser = await usersModel.findById(id);
        if (!finderUser) {
          return res.status(404).json({ message: "User Not Found" });
        }
        res.status(200).json(finderUser);
      } else {
        res.status(400).json({ message: "Invalid User ID" });
      }
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    try {
      const finderAllUsers = await usersModel.find({});
      if (!finderAllUsers || finderAllUsers.length === 0) {
        return res.status(404).json({ message: "Users Not Found" });
      }
      res.status(200).json(finderAllUsers);
    } catch (err) {
      res.status(500).json(err);
    }
  }
};


