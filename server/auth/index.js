const {  SignUp,userLogin } = require("./authapi");
const AUTH_API = {};


AUTH_API["SignUp"] = SignUp;
AUTH_API["userLogin"] = userLogin;
module.exports = AUTH_API;
