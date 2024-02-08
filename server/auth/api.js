const prisma = require("../db/prisma");
const { Password_Encrypted, Password_Compare } = require('../bcryptjs/index.js')
const {jwt,JWT_SECRET,jwt_verify} = require('../jwt/index.js')




const GetTodos = async (req, res) => {
    const { query } = req.body;
    // console.log(`query`, query);
    const user = jwt_verify(query.token);
    // console.log(`user`, user);  

   
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

