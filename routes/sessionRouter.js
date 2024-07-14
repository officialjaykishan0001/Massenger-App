const express = require("express");
const router = express.Router();

router.get("/", function(req, res){
    if(req.session.user){
        res.json({user: req.session.user});
    }else{
        res.send("User is not logged in");
    }
})

module.exports = router;