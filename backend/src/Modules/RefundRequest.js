const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const refundrequestSchema = new Schema({
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

const RefundRequest = mongoose.model('RefundRequest', refundrequestSchema);
module.exports = RefundRequest;