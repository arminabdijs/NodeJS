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


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(helmet());
app.use(removeEmptyFields({omitZero:true}));
//This imports the CORS middleware, which allows your server to handle Cross-Origin Resource Sharing—enabling or restricting requests from different origins.
app.use(cors());

app.use(cors({
  origin: "http://example.com", // فقط این دامنه مجاز است
  methods: ["GET", "POST"],     // فقط این متدها مجازند
  credentials: true             // اگر کوکی یا اطلاعات لاگین نیاز دارید
}));
app.use("/api/users", usersRouter);
app.use("/api/books", booksRouter);
app.use("/api/books", rentsRouter);

app.listen(3000, () => {
  console.log(`Server Running On Port 3000`);
});
