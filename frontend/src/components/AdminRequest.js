import { useState } from "react"


const AdminRequest=({request})=>{
    const [granted,setGranted]=useState(false)
   const onClick=async()=>{
    const response =await fetch('/grantAccess',{
        method:'POST',
        body:JSON.stringify({reporteeID:request.ReporteeID,courseId:request.CourseID}),
        headers:{
            'Content-Type':'application/json'
        }

    })
    const json =await response.json({})

    if(response.ok){
        setGranted(true)
        console.log(json)
    }
    }
return(
    
                <div   >
                   
                       
                    {!granted &&<div className="reportBox">
                    <p>CorporateTrainee: {request.ReporteeName}</p>
                    <p>Requesting : {request.CourseTitle}</p>
                    
                <button onClick={onClick}>Grant Access</button>
                    
                    

                    </div>}
                    
                    
                </div>

)
}

export default AdminRequest

