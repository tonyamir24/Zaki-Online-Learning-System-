
const Admin = require("../Modules/Admin");
const CorporateTrainee = require("../Modules/CorporateTrainee");
const IndividualTrainee = require("../Modules/IndividualTrainee");
const Instructor = require("../Modules/Instructor");
//const mongoose = require('mongoose');


//create new Admin with a set username and password
const createAdmin = async (req,res) =>{ const {Username ,Password } = req.body

try{
    const admin=await Admin.create({Username ,Password})
    res.status(200).json(admin) //you change it according to the collection
}
catch(error){
    res.status(200).json({error:error.message})
}
}


//create new Instructor with a set username and password
const createInstructor = async (req,res) =>{ const {Username ,Password } = req.body

try{
    const instructor=await Instructor.create({Username ,Password})
    res.status(200).json(instructor) //you change it according to the collection
}
catch(error){
    res.status(200).json({error:error.message})
}
}


//create new corporate trainee with a set username and password
const createCoTraniee = async (req,res) =>{ const {Username ,Password } = req.body

try{
    const corporateTrainee=await CorporateTrainee.create({Username ,Password})
    res.status(200).json(corporateTrainee) //you cahnge it according to the collection
}
catch(error){
    res.status(200).json({error:error.message})
}
}
const AddInsComment =async(req,res)=>{
    const {id}= req.params
    const {Comment,Src}=req.body
    try {
        const instructor= await Instructor.findOneAndUpdate({_id:id},{$push:{Reviews:{'Comment':Comment,'Src':Src}}})
        //const course= await Course.findById({_id:id})
        if(await instructor)
        res.status(200).json(instructor)
      

    } catch (error) {
        res.status(200).json({error:error.message})

    }

}
const AddInsRating =async(req,res)=>{
    const {id}= req.params
    const {Rate,Src}=req.body
    // console.log(id)
    // console.log(Rate)
    // console.log(Src)
    try {
        var instructor= await Instructor.findOneAndUpdate({_id:id},{$push:{Rating:{'Rate':Rate,'Src':Src}}})
        const {AvgRating} = await Instructor.findOne({_id:id},{_id:0, AvgRating:1})
       
        console.log(AvgRating)
        if(AvgRating){
            const {Rating} = await Instructor.findOne({_id:id},{_id:0, Rating:1})
            var count=0;
            var total=0;
            var avg=0;
            Rating.forEach(element => {
            count++;
            total+=element.Rate
            });
            avg=total/count
            console.log(avg)
            instructor= await Instructor.findOneAndUpdate({_id:id},{AvgRating:avg})
        }
        else{
           // console.log("here")
           instructor= await Instructor.findOneAndUpdate({_id:id},{AvgRating:Rate})

        }

        //const course= await Course.findById({_id:id})
        if(await instructor)
        res.status(200).json(instructor)
      

    } catch (error) {
        res.status(200).json({error:error.message})

    }

}
const viewInsID = async(req,res)=>{
    const {id}=req.params
     try{
         const instructor =await Instructor.findOne({_id:id})
         if(instructor)
         res.status(200).json(instructor)
         else{
            res.status(404).json({error:"No such Course"}) 
         }
     }
     catch(error){
         res.status(200).json({error:error.message})
     }
 }
const addMiniBiography=async(req,res)=>{
    const {id}=req.params
    const {MiniBiography}=req.body

    try{
      const instructor= await Instructor.findOneAndUpdate({_id:id},{MiniBiography:MiniBiography})
      if(instructor)
      res.status(200).json(instructor)
      
    }
    catch(error){
        res.status(200).json({error:error.message})
    }
}
const addEmail=async(req,res)=>{
    const {id}=req.params
    const { Email}=req.body

    try{
      const instructor= await Instructor.findOneAndUpdate({_id:id},{Email:Email})
      if(instructor)
      res.status(200).json(instructor)
      
    }
    catch(error){
        res.status(200).json({error:error.message})
    }
}

//FADY's part


//Change Password of the user
const ChangePassword = async (req,res) =>{ 
    const {id} =req.params
    const {OldPassword,Password}=req.body
   
           // return res.status(404).json({error: 'Incorrect old pass'})


    const admin = await Admin.findOne({_id: id})
    const instructor = await Instructor.findOne({_id: id})
    const corporateTrainee =await CorporateTrainee.findOne({_id: id})
    const individualTrainee =await IndividualTrainee.findOne({_id: id})
   // console.log(corporateTrainee)
    if(admin){
        if(admin.Password===OldPassword){
            await Admin.findOneAndUpdate({_id: id},{
            Password:Password
             })
             res.status(200).json(admin)
            }else{
                return res.status(404).json({error: 'Incorrect old pass'})
            }
 

    }else{



     
     
    if(instructor){
        
        if(instructor.Password===OldPassword){
            
            await Instructor.findOneAndUpdate({_id: id},{
            Password:Password
             })
             res.status(200).json(instructor)
        }else{
            return res.status(404).json({error: 'Incorrect old pass'})
        }

    }
        else{

         
         console.log(corporateTrainee)
        if(corporateTrainee){
            if(corporateTrainee.Password===OldPassword){
                await CorporateTrainee.findOneAndUpdate({_id: id},{
                Password:Password
                })
                res.status(200).json(corporateTrainee)
            }else{
                return res.status(404).json({error: 'Incorrect old pass'})
            } 
            
      }  else{
    
               
                

                 if(individualTrainee){
            if(individualTrainee.Password===OldPassword){
                await IndividualTrainee.findOneAndUpdate({_id: id},{
                Password:Password
                })
                res.status(200).json(individualTrainee)
            }   else{
                return res.status(404).json({error: 'Incorrect old pass'})
            } 
            }     
                else{
                    return res.status(404).json({error: 'No such user !'})
                    
                } 
            } 
        }
    }
}
    
    const ForgetPassword = async (req,res) =>{ 
        const {id} =req.params
        const {Password}=req.body
       
    
        const admin = await Admin.findOneAndUpdate({_id: id},{
            Password:Password
        })
    
        if(admin){
            
            res.status(200).json(admin)
    
        }else{
            const instructor = await Instructor.findOneAndUpdate({_id: id},{
                Password:Password
            })
    
            if(instructor){
                res.status(200).json(instructor)
            }else{
    
                const corporateTrainee = await CorporateTrainee.findOneAndUpdate({_id: id},{
                    Password:Password
                })
        
                if(corporateTrainee){
                    res.status(200).json(corporateTrainee)
                }else{
        
                    const individualTrainee = await IndividualTrainee.findOneAndUpdate({_id: id},{
                        Password:Password
                    })
            
                    if(individualTrainee){
                        res.status(200).json(individualTrainee)
                    }else{
                        return res.status(404).json({error: 'No such user !'})
                        
                    } 
                } 
            }
        }
       
    
// try{
//     const admin=await Admin.create({Username ,Password})
//     res.status(200).json(admin) //you change it according to the collection
// }
// catch(error){
//     res.status(200).json({error:error.message})
// }


}






module.exports=
{
createAdmin,
createInstructor,
createCoTraniee,
AddInsComment,
AddInsRating,
viewInsID,
addMiniBiography,
addEmail,
ChangePassword,
ForgetPassword
}