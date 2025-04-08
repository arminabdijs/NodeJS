const express = require("express");
const bodyParser = require("body-parser");
const usersRouter = require("./routes/usersRouter");
const booksRouter = require("./routes/booksRouter");
const rentsRouter = require("./routes/rentsRouter");

// ES module
const camelcaseKeys = (...args) =>
  import("camelcase-keys").then(({ default: camelcase }) => camelcase(...args));

require("./configs/db");

const app = express();

// const camelcase = async (req, res, next) => {
//   req.params = await camelcaseKeys(req.params);
//   req.body = await camelcaseKeys(req.body);
//   req.query = await camelcaseKeys(req.query);

//   console.log("Body =>", req.body);
//   console.log("Params =>", req.params);
//   console.log("Query =>", req.query);

//   next();
// };

const camelcase = async (req, res, next) => {
  // deep: true converts nested object keys to camelCase as well.
  req.body = await camelcaseKeys(req.body, { deep: true });
  console.log("Params =>", req.body);
  next();
};

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(camelcase)

app.use("/api/users", usersRouter);
app.use("/api/books", booksRouter);
app.use("/api/books", rentsRouter);

app.listen(3000, () => {
  console.log(`Server Running On Port 3000`);
});
