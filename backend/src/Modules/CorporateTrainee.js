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
  },
  Courses:{
    type:[{courseID:String,courseTitle:String,Progress:Number}]
  }
}, { timestamps: true });

CorporateTraineeSchema.statics.login= async function(Username ,Password){
  if(!Username || !Password ){
    throw Error('All fileds must be filled')

  }

var user =await  this.findOne({Username })
  if(!user){
    throw Error('Incorrect Username')
  }
  if(!(user.Password ===Password)){
    throw Error('Incorrect Password')

  }
  return user

}

const CorporateTrainee = mongoose.model('CorporateTrainee', CorporateTraineeSchema);
module.exports = CorporateTrainee;