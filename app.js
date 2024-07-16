const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");
const session = require("express-session");
const  flash = require("connect-flash");
require('dotenv').config()

const indexRouter = require("./routes/indexRouter")
const signupRouter = require("./routes/signupRouter");
const chatRouter = require("./routes/chatRouter")
const loginRouter = require("./routes/loginRouter");
const apiRouter = require("./routes/apiRouter");

const db = require("./config/mongoose-connection")

const server = http.createServer(app);
const io = new Server(server);


app.use(session({
    secret: 'ABCD',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false }
}));

app.use(flash());
app.use(express.static("public"))
app.set("view engine", "ejs");

// Import and Initialize Socket.io logic for chatting.
require("./socket/chating-socket")(io);

app.use("/", indexRouter);
app.use("/signup", signupRouter);
app.use("/login", loginRouter);
app.use("/chat", chatRouter);
app.use("/api", apiRouter);

server.listen(3000);