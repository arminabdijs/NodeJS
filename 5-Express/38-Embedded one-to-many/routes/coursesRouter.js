const express = require("express");
const cursesController = require("../Controllers/courses");

const curseController = express.Router();

curseController
  .route("/")
  .get(cursesController.getAll)

module.exports = curseController;
