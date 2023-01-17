const jwt=require('jsonwebtoken')
const Report = require("../Modules/Report")


const issueReport =async (req,res)=>{
 const   {reporteeID,ReporteeName,CourseTitle,CourseID,Type,Message} = req.body

 try{
    if(!reporteeID)
    throw Error("Sign in first to report")
    console.log(reporteeID)

    const {_id} = jwt.verify(reporteeID, process.env.SECRET)
   
    const report=await Report.create({ReporteeID:_id,ReporteeName,CourseID,CourseTitle,Type,Message})
   return res.status(200).json({report})

 }
 catch(error){
    res.status(200).json({error:error.message})

 }
}

const issuedReport =async (req,res)=>{
    const   {reporteeID} = req.body

    try{
        if(!reporteeID)
        throw Error("Sign in first to see reports")
    
        const {_id} = jwt.verify(reporteeID, process.env.SECRET)
      //  console.log(ReporteeID)
       const report=await Report.find({ReporteeID:_id})
       res.status(200).json({report})
   
    }
    catch(error){
       res.status(400).json({error:error.message})
   
    }
   }
   
const seen=async(req,res)=>{
    const {reportID}= req.body
    try{
    const report =await Report.findOneAndUpdate({_id:reportID},{Seen:true})  
      res.status(200).json({report})
    }
    catch(error){
        res.status(400).json({error:error.message})
    }
}
const updateStatus=async(req,res)=>{

const {reportID,Status}= req.body
try{
const report =await Report.findOneAndUpdate({_id:reportID},{Status})  
  res.status(200).json({report})
}
catch(error){
    res.status(400).json({error:error.message})
}
}
const allReports=async(req,res)=>{
    try{
        const reports =await Report.find()  
        res.status(200).json({reports})
 
        }
        catch(error){
            res.status(400).json({error:error.message})
        }
}
const followUP=async(req,res)=>{
    const {reportID,message}= req.body

    try{
        const report =await Report.findOneAndUpdate({_id:reportID},{$push:{FollowUp:{'message':message}}})  
        res.status(200).json({report})
 
        }
        catch(error){
            res.status(400).json({error:error.message})
        }
}
module.exports={
    issueReport,
    issuedReport,
    seen,
    allReports,
    updateStatus,
    followUP
}