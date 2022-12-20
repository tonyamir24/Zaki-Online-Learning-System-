const express= require("express");
const Admin = require("../Modules/Admin")
const Instructor = require("../Modules/Instructor")
const Course = require("../Modules/Course")

const bodyParser = require('body-parser');
const { default: mongoose } = require("mongoose");
const {  createAdmin, createInstructor, createCoTraniee, AddInsComment,AddInsRating,viewInsID,addMiniBiography,addEmail, ChangePassword, ForgetPassword} = require("../Controllers/userCreateController");


const router= express.Router()
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));

router.post("/createAdmin",createAdmin)
router.post("/createInstructor",createInstructor)
router.post("/createCoTraniee",createCoTraniee)

//sprint 2
router.post("/addInsComment/:id",AddInsComment)
router.post("/addInsRating/:id",AddInsRating)
router.get("/viewInsID/:id",viewInsID)
router.post("/addMiniBiography/:id",addMiniBiography)
router.post("/addEmail/:id",addEmail)

//Change password
router.post("/changePassword/:id",ChangePassword)
router.post("/forgetPassword/:id",ForgetPassword)
module.exports=router
