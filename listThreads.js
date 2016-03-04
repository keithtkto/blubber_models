var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/blubber_app')

var User    = require('./models/User'),
    Thread  = require('./models/Thread');


Thread.find({}, function(err,threads){
  // console.log(threads)
  threads.forEach(function(thread) {
    console.log(thread);
  });

  mongoose.connection.close();
//   });
});
