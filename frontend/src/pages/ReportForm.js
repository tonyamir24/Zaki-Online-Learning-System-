import { useState,useEffect } from "react"
import {  useParams } from "react-router-dom"
import { useAuthContex } from '../hooks/useAuthContex';

const Report =()=>{
    const {user} =useAuthContex()
    let {courseID}=useParams()
    const types = ["Technical", "Financial","others.."];

    const [Type,setType]=useState(types[0])
    const [Message,setMessage] =useState('')
   
    const [title,setTitle] =useState('')
    const [error,seterror] =useState(null)
    

    const [course,setCourse]=useState(null)

    useEffect(()=>{
        const fetchUser= async() =>{
            const response= await fetch('/viewCourseID/'+courseID)
            const json = await response.json()

            if(response.ok){
                
                setCourse(json)
                setTitle(json.Title)
                console.log(json)
                }
            
            if(!response.ok){
                seterror(json.error)
            }
        }
        fetchUser()
    },[courseID])


    const handleSubmit =async (e) =>{
        e.preventDefault()


        const Report = {reporteeID:user.token,ReporteeName:user.Username,CourseID:course._id,CourseTitle:course.Title,Type,Message}
        const response =await fetch('/issueReport',{
            method:'POST',
            body:JSON.stringify(Report),
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
            console.log('New Report added  ',json)
        }}
    return(
        <div className="reportForm">

        
        <form className="create" onSubmit={handleSubmit}>
       {title && <h3>Report {title}</h3>}

       
       
        <p></p>
        <label>State the Problem: </label>
        <input
        type="text"
        onChange={(e)=>setMessage(e.target.value)}
        value={Message}
        />
        <p></p>
       
        
        
        
        <select
        onChange={(e) => setType(e.target.value)}
        defaultValue={Type}
      >
        {types.map((type, idx) => (
          <option key={idx}>{type}</option>
        ))}
      </select>
      <p></p>
        <p></p>



        <button>ADD Report</button>
        <p></p>
       
        
    </form>

    {error && <div className="error"><p>{error}</p></div>}
    </div>




    )


}

export default Report