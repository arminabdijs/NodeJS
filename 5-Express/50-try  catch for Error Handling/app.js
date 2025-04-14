const jwt = require("jsonwebtoken");

const secretKey = "12s.;recgvrsw87jkkjd!@#$%^&*()";

const accessToken = jwt.sign(
  { id: 1, name: "test", role: "admin" },
  secretKey,
  { expiresIn: "2s" }
);

// console.log(accessToken);

setTimeout(() => {
  try {
    const payloadData = jwt.verify(accessToken, secretKey);
    console.log("Payload Data => ", payloadData);
  } catch (error) {
    console.log("Error => ", error.message);
  }
}, 2500);
