const IndividualTrainee = require("../Modules/IndividualTrainee")
const jwt=require('jsonwebtoken')
const CorporateTrainee = require("../Modules/CorporateTrainee")
const Instructor = require("../Modules/Instructor")
const Admin = require("../Modules/Admin")


require('dotenv').config()

const createToken =(_id,type)=>{
   return jwt.sign({_id},process.env.SECRET,{expiresIn:'3d'})
}
// Login

const login =async(req,res)=>{
    const {Username ,Password } = req.body
    try{
        //IndividualTrainee
        var user =await IndividualTrainee.findOne({Username})
        if(user){
            const individualTrainee =await IndividualTrainee.login(Username ,Password)
            // create token
            const token =createToken(individualTrainee._id)
            const type='individualTrainee'
            const Wallet=user.Wallet

            res.status(200).json({Username,type,Wallet,token}) 
            return
        }
        //CorporateTrainee
        user =await CorporateTrainee.findOne({Username})
        if(user){
            const corporateTrainee =await CorporateTrainee.login(Username ,Password)
            // create token
            const token =createToken(corporateTrainee._id)
            const type='corporateTrainee'
            res.status(200).json({Username,type,token}) 
            return
        }
        //Instructor
        user =await Instructor.findOne({Username})
        if(user){
            const instructor =await Instructor.login(Username ,Password)
            // create token
            const token =createToken(instructor._id)
            const type='instructor'

            res.status(200).json({Username,type,token}) 
            return
        }
        //Admin
        user =await Admin.findOne({Username})
        if(user){
            const admin =await Admin.login(Username ,Password)
            // create token
            const token =createToken(admin._id)
            const type='admin'

            res.status(200).json({Username,type,token}) 
            return
        }

        if(!user){
            throw Error('Incorrect Username')

        }

    }
    catch(error){
        res.status(400).json({error:error.message})
    }
}

//Sign-up

const signup =async(req,res)=>{
    const {Username ,Password,FirstName,LastName,Email,Gender } = req.body

    try{
        
        const individualTrainee =await IndividualTrainee.signup(Username ,Password,FirstName,LastName,Email,Gender)
        // create token
        const token =createToken(individualTrainee._id,'individualTrainee')

        res.status(200).json({Username,token}) 

    }
    catch(error){
        res.status(400).json({error:error.message})
    }
}

    module.exports ={login,signup}




