import { useState ,useEffect } from "react";
import { Link, useParams } from "react-router-dom";
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
            <Link to ={'/reportList'}>
            <button style={{ width: "100px", height: "60px", margin:25 }} type="submit">Reports</button>
        </Link>
        </div>

        
    )



}
export default Instructor