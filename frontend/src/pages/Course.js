import { useState ,useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import CourseDetails from "../components/CourseDetails";
const Course=()=>{
    let {courseID}=useParams()
    const [Courses,setCourses]=useState(null)

    useEffect(()=>{
        const fetchUser= async() =>{
            const response= await fetch('/viewCourseID/'+courseID)
            const json = await response.json()

            if(response.ok){
                setCourses(json)
                console.log(json)
                }
            }

        fetchUser()
    },[courseID])

    return (
        <div className="seachResults">
            <h1>Results</h1>
            <div className="read">
            {Courses && Courses.map((course)=>{
                return(
                   
                    <CourseDetails key={course._id} course={course}/>
                    
        
                )
                 
            })
    
            }
            </div>
        </div>

        
    )



}
export default Course