var mongoose = require('mongoose');


mongoose.connect("mongodb://localhost/blubber_app");

var User     = require('./models/User'),
    Thread   = require('./models/Thread');



Thread.remove({},function(err,result) {
  User.remove({}, function(err, result) {
    if (err) console.log(err);
    User.create([
      { name: "John Marshall", email: "jm@us.courts.gov" },
      { name: "Oliver Wendell Holmes Jr.", email: "owh2@us.courts.gov" },
      { name: "Thurgood Marshall", email: "tm@us.courts.gov" },
      { name: "Sandra Day O'Connor", email: "sdo@us.courts.gov" },
      ], function(err, users) {
        if (err) {
          console.log(err);
        } else if (users) {
          //create thread within the users
          console.log("The greats justices of our supreme courts");
          console.log(users);

          Thread.create([
              {name: "Tim is the Ice King", creator: users[0]._id },
              {name: "Yael is complaining again", creator: users[1]._id },
              {name: "Stretch got a syntax error", creator: users[2]._id }

            ], function(err, threads){
              if (err) {
                console.log(err);
              } else if (threads) {
                console.log("Here are the threads")
                console.log(threads);
              }
              mongoose.connection.close();
          });
        }
      }
    );
  });
});




