const express = require("express");
require("dotenv").config();
require("./configs/db");

const usersModel = require("./models/users");
const booksModel = require("./models/books");

const app = express();

app.use(express.json()); // to support JSON-encoded bodies
app.use(express.urlencoded({ extended: false })); // to support URL-encoded bodies

app.post("/api/users", (req, res) => {
  const { lastName, firstName, username, email, password, age } = req.body;

  if (
    (lastName === "" || firstName === "" || username === "",
    email === "" || password === "")
  ) {
    res.status(422).json({ message: "Data is not valid" });
  } else {
    usersModel.create({ lastName, firstName, username, email, password, age });
  }
  res.status(201).json({ message: "New user create successfully" });
});

app.post("/api/books", (req, res) => {
  const { title, author, price } = req.body;

  if ((title === "", author === "")) {
    res.status(422).json({ message: "Data is not valid" });
  } else {
    booksModel.create({ title, author, price });
  }

  res.status(201).json({ message: "New book create successfully" });
});



const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`); // logging server is running on port 8080
});
