var bcrypt = require('bcryptjs');
require("dotenv").config({ path: "./.env" });


const salt = bcrypt.genSaltSync(Number(process.env.SALT));

const Password_Encrypted = (password) => {
    return bcrypt.hashSync(password, salt);
}

const Password_Compare = (password, hash) => {
    return bcrypt.compareSync(password, hash);
}

module.exports = {Password_Encrypted,Password_Compare};