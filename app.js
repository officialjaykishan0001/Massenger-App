const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");
const session = require("express-session");
const  flash = require("connect-flash");
const MongoStore = require("connect-mongo");
require('dotenv').config()

const indexRouter = require("./routes/indexRouter")
const signupRouter = require("./routes/signupRouter");
const chatRouter = require("./routes/chatRouter")
const loginRouter = require("./routes/loginRouter");
const apiRouter = require("./routes/apiRouter");

const db = require("./config/mongoose-connection")

const server = http.createServer(app);
const io = new Server(server);


const sessionMiddleware = (session({
    secret: 'ABCD',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false },
    store: MongoStore.create({ mongoUrl: process.env.MONGODB_STRING })
}));

app.use(sessionMiddleware);
app.use(flash());
app.use(express.static("public"))
app.set("view engine", "ejs");

io.use((socket, next) => {
    sessionMiddleware(socket.request, {}, next);
});

// Import and Initialize Socket.io logic for chatting.
require("./socket/chating-socket")(io);

app.use("/", indexRouter);
app.use("/signup", signupRouter);
app.use("/login", loginRouter);
app.use("/chat", chatRouter);
app.use("/api", apiRouter);

server.listen(3000);