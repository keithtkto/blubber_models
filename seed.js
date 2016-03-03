var mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/blubber_app");


//Schema

var userSchema = new mongoose.Schema({
  name:        { type: String, require: true },
  email:       { type: String, require: true },
  // password:     String,
  moderator:   { type: Boolean, default: false}
});


//Model
var User = mongoose.model("User", userSchema);


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
        console.log("The greats justices of our supreme courts");
        console.log(users);
      }
      mongoose.connection.close();
    }
  );
});




