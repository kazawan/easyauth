const { findUser, SignUp } = require("./authapi");
const AUTH_API = {};

AUTH_API["findUser"] = findUser;
AUTH_API["SignUp"] = SignUp;
module.exports = AUTH_API;
