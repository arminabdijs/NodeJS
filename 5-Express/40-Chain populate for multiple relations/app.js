const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const usersRouter = require("./routes/usersRouter");
const booksRouter = require("./routes/booksRouter");
const rentsRouter = require("./routes/rentsRouter");
const cursesRouter = require("./routes/coursesRouter");
const { teacherModel } = require("./models/teacher");
const viewsPath = require("./utils/path");
const courseModel = require("./models/course");

require("./configs/db");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", async (req, res) => {
  await courseModel.findOneAndUpdate(
    {
      _id: "67f4f665331cdd99f608f0e0",
    },
    {
      $set: { comments: [] },
    }
  );

  res.json({message:"done"});
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
