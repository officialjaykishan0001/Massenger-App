const express = require("express");
const router = express.Router();
const upload = require("../config/multer-config");

const User = require("../models/userModel");


router.get("/", function (req, res) {
    let error = req.flash('error');
    res.render("signup", { error });
})

router.post("/user", upload.single("avatar"), async function (req, res) {
    try {
        const { name, email, password } = req.body;
        const { buffer, mimetype } = req.file;
        let ExistingUser = await User.findOne({ email: email });

        if(ExistingUser){
            req.flash("error","Email already registered, please login");
            return res.redirect("/signup")
        }

        const user = await new User({
            name,
            email,
            password,
            avatar: buffer,
            avatarContentType: mimetype,
        });

        await user.save();
        req.flash("success", "User registered successfully, please login")
        res.redirect("/login");

    } catch (err) {
        // console.log(err);
        req.flash('error', "Error, Try Again");
        res.redirect("/signup");
    }
})

module.exports = router;