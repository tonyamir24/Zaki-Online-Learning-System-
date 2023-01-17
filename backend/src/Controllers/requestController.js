const jwt=require('jsonwebtoken')
const CorporateTrainee = require('../Modules/CorporateTrainee')
const Course = require('../Modules/Course')
const IndividualTrainee = require('../Modules/IndividualTrainee')
const RefundRequest = require('../Modules/RefundRequest')
const Request = require("../Modules/Request")


const issueRequest =async (req,res)=>{
 const   {reporteeID,ReporteeName,CourseTitle,CourseID} = req.body
//console.log(ReporteeName)
 try{
    if(!reporteeID)
    throw Error("Sign in first to Request")
    //console.log(reporteeID)

   let request=await Request.findOne({ReporteeID:reporteeID,CourseID})
   if(!request){
     request=await Request.create({ReporteeID:reporteeID,ReporteeName,CourseID,CourseTitle})
   return res.status(200).json({request})
   }
   else{
    throw Error("Already Issued")
   }
 }
 catch(error){
    res.status(400).json({error:error.message})

 }
}


const issueRefundRequest =async (req,res)=>{
    const   {reporteeID,ReporteeName,CourseTitle,CourseID} = req.body
   //console.log(ReporteeName)
    try{
       if(!reporteeID)
       throw Error("Sign in first to Request")
       //console.log(reporteeID)
   
      let request=await RefundRequest.findOne({ReporteeID:reporteeID,CourseID})
      if(!request){
        request=await RefundRequest.create({ReporteeID:reporteeID,ReporteeName,CourseID,CourseTitle})
      return res.status(200).json({request})
      }
      else{
       throw Error("Already Issued")
      }
    }
    catch(error){
       res.status(400).json({error:error.message})
   
    }
   }









const grantAccess =async (req,res)=>{
    const {reporteeID,courseId}=req.body
    try{
        if(!reporteeID){
            throw Error('Sign in to register to any course')   
        }
        //console.log("henaaa")
        const {_id} = jwt.verify(reporteeID, process.env.SECRET)
        
      var coTrainee =await CorporateTrainee.findOne({_id})
      const course =await Course.findOne({_id:courseId})
        if(!course || !courseId){
            throw Error('Invalid Course')

        }
      
        
        
      
        if (coTrainee){
        if(!coTrainee.Courses || !coTrainee.Courses.find(({ courseID }) => courseID === courseId)){
         //   console.log('mafiish')
         coTrainee=await CorporateTrainee.findOneAndUpdate({_id},{$push:{Courses:{'courseID':courseId,'courseTitle':course.Title,Progress:[]}}})
         await Request.findOneAndDelete({ReporteeID:reporteeID,CourseID:courseId})
         return res.status(200).json(coTrainee)
            
            
        }else{
            throw Error('User already registered to the course')

        }
        
        
        }
        else{
            throw Error('Sign in to register to any course')
        }

         

    }catch(error){
        res.status(400).json({error:error.message})
    }
   }









   const refund =async (req,res)=>{
    const {reporteeID,courseId}=req.body
    try{
        if(!reporteeID){
            throw Error('Sign in to register to any course')   
        }
        //console.log("henaaa")
        const {_id} = jwt.verify(reporteeID, process.env.SECRET)
        
      var individualTrainee =await IndividualTrainee.findOne({_id})
      const course =await Course.findOne({_id:courseId})
        if(!course || !courseId){
            throw Error('Invalid Course')

        }
      
      
        
      
        if (individualTrainee){
        if(individualTrainee.Courses && individualTrainee.Courses.find(({ courseID }) => courseID === courseId)){
          
         individualTrainee=await IndividualTrainee.findOneAndUpdate({_id},{$pull:{Courses:{'courseID':courseId}}})
         individualTrainee=await IndividualTrainee.findOneAndUpdate({_id},{Wallet:individualTrainee.Wallet+course.Price})
         await RefundRequest.findOneAndDelete({ReporteeID:reporteeID,CourseID:courseId})
         return res.status(200).json(individualTrainee)
            
            
        }else{
            throw Error('User Do not have the course')

        }
        
        
        }
        else{
            throw Error('Sign in please')
        }

         

    }catch(error){
        res.status(400).json({error:error.message})
    }
   }








const allRequests=async(req,res)=>{
    try{
        const request =await Request.find()  
        res.status(200).json({request})
 
        }
        catch(error){
            res.status(400).json({error:error.message})
        }
}

const allRefundRequests=async(req,res)=>{
    try{
        const request =await RefundRequest.find()  
        res.status(200).json({request})
 
        }
        catch(error){
            res.status(400).json({error:error.message})
        }
}

module.exports={
     issueRequest,
    allRequests,
    grantAccess,
    issueRefundRequest,
    refund,
    allRefundRequests
    
}