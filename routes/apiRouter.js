const express = require("express");
const router = express.Router();
const User = require("../models/userModel");

router.get("/users", async function(req, res) {
    try {
        let users = await User.find({});
        res.json(users);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error retrieving users');
    }
});

router.get("/session", function(req, res){
    if(req.session.user){
        res.json({user: req.session.user});
    }else{
        res.send("User is not logged in");
    }
})

module.exports = router;
