var express = require("express");
var router = express.Router();

var user = [{name:"add", pass: "sam"},{name:"dwa", pass:"ddd"}];

router.get('/', function(req,res){

   res.json(user); 
});

router.get('/:id', function(req,res){

   res.json(user[req.params.id]); 
});

router.post("/", function(req,res){
    
    var data = {
        name: req.body.name,
        pass: req.body.pass
    };
    user.push(data);
    res.json(user); 
});

router.put("/", function(req,res){
    var name = req.body.name;
    res.json({method: name}); 
});

router.delete("/:id", function(req,res){
    var id = req.params.id;
    user = user.slice(id);
    res.json(user); 
});


module.exports = router;


