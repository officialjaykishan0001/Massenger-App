const express = require("express")
const router = express.Router();
const upload = require("../config/multer-config");
const User = require("../models/userModel");

router.get("/", function(req, res){
    let success = req.flash("success");
    let error = req.flash("error");
    res.render("login", { success, error });
})

router.post("/user", upload.none(), async function(req, res){
    try{
        const {username, password}= req.body;

        const user = await User.findOne({name: username, password: password});
        
        if(!user){
            req.flash('error', 'Username or Password is incorrect')
            return res.redirect("/login");
        }

        req.session.user = { username: username };
        res.redirect("/chat");
    }catch(err){
        console.log(err);
        req.flash('error', 'internal server error, try after sometime');
        res.redirect("/login");        
    }
})

module.exports = router;