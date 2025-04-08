const usersModel = require("../models/users");
const { isValidObjectId } = require("mongoose");
const registerUserValidator = require("../Validators/registerUserValidator");
const checkLogin = require("../Validators/loginValidator");

exports.getAllUsers = async (req, res) => {
  try {
    const finderAllUsers = await usersModel.find({});
    if (!finderAllUsers || finderAllUsers.length === 0) {
      return res.status(404).json({ message: "Users Not Found" });
    }
    res.status(200).json(finderAllUsers);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.getSingleUser = async (req, res) => {
  try {
    const { id } = req.params;
    if (isValidObjectId(id)) {
      const finderUser = await usersModel.findById(id);
      if (!finderUser) {
        return res.status(404).json({ message: "User Not Found" });
      }
      res.status(200).json(finderUser);
    } else {
      res.status(400).json({ message: "Invalid User ID" });
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.removeOne = async (req, res) => {
  try {
    const { id } = req.params;
    if (isValidObjectId(id)) {
      const finderUser = await usersModel.findByIdAndDelete(id);
      if (!finderUser) {
        return res.status(404).json({ message: "User Not Found" });
      }
      res.status(200).json({ message: "User Deleted Successfully" });
    } else {
      res.status(400).json({ message: "Invalid User ID" });
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.registerUser = async (req, res) => {
  try {
    const validationResult = registerUserValidator(req.body);

    if (validationResult !== true) {
      return res.status(422).json(validationResult);
    }

    let { name, username, email, password, address, phone, role, crime } =
      req.body;

    const result = await usersModel.create({
      name,
      email,
      username,
      password,
      address,
      phone,
      role,
      crime,
    });

    res.status(201).json({
      message: "New user create successfully",
      result,
    });
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.loginUser = async (req, res) => {
  try {
    const validation = checkLogin(req.body);

    if (validation !== true) {
      return res.status(422).json(validation);
    }

    const { username, email, phone, password } = req.body;

    if (!username && !email && !phone) {
      return res
        .status(400)
        .json({ message: "username، email or phone required" });
    }

    const finderUser = await usersModel.findOne({
      $or: [{ username }, { email }, { phone }],
    });

    if (!finderUser) {
      return res.status(404).json({ message: "user not found" });
    }

    if (finderUser.password !== password) {
      return res.status(401).json({ message: "wrong password" });
    }

    console.log(finderUser);

    res.status(200).json({
      message: "Login Successfully",
      user: {
        name: finderUser.name,
        username: finderUser.username,
        email: finderUser.email,
        address: finderUser.address,
        phone: finderUser.phone,
      },
    });
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.upgradeRoleUser = async (req, res) => {
  try {
    const { id } = req.params;

    if (!isValidObjectId(id)) {
      return res.status(400).json({ message: "Invalid User ID" });
    }

    const finderUser = await usersModel.findById(id);

    if (!finderUser) {
      return res.status(404).json({ message: "User Not Found" });
    }

    if (finderUser.role === "ADMIN") {
      return res.status(400).json({ message: "User is already an admin" });
    }

    const finderUserAndUpdate = await usersModel.findOneAndUpdate(
      { _id: finderUser._id },
      { $set: { role: "ADMIN" } },
      { new: true }
    );

    if (!finderUserAndUpdate) {
      return res.status(404).json({ message: "User Not Found" });
    }

    res.status(200).json({ message: "User Updated Successfully" });
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.updateCrimeUser = async (req, res) => {
  try {
    const { id } = req.params;

    if (!isValidObjectId(id)) {
      return res.status(400).json({ message: "Invalid User ID" });
    }

    const { crime } = req.body;

    const finderUserAndUpdate = await usersModel.findOneAndUpdate(
      { _id: id },
      { $set: { crime: crime } },
      { new: true }
    );

    if (!finderUserAndUpdate) {
      return res.status(404).json({ message: "User Not Found" });
    }

    res.status(200).json({
      message: "User Updated Successfully",
      user: finderUserAndUpdate,
    });
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ message: "Internal Server Error", error: err.message }); // ارسال پیام خطا
  }
};
