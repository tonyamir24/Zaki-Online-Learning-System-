const express=require('express')

const router= express.Router()
const {moneyOwed}=require('../Controllers/instructorController')

router.post('/moneyOwed',moneyOwed)

module.exports=router