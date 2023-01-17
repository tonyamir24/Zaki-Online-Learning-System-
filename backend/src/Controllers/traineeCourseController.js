const CorporateTrainee = require("../Modules/CorporateTrainee")
const IndividualTrainee = require("../Modules/IndividualTrainee")
const Course = require("../Modules/Course")
const jwt = require('jsonwebtoken')


const registerCourse =async (req,res)=>{
    
    const {traineeID,courseId}=req.body
    try{
        if(!traineeID){
            throw Error('Sign in to register to any course')   
        }
        const {_id} = jwt.verify(traineeID, process.env.SECRET)

      var  indTrainee =await IndividualTrainee.findOne({_id})
      var coTrainee =await CorporateTrainee.findOne({_id})
      const course =await Course.findOne({_id:courseId})
        if(!course || !courseId){
            throw Error('Invalid Course')

        }
      
      if(indTrainee){
        if(!indTrainee.Courses || !indTrainee.Courses.find(({ courseID }) => courseID === courseId)){
          //  console.log('mafiish')
            indTrainee=await IndividualTrainee.findOneAndUpdate({_id},{$push:{Courses:{'courseID':courseId,'courseTitle':course.Title,Progress:[]}}})
            return res.status(200).json(indTrainee)
            
        }else{
            throw Error('User already registered to the course')

        }
        
        
      }
       else if (coTrainee){
        if(!coTrainee.Courses || !coTrainee.Courses.find(({ courseID }) => courseID === courseId)){
         //   console.log('mafiish')
         coTrainee=await CorporateTrainee.findOneAndUpdate({_id},{$push:{Courses:{'courseID':courseId,'courseTitle':course.Title,Progress:[]}}})
         return res.status(200).json(coTrainee)
            
            
        }else{
            throw Error('User already registered to the course')

        }
        
        
        }
        else{
            throw Error('Sign in to register to any course')
        }

         

    }catch(error){
        res.status(401).json({error:error.message})
    }

}











const checkCourse =async (req,res)=>{
    
    const {traineeID,courseId}=req.body
    try{
        if(!traineeID){
            throw Error('Sign in to register to any course')   
        }
        const {_id} = jwt.verify(traineeID, process.env.SECRET)

      var  indTrainee =await IndividualTrainee.findOne({_id})
      var coTrainee =await CorporateTrainee.findOne({_id})
     
      if(indTrainee){
       // console.log("henaaa")
        if(indTrainee.Courses.find(({ courseID }) => courseID === courseId)){
            return res.status(200).json(true)
            
        }
        
        
      }
        if (coTrainee){
           // console.log("henaaa")
        if(coTrainee.Courses.find(({ courseID }) => courseID === courseId)){
         return res.status(200).json(true)
            
            
        }}
        //console.log("henaaa")
            return res.status(200).json(false)
        

         

    }catch(error){
        res.status(401).json({error:error.message})
    }

}


















const registeredCourses =async(req,res)=>{
    const {traineeID}=req.body
    
    try{

        if(!traineeID){
            throw Error('Sign in to show your Courses')   
        }
        const {_id} = jwt.verify(traineeID, process.env.SECRET)

    var  indTrainee =await IndividualTrainee.findOne({_id},{_id:0,Courses:1})
    var coTrainee =await CorporateTrainee.findOne({_id},{_id:0,Courses:1})
    if(indTrainee){
        res.status(200).json(indTrainee)
        return
    }
    if (coTrainee){
        res.status(200).json(coTrainee)
        return
    }


    res.status(200).json([])



    }
    catch(error){
        res.status(401).json({error:error.message})
    }

}





module.exports={registerCourse,registeredCourses,checkCourse}