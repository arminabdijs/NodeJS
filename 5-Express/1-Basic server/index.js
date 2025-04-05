const express = require("express");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 8080;

app.get("/home", (req, res) => {
  res.send("Hello World");
});

app.get("/about", (req, res) => {
  res.send("About Page"); 
})

app.get("/contact", (req, res) => {
  res.send("Contact Page");
})

app.get("/products", (req, res) => {
  res.send("Products Page");
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
