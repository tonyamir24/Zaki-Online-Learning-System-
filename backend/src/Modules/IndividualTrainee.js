const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const IndividualTraineeSchema = new Schema({
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

const IndividualTrainee = mongoose.model('IndividualTrainee', IndividualTraineeSchema);
module.exports = IndividualTrainee;