import { Link } from "react-router-dom"
import Comments from "./Comments"
import CommentsForm from "./CommentsForm"
import RatingForm from "./RatingForm"

const CourseDetails=  ({course})=>{
    return (
    <div className="Course-Details">
        <h1>{course.Title}</h1>
        <p><strong>Price</strong>{course.Price}</p>
        <p>{course.ShortSummary}</p>
        <p><strong>Hours</strong>{course.Hours}</p>
        <p><strong>Subject</strong>{course.Subject}</p>
        <p><strong>Rating</strong>{course.AvgRating}</p>
        {  course.Video &&      <iframe width="560" height="315" src={"https://www.youtube.com/embed/"+course.Video.substr(-11,11)} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
}

            <RatingForm Src='63666b0fb75a9876b2561ace' CourseID={course._id}/>
            <CommentsForm Src='63666b0fb75a9876b2561ace' CourseID={course._id} />
        <div className="Comments">

            {course.Reviews && course.Reviews.map((review)=>{
                return(
                    
                    
                    <Comments key={review._id} review={review}/>
                    
                    
                )
                 
            })
    
            }
            
            <Link to={'/addExam/'+course._id}>
                    <button style={{ width: "100px", height: "60px", margin:25}} type="submit">Exams</button>
        
                    </Link>
                    <Link to={'/takeExam/'+course._id}>
                    <button style={{ width: "100px", height: "60px", margin:25}} type="submit">Take Exams</button>
        
                    </Link>
        </div>
      
    </div>
    )
    
    }
    
    export default CourseDetails
    