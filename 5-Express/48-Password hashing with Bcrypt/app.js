const bcrypt = require('bcrypt');

const salt = bcrypt.genSaltSync(10);

console.log("Salt: " + salt);

// --------------------------------------------------------

const hashedPassword = bcrypt.hashSync("abdi2017", salt);

console.log("Hashed Password: " + hashedPassword);


// --------------------------------------------------------
// Comparing a hashed password with a raw password

const isValidPassword = bcrypt.compareSync("abdi2017", hashedPassword);

console.log("isValidPassword: " + isValidPassword);