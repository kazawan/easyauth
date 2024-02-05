const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config({ path: "./.env" });
const cors = require("cors");
const { expressjwt } = require("express-jwt");
const AUTH_API = require("./auth/index");

const app = express();
const port = process.env.PORT || 3030;


app.use(bodyParser.json());
app.use(cors());
app.use(
  expressjwt({ secret: process.env.JWT_SECRET, algorithms: ["HS256"] }).unless({
    path: ["/auth"],
  })
);

app.use((err, req, res, next) => {
  console.log(req.headers.authorization);
  if (err.name === "UnauthorizedError") {
    return res.send({
      code: 401,
      msg: "无效的token",
    });
  }
  res.send({
    code: 500,
    msg: "未知的错误",
  });
  next();
});


app.post("/auth", (req, res) => {
  const { fn, query } = req.body;
  if (!AUTH_API[fn]) {
    res.send({
      code: "404",
      msg: "api not founded",
    });
  }
  AUTH_API[fn](req, res);
});

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
