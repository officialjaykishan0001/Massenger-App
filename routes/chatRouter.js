const express = require("express");
const router = express.Router();
const isAuthUser = require("../middlewares/userAuth");


router.get("/", isAuthUser, function(req, res){
    res.render("chat");
})



module.exports = router
