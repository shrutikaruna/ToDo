var express = require('express'),
router = express.Router(),  // Router object manages routes
mongoose = require('mongoose'),
Newdocument = mongoose.model('docs');

// CommonJS exports function and creates exportable module that are Passed in Express and config objects
module.exports = function (app, config) {
app.use('/api', router);
// Declares the router as an Express middleware and set the default URL prefix to /api

// retrives the values from the object
router.get('/docs', function (req, res, next){
    console.log('Get all documents', 'verbose');

   var query = Newdocument.find()
   .then(result => {
    if(result && result.length) {
        res.status(200).json(result); 
        // res.status() sets the HTTP status code and .json() returns the parameter in JSON format
        } else {
        res.status(404).json({message: "No documents"});
    }
   })
   .catch(err => {
     return next(err);
   });
});

// creates an object and saves it to the newdoc variable.
router.post('/docs', function(req, res, next){
    console.log('Create a document', 'verbose');
   var newdoc = new Newdocument(req.body);
    newdoc.save()
   .then(result => {
       res.status(201).json(result);
   })
   .catch( err => {
      return next(err);
   });
 
});

};


