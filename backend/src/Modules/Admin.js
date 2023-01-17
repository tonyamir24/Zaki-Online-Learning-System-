const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AdminSchema = new Schema({
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
  }
  
  
}, { timestamps: true });

AdminSchema.statics.login= async function(Username ,Password){
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



const Admin = mongoose.model('Admin', AdminSchema);
module.exports = Admin;