const express = require("express");
const usersController = require("../Controllers/users");

const usersRouter = express.Router();

usersRouter
  .route("/")
  .get(usersController.getAllUsers)
  .post(usersController.registerUser);

usersRouter
  .route("/:id")
  .get(usersController.getSingleUser)
  .delete(usersController.removeOne)
  .put(usersController.updateCrimeUser);

usersRouter.post("/login", usersController.loginUser);

usersRouter.put("/upgrade/:id", usersController.upgradeRoleUser);

module.exports = usersRouter;
