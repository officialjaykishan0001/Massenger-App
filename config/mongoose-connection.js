const mongoose = require("mongoose")

mongoose.connect(process.env.MONGODB_STRING)
.then(function(){
    console.log("connected");
})
.catch(function(err){
    console.log(err);
})

module.exports = mongoose.Connection;