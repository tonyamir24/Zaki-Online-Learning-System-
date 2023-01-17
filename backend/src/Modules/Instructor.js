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


InstructorSchema.statics.login= async function(Username ,Password){
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
const Instructor = mongoose.model('Instructor', InstructorSchema);
module.exports = Instructor;