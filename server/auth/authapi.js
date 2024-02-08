const prisma = require("../db/prisma");
const { Password_Encrypted, Password_Compare } = require('../bcryptjs/index.js')
const {jwt,JWT_SECRET} = require('../jwt/index.js')




const SignUp = async (req, res) => {
  const { query } = req.body;
  query.data.password = Password_Encrypted(query.data.password)
  // console.log(query);
  try {
    await prisma.user.create(query);
    res.send({
      code: 200,
      msg: "注册成功",
    });
  } catch (e) {
    res.send({
      code: 500,
      msg: `名字重复了`,
      error: e,
    });
  }
};

const userLogin = async (req, res) => {
  const { query } = req.body;
  // console.log(query);
  try {
    const user = await prisma.user.findUnique({
      where: {
        email: query.email
      }
      
    });
    // console.log(Password_Compare(query.password, user.password));
    const email = user.email;
    
    if (Password_Compare(query.password, user.password)) {
      const token = jwt.sign({ email }, JWT_SECRET, {
          expiresIn: "10s"
      });
      const tokenExp = 1000 * 10;
      const refreshtoekn = jwt.sign({ email }, JWT_SECRET, {
          expiresIn: "7d"
      });
      const refreshtoeknExp = 1000 * 60 * 60 * 24 * 7;
      // console.log(token);
      // console.log(refreshtoekn);
      const userinfo = {
        username: user.username,
        email: user.email,
        token,
        tokenExp,
        refreshtoekn,
        refreshtoeknExp
      }
      
      res.send({
        code: 200,
        msg: "登录成功",
        userinfo
        
      });
      
    } else {
      res.send({
        code: 500,
        msg: `密码错误`,
      });
    }
  } catch (e) {
    res.send({
      code: 500,
      msg: `登录失败`,
      error: e,
    });
  }
}


const refreshAssessToken = async (req, res) => {
  const { query } = req.body;
  const user = jwt_verify(query.refreshtoekn);
  const token = jwt.sign({ email: user.email }, JWT_SECRET, {
    expiresIn: "10s"
  });
  const tokenExp = 1000 * 10;
  res.send({
    code: 200,
    token,
    tokenExp
  });
}


module.exports = {
  SignUp,
  userLogin,
  refreshAssessToken
};
