const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const usersRouter = require("./routes/usersRouter");
const booksRouter = require("./routes/booksRouter");
const rentsRouter = require("./routes/rentsRouter");
const cursesRouter = require('./routes/coursesRouter');
// const _ = require('./routes/');
const viewsPath = require("./utils/path");


require("./configs/db");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));



app.use("/api/users", usersRouter);
app.use("/api/books", booksRouter);
app.use("/api/books", rentsRouter);
app.use("/api/courses",cursesRouter );

app.use((req, res, next) => {
  return res.status(404).sendFile(path.join(viewsPath, "404.html"));
});

app.listen(3000, () => {
  console.log(`Server Running On Port 3000`);
});
