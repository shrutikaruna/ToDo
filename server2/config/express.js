var express = require('express');
var logger = require ('./logger');
var morgan = require ('morgan');
var bodyparser = require('body-parser');
//var mongoose =require('mangoose');
//var bluebird = require('bluebird');
//var glob = require ('glob');

module.exports = function (app, config) {
  
  //   if(process.env.NODE_ENV !== 'test') {
  //       app.use (morgan('dev'));

  //       app.use(function (req, res, next) {
  //         logger.log('Request from ' + req.connection.remoteAddress, 'info');
  //         next();
  //       });  
  //   }

  // //require ('../app/controllers/users')(app, config)
  //   app.use(bodyparser.json());
  //   app.use(bodyparser.urlencoded({
  //     extended: true
  //   }));

  //   var users = [ {name: 'John', email: 'woo@hoo.com'},
  //                 {name: 'Betty', email: 'loo@woo.com'},
  //                 {name: 'Hal', email: 'boo@woo.com'}
  //   ];

  // app.get ('/api/users', function(req, res){
  //   res.status(200).json(users);
  // });

  app.use(express.static(config.root + '/public'));
  
  app.use(function (req, res) {
      res.type('text/plan');
      res.status(404);
      res.send('404 Not Found');
    });
  
    app.use(function (err, req, res, next) {
      console.error(err.stack);
      res.type('text/plan');
      res.status(500);
      res.send('500 Sever Error');
    });
  
    logger.log("Starting application");
  
  };






