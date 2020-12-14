const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({
   _id:{
       type: mongoose.Schema.Types.ObjectId,
       ref:'user'
   },
   todos:{
    type:[{ 
        title: String,
     content: String
 }]
   },
   date:{
    type:Date,
    default:Date.now
}
});

module.exports = Notes = mongoose.model("notes", ProfileSchema);