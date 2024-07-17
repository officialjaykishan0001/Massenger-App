let onlineUsers = {};

module.exports = (io) =>{
    io.on("connection", (socket)=>{
        socket.on("chat message", (msg , user)=>{
            const chatMessageDetail = { msg: msg, connected: socket.connected, user: user }
            socket.broadcast.emit("chat message details", chatMessageDetail);
        })
       
        const session = socket.request.session;
        if(session && session.user){
            const username = session.user.username;
            const avatar = session.user.avatar;
            const avatarContentType = session.user.avatarContentType; 
            onlineUsers[socket.id] = {username, avatar, avatarContentType, status: 'Online'};
            io.emit("User_Status", {username, status: 'Online'});
            io.emit("current_users", onlineUsers);
        }
        socket.on("disconnect", ()=>{
            if(onlineUsers[socket.id]){
                const username = onlineUsers[socket.id].username;
                // delete onlineUsers[socket.id];
                io.emit("User_Status", {username, status: 'Offline'});
            }
        })
       
    })
    
}