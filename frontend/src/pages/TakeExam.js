import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import QuestionDetails from "../components/QuestionDetails"


const TakeExam=()=>{
    const {id}=useParams()
    const [exercises,setQuestions]=useState(null)
    useEffect(() => {
        const fetchQuestions = async ()=> {
            const response= await fetch('/readQuestion/'+id)
            const json= await response.json()
            if(response.ok){
                setQuestions(json)
            }else{
                console.log("AAAAAAAAAAAAAAAAAAAA")
            }
        
        
        }

        fetchQuestions()
    } , [id])


    return (
        <div className="home">
            <div className="Questions" >
                <div className = 'question-card' >
                {exercises &&
                    console.log(exercises)
                }
                
            </div>
            
             </div> 
                  
        </div>
 
    )
}
export default TakeExam