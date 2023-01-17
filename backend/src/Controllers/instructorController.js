const CorporateTrainee = require("../Modules/CorporateTrainee")
const IndividualTrainee = require("../Modules/IndividualTrainee")
//const Instructor = require("../Modules/Instructor")

const Course = require("../Modules/Course")
const jwt = require('jsonwebtoken')


const moneyOwed =async (req,res)=>{
    const {InstructorID}=req.body
    var totalMoney=0
    const count=0
    try{
       // const  instructor =await Instructor.find()
        //if(instructor)
        const courses=await Course.find({InstructorID})
       // var  indTrainee =await IndividualTrainee.find({ "names": { "$in": list } })
       // var coTrainee =await CorporateTrainee.find({ "names": { "$in": list } })
       // console.log(courses)

       const indTrainee =await IndividualTrainee.find()
       const coTrainee =await CorporateTrainee.find()
       


          for(var i = 0; i < courses.length; i++)
        {
            for(var j = 0; j < indTrainee.length; j++){
                for(var x = 0; x < indTrainee[j].Courses; x++){
                                 console.log(indTrainee[j].Courses[x].courseID)
                                 console.log(courses[i]._id)
                             if(indTrainee[j].Courses[x].courseID===courses[i]._id){
                                 count++;
                             }
            }


        }
    }


        //  {
        //    // console.log(courses[i].Title)
            
        //     const indTrainee =await IndividualTrainee.find()
        //        console.log(indTrainee)
        //     for(var j = 0; j < indTrainee.length; j++){
        //         console.log(indTrainee[j].length)
        //         for(var x = 0; x < indTrainee[j].Courses; x++){
        //             console.log(indTrainee[j].Courses[x].courseID)
        //             console.log(courses[i]._id)
        //         if(indTrainee[j].Courses[x].courseID===courses[i]._id){
        //             count++;
        //         }
        //         }
        //          }

                // console.log(count)
            // for(var k = 0; k < coTrainee.length; k++){
                
            // }


        //     for(var i = 0; i < coTrainee.length; i++){

        //         if(coTrainee[i].courseID == courseId)
        //          {
                   

                     
        //          }

        //     }
        //     for(var i = 0; i < indTrainee.length; i++){

        //         if(indTrainee.Courses[i].courseID == courseId)
        //          {
                   

                     
        //          }

        //     }
        //  }
    }
    catch(error){
        res.status(400).json({error:error.message})

    }
}




module.exports={moneyOwed}