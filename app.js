const express = require("express");
const app = express();
const http = require("http");
const {Server} = require("socket.io");


const server = http.createServer(app);
const io = new Server(server);

app.set("view engine", "ejs");
app.use(express.static( "public"))

app.get("/", (req, res)=>{
    res.render("index")
})

io.on("connection", (socket)=>{
    console.log("A new user connected")
    socket.on("chat message", (msg )=>{
        io.emit("chat message", msg);
    })
})

server.listen(3000);

