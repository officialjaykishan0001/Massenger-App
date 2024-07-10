module.exports = (io) =>{
    io.on("connection", (socket)=>{
        socket.on("chat message", (msg )=>{
            const chatMessageDetail = { msg: msg, connected: socket.connected }
            socket.broadcast.emit("chat message details", chatMessageDetail);
        })
    })
    
}