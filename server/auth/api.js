const prisma = require("../db/prisma");
const { Password_Encrypted, Password_Compare } = require('../bcryptjs/index.js')
const {jwt,JWT_SECRET} = require('../jwt/index.js')


const GetTodos = async (req, res) => {
    const { query } = req.body;
    console.log(query);
    // res.send({
    //     code: 200,
    //     query
    
    // })
   
    const todos = await prisma.todo.findMany({
        where: {
            UserEmail: query.email
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

