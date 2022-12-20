import { useState } from "react"
const AddEmail=({ Instructor})=>{
    const [Email,setEmail] =useState(Instructor.Email)
    const [error,seterror] =useState(null)
    
    const handleSubmit =async (e)=>{
        //  e.preventDefault()
          const response =await fetch('/addEmail/'+Instructor._id,{
              method:'POST',
              body:JSON.stringify({
                Email:Email
              }),
              headers:{
                  'Content-Type':'application/json'
              }
  
  
          })
          const json =await response.json()
  
          if(!response.ok){
              seterror(json.error)
          }
          if(response.ok){
              setEmail('')
              seterror(null)
              console.log('New Email Added',json)
          }
  
      }
  
    return(
        <form className="addEmail" onSubmit={handleSubmit}>

        <label>New Email: </label>
        <input
        type="email"
        onChange={(e)=>setEmail(e.target.value)}
        value={Email}
        
        />
        <button>ADD Email</button>
        {error && <div className="error">{error}</div>}
    
    </form>
    )
}


export default AddEmail