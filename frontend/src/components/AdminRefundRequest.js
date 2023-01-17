import { useState } from "react"


const AdminRefundRequest=({request})=>{
    const [granted,setGranted]=useState(false)
   const onClick=async()=>{
    console.log(request.ReporteeID)
    console.log(request.CourseID)

    const response =await fetch('/refund',{
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
                    
                <button onClick={onClick}>Refund</button>
                    
                    

                    </div>}
                    
                    
                </div>

)
}

export default AdminRefundRequest

