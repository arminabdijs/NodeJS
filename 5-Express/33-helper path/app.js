const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const usersRouter = require("./routes/usersRouter");
const booksRouter = require("./routes/booksRouter");
const rentsRouter = require("./routes/rentsRouter");
const viewsPath=require("./utils/path")

require("./configs/db");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));


console.log(process.mainModule.filename);
console.log(path.dirname(process.mainModule.filename));
console.log(path.join(path.dirname(process.mainModule.filename),"views"));





app.get("/home", (req, res) => {
  res.sendFile(path.join(viewsPath,"index.html") );
})


app.get("/about", (req, res) => {
  res.sendFile(path.join(viewsPath,"about.html") );
})

app.get("/contact", (req, res) => {
  res.sendFile(path.join(viewsPath,"contact.html") );
})

app.use("/api/users", usersRouter);
app.use("/api/books", booksRouter);
app.use("/api/books", rentsRouter);

app.listen(3000, () => {
  console.log(`Server Running On Port 3000`);
});


