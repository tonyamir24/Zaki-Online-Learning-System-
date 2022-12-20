const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const InstructorSchema = new Schema({
  Name: {
    type: String
   
  },
  Username: {
    type: String,
    required: true
  },
  Email:{
    type:String
  },
  Password:{
    type: String,
    required: true
  },
  Country:{
    type:String
  } ,
  Reviews:{
    type: [{Comment:String,Src:String}]
  },
  Rating:{
    type: [{Rate:Number,Src:String}]
  },
  AvgRating:{
    type: Number

  },
  MiniBiography:{
    type:String
  }
}, { timestamps: true });

const Instructor = mongoose.model('Instructor', InstructorSchema);
module.exports = Instructor;