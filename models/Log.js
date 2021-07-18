const mongoose = require('mongoose');

const LogSchema = new mongoose.Schema({
  text : {
    type:String,
    trim:true,
    required:[true,"Issue text is required"]
  },
  priority: {
    type:String,
    required:[true,"Priority is required"],
    default:"Low",
    enum:["Low","Moderate","High"]
  },
  user: {
    type:String,
    required:[true,"User's name is required"],
    trim:true,
  },
  created: {
    type:Date,
    default:Date.now
  }
})

module.exports = mongoose.model("Log",LogSchema)
