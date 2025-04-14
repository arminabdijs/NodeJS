const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const usersRouter = require("./routes/usersRouter");
const booksRouter = require("./routes/booksRouter");
const rentsRouter = require("./routes/rentsRouter");
const viewsPath = require("./utils/path");

const teacherModel = require("./models/teacher");
const courseModel = require("./models/course");

require("./configs/db");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", async(req, res) => {
  /* await teacherModel.create({fullname:"Armin"});

  res.json({
    message: "New teacher created",
  }); */

  await courseModel.create({title:"Angular",teacher:"67f9eef8606dd34db4013963"});

  res.json({
    message: "New course created",
  });
});

app.get("/about", (req, res) => {
  res.status(200).sendFile(path.join(viewsPath, "about.html"));
});

app.get("/contact", (req, res) => {
  res.status(200).sendFile(path.join(viewsPath, "contact.html"));
});

app.use("/api/users", usersRouter);
app.use("/api/books", booksRouter);
app.use("/api/books", rentsRouter);

app.use((req, res, next) => {
  return res.status(404).sendFile(path.join(viewsPath, "404.html"));
});

app.listen(3000, () => {
  console.log(`Server Running On Port 3000`);
});
