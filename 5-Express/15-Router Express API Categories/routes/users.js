const express = require("express");
const usersModel = require("./../models/users");
const registerValidator = require("../Validators/registerUser");
const { isValidObjectId } = require("mongoose");

const usersRouter = express.Router();

usersRouter.post("/register", async (req, res) => {
  const validationResult = registerValidator(req.body);

  if (validationResult !== true) {
    return res.status(422).json(validationResult);
  }

  let { name, username, email, age, password } = req.body;

  const result = await usersModel.create({
    name,
    email,
    username,
    age,
    password,
  });

  res.status(201).json({
    message: "New user create successfully",
    result,
  });
});

usersRouter.delete("/:id", async (req, res) => {
  const { id } = req.params;

  if (isValidObjectId(id)) {
    const deletedUser = await usersModel.findByIdAndDelete({ _id: id });

    if (!deletedUser) {
      return res.status(404).json({
        message: "There is not user !!",
      });
    }
  } else {
    return res.status(422).json({
      message: "UserID is not valid !!",
    });
  }

  res.status(200).json({
    message: "User Deleted Successfully",
  });
});

module.exports = usersRouter;
