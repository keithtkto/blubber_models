var mongoose = require('mongoose');


//Schema

var userSchema = new mongoose.Schema({
  name:        { type: String, require: true },
  email:       { type: String, require: true },
  moderator:   { type: Boolean, default: false}
  // password:     String,
});


//Model
var User = mongoose.model("User", userSchema);






module.exports = User;
