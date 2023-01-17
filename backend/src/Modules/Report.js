const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reportSchema = new Schema({
    ReporteeID:{
        type: String,
        required:true
      },
      ReporteeName:{
        type: String,
        required:true
      }
      ,
      CourseID:{
        type: String,
        required:true
      },
      CourseTitle:{
        type: String,
        required:true
      },
      Type:{
        type: String,
        required:true
      }
      ,
      Status:{
        type: String,
        required:true,
        default:'Issued'
      },
      Seen:{
        type: Boolean,
        required:true,
        default:false
      },
      Message:{
        type: String,
        required:true
      },
      FollowUp:[{message:{type: String}}]
}, { timestamps: true });

const Report = mongoose.model('Report', reportSchema);
module.exports = Report;