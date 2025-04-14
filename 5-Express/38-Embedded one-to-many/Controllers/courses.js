const cursesModel = require("../models/course");

exports.getAll = async (req, res) => {
  const finderAllUsers = await cursesModel.find({}).select("-__v -teacher.__v");
  if (!finderAllUsers || finderAllUsers.length === 0) {
    return res.status(404).json({ message: "Users Not Found" });
  }
  res.status(200).json(finderAllUsers);
};
