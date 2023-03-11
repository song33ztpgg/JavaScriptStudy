const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  user : { 
    type: Number,
    required: true,
    unique: true
  }
});


module.exports = mongoose.model("comment", commentSchema);