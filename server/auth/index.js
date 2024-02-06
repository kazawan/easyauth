const {  SignUp,userLogin } = require("./authapi");
const {GetTodos} = require("./api");

const AUTH_API = {};
const API = {};

AUTH_API["SignUp"] = SignUp;
AUTH_API["userLogin"] = userLogin;

API["GetTodos"] = GetTodos;


module.exports = {AUTH_API,API};
