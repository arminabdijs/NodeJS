const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const usersRouter = require("./routes/usersRouter");
const booksRouter = require("./routes/booksRouter");
const rentsRouter = require("./routes/rentsRouter");
const cursesRouter = require("./routes/coursesRouter");
const { teacherModel } = require("./models/teacher");
const viewsPath = require("./utils/path");
const {courseModel} = require("./models/course");
const commentModel = require("./models/comment");

require("./configs/db");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", async (req, res) => {
  // const teacher = await teacherModel.findOne({ _id: "67f4c4a2eee18819428bcf27" });
  // console.log(teacher);

  // await courseModel.create({ title: "Angular", teacher: teacher });

  // res.json({
  //   message: "New curse created",
  // });

  await commentModel.create({ body: "this is a comment" ,course:"67f5e509b7c6d3eee57f2907"});

  res.json({
    message: "New comment created",
  });
});

app.use("/api/users", usersRouter);
app.use("/api/books", booksRouter);
app.use("/api/books", rentsRouter);
app.use("/api/courses", cursesRouter);

app.use((req, res, next) => {
  return res.status(404).sendFile(path.join(viewsPath, "404.html"));
});

app.listen(3000, () => {
  console.log(`Server Running On Port 3000`);
});
