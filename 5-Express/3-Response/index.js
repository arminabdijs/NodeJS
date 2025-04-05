const express = require("express");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 8080;

const headings = [
  {
    id: 1,
    name: "Web Development",
  },
  {
    id: 2,
    name: "Mobile Development",
  },
  {
    id: 3,
    name: "Data Science",
  },
];

app.get("/courses/:id", (req, res) => {
  const heading = headings.find((c) => c.id === parseInt(req.params.id));
  if (!heading) return res.send("The course with the given ID was not found.");
/*   res.send(`<h1>${heading.name}</h1>`);
 */

//  res.json(heading);

 res.end("the courses Response with end method"); 
  
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
