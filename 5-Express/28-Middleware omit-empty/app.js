const express = require("express");
const bodyParser = require("body-parser");
const usersRouter = require("./routes/usersRouter");
const booksRouter = require("./routes/booksRouter");
const rentsRouter = require("./routes/rentsRouter");
const omitEmpty = require("omit-empty");
require("./configs/db");

const app = express();

// console.log(
//   omitEmpty({
//     user_name: "Ali",
//     last_name: "",
//     first_name: "",
//     age:0
//   },{
//     omitZero:true
//   })
// );

// const removeEmptyFields=(req,res,next)=>{
//   req.body=omitEmpty(req.body,{omitZero:true})
//   console.log("Body =>",req.body)
//   return next()
// }
const removeEmptyFields = (option) => {
  return function (req, res, next) {
    req.body = omitEmpty(req.body, option);
    console.log("Body =>", req.body);
    return next();
  };
};


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(removeEmptyFields);
app.use(removeEmptyFields({omitZero:false}));

app.use("/api/users", usersRouter);
app.use("/api/books", booksRouter);
app.use("/api/books", rentsRouter);

app.listen(3000, () => {
  console.log(`Server Running On Port 3000`);
});
