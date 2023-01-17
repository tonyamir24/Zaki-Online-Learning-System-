
import { useState } from "react"



const Report=({report})=>{
    const [message,setMessage] =useState('')

    const [error,seterror] =useState(null)


    const onClick=async()=>{
        const response =await fetch('/followUp',{
            method:'POST',
            body:JSON.stringify({reportID:report._id,message}),
            headers:{
                'Content-Type':'application/json'
            }

        })
        const json =await response.json({})

        if(!response.ok){
            seterror(json.error)

        }
        if(response.ok){
           // const {report}=json
            setMessage('')
            seterror(null)
            console.log('Reports',json)
        }
    }






return(
    <div className="reportsList">
        
                <div className="reportBox">
                    <p>Reporting : {report.CourseTitle}</p>
                    <p>Status : {report.Status}</p>
                    <p>Problem : {report.Message}</p>
                    <p>Issued : {report.createdAt.substr(0,10)}</p>
                    {(report.FollowUp.length>0 ) && <h3>Follow Ups</h3>}

                    {report.FollowUp && report.FollowUp.map((message)=>{
                        return(
                            <div>
                            <p>{message.message}</p>

                            </div>
                        )
                    })

                    }
                     { !(report.Status==="Resolved") && <div> 
                        <label>Follow Up </label>
                     <input
                         type="text"
                         onChange={(e)=>setMessage(e.target.value)}
                          value={message}

                     />
                     <button onClick={onClick}>Send</button>
                     </div>}
                </div>
         


      
{error && <div className="error"><p>{error}</p></div>}

    </div>

)
}

export default Report