import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import QuestionForm from "./QuestionForm"
//import QuestionDetails from "../components/QuestionDetails"


const TakeExam=()=>{
    const {id}=useParams()
    const [Exercises,setQuestions]=useState(null)
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
                
                {Exercises &&  Exercises.map(({Question})=>{
                return(
                   
                    <QuestionForm key={Question._id} course={Question}/>
                    
        
                )
                 
            }
                
                )
                    
                }
                
            
            
             </div> 
                  
        </div>
 
    )
}
export default TakeExam