import { useState } from "react"
//import { useParams } from "react-router-dom"
var Subtitles =[]
 const SubtitleForm = () => {
  //  const {id}=useParams()
    const[SubtitleName,setSubtitleName]=useState('')
    const[Hours,setHours]=useState(0)
    const[Video,setVideo]=useState('')
    const[VideoDes,setVideoDes]=useState('')
    //const[error,setError]=useState(null)


    const handleSubmit=async(e) => {
        e.preventDefault()
        const Subtitle ={SubtitleName, Hours , Video , VideoDes }
        Subtitles.push({Subtitle}) 

        Subtitles.forEach(({Subtitle} )=> console.log(Subtitle.SubtitleName))

        // console.log(Subtitles)
        setSubtitleName('')   
        setHours(0) 
        setVideo('') 
        setVideoDes('')  
        localStorage.setItem('Subtitles',JSON.stringify(Subtitles))

        }
    
      
    return(
        
        

        <dev className="subtitleForm"> 
          
            <form className = "create" onSubmit = {handleSubmit}> 
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
        onChange={(e)=> setHours(e.target.value)}
        value={Hours}
        />
          <p></p>
    <label> Video Link</label>
        <input
        type="text"
        onChange={(e)=> setVideo(e.target.value)}
        value={Video}
        />
     <p></p>
    <label> VideoDes </label>
        <input
        type="text"
        onChange={(e)=> setVideoDes(e.target.value)}
        value={VideoDes}
        />
           <p></p>
    
        <button> Add Question </button>
        </form> 
        {Video &&
                <iframe width="560" height="315" src={"https://www.youtube.com/embed/"+Video.substr(-11,11)} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            }

</dev>

)


}
export default SubtitleForm