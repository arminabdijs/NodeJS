const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

app.post("/api/books", (req, res) => {
  console.log(req.body);

  res.statusCode = 200;
  res.send("Welcome to Book Store");
});

app.listen(8080, () => {
  console.log("Server is running on port 8080"); // logging server is running on port 8080
});
