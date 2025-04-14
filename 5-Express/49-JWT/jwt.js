const jwt = require("jsonwebtoken");

const secretKey = "fggjktvygffrftjrtdsrtfff";

const accessToken = jwt.sign(
  { id: 1, name: "John Doe", username: "johnDoe", email: "johnDoe@gamil.com" },
  secretKey,
  {
    algorithm: "HS256",
    // expiresIn: "30 day",
    expiresIn: "3s",
  }
);

// console.log(accessToken);


// How to verify the token?
/* const payloadData = jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6IkpvaG4gRG9lIiwidXNlcm5hbWUiOiJqb2huRG9lIiwiZW1haWwiOiJqb2huRG9lQGdhbWlsLmNvbSIsImlhdCI6MTc0NDYxNDkyNSwiZXhwIjoxNzQ0NjE0OTI4fQ.qZ4f4bR1IVDc7ZnOLpdDeXCdyJH7TGlpxQTHYB-x2dc", secretKey);

console.log(payloadData); */


// How to decode the token?
const decodedData=jwt.decode("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6IkpvaG4gRG9lIiwidXNlcm5hbWUiOiJqb2huRG9lIiwiZW1haWwiOiJqb2huRG9lQGdhbWlsLmNvbSIsImlhdCI6MTc0NDYxNDkyNSwiZXhwIjoxNzQ0NjE0OTI4fQ.qZ4f4bR1IVDc7ZnOLpdDeXCdyJH7TGlpxQTHYB-x2dc")

console.log("Payload Data => ", decodedData);
console.log("Payload Data Email => ", decodedData.email);
