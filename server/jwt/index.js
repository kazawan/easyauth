const jwt = require("jsonwebtoken");
require("dotenv").config({ path: "../.env" });
const JWT_SECRET = process.env.JWT_SECRET;

const jwt_verify = (token) => {
    return jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err) {
            return false
        }
        return user
    })
}



const jwt_verify_middle = (req, res, next) => {
    const {token} = req.body.query;
    // console.log(`token`, token);
    const user = jwt_verify(token);
    if (user) {
        next()
    } else {
        res.send({
            code: 50001,
            error: "token error"
        })
    }
}



module.exports = {
    jwt,
    JWT_SECRET,
    jwt_verify,
    jwt_verify_middle
}