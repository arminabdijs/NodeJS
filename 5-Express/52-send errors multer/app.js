const express = require("express");
const bodyParser = require("body-parser");
const uploader = require("./middlewares/multer");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", uploader.single("profile"), (req, res) => {

  res.json(req.file);
});

app.use((err, req, res, next) => {
  return res.json({
    statusCode: err.status || 500,
    msg: err.message || "Internal Server Error",
  });
});

app.listen(3000, () => {
  console.log(`Server Running On Port 3000`);
});

