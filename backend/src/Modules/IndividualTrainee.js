const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const IndividualTraineeSchema = new Schema({
  FirstName: {
    type: String,
    required: true

  },
  LastName: {
    type: String,
    required: true
  },
  Username: {
    type: String,
    required: true,
    unique:true
  },
  Gender: {
    type: String,
    required: true
  },
  Email: {
    type: String,
    required: true,
    unique:true

  },
  Password:{
    type: String,
    required: true
  },
  Country: {
    type: String
  },
  Courses:{
    type:[{courseID:String,courseTitle:String,Progress:[{SubtitleID:String,}]}]
  },
  Wallet:{
    type:Number
    ,default:0
  }
}, { timestamps: true });


IndividualTraineeSchema.statics.signup= async function(Username ,Password,FirstName,LastName,Email,Gender){

  if(!Username || !Password || !FirstName || !LastName || !Email || !Gender){
    throw Error('All fileds must be filled')

  }


  var exists =await  this.findOne({Username })
  if(exists){
    throw Error('UserName already Exists')
  }
   exists =await  this.findOne({Email })
  if(exists){
    throw Error('Email already Exists')
  }

  const  individualTrainee=await this.create({Username ,Password,FirstName,LastName,Email,Gender})
  return individualTrainee
}




IndividualTraineeSchema.statics.login= async function(Username ,Password){
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


const IndividualTrainee = mongoose.model('IndividualTrainee', IndividualTraineeSchema);
module.exports = IndividualTrainee;