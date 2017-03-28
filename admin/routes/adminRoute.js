var express = require("express");
var router = express.Router();
var path = require("path");


router.get("/", function(req, res){
   res.redirect("/login"); 
});

router.get("/home*", function(req,res){
    
    res.sendFile(path.join(__dirname , '../../public/js/angular/admin.html'));
});

module.exports = router;