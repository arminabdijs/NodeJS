const coursesModel = require("../models/course");
const commentsModel = require("../models/comment");

exports.getAll = async (req, res) => {
  const finderAllUsers = await coursesModel.find({}).populate("teacher","-__v ").populate("comments","-__v ").select("-__v");
  if (!finderAllUsers || finderAllUsers.length === 0) {
    return res.status(404).json({ message: "Users Not Found" });
  }
  res.status(200).json(finderAllUsers);
};

exports.setComment = async (req, res) => {
  const { body, coursesId } = req.body;

  const comment = await commentsModel.create({ body });

  await coursesModel.findOneAndUpdate(
    { _id: coursesId },
    { $push: { comments: comment._id } }
  );
  res.status(201).json({ message: "Comment Created Successfully" });
};
