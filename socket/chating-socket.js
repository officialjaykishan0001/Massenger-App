module.exports = (io) =>{
    io.on("connection", (socket)=>{
        socket.on("chat message", (msg , user)=>{
            const chatMessageDetail = { msg: msg, connected: socket.connected, user: user }
            socket.broadcast.emit("chat message details", chatMessageDetail);
        })
    })
    
}