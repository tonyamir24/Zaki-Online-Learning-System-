import Comments from "./Comments"
import CommentsInsForm from "./CommentsInsForm"
//import RatingForm from "./RatingForm"
import AddEmail from "./AddEmail"
import AddMiniBiography from "./AddMiniBiography"
import { useState } from "react"
import RatingInsForm from "./RatingInsForm"
const InstructorDetails=  ({ Instructor,TraineeID})=>{
    const [clickMB,setClickMB] =useState('')
    const [clickML,setClickML] =useState('')
    const mbHandler=(e)=>{
        setClickMB("hbjnb");
    }
    const mlHandler=(e)=>{
        setClickML("hbjnb");
    }
    return (
    <div className="Course-Details">
        <h1>{Instructor.Username}</h1>
        <p><strong>Country: </strong>{Instructor.Country}</p>
        {Instructor.Email &&        
         <p><strong>Email: </strong>{Instructor.Email}</p>}
                     <button onClick={mlHandler}>Edit Email</button>

            {clickML &&     
            <AddEmail Instructor={Instructor} />
}

    
    {Instructor.MiniBiography &&        
         <p><strong>MiniBiography: </strong>{Instructor.MiniBiography}</p>}
         <button onClick={mbHandler}>Edit MiniBiography</button>
    {clickMB && <AddMiniBiography Instructor={Instructor} />}

    <p><strong>Rating</strong>{Instructor.AvgRating}</p>

            <RatingInsForm Src='63666b0fb75a9876b2561ace' instructorID={Instructor._id}/>
    <CommentsInsForm Src='63666b0fb75a9876b2561ace' instructorID={Instructor._id} />
        
        <div className="Comments">

            {Instructor.Reviews && Instructor.Reviews.map((review)=>{
                return(
                    
                    
                    <Comments key={review._id} review={review}/>
                    
                    
                )
                 
            })
    
            }
            

        </div>
      
    </div>
    )
    
    }
    
    export default InstructorDetails
    