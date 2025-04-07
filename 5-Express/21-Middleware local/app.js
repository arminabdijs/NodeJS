const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));



app.get(
  "/",
  (req, res,  next) => {
    console.log("Middleware Runner");
    next()
},
  (req, res) => {
    res.send("Welcome to Book Store");
  }
);

app.listen(3000, () => {
  console.log(`Server Running On Port 3000`);
});
