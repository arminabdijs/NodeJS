const express = require("express");
const coursesController = require("../Controllers/courses");

const courseRouter = express.Router();

courseRouter.route("/").get(coursesController.getAll);
courseRouter.route("/comments").post(coursesController.setComment);

module.exports = courseRouter;
