
import { useState,useEffect } from "react"
import AdminRequest from "../components/AdminRequest"
//import AdminReport from "../components/AdminReport"


const AllRequests=()=>{
    const [error,seterror] =useState(null)
    const [Requests,setRequests] =useState(null)
    useEffect(()=>{
        const fetchUser= async() =>{
           

        const response =await fetch('/allRequests')
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
                <h3>Access Requests</h3>

         { Requests && Requests.map((request)=>{
            return(
                    
            <AdminRequest key={request._id} request={request}/>
                
            )
        })


        }
{error && <div className="error"><p>{error}</p></div>}

    </div>

)
}

export default AllRequests