const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const requestSchema = new Schema({
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
      }
}, { timestamps: true });

const Request = mongoose.model('Request', requestSchema);
module.exports = Request;