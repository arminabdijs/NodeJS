const coursesModel = require("../models/course");

exports.getAll = async (req, res) => {
  const finderAllUsers = await coursesModel
    .find({})
    .select("-__v")
    .populate("teacher", "-__v");
  if (!finderAllUsers || finderAllUsers.length === 0) {
    return res.status(404).json({ message: "Users Not Found" });
  }
  res.status(200).json(finderAllUsers);
};
