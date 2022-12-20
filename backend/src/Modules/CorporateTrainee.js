const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CorporateTraineeSchema = new Schema({
  Name: {
    type: String
  },
  Username: {
    type: String,
    required: true
  },
  Password:{
    type: String,
    required: true
  },
  Country: {
    type: String
  }
}, { timestamps: true });

const CorporateTrainee = mongoose.model('CorporateTrainee', CorporateTraineeSchema);
module.exports = CorporateTrainee;