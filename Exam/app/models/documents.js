var Mongoose = require('mongoose');
var Schema = Mongoose.Schema;

var mySchema = new Schema({
    property1: {type:String, required: true},
    property2: {type:Number, required: true},
});

module.exports = Mongoose.model('docs', mySchema);