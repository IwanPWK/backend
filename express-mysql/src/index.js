const express = require("express");
const app = express();

//String Message
app.get("/", (req, res) => {
  res.send("Hello Get Method!");
});

//String Tag HTML
app.get("/html-tag", (req, res) => {
  res.send("<h1>Hello Get Method HTML Tag!</h1>");
});

//String Json
app.get("/json", (req, res) => {
  res.send({ name: "Kurnniawan Wijaya", github: "IwanPWK" });
});

app.post("/", (req, res) => {
  res.send("Hello Post Method!");
});

app.use("/", (req, res, next) => {
  res.send("Hello World!");
});

const port = 5000;

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
