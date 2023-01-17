
import { useState,useEffect } from "react"
import Report from "../components/Report";
import { useAuthContex } from '../hooks/useAuthContex';



const IssuedReport=()=>{
    const {user} =useAuthContex()
    const [error,seterror] =useState(null)
    const [Reports,setReports] =useState(null)
   // const [message,setMessage] =useState('')

    useEffect(()=>{
        const fetchUser= async() =>{
           

        const response =await fetch('/issuedReport',{
            method:'POST',
            body:JSON.stringify({reporteeID:user.token}),
            headers:{
                'Content-Type':'application/json'
            }

        })
        const json =await response.json({})

        if(!response.ok){
            seterror(json.error)

        }
        if(response.ok){
            const {report}=json
            setReports(report)
            seterror(null)
            console.log('Reports',json)
        }}
        if(user)
        fetchUser()
        

    },[user])
    console.log('Reportsssss',Reports)










return(
    <div className="reportsList">
        { Reports && Reports.map((report)=>{
            return(
                <Report key={report._id}  report={report}/>

            )
        })


        }
{error && <div className="error"><p>{error}</p></div>}

    </div>

)
}

export default IssuedReport