
import { useState } from "react";
import { useAuthContex } from "../hooks/useAuthContex";

const SubtitleDetails=({Subtitle})=>{
    const courseId="63c0843178d03a0bef03d39c"
    const {user} =useAuthContex()

const[notes,setNotes]=useState('') 
const[info,setInfo]=useState(false) 
    


const onClick=async()=>{
    setInfo(!info)
    console.log("json")

    const response =await fetch('/viewSubtitle',{
        method:'POST',
        headers: {'Content-Type':'application/json'},
        body : JSON.stringify({traineeID:user.token,courseId:courseId,SubtitleID:Subtitle._id})
    })
        const json = await response.json()
         if(response.ok){
           console.log(json)
            //console.log(Courses)
             }
             if(!response.ok){
                console.log(json.error)
                 //console.log(Courses)
                

                  }
                  console.log("json2")
}
    return(
        <div className="Subtitle" >
            <div onClick={onClick}>
           <h3>{Subtitle.SubtitleName}</h3> 
        {info &&<div> 
            {  Subtitle.SubtitleVideo &&      <iframe width="560" height="315" src={"https://www.youtube.com/embed/"+Subtitle.SubtitleVideo.substr(-11,11)} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                }

        <p>{Subtitle.SubtitleVideoDes}</p>
        </div>}
        </div>
        {info &&<div> 
        <p>Notes:</p>
        <input
            type="text"
            onChange={(e)=>setNotes(e.target.value)}
            value={notes}
            />
        </div>}
        </div>
    )

}

export default SubtitleDetails