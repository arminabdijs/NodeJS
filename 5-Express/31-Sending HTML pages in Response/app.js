const express = require("express");
const bodyParser = require("body-parser");
const usersRouter = require("./routes/usersRouter");
const booksRouter = require("./routes/booksRouter");
const rentsRouter = require("./routes/rentsRouter");
const path = require("path");

require("./configs/db");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/home", (req, res) => {
  res.sendFile(path.join(__dirname,"views","index.html") );
})

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname,"views","about.html") );
})

app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname,"views","contact.html") );
})

app.use("/api/users", usersRouter);
app.use("/api/books", booksRouter);
app.use("/api/books", rentsRouter);

app.listen(3000, () => {
  console.log(`Server Running On Port 3000`);
});


