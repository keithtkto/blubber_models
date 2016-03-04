var mongoose = require('mongoose');


mongoose.connect("mongodb://localhost/blubber_app");

var User     = require('./models/User'),
    Thread   = require('./models/Thread');


var threads = Thread.find({}, function(err,results){
  console.log(results)
  mongoose.connection.close();
});





