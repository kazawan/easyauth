const jwt = require("jsonwebtoken");
require("dotenv").config({ path: "../.env" });
const JWT_SECRET = process.env.JWT_SECRET;


// const username = "admin";

// const password = "admin";
// const token = jwt.sign({ username }, JWT_SECRET, {
//     expiresIn: "3m"
// });
// const refreshtoekn = jwt.sign({ username }, JWT_SECRET, {
//     expiresIn: "7d"
// });
// console.log(token);
// console.log(refreshtoekn);

module.exports = {
    jwt,
    JWT_SECRET
}