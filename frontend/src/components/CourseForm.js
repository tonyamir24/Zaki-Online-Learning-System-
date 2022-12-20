import { useState } from "react"
import { Link, useParams } from "react-router-dom"

const CourseForm =()=>{
    const {InstructorID}=useParams('')
    const [Title,setTitle] =useState('')
    const [Price,setPrice] =useState(0)
    const [ShortSummary,setShortSummary] =useState('')
    const [Hours,setHours] =useState(0)
    const [Subtitles,setSubtitles] =useState(null)
    const [Subject,setSubject] =useState('')
    const [Video,setVideo] =useState('')
    
    const [error,seterror] =useState(null)

    const handleSubmit =async (e) =>{
        e.preventDefault()


        const Course ={ InstructorID, Title, Price, ShortSummary, Hours, Subtitles, Subject, Video}
        const response =await fetch('/createCourse',{
            method:'POST',
            body:JSON.stringify(Course),
            headers:{
                'Content-Type':'application/json'
            }

        })
        const json =await response.json()

        if(!response.ok){
            seterror(json.error)

        //    return(<Link to={'/course/'+json._id}></Link>)
        }
        if(response.ok){
            

            seterror(null)
            console.log('New Course added  ',json)
        }}
    return(
        <div className="courseForm">

        
        <form className="create" onSubmit={handleSubmit}>
        <h3>Add a new course</h3>

        <label>Title: </label>
        <input
        type="text"
        onChange={(e)=>setTitle(e.target.value)}
        value={Title}
        />

        <label>Price: </label>
        <input
        type="number"
        onChange={(e)=>setPrice(e.target.value)}
        value={Price}
        />

        <label>Short Summary: </label>
        <input
        type="text"
        onChange={(e)=>setShortSummary(e.target.value)}
        value={ShortSummary}
        />

        <label>Hours: </label>
        <input
        type="number"
        onChange={(e)=>setHours(e.target.value)}
        value={Hours}
        />

        <label>Subject: </label>
        <input
        type="text"
        onChange={(e)=>setSubject(e.target.value)}
        value={Subject}
        />

        <label>Video: </label>
        <input
        type="text"
        onChange={(e)=>setVideo(e.target.value)}
        value={Video}
        />

        <button>ADD COURSE</button>
        {Video &&
                <iframe width="560" height="315" src={"https://www.youtube.com/embed/"+Video.substr(-11,11)} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            }
        
    </form>,
    {error && <div className="error"><p>{error}</p></div>}
    </div>
    )


}

export default CourseForm