const express = require("express")
const router = express.Router();

router.get("/", function(req, res){
    let success = req.flash("success");
    res.render("login", { success });
})


module.exports = router;