const CorporateTrainee = require("../Modules/CorporateTrainee")
const IndividualTrainee = require("../Modules/IndividualTrainee")
//const Instructor = require("../Modules/Instructor")

const Course = require("../Modules/Course")
const jwt = require('jsonwebtoken')


const moneyOwed =async (req,res)=>{
    const {InstructorID}=req.body
    var totalMoney=0
    try{

       const indTrainee =await IndividualTrainee.find()
       const coTrainee =await CorporateTrainee.find()
       
       const {_id} = jwt.verify(InstructorID, process.env.SECRET)


          
            for(var j = 0; j < indTrainee.length; j++){
               if(indTrainee[j].Courses){
                for(var x = 0; x < indTrainee[j].Courses.length; x++){
                   
                  const course = await Course.findOne({_id:indTrainee[j].Courses[x].courseID,InstructorID:_id})
                             if(course){
                                totalMoney+=course.Price
                             }
            }

        }
        }
    

        for(var i = 0; i < coTrainee.length; i++){
            console.log(coTrainee[i])
               if(coTrainee[i].Courses){
            for(var y = 0; y < coTrainee[i].Courses.length; y++){
               
              const course = await Course.findOne({_id:coTrainee[i].Courses[y].courseID,InstructorID:_id})
                         if(course){
                            totalMoney+=course.Price
                        }
        }
    }

    }
        return res.status(200).json(totalMoney)
    }
    catch(error){
        res.status(400).json({error:error.message})

    }
}




module.exports={moneyOwed}