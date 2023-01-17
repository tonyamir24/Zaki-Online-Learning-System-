import { useState ,useEffect } from "react";
import {  Link, useParams } from "react-router-dom";
import CourseDetails from "../components/CourseDetails";
const Course=()=>{
    let {courseID}=useParams()
    const [course,setCourse]=useState(null)

    useEffect(()=>{
        const fetchUser= async() =>{
            const response= await fetch('/viewCourseID/'+courseID)
            const json = await response.json()

            if(response.ok){
                
                setCourse(json)
                console.log(json)
                }
            }

        fetchUser()
    },[courseID])

    return (
        <div className="seachResults">
            <h1>Results</h1>
            <div className="read">
            
                   
                   {course &&
                    <CourseDetails key={course._id} course={course}/>
                    
        
                   
    }
    {course &&

         <Link to ={'/reportForm/'+course._id}>
                         <button style={{ width: "100px", height: "60px", margin:25 }} type="submit">Report Course</button>
                     </Link>
    }
            
            </div>
        </div>

        
    )



}
export default Course