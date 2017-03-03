var express = require("express");
var app = express();
var port = process.env.PORT;
var bodyParser = require("body-parser");
var morgan = require("morgan");
var path = require("path");
var cookieParser = require("cookie-parser");

var api = require("./api/routes/apiRoute");
var admin = require("./admin/routes/adminRoute");
var client = require("./client/routes/clientRoute");

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan("dev"));

// view engine setup
app.set('views', path.join(__dirname, 'client/views'));
app.set('view engine', 'ejs');
// static file
app.use('/public',express.static(path.join(__dirname, '/public')));


//routes
app.use("/", client);
app.use("/api", api);
app.use("/admin", admin);



app.listen(port, function(){
    
    console.log("Server start's");
    
});   