var mongoose = require('mongoose');


mongoose.connect("mongodb://localhost/blubber_app");

var User     = require('./models/User'),
    Thread   = require('./models/Thread');


Thread.find({}, function(err,threads){
  console.log(threads)
//   User.findById(threads.creator, function(err,user){
//     console.log(user)
    mongoose.connection.close();
//   });
});


// Thread.find({}).populate("creator").exec(function(err,thread) {
//   console.log(thread);
//   mongoose.connection.close();
// })


