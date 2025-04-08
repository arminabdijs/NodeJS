const express = require("express");
const bodyParser = require("body-parser");
const {testMiddleware} = require("./middleware/test");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(testMiddleware);

app.get(
  /^\/virgool\/@[a-zA-Z]{3,25}$/,
  // (req, res, next) => {
  //   console.log("Middleware Runner");
  //   next();
  // },
  (req, res) => {
    res.json({
      message: "Virgool User Account",
    });
  }
);

app.get(
  "/virgool/:publishId",
  // (req, res, next) => {
  //   console.log("Middleware Runner");
  //   next();
  // },
  (req, res) => {
    res.json({
      message: "Virgool Publish Account",
    });
  }
);

app.listen(3000, () => {
  console.log(`Server Running On Port 3000`);
});

