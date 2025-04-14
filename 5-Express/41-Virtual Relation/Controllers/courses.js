const { cursesModel } = require("../models/course");
const commentsModel = require("../models/comment");

exports.getAll = async (req, res) => {
  const finderAllCourses = await cursesModel
    .find({})
    .populate("comments", "-__v ")
    .select("-__v -teacher.__v");
  if (!finderAllCourses || finderAllCourses.length === 0) {
    return res.status(404).json({ message: "Courses Not Found" });
  }
  res.status(200).json(finderAllCourses);
};

exports.getOne = async (req, res) => {
  const { title } = req.params;

  const finderCourse = await cursesModel.findOne({ title }).lean();
  if (!finderCourse || finderCourse.length === 0) {
    return res.status(404).json({ message: "Courses Not Found" });
  }

  const comments = await commentsModel
    .find({ course: finderCourse._id })
    .select("-__v");

  res.status(200).json({ ...finderCourse, comments });
};

exports.setComment = async (req, res) => {
  const { body, cursesId } = req.body;

  const comment = await commentsModel.create({ body });

  await cursesModel.findOneAndUpdate(
    { _id: cursesId },
    { $push: { comments: comment._id } }
  );
  res.status(201).json({ message: "Comment Created Successfully" });
};
