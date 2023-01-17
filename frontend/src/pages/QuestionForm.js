import { useState } from "react"
import { useParams } from "react-router-dom"
var Exercises =[]
 const QuestionForm = () => {
    const {id}=useParams()
    const[QuestionHead,setQuestionHead]=useState('')
    const[Answer1,setAnswer1]=useState('')
    const[Answer2,setAnswer2]=useState('')
    const[Answer3,setAnswer3]=useState('')
    const[Answer4,setAnswer4]=useState('')
    const[TrueAnswer,setTrueAnswer]=useState('')
    const[error,setError]=useState(null)


    const handleSubmit=async(e) => {
        e.preventDefault()
        const Question ={QuestionHead, Answer1 , Answer2 , Answer3 , Answer4 , TrueAnswer}
        Exercises.push({Question}) 



        console.log(Exercises)
        /* response= await fetch('/createQuestion',{
            method:'POST',
            body:JSON.stringify(Question),
            headers: {
                'Content-Type' : 'application/json'}
            })
            
            const json= await response.json()
            if(!response.ok){
                setError(json.error)
            }if (response.ok){
                setQuestionHead('')
                setAnswer1('')
                setAnswer2('')
                setAnswer3('')
                setAnswer4('')
                setTrueAnswer('')
                setError(null)
                console.log("new Question is added" , json)
            }*/
    
        }
    
        const handleS=async(e) => {

            console.log('saba7 el fol')
      const response =await fetch('/createQuestion/'+id,{
        method:'POST',
        body:JSON.stringify(Exercises),
        headers:{
            'Content-Type':'application/json'
        }

    })
    const json =await response.json()

    if(!response.ok){
        setError(json.error)
        console.log(json.error)
        //setmssg(error)

    //    return(<Link to={'/course/'+json._id}></Link>)
    }
    if(response.ok){
        
      //  setmssg('Password Changed')
        setError(null)
        console.log(json)
    } }
    return(
        <dev>      <form className = "create" onSubmit = {handleSubmit}> 
        <h3> Add a new Question </h3>
        
    <label> Question Head </label>
        <input
        type="text"
        onChange={(e)=> setQuestionHead(e.target.value)}
        value={QuestionHead}
        />
         <pr>
          <br></br>
          <br></br>

</pr>
    
    <label> First Answer </label>
        <input
        type="text"
        onChange={(e)=> setAnswer1(e.target.value)}
        value={Answer1}
        />
         <pr>
         

</pr>
<br></br>
         <br></br>
    <label> Second Answer </label>
        <input
        type="text"
        onChange={(e)=> setAnswer2(e.target.value)}
        value={Answer2}
        />
     <pr>

</pr>
<br></br>
         <br></br>
    <label> Third Answer </label>
        <input
        type="text"
        onChange={(e)=> setAnswer3(e.target.value)}
        value={Answer3}
        />
          <pr>
          <br></br>
          <br></br>

</pr>
     <label> Fourth Answer </label>
        <input
        type="text"
        onChange={(e)=> setAnswer4(e.target.value)}
        value={Answer4}
        />
         <pr>
          <br></br>
          <br></br>

</pr>
        <label> True Answer </label>
        <input
        type="text"
        onChange={(e)=> setTrueAnswer(e.target.value)}
        value={TrueAnswer}
        />
         <pr>
          <br></br>
          <br></br>

</pr>
        <button> Add Question </button>
        </form> 
        <input type="submit" value="Add Exam" onClick={handleS}/>
        {error && <div className="error"><p>{error}</p></div>}

</dev>

)


}
export default QuestionForm