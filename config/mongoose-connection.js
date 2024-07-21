const mongoose = require("mongoose")



mongoose.connect("mongodb+srv://jaykishankharwar215:wJxwjVEltKllEN8L@quickchat.85gmgnb.mongodb.net/quick_chat")
.then(function(){
    console.log("connected");
})
.catch(function(err){
    console.log(err);
})

module.exports = mongoose.Connection;