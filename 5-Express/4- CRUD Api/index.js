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

app.get("/courses/:id", (req, res) => {
  const course = courses.find(
    (course) => course.id === parseInt(req.params.id)
  );
  if (!course) {
    res.send("The course with the given ID was not found");
  } else {
    res.send(course);
  }
});

app.post("/courses", (req, res) => {
  res.status(201).send("new course created successfully");
  
})

app.put("/courses/:id", (req, res) => {
  res.statusCode=300;
  res.send("course updated successfully");
  
})

app.delete("/courses/:id", (req, res) => {
  res.status(205).send("course deleted successfully");
  
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
