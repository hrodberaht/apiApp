var express = require("express");
var app = express();
var port = process.env.PORT;
var bodyParser = require("body-parser");
var morgan = require("morgan");


var api = require("./api/routes/apiRoute");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan("dev"));


//routes
app.use("/api", api);



app.listen(port, function(){
    
    console.log("Server start's");
});   