const express = require("express");
const cursesController = require("../Controllers/courses");

const curseController = express.Router();

curseController.route("/").get(cursesController.getAll);
curseController.route("/:title").get(cursesController.getOne);
curseController.route("/comments").post(cursesController.setComment);

module.exports = curseController;
