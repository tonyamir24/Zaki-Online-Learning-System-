const jwt = require('jsonwebtoken')
//const  CorporateTrainee= require('../Modules/CorporateTrainee')
const IndividualTrainee = require('../src/Modules/IndividualTrainee')

const requireTraineeAuth = async (req,res,next) => {


    const { authorization} = req.headers

    if(!authorization){
        return res.status(401).json({error: 'Authorization token required'})
    }

    const token = authorization.split(' ')[1]


    try{
        const {_id} = jwt.verify(token, process.env.SECRET)
        // const corporateTrainee=await CorporateTrainee.findOne({_id})
        // if(corporateTrainee){
        //     req.admin = await CorporateTrainee.findOne({_id}).select('_id')

        // }else{
            req.trainee = await IndividualTrainee.findOne({_id}).select('_id')
            
     //   }
        next()

    } catch(error){
        console.log(error)
        res.status(401).json({error: 'Request is not authorized'})

    }


}
module.exports = requireTraineeAuth