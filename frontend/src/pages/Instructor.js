import { useState ,useEffect } from "react";
import { useParams } from "react-router-dom";
import InstructorDetails from "../components/InstructorDetails";
const Instructor=({TraineeID})=>{
    let {instructorID}=useParams()
    const [Instructor,setInstructor]=useState(null)

    useEffect(()=>{
        const fetchUser= async() =>{
            const response= await fetch('/viewInsID/'+instructorID)
            const json = await response.json()

            if(response.ok){
                setInstructor(json)
                console.log(json)
                }
            }

        fetchUser()
    },[instructorID])

    return (
        <div className="seachResults">
            <h1>Results</h1>
            <div className="read">
            {Instructor &&             
                    <InstructorDetails key={Instructor._id} Instructor={Instructor} TraineeID={TraineeID}/>                    

              
        
                }
            </div>

        </div>

        
    )



}
export default Instructor