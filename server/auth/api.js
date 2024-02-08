const prisma = require("../db/prisma");
const { Password_Encrypted, Password_Compare } = require('../bcryptjs/index.js')
const {jwt,JWT_SECRET} = require('../jwt/index.js')

const jwt_verify = (token) => {
    return jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err) {
            return false
        }
        return user
    })
}


const GetTodos = async (req, res) => {
    const { query } = req.body;
    console.log(query);
    const user = jwt_verify(query.token);
    console.log(user);
    // res.send({
    //     code: 200,
    //     query
    
    // })
   
    const todos = await prisma.todo.findMany({
        where: {
            UserEmail: user.email
        }
    });
    res.send({
        code: 200,
        todos
    })
}


module.exports = {
    GetTodos
}

