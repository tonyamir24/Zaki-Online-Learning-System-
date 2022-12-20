import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";

const InstViewCourses =()=>{
   // const {Courses,dispatch} =useSearchContext()
   const {InstructorID}=useParams()
    const [Courses,setCourses]=useState(null)
    const [error,seterror] =useState(null)
    useEffect(()=>{
        const fetchUser= async() =>{
            const response= await fetch('/viewInstrCourse/'+InstructorID)
            const json = await response.json()
            
            if(response.ok){
                //dispatch({type:'SET_RESULTS',payload:json})
                console.log(json)
                seterror(null)
                setCourses(json)
                
                }

            if(!response.ok){
                   // dispatch({type:'SET_RESULTS',payload:json})
                   setCourses(null)
                    seterror(json.error)

                }
               
            
            }
            
        fetchUser()
        
    },[])
    return (
        <div className="seachResults">
            
            

            <div className="read">
            {error && <div className="error">{error}</div>} 
            {Courses && Courses.map((course)=>{
                return(
                   
                    <a href={"/course/"+course._id}>{course.Title}</a>
                )
                 
            })
    
            }
               
                
               
            </div>

        </div>

        
    )

}
export default InstViewCourses


