const express=require('express')

const router= express.Router()
const {checkProgress,viewSubtitle}=require('../Controllers/progressController')

router.post('/checkProgress',checkProgress)
router.post('/viewSubtitle',viewSubtitle)

module.exports=router