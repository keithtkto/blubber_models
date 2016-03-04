var mongoose = require('mongoose');


var commentSchema = new mongoose.Schema({
    author:   {
                type: mongoose.Schema.Types.ObjectId,
                ref : "User"
              },
    body:     String,
    comments: [this]
});



var postSchema = new mongoose.Schema({
    author: {
              type: mongoose.Schema.Types.ObjectId,
              ref : "User"
            },
    title:  { type: String, require: true},
    body:   { type: String, require: true},
    upvote: { type: Number, default: 0},
    comments: [commentSchema]
});


var threadSchema = new mongoose.Schema({
  name:           { type: String, required: true},
  creator:        {
                    type: mongoose.Schema.Types.ObjectId,
                    ref:  "User"
                  },
  creatorName:    String,
  posts:          [postSchema]
})


var Thread = mongoose.model("Thread", threadSchema);



module.exports = Thread;
