import React from 'react'
import { useState } from 'react';


const UploadVideo=  () => {
    const[link,setLink]=useState('')
    const realVid=(e)=>{
        e.preventDefault()
      console.log( link.substr(-11,11)) 
        // var url = document.getElementById('URLvideo').value; 
        // var videos = document.getElementById('video').value;
        // var src = document.createAttribute('src');
        // src.value = url;
        // videos.setAttributeNode('src');
        
    }

    return(
        <div className='Upload'>
            <container >
               <h1> Inst Video</h1>
               <form onSubmit={realVid}>
                <label>
                    URL: 
                </label>
                <br></br>
               <input id='URLvideo' type='text' maxlength='500'
                onChange={(e)=>setLink(e.target.value)} value={link}></input>
               <a href= "#video">
                <button> Upload</button>
                </a>

             <iframe width="560" height="315" src={"https://www.youtube.com/embed/"+link.substr(-11,11)} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
           
            </form>

             
               
            </container>

           
            
        </div>

    )

    
}



export default UploadVideo