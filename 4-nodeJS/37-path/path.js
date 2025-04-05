const path = require("path");

console.log(__filename);

console.log(__dirname);




console.log(path.parse(__filename));

console.log(path.parse(__dirname));





console.log(path.basename(__filename));

console.log(path.basename(__dirname));




console.log(path.extname(__filename));




console.log(
  path.normalize(
    "C:/Users/Armin Abdi JS/Documents/node.JS/4-nodeJS/37-path///path.js"
  )
);

console.log(path.join(__dirname, "controllers", "userController.js"));

console.log(__dirname + "/controllers");

console.log(
  path.join(__dirname, "../36-Working with Dynamic Variables in Postman")
);
