const express = require("express");
const bodyParser = require("body-parser");
const usersRouter = require("./routes/usersRouter");
const booksRouter = require("./routes/booksRouter");
const rentsRouter = require("./routes/rentsRouter");
const helmet = require("helmet");
const omitEmpty=require("omit-empty")
const cors = require("cors");

require("./configs/db");

const app = express();


const removeEmptyFields = (option) => {
  return function (req, res, next) {
    req.body = omitEmpty(req.body, option);
    console.log("Body =>", req.body);
    return next();
  };
};
fetch("http://localhost:3000/api/users", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    name:"armion",
     email:"arminabdi@gmail.com",
     username:"arminabdiJS",
     password:"1212121212",
     confirmPassword:"1212121212",
     phone:"+9809218967662",
     address:"Javanrud",
     
  }),
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(helmet());
app.use(removeEmptyFields({omitZero:true}));
app.use(cors());
app.use("/api/users", usersRouter);
app.use("/api/books", booksRouter);
app.use("/api/books", rentsRouter);

app.listen(3000, () => {
  console.log(`Server Running On Port 3000`);
});
