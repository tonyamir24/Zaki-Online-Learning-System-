import { useState } from "react"


const AllReport=({report})=>{
    
    const [info,setInfo] =useState(false)
    const [seen,setseen]=useState(report.Seen)

    const statuss = ["Pending", "Resolved","Issued"];
    const [Status,setStatus]=useState(report.Status)
    const [Sstatus,setSstatus]=useState(report.Status)

    const onClick =async(e)=>{
     
        setInfo(!info)
        if(!seen){const response =await fetch('/seen',{
            method:'POST',
            body:JSON.stringify({reportID:report._id}),
            headers:{
                'Content-Type':'application/json'
            }

        })
        const json =await response.json({})

       
        //    return(<Link to={'/course/'+json._id}></Link>)
        
        if(response.ok){
            setseen(true)
            console.log('Report',json)
        }}}
    
const updateStatus=async()=>{


    const response =await fetch('/updateStatus',{
        method:'POST',
        body:JSON.stringify({reportID:report._id,Status:Sstatus}),
        headers:{
            'Content-Type':'application/json'
        }

    })
    const json =await response.json({})

    if(response.ok){
        setStatus(Sstatus)
        console.log('Report',json)
    }
}
return(
    
                <div  className="reportBox" >
                    {info &&
                        <div >
                    <div onClick={onClick}>
                    <p>Reportee: {report.ReporteeName}</p>
                    <p>Reporting : {report.CourseTitle}</p>
                     <p>Status : {Status}</p>
                    <p>Problem : {report.Message}</p>
                    <p>Issued : {report.createdAt.substr(0,10)}</p>
                    {(report.FollowUp.length>0) && <h3>Follow Ups</h3>}
                    {report.FollowUp && report.FollowUp.map((message)=>{
                        return(
                            <div>
                               
                            <p>{message.message}</p>

                            </div>
                        )
                    })

                    }
                    </div>
                    <div>
                    <select
                        onChange={(e) => setSstatus(e.target.value)}
                        defaultValue={Status}
                      >
                         {statuss.map((status, idx) => (
                            <option key={idx}>{status}</option>
                          ))}
                        </select>
                        <button onClick={updateStatus}>Update Status</button>
                        </div>
                        </div>
                    }
                   
                    

                    {!info &&
                        <div onClick={onClick}>
                            <p>Reportee: {report.ReporteeName}  </p>
                            <p>Reporting : {report.CourseTitle}</p>
                        {seen && <p>Seen          <br/>     Issued : {report.createdAt.substr(0,10)}</p>}
                        {!seen && <p> Not Seen      <br/>           Issued : {report.createdAt.substr(0,10)}</p>}
                        </div>
                    }
                    
                    
                </div>

)
}

export default AllReport

