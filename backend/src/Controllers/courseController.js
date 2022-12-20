const Course =require("../Modules/Course")

const createCourse =async(req,res)=>{
    const {InstructorID,Title,Price,ShortSummary,Hours,Subtitles,Subject,Video}=req.body

    try{
        const course= await Course.create({InstructorID,Title,Price,ShortSummary,Hours,Subtitles,Subject,Video})
        await res.status(200).json(course)
    }
    catch(error){
        res.status(200).json({error:error.message})
    }
}
const viewCourse = async(req,res)=>{
   const {id}=req.params
    try{
        const title =await Course.find({_id:id},{_id:0, Title:1,Subtitles:1,Exercises:1, Hours:1, Rating:1,Price:1})
        if(title)
        res.status(200).json(title)
        else{
           res.status(404).json({error:"No such Course"}) 
        }
    }
    catch(error){
        res.status(200).json({error:error.message})
    }
}
const viewTitles = async(req,res)=>{
    try{
       const title =await Course.find({},{_id:0, Title:1, Hours:1, Rating:1})

        if(title)
        res.status(200).json(title)
        else{
           res.status(404).json({error:"No Courses Available"}) 
        }
    }
    catch(error){
        res.status(200).json({error:error.message})
    }
}

const viewPriceEach = async(req,res)=>{
    try{
      const price= await Course.find({},{_id:0, Price:1})
      if(price)
        res.status(200).json(price)
        else{
           res.status(404).json({error:"No Courses Available"}) 
        }
    
      }
      //db.collection('Course').find().toArray().then(result => console.log(Title,Price));
    
    catch(error){
        res.status(200).json({error:error.message})
    }
}

const viewInstrCourse= async (req, res) => {
    const {id}= req.params
    // if(!mongoose.Types.ObjectId.isValid(id)){
    //     return res.status(404).json({error:"Mshhh henaaa"})
    // }
    const course =await Course.find({"InstructorID" : id})
    // const course=await Course.find({InstructorID: "789" }, {InstructorID :1})
    
    if(!course){
        return res.status(400).json({error:'No courses given'})
    }
    res.status(200).json(course)


}
const filterCourse= async (req, res) => {
    var id= "a123";
    const {subject}= req.params;
    // if(!mongoose.Types.ObjectId.isValid(subject)){
    //     return res.status(404).json({error:"No such courses ! "})
    // }
    var course= null;
    try{
     course=await Course.find({"InstructorID": id,"Price": subject})     
    }
    catch(error){
        // console.log("ehh el gabakkk henaaa")
     course=await Course.find({"InstructorID": id,"Subject": subject  })
    }
    if(!course){
        return res.status(400).json({error:'No such courses !'})
     }
    res.status(200).json(course)


}
const searchCourse=  async (req, res) => {
       // var id= "123456";
        const {title}= req.params;
        // if(!mongoose.Types.ObjectId.isValid(title)){
        //     return res.status(404).json({error:"No such courses ! "})
        // }
        console.log("hello there")
       //const course= await Course.find( {"Title": title} )
       const course= await Course.find( {$or:[{Title:{'$regex':title}}]})

        if(!Object.keys(course).length==0){
                return  res.status(200).json(course)
            }


            else{
            console.log("da5alt first")
           const course= await Course.find({"Subject": title  })
           if(!Object.keys(course).length==0){
            return res.status(200).json(course)
           }
        
          else{
            console.log("da5alt second")
           const course= await Course.find({ "InstructorID": title })
           if(!Object.keys(course).length==0){
            return res.status(200).json(course)

           }
           

              

               else{
            console.log("da5alt last")
                    return res.status(400).json({error:'No such courses ! '})
                
            
               }}
               }
        
            
            }

const result = new Array();
const result1=new Array();
const result2=new Array();
const FilterCourse = async(req,res)=>{
    const {object}=req.params
     try{
         const result =await Course.find({Subject:object})
         if(result.length != 0)
         res.status(200).json(result)
         
         else {
            const result =await Course.find({Rating:object})
            res.status(200).json(result)
            
         }
     }
     catch(error){
         res.status(200).json({error:error.message})
     }
 }
 
const FilterCourse1 = async(req,res)=>{
    const {object}=req.params
     try{
         const result1 =await Course.find({Price:object})
         if(result1 != 0)
         res.status(200).json(result1)
         
         else{
         res.status(404).json({error:"No Courses Available with such price"}) 
         }
     }
     catch(error){
         res.status(200).json({error:error.message})
     }
 }
 const SearchCourse = async(req,res)=>{
    const {object}=req.params
     try{
         const result2 =await Course.find({Title:object})
         if(result2 !=0)
         res.status(200).json(result2)
         else if ((await Course.find({InstructorID:object})).length !=0){
            const result2 =await Course.find({InstructorID:object})
            res.status(200).json(result2)}
        else{
            const result2 =await Course.find({Subject:object})
            res.status(200).json(result2)}}
     catch(error){
         res.status(200).json({error:error.message})
     }
 }
const AddComment =async(req,res)=>{
    const {id}= req.params
    const {Comment,Src}=req.body
    console.log(id)
    console.log(Comment)
    console.log(Src)
    try {
        const course= await Course.findOneAndUpdate({_id:id},{$push:{Reviews:{'Comment':Comment,'Src':Src}}})
        //const course= await Course.findById({_id:id})
        if(await course)
        res.status(200).json(course)
      

    } catch (error) {
        res.status(200).json({error:error.message})

    }

}
const AddRating =async(req,res)=>{
    const {id}= req.params
    const {Rate,Src}=req.body
    // console.log(id)
    // console.log(Rate)
    // console.log(Src)
    try {
        var course= await Course.findOneAndUpdate({_id:id},{$push:{Rating:{'Rate':Rate,'Src':Src}}})
        const {AvgRating} = await Course.findOne({_id:id},{_id:0, AvgRating:1})
       
        console.log(AvgRating)
        if(AvgRating){
            const {Rating} = await Course.findOne({_id:id},{_id:0, Rating:1})
            var count=0;
            var total=0;
            var avg=0;
            Rating.forEach(element => {
            count++;
            total+=element.Rate
            });
            avg=total/count
            console.log(avg)
             course= await Course.findOneAndUpdate({_id:id},{AvgRating:avg})
        }
        else{
           // console.log("here")
             course= await Course.findOneAndUpdate({_id:id},{AvgRating:Rate})

        }

        //const course= await Course.findById({_id:id})
        if(await course)
        res.status(200).json(course)
      

    } catch (error) {
        res.status(200).json({error:error.message})

    }

}
const viewCourseID = async(req,res)=>{
    const {id}=req.params
     try{
         const title =await Course.find({_id:id})
         if(title)
         res.status(200).json(title)
         else{
            res.status(404).json({error:"No such Course"}) 
         }
     }
     catch(error){
         res.status(200).json({error:error.message})
     }
 }
module.exports={
    createCourse,
    viewCourse,
    viewTitles,
    viewPriceEach,
    viewInstrCourse,
    filterCourse,
    searchCourse,
    FilterCourse,FilterCourse1,SearchCourse,
    AddComment,
    AddRating,
    viewCourseID


}