const express = require("express");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 8080;

const courses = [
  { id: 1, name: "JS", price: 100 },
  { id: 2, name: "Node", price: 200 },
  { id: 3, name: "React", price: 300 },
  { id: 4, name: "Express", price: 0 },
];

app.get("/courses1/:id", (req, res) => {
  res.send(req.params.id);
});
app.get("/courses/:id", (req, res) => {
  /*   const course = courses.find((course) => course.id === Number(req.params.id));*/
  const course = courses.find(
    (course) => course.id === parseInt(req.params.id)
  );
  if (!course)
    res.send("The course with the given ID was not found");
  res.send(course);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
