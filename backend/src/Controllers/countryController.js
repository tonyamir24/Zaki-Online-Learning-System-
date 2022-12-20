const CorporateTrainee = require('../Modules/CorporateTrainee')
const IndividualTrainee = require('../Modules/IndividualTrainee')
const Instructor = require('../Modules/Instructor')
const mongoose=require("mongoose")

const SelectCountry = async(req,res)=>{
    const {id}= req.params
    const {Country}=req.body
    console.log(id)
    console.log(Country)

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"No such User"})
    }
    try {
        const inst= await Instructor.findByIdAndUpdate({_id:id},{Country:Country})
        const corp= await CorporateTrainee.findByIdAndUpdate({_id:id},{Country:Country})
        const indiv= await IndividualTrainee.findByIdAndUpdate({_id:id},{Country:Country})
        if(await inst)
        res.status(200).json(inst)
      else if(await corp)
        res.status(200).json(corp)
       else if(await indiv)
        res.status(200).json(indiv)

    } catch (error) {
        res.status(200).json({error:error.message})

    }
}

module.exports= SelectCountry