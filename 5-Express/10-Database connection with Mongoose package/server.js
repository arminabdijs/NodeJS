const express = require("express");
require("dotenv").config();
require("./configs/db")

const app = express();
app.use(express.json()); // to support JSON-encoded bodies
app.use(express.urlencoded({ extended: false })); // to support URL-encoded bodies

app.post("/api/books", (req, res) => {
  console.log(req.body.userID);

  res.statusCode = 200;
  res.send("Welcome to Book Store");
});

const port = process.env.PORT

app.listen(port, () => {
  console.log(`Server is running on port ${port}`); // logging server is running on port 8080
});