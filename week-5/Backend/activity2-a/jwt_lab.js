const jwt = require("jsonwebtoken");

function createJWT() {
  const payload = {
    userId: 123,
    username: "exampleUser",
  };
  const secretKey = "Salaisuus";
  const token = jwt.sign(payload, secretKey);
  console.log(" Token:", token);
}

// createJWT();

function verifyJWT(token) {
  const secretKey = "Salaisuus";
  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      console.error("JWT verification failed:", err.message);
    } else {
      console.log("JWT verified: Decoded:", decoded);
    }
  });
}
const jwtTokenToVerify =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEyMywidXNlcm5hbWUiOiJleGFtcGxlVXNlciIsImlhdCI6MTcwODM0NTY1OH0.o3-9o7W535L6fn3SyUE0wXVUFTuhCRQc9ONC2eAGVXk";
// verifyJWT(jwtTokenToVerify);

function decodeJWT(token) {
  const decoded = jwt.decode(token);
  console.log("Decoded JWT:", decoded);
}
const jwtToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEyMywidXNlcm5hbWUiOiJleGFtcGxlVXNlciIsImlhdCI6MTcwODM0NTY1OH0.o3-9o7W535L6fn3SyUE0wXVUFTuhCRQc9ONC2eAGVXk";
decodeJWT(jwtToken);
