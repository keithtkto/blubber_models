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
          // console.log("The greats justices of our supreme courts");
          // console.log(users);
          var john = users[0],
              thur = users[2];


          Thread.create([
            {name: "Tim is the Ice King", creator: users[0], creatorName: users[0].name },
            {name: "Yael is complaining again", creator: users[1], creatorName: users[1].name },
            {name: "Stretch got a syntax error", creator: users[2], creatorName: users[2].name }
            ], function(err, threads){
            if (err) {
              console.log(err);
            } else if (threads) {
              // console.log("Here are the threads")
              // console.log(threads);
              var yolo = threads[0];

              yolo.posts.push({
                author: john,
                title: "Marbury vs Madison",
                body: "Ya diggggg!"
              });

              yolo.posts.push({
                author: thur,
                title: "Brown vs BoE",
                body: "Front of the bus!"
              });

              yolo.save(function(err,yolo){
                console.log("HERHEHRHEHRE", yolo.posts[0]);

                var post = yolo.posts[0];

                post.comments.push({
                  author: thur,
                  body:   "Pic it or it didnt happen"
                });

                yolo.save(function(err,results){
                  console.log(err);
                  console.log("POSTSSSS \n \n");
                  console.log(results);
                  mongoose.connection.close();
                })


                console.log("End of seed");
              });
            }
          });
        }
      }
    );
  });
});




