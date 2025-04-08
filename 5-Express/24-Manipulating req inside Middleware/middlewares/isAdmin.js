const usersModel = require("../models/users");

module.exports = async (req, res, next) => {
  const { id } = req.body;

  const user = await usersModel.findOne({ _id: id }).lean();

  req.user = user;
  
  if (user) {
    if (user.role === "ADMIN") {
      return next();
    } else {
      return res.status(403).json({ message: "this route in accessible only for admin" });
    }
  } else {
    return res.status(404).json({ message: "User Not Found" });
  }
};
