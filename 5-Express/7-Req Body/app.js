const express = require("express");

const app = express();
app.use(express.json()); // to support JSON-encoded bodies
app.use(express.urlencoded({ extended: false })); // to support URL-encoded bodies

app.post("/api/books", (req, res) => {
  console.log(req.body.userID);

  res.statusCode = 200;
  res.send("Welcome to Book Store");
});

app.listen(8080, () => {
  console.log("Server is running on port 8080"); // logging server is running on port 8080
});
