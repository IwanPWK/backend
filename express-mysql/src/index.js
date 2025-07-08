const express = require("express");
const app = express();
const usersRoutes = require("./routes/users");
const logs = require("./middleware/logs");
const { logRequest, logRequestDateTime } = logs;

// Example middleware
app.use(logRequest);
app.use(logRequestDateTime);
app.use(express.json());

app.use("/users", usersRoutes);

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
