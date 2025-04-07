const express = require("express");
const usersController = require("../Controllers/users");

const usersRouter = express.Router();

usersRouter.route("/:id?").get(usersController.getUsers);

module.exports = usersRouter;
