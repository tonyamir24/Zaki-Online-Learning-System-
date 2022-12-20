const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const courseSchema = new Schema({
  InstructorID:{
    type: String,
    required:true
  }
  ,
  Title: {
    type: String,
    required: true,
  },
  Price: {
    type: Number,
    required: true,
  },
  ShortSummary: {
    type: String,
    required: true
  },
  Hours: {
    type:Number
  },
  Reviews:{
    type: [{Comment:String,Src:String}]
  },
  Rating:{
    type: [{Rate:Number,Src:String}]
  },
  AvgRating:{
    type: Number

  },
  Subtitles: {
   type: [{Subtitle:String,Hours:Number,Video:String,VideoDes:String}],
  },
  Subject :{
    type: String
  },
  Exercises :{
    type: [{QuestionHead:String,Answer1:String,Answer2:String,Answer3:String,Answer4:String,TrueAnswer:String}]
  },
  Video :{
    type: String
  },
  Promotion:{
    type:{Percentage:String,Period:String}
    
  }
}, { timestamps: true });

const Course = mongoose.model('Course', courseSchema);
module.exports = Course;