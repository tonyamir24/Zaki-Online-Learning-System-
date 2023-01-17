
import { useState,useEffect } from "react"
import AdminReport from "../components/AdminReport"


const AllReport=()=>{
    const [error,seterror] =useState(null)
    const [Reports,setReports] =useState(null)
    useEffect(()=>{
        const fetchUser= async() =>{
           

        const response =await fetch('/allReports')
        const json =await response.json()

        if(!response.ok){
            seterror(json.error)

        //    return(<Link to={'/course/'+json._id}></Link>)
        }
        if(response.ok){
            const {reports}=json
            setReports(reports)
            seterror(null)
            console.log('Reports',json)
        }}
        
        fetchUser()
        

    },[])
   console.log("..........",Reports)
return(
    <div className="reportsList">
         { Reports && Reports.map((report)=>{
            return(
                    <AdminReport key={report._id} report={report}/>


                
            )
        })


        }
{error && <div className="error"><p>{error}</p></div>}

    </div>

)
}

export default AllReport