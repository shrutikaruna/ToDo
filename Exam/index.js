var express = require('express'),
config = require('./config/config'); 
var app = express();    

require('./config/express')(app, config); 
// Loads the express.js file to configure the server and passes the express app  and config object to it
console.log("Creating HTTP server on port: " + config.port);

require('http').createServer(app).listen(config.port, function () {
console.log("HTTP Server listening on port: " + config.port + ", in " + app.get('env') + " mode");
});
