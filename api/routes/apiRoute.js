var express = require("express");
var router = express.Router();

var User = require("../models/userSchema");

router.get('/', function(req,res){
   User.find(function (err, user) {
      if (err) return console.error(err);
      return res.send(user); 
   });
   
});

router.post("/", function(req,res){
    
    var addUser = new User( {
        username: req.body.username,
        password: req.body.password
    });
    
    addUser.save(function(err, user){
        if (err) return console.error(err);
        return res.redirect('..');    
    });
   
     
});

router.get('/:id', function(req,res){

   res.json(user[req.params.id]); 
});


router.put("/:id", function(req,res){
    user[req.params.id] = {
        name: req.body.name,
        pass: req.body.pass
    };
    
    res.json(user); 
});

router.delete("/:id", function(req,res){
    var id = req.params.id;
    user = user.slice(id);
    res.json(user); 
});


module.exports = router;


