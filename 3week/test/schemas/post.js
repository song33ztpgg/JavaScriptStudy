const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  user : { 
    type: Number,
    required: true,
    unique: true
  },
  password : { 
    type: Number,
  },
  title : {
    type: String
  }, 
  content : { 
    type: String
  },
  date : { 

  },
  name : { 
  
  }
});


module.exports = mongoose.model("posts", postSchema);