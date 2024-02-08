const jwt = require("jsonwebtoken");
require("dotenv").config({ path: "../.env" });
const JWT_SECRET = process.env.JWT_SECRET;



module.exports = {
    jwt,
    JWT_SECRET
}