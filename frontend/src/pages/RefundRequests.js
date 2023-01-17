
import { useState,useEffect } from "react"
import AdminRefundRequest from "../components/AdminRefundRequest"


const RefundRequests=()=>{
    const [error,seterror] =useState(null)
    const [Requests,setRequests] =useState(null)
    useEffect(()=>{
        const fetchUser= async() =>{
           

        const response =await fetch('/allRefundRequests')
        const json =await response.json()

        if(!response.ok){
            seterror(json.error)

        //    return(<Link to={'/course/'+json._id}></Link>)
        }
        if(response.ok){
            const {request}=json
            setRequests(request)
            seterror(null)
            console.log('Requests',json)
        }}
        
        fetchUser()
        

    },[])
    console.log('Requests............',Requests)
  //<AdminRequest key={request._id} request={request}/>
return(
    <div className="reportsList">
        <h3>Refund Requests</h3>
         { Requests && Requests.map((request)=>{
            return(
                    
            <AdminRefundRequest key={request._id} request={request}/>
                
            )
        })


        }
{error && <div className="error"><p>{error}</p></div>}

    </div>

)
}

export default RefundRequests