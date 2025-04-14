const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const usersRouter = require("./routes/usersRouter");
const booksRouter = require("./routes/booksRouter");
const rentsRouter = require("./routes/rentsRouter");
const cursesRouter = require("./routes/coursesRouter");
const { teacherModel } = require("./models/teacher");
const viewsPath = require("./utils/path");
const {cursesModel} = require("./models/course");
const commentModel = require("./models/comment");
const sessionsModel = require("./models/session");

require("./configs/db");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", async (req, res) => {
  await sessionsModel.create({
    title: "routine",
    time: "3 hours",
    course: "67f5e509b7c6d3eee57f2907",
  })

  res.json({
    message: "New session created",
  })
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
