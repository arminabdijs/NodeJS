const express = require("express");
const bodyParser = require("body-parser");
const { isValidObjectId } = require("mongoose");
require("dotenv").config();

const usersModel = require("./models/users");

require("./configs/db");
require("./models/users");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.delete("/api/users/:id", async (req, res) => {
  const { id } = req.params;

  if (isValidObjectId(id)) {
    // .lean() in Mongoose converts the query output into a simple object, making processing faster, lighter, and without the additional Document capabilities.
    const deletedUser = await usersModel.findByIdAndDelete({ _id: id }).lean();

    if (!deletedUser) {
      return res.status(404).json({ message: "There is not user !!" });
    }

    res.status(200).json({ message: "user deleted successfully😊" });
  } else {
    return res.status(422).json({ message: "userID is not valid" });
  }
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`server runing on port ${port}`);
});
