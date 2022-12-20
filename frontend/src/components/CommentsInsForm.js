import { useState } from "react"

const CommentsForm=({Src, instructorID})=>{
    const [Comment,setComment] =useState('')
    const [error,seterror] =useState(null)

    const handleSubmit =async (e)=>{
      //  e.preventDefault()
        const response =await fetch('/addInsComment/'+instructorID,{
            method:'POST',
            body:JSON.stringify({
                Comment:Comment,
                Src:Src
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
            setComment('')
            seterror(null)
            console.log('New Comment',json)
        }

    }
    return(
        <form className="addComment" onSubmit={handleSubmit}>
            <h3>Add a new user</h3>

            <label>Comment: </label>
            <input
            type="text"
            onChange={(e)=>setComment(e.target.value)}
            value={Comment}
            />
            <button>ADD Comment</button>
            {error && <div className="error">{error}</div>}
        
        </form>
    )

}
export default CommentsForm