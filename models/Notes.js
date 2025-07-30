const mongoose = require('mongoose');

const NoteSchema = new Schema({
   title:{
    type: String,
    default:"New Note"
  },
  description:{
    type: String,
    required: true,
  },
  tag:{
    type: String,
    default:"General"
  },
  Date:{
    type: Date,
    required: Date.now
  },
});

module.exports= mongoose.model("notes", NotesSchema)