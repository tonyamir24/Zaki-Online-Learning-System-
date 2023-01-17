const express =require('express')



const{registerCourse,registeredCourses,checkCourse}=require('../Controllers/traineeCourseController')

// const requireTraineeAuth=require('../../middleware/requireTraineeAuth')
const router =express.Router()


// router.use(requireTraineeAuth)

router.post('/registerCourse',registerCourse)
router.post('/checkCourse',checkCourse)
router.post('/registeredCourses',registeredCourses)

module.exports=router