const express = require("express");
const bodyParser = require("body-parser");
const usersRouter = require("./routes/usersRouter");
const booksRouter = require("./routes/booksRouter");
const rentsRouter = require("./routes/rentsRouter");
const morgan = require("morgan");

require("./configs/db");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(morgan("dev"));
// app.use(morgan("combined"));
// app.use(morgan("common"));
// app.use(morgan("tiny"));
// app.use(morgan("short"));
// app.use(morgan(":method - :url - :status :user-agent"));
app.use(morgan((tokens, req, res) => {
  return [
    tokens.method(req, res),
    tokens.url(req, res),
    tokens.status(req, res),
    tokens.res(req, res, "content-length"),
    "-",
    tokens["response-time"](req, res),
    "ms",
    tokens["user-agent"](req, res),
  ].join(" ")
}));

app.use("/api/users", usersRouter);
app.use("/api/books", booksRouter);
app.use("/api/books", rentsRouter);

app.listen(3000, () => {
  console.log(`Server Running On Port 3000`);
});


