import { Link } from "react-router-dom"
import Comments from "./Comments"
import CommentsForm from "./CommentsForm"
import RatingForm from "./RatingForm"
import { useState ,useEffect } from "react";
import { useAuthContex } from '../hooks/useAuthContex';
import SubtitleDetails from "./SubtitleDetails";

const CourseDetails=  ({course})=>{
    const {user} =useAuthContex()
    const [registered,setRegitered]=useState(false)
    const [Progress,setProgress]=useState(null)
    const [Ready,setReady]=useState(false)

    

    const [cardNumber, setCardNumber] = useState('')
    const [cardName, setCardName] = useState('')
    const [expiryDate, setExpiryDate] = useState('')
    const [cvv, setCvv] = useState('')
    const [error, setError] = useState(null)
    const handleSubmit =async (e) =>{
        e.preventDefault()


        const response =await fetch('/registerCourse',{
            method:'POST',
            headers: {'Content-Type':'application/json'},
            body : JSON.stringify({traineeID:user.token,courseId:course._id})
        })
            const json = await response.json()
             if(response.ok){
               setRegitered(json)
               console.log(json)
                //console.log(Courses)
                 }
             
    }


    useEffect(()=>{
        
        const fetchUser= async() =>{
            const response =await fetch('/checkCourse',{
           method:'POST',
           headers: {'Content-Type':'application/json'},
           body : JSON.stringify({traineeID:user.token,courseId:course._id})
       })
           const json = await response.json()
            if(response.ok){
              setRegitered(json)
              console.log(json)
               //console.log(Courses)
                }
            }
           if(user)
        fetchUser()
    },[user,course._id])


    useEffect(()=>{
        
        const fetchUser= async() =>{
            const response =await fetch('/checkProgress',{
           method:'POST',
           headers: {'Content-Type':'application/json'},
           body : JSON.stringify({traineeID:user.token,courseId:course._id})
       })
           const json = await response.json()
            if(response.ok){
              setProgress(json)
              console.log(json)
               //console.log(Courses)
                }
            }
           if(user)
        fetchUser()
    },[user,course._id])



   const onClick=async()=>{
        const response =await fetch('/issueRequest',{
            method:'POST',
            headers: {'Content-Type':'application/json'},
            body : JSON.stringify({reporteeID:user.token,ReporteeName:user.Username,CourseTitle:course.Title,CourseID:course._id})
        })
            const json = await response.json()
            if(!response.ok){
                setError(json.error)
             } 
             if(response.ok){
               setError(null)
               console.log(json)
                //console.log(Courses)
                 }
               
    }

    const onClick2=async()=>{
        const response =await fetch('/issueRefundRequest',{
            method:'POST',
            headers: {'Content-Type':'application/json'},
            body : JSON.stringify({reporteeID:user.token,ReporteeName:user.Username,CourseTitle:course.Title,CourseID:course._id})
        })
            const json = await response.json()
            if(!response.ok){
                setError(json.error)
             } 
             if(response.ok){
               setError(null)
               console.log(json)
                //console.log(Courses)
                 }


               
    }

    const onClick3=async()=>{
        setReady(true)


    }
    return (
    <div className="Course-Details">
        <h1>{course.Title}</h1>
        <p><strong>Price</strong>{course.Price}</p>
        <p>{course.ShortSummary}</p>
        <p><strong>Hours</strong>{course.Hours}</p>
        <p><strong>Subject</strong>{course.Subject}</p>
        <p><strong>Rating</strong>{course.AvgRating}</p>
        {  course.Video &&      
        <iframe width="560" height="315" src={"https://www.youtube.com/embed/"+course.Video.substr(-11,11)} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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

            
            {registered && course.Subtitles && course.Subtitles.map(({Subtitle})=>{
                return(
                    
                    
                    <SubtitleDetails key={Subtitle._id} Subtitle={Subtitle} />
                    
                    
                )
                 
            })
    
            }
            {registered && (Progress!==null) &&
            <h3> {Progress}% of course finished ! </h3>
            }
            
           
            {registered &&
            <Link to={'/addExam/'+course._id}>
            <button style={{ width: "100px", height: "60px", margin:25}} type="submit">Exams</button>

            </Link>
            }

        {registered &&
    <Link to={'/takeExam/'+course._id}>
                    <button style={{ width: "100px", height: "60px", margin:25}} type="submit">Take Exams</button>
        
                    </Link>
            }

            {!registered &&  user && (user.type==='corporateTrainee') &&
   
                    <button style={{ width: "100px", height: "60px", margin:25}} onClick={onClick}>Request Access</button>
        
                 
            }

            {!registered &&  user && (user.type==='individualTrainee') &&
   
                    <button style={{ width: "100px", height: "60px", margin:25}} onClick={onClick3} >Register</button>
        
                 
            }  


                {!registered && Ready && user && (user.type==='individualTrainee') &&

                <div className = "PayCourse">
                <div className="Card">

                </div>
                <h1> Please enter your card details </h1>
                <br></br>

                <label>Card Number:</label>
                <br></br>
                <input
                type="text"
                onChange={(e)=>setCardNumber(e.target.value)}
                value={cardNumber}
                />
                <br></br>
                <br></br>

                <label>Card Name ::</label>
                <br></br>
                <input
                type="text"
                onChange={(e)=>setCardName(e.target.value)}
                value={cardName}
                />
                <br></br>
                <br></br>

                <label> Expiry Date:</label>
                <br></br>
                <input
                type="date"
                onChange={(e)=>setExpiryDate(e.target.value)}
                value={expiryDate}
                />
                <br></br>
                <br></br>

                <label>CVV ::</label>
                <br></br>
                <input
                type="text"
                onChange={(e)=>setCvv(e.target.value)}
                value={cvv}
                />
                <br></br>
                <br></br>

                <input type="submit" value="Pay"  disabled={(!cardName)||(!cardNumber)||(!expiryDate)||(!cvv)}  onClick={handleSubmit}/>




                {error && <div className="error"><p>{error}</p></div>}
                </div>


                } 














             {registered && (Progress!==null) && (Progress<=50) && user && (user.type==='individualTrainee') &&
                    <button style={{ width: "100px", height: "60px", margin:25}} onClick={onClick2}>Request Refund</button>
                }          
                  
           
        </div>
        {error && <div className="error">{error}</div> }
    </div>
    )
    
    }
    
    export default CourseDetails
    