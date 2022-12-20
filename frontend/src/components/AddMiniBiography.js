import { useState } from "react"
const AddMiniBiography=({ Instructor})=>{
    const [MiniBiography,setMiniBiography] =useState(Instructor.MiniBiography)
    const [error,seterror] =useState(null)
    const handleSubmit =async (e)=>{
       //   e.preventDefault()
          const response =await fetch('/addMiniBiography/'+Instructor._id,{
              method:'POST',
              body:JSON.stringify({
                MiniBiography:MiniBiography
              }),
              headers:{
                  'Content-Type':'application/json'
              }
  
  
          })
          const json =await response.json()
  
          if(!response.ok){
              seterror(json.error)
              console.log(json.error)
          }
          if(response.ok){
              setMiniBiography('')
              seterror(null)
              console.log('New MiniBiography Added',json)
          }
  
      }
  
    return(
        <form className="addMiniBiography" onSubmit={handleSubmit}>

        <label>MiniBiography: </label>
        <input
        type="text"
        onChange={(e)=>setMiniBiography(e.target.value)}
        value={MiniBiography}
        />
        <button>ADD MiniBiography</button>
        {error && <div className="error">{error}</div>}
    
    </form>
    )
}


export default AddMiniBiography