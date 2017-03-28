var express = require("express");
var router = express.Router();


router.get("/", function(req, res){
    res.render("index");
});

router.get("/login", function(req, res) {
   res.render("login"); 
});

router.get("/cooki", function(req,res){
   res.cookie("mycooki" , "cookie_value").send("Cookie is set"); 
   console.log("Cookies :  ", req.cookies.mycooki);
});

router.get("/clear", function(req,res){
     res.clearCookie("mycooki");
     res.send("Cookie deleted");
});

module.exports = router;