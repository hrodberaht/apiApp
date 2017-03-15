var mongoose = require("mongoose");
var db = require('../../config/default').url;
var con = mongoose.connection;
mongoose.connect(db);



con.on('connected', function () {
console.log('Mongoose connected to ' + db);
});
con.on('error',function (err) {
console.log('Mongoose connection error: ' + err);
});
con.on('disconnected', function () {
console.log('Mongoose disconnected');
});


var gracefulShutdown = function (msg, callback) {
mongoose.connection.close(function () {
console.log('Mongoose disconnected through ' + msg);
callback();
});
};

// For nodemon restarts
process.once('SIGUSR2', function () {
gracefulShutdown('nodemon restart', function () {
process.kill(process.pid, 'SIGUSR2');
});
});
