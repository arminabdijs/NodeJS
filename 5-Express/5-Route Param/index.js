const express = require("express");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 8080;

const courses = [
  { id: 1, name: "JS", price: 100 },
  { id: 2, name: "Node", price: 200 },
  { id: 3, name: "React", price: 300 },
  { id: 4, name: "Express", price: 0 },
];

app.get("/api/users/:userID/articles/:articleID", (req, res) => {
  console.log(`userId: ${req.params.userID}`);
  console.log(`articleId: ${req.params.articleID}`);
  res.json({message:"Main User Article send to Client"});
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
