const config = require("./config/env");
const PORT = config.PORT || 5000;
// console.log(config.PORT);
const express = require("express");
const app = express();

const usersRoutes = require("./routes/users");
const logs = require("./middleware/logs");
const { logRequest, logRequestDateTime } = logs;

// Example middleware
app.use(logRequest);
app.use(logRequestDateTime);
app.use(express.json());

// Middleware to parse URL-encoded data
//Static File
app.use("/images", express.static("public/images"));

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

//Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.use("/", (req, res, next) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`app listening at http://localhost:${PORT}`);
});
