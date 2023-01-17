const CorporateTrainee = require("../Modules/CorporateTrainee")
const IndividualTrainee = require("../Modules/IndividualTrainee")

const Course = require("../Modules/Course")
const jwt = require('jsonwebtoken')


const checkProgress=async (req,res)=>{
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
        var j=null; 
      for(var i = 0; i < indTrainee.Courses.length; i++)
      
        {
           
             if(indTrainee.Courses[i].courseID == courseId)
                 {
                     j=i;
                 }
        }
        if(j){
            console.log((indTrainee.Courses[j].Progress.length/course.Subtitles.length)*100)
            return res.status(200).json((indTrainee.Courses[j].Progress.length/course.Subtitles.length)*100)
      
        }

     



      }

      if(coTrainee){
        var j=null; 
      for(var i = 0; i < coTrainee.Courses.length; i++)
      
        {
             if(coTrainee.Courses[i].courseID == courseId)
                 {
                     j=i;
                 }
        }
        if(j){
            console.log((coTrainee.Courses[j].Progress.length/course.Subtitles.length)*100)
            return res.status(200).json((coTrainee.Courses[j].Progress.length/course.Subtitles.length)*100)
      
        }

     

 
 
       }
         

    }catch(error){
        res.status(400).json({error:error.message})
    }


}









const viewSubtitle=async (req,res)=>{
    const {traineeID,courseId,SubtitleID}=req.body
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
        var j=null; 
        var y=null; 
        

      for(var i = 0; i < indTrainee.Courses.length; i++)
        {


             if(indTrainee.Courses[i].courseID == courseId)
                 {
                   

                     j=i;
                 }
        }
        if(j){
           // console.log(indTrainee.Courses[j].Progress.length)
            for(var x = 0; x < indTrainee.Courses[j].Progress.length; x++)
        {

             if(indTrainee.Courses[j].Progress[x].SubtitleID == SubtitleID)
                 {
                     y=x;
                 }
        }
        
        if(!y)
           { 
            
            
            indTrainee=await IndividualTrainee.updateOne({_id,"Courses._id":indTrainee.Courses[j]._id},{$push:{"Courses.$.Progress":{SubtitleID:SubtitleID}}})
            return res.status(200).json(indTrainee)
        
        }
        else{
            throw Error("Already Viewed")
        }
        }
        else{
            throw Error("Already Viewed")
        }
        



      }

      if(coTrainee){
        var j=null; 
        var y=null; 
        

      for(var i = 0; i < coTrainee.Courses.length; i++)
        {


             if(coTrainee.Courses[i].courseID == courseId)
                 {
                   

                     j=i;
                 }
        }
        if(j){
           // console.log(indTrainee.Courses[j].Progress.length)
            for(var x = 0; x < coTrainee.Courses[j].Progress.length; x++)
        {

             if(coTrainee.Courses[j].Progress[x].SubtitleID == SubtitleID)
                 {
                     y=x;
                 }
        }
        
        if(!y)
           { 
            
            
            coTrainee=await CorporateTrainee.updateOne({_id,"Courses._id":coTrainee.Courses[j]._id},{$push:{"Courses.$.Progress":{SubtitleID:SubtitleID}}})
            return res.status(200).json(coTrainee)
        
        }
        else{
            throw Error("Already Viewed")
        }
        }
        else{
            throw Error("Already Viewed")
        }
        



      }


    }catch(error){
        res.status(400).json({error:error.message})
    }


}











module.exports={checkProgress,viewSubtitle}