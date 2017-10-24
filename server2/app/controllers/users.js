(function () {
    'use strict';
    
    var express = require('express');
    var router = express.Router(),
    logger = require('../../config/logger');
    
    
    module.exports = function (app, config) {
        app.use('/api', router);
        
    
        router.get('/users', function(req,res,next){
              logger.log('Get all users', 'verbose');
              res.status(200).json({message: 'Get All Users'});
        });
    
    
        router.get('/users/:userId', function(req,res,next){
              logger.log('Get user', req.params.userId, 'verbose');
              res.status(200).json({message: 'Get User' + req.params.userID});
          });
    
    
        router.post('/users', function(req, res, next){
              logger.log('Create user', 'verbose');
              res.status(201).json({message: 'User Created'});
          });
    
    
        router.put('/users/:userId', function(req, res, next){
              logger.log('Update user ' + req.params.userId, 'verbose');
              res.status(200).json({message: 'Update User' + req.params.userID});
        });
    
    
        router.delete('/users/:userId', function(req,res,next){
              logger.log('Delete user ' + req.params.userId, 'verbose');
              res.status(200).json({message: 'Delete User ' + req.params.userID});
        });
    
    
        router.post('/login', function(req, res, next){
              console.log(req.body);
              var email = req.body.email;
              var password = req.body.password;
              var obj = {'email' : email, 'password' : password};
              res.status(201).json(obj);
      });
     };}) ();
    