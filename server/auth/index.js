const {  SignUp,userLogin,refreshAssessToken } = require("./authapi");
const {GetTodos} = require("./api");

const AUTH_API = {};
const API = {};

AUTH_API["SignUp"] = SignUp;
AUTH_API["userLogin"] = userLogin;
AUTH_API["refreshAssessToken"] = refreshAssessToken;

API["GetTodos"] = GetTodos;


module.exports = {AUTH_API,API};


/**
 * ! 添加了jwt_verify_middle
 * ! 添加了jwt_verify
 * ! 添加了 refreshAssessToken
 */
