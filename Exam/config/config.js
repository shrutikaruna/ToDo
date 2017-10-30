var path = require('path'),
// __dirname (two underscores) provides thedirectory of the file in which it is used.
rootPath = path.normalize(__dirname + '/..'),    
env = process.env.NODE_ENV || 'development';
//The configuration will use the development configuration based on the NODE_ENV environment variable

var config = {  
development: {    
            root: rootPath,    
            app: {name: 'exam'},    
            port: 5000,  
            db: 'mongodb://127.0.0.1/exam-dev' 
 },  

  };
// The development config uses the database called exam-dev

 module.exports = config[env];
 // Exports the config determined by the env variable