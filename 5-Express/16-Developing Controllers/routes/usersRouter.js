const express = require("express");
const usersController = require("../Controllers/users");

const usersRouter = express.Router();

usersRouter.get("/", usersController.getAllUsers);

usersRouter.get("/:id", usersController.getSingleUser);

usersRouter.delete("/:id", usersController.removeOne);

usersRouter.post("/", usersController.registerUser);

usersRouter.post("/login", usersController.loginUser);

usersRouter.put("/upgrade/:id", usersController.upgradeRoleUser);

usersRouter.put("/:id",usersController.updateCrimeUser);



module.exports = usersRouter;

