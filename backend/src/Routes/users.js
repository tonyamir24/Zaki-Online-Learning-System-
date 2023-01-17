const express =require('express')

const router =express.Router()


const {login,signup}=require('../Controllers/userController')

const{registerCourse,registeredCourses}=require('../Controllers/traineeCourseController')
// Login 
router.post('/login',login)

// signup 
router.post('/signup',signup)


router.post('/registerCourse',registerCourse)
router.post('/registeredCourses',registeredCourses)

module.exports=router