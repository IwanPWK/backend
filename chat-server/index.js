const express = require("express");
const cors = require("cors");
var http = require("http");
const app = express();
const port = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());

var server = http.createServer(app);
var io = require("socket.io")(server, {
  cors: {
    origin: "*", // Ganti dengan domain frontend jika perlu
    methods: ["GET", "POST"]
  }
});

var clients = {};

io.on("connection", (socket) => {
  console.log("connetetd");
  console.log(socket.id, "has joined");
  socket.on("signin", (id) => {
    console.log(id);
    clients[id] = socket;
    console.log(clients);
  });
  socket.on("message", (msg) => {
    console.log(msg);
    let targetId = msg.targetId;
    if (clients[targetId]) clients[targetId].emit("message", msg);
  });
});
app.get("/", (req, res) => {
  res.send("Server started");
});

server.listen(port, "0.0.0.0", () => {
  console.log("server started");
});
