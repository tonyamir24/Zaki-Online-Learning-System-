import { useState } from "react"
import {  useParams } from "react-router-dom"
var Subtitles =[]

const CourseForm =()=>{
    const {InstructorID}=useParams('')
    const [Title,setTitle] =useState('')
    const [Price,setPrice] =useState(0)
    const [ShortSummary,setShortSummary] =useState('')
    const [Hours,setHours] =useState(0)
   // const [Subtitles,setSubtitles] =useState(null)
    const [Subject,setSubject] =useState('')
    const [Video,setVideo] =useState('')
    ///SubTiltle
    const[SubtitleName,setSubtitleName]=useState('')
    const[SubtitleHours,setSubtitleHours]=useState(0)
    const[SubtitleVideo,setSubtitleVideo]=useState('')
    const[SubtitleVideoDes,setSubtitleVideoDes]=useState('')


    const [error,seterror] =useState(null)
    


    const handleSubtitleSubmit=async(e) => {
        e.preventDefault()
        const Subtitle ={SubtitleName, SubtitleHours , SubtitleVideo , SubtitleVideoDes }
        Subtitles.push({Subtitle}) 

        Subtitles.forEach(({Subtitle} )=> console.log(Subtitle.SubtitleName))

        // console.log(Subtitles)
        setSubtitleName('')   
        setSubtitleHours(0) 
        setSubtitleVideo('') 
        setSubtitleVideoDes('')  

        }





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
        <p></p>
        <label>Price: </label>
        <input
        type="number"
        onChange={(e)=>setPrice(e.target.value)}
        value={Price}
        />
        <p></p>
        <label>Short Summary: </label>
        <input
        type="text"
        onChange={(e)=>setShortSummary(e.target.value)}
        value={ShortSummary}
        />
        <p></p>
        <label>Hours: </label>
        <input
        type="number"
        onChange={(e)=>setHours(e.target.value)}
        value={Hours}
        />
        <p></p>
        <label>Subject: </label>
        <input
        type="text"
        onChange={(e)=>setSubject(e.target.value)}
        value={Subject}
        />
        <p></p>
        <label>Video: </label>
        
        <input
        type="text"
        onChange={(e)=>setVideo(e.target.value)}
        value={Video}
        />
        



       


        <p></p>



        <button>ADD COURSE</button>
        <p></p>
        {Video &&
                <iframe width="560" height="315" src={"https://www.youtube.com/embed/"+Video.substr(-11,11)} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            }
        
    </form>

    <dev className="subtitleForm"> 
          
          <form className = "create" onSubmit = {handleSubtitleSubmit}> 
      <h3> Add a new Subtitle </h3>
      
  <label> Subtitle Name </label>
      <input
      type="text"
      onChange={(e)=> setSubtitleName(e.target.value)}
      value={SubtitleName}
      />
       <p></p>
  
  <label> Hours </label>
      <input
      type="number"
      onChange={(e)=> setSubtitleHours(e.target.value)}
      value={SubtitleHours}
      />
        <p></p>
  <label> Video Link</label>
      <input
      type="text"
      onChange={(e)=> setSubtitleVideo(e.target.value)}
      value={SubtitleVideo}
      />
   <p></p>
  <label> VideoDes </label>
      <input
      type="text"
      onChange={(e)=> setSubtitleVideoDes(e.target.value)}
      value={SubtitleVideoDes}
      />
         <p></p>
  
      <button> Add Question </button>
      </form> 
      {Video &&
              <iframe width="560" height="315" src={"https://www.youtube.com/embed/"+Video.substr(-11,11)} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          }

</dev>

    {error && <div className="error"><p>{error}</p></div>}
    </div>




    )


}

export default CourseForm