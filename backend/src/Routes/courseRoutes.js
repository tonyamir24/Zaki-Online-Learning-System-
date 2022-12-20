const express=require('express')
const bodyParser = require('body-parser');

const router= express.Router()
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));

const {createCourse,viewCourse,viewTitles,viewPriceEach,viewInstrCourse, filterCourse, searchCourse,FilterCourse,FilterCourse1,SearchCourse,AddComment,AddRating,viewCourseID}=require("../Controllers/courseController")
const SelectCountry= require("../Controllers/countryController");
const Course = require('../Modules/Course');

router.post("/createCourse",createCourse)
router.get("/viewCourse/:id",viewCourse)
router.get("/viewTitles",viewTitles)
router.get("/viewPriceEach",viewPriceEach)
router.post("/SelectCountry/:id",SelectCountry)


router.get("/viewInstrCourse/:id",viewInstrCourse)
router.get("/filterCourse/:subject",filterCourse)
router.get("/searchCourse/:title",searchCourse)

router.get("/FilterCourse/:object",FilterCourse)
router.get("/FilterCourse1/:object",FilterCourse1)
router.get("/SearchCourse/:object",SearchCourse)

//sprint 2
router.post("/addComment/:id",AddComment)
router.post("/addRating/:id",AddRating)
router.get("/viewCourseID/:id",viewCourseID)


router.post("/createQuestion/:id", async (req, res) => {
    const {id} =req.params
    const Exercises = req.body
    console.log(Exercises)
    try{
        const course =await Course.findByIdAndUpdate({_id:id},{Exercises:Exercises})
        res.status(200).json(Exercises)
        console.log(course)
    }
    catch(error){
        res.status(200).json({error:error.message})
    }
    
});
router.get("/readQuestion/:id", async(req, res) => {
    // res.status(200).send([{Name: "Tony Amir" , Email:"tony.elsayed@student.guc.edu.eg", Age:"22"},{Name: "Tony Amir" , Email:"tony.elsayed@student.guc.edu.eg", Age:"22"}]);
    const {id}=req.params
    const Exam=await Course.findOne({_id:id},{_id:0,Exercises:1})
    if(!Exam){
        return res.status(400).json({error:'No such Question'})
    }
    res.status(200).json(Exam)
 }
 )
module.exports=router