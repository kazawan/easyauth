const prisma = require("../db/prisma");

const SignUp = async (req, res) => {
  const { query } = req.body;
  //   console.log(query);
  try {
    const data = await prisma.user.create(query);
    if (!data) {
      res.send({
        code: "500",
        msg: "error",
      });
    }
    res.send({
      code: 200,
      msg: "注册成功",
    });
  } catch (e) {
    res.send({
      code: "500",
      msg: `名字重复了`,
      error: e,
    });
  }
};

const findUser = async (req, res) => {
  const { query } = req.body;
  console.log(query);
  try {
    const data = await prisma.user.findUnique(query);
    res.send(data);
  } catch (e) {
    res.send({
      code: "500",
      msg: e,
    });
  }
};

module.exports = {
  SignUp,
  findUser,
};
