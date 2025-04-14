const express = require("express");
const bodyParser = require("body-parser");
const usersRouter = require("./routes/usersRouter");
const booksRouter = require("./routes/booksRouter");
const rentsRouter = require("./routes/rentsRouter");
const helmet = require("helmet");
const omitEmpty=require("omit-empty")

require("./configs/db");

const app = express();


const removeEmptyFields = (option) => {
  return function (req, res, next) {
    req.body = omitEmpty(req.body, option);
    console.log("Body =>", req.body);
    return next();
  };
};

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// helmet() adds security-related HTTP headers to protect your Express app from common web vulnerabilities.
app.use(helmet());
app.use(removeEmptyFields({omitZero:true}));

app.use("/api/users", usersRouter);
app.use("/api/books", booksRouter);
app.use("/api/books", rentsRouter);

app.listen(3000, () => {
  console.log(`Server Running On Port 3000`);
});
