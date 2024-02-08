const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config({ path: "./.env" });
const cors = require("cors");
const { expressjwt } = require("express-jwt");
const {AUTH_API,API} = require("./auth/index");
const { jwt_verify_middle } = require("./jwt/index");

const app = express();
const port = process.env.PORT || 3030;


app.use(bodyParser.json());
app.use(cors());



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

app.post("/api",jwt_verify_middle, (req, res) => {
  const { fn, query } = req.body;
  if (!API[fn]) {
    res.send({
      code: "404",
      msg: "api not founded",
    });
  }
  API[fn](req, res);
});

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
