const http = require("http");
require("dotenv").config();

console.log(process.env.PORT);

const server = http.createServer((req, res) => {});

const port = process.env.PORT || 8080;
server.listen(port, (err) => {
  if (err) throw err;
  else console.log(`Server is running on port ${port}`);
});
