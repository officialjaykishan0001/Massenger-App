const express = require("express");
const app = express();
const http = require("http");
const {Server} = require("socket.io");

const indexRouter = require("./routes/indexRouter")
const signupRouter = require("./routes/signupRouter");
const chatRouter = require("./routes/chatRouter")
const loginRouter = require("./routes/loginRouter");

const server = http.createServer(app);
const io = new Server(server);

app.set("view engine", "ejs");
app.use(express.static( "public"))

// Import and Initialize Socket.io logic for chatting.
require("./socket/chating-socket")(io);

app.use("/", indexRouter);
app.use("/signup", signupRouter);
app.use("/login", loginRouter);
app.use("/chat", chatRouter);

server.listen(3000);

module.exports = io;