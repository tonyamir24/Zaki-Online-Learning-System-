import { useParams } from "react-router-dom"



var result = 0

const QuestionDetails = ({ Question }) => {
  const handleChange=(data)=>{
   if(data===Question.TrueAnswer)
   {
    result=result+1

   }else{
    result = result
   }
  }
    return (
        <div className="Question-Details">
        <table >
      
      <tr>
        <td>Question:</td>
        <td>{Question.QuestionHead}</td>
      </tr>
      <pr>
    
      </pr>
      <tr>
        <td>A:</td>
        <input type="checkbox" value ={Question.Answer1} onChange={()=>handleChange(1)} />{Question.Answer1}
      </tr>
      <tr>
        
        </tr>
      <tr>
        <td>B:</td>
        <input type="checkbox" value ={Question.Answer2} onChange={()=>handleChange(2)} />{Question.Answer2}
      </tr>
      <tr>
        
        </tr>
      <tr>
        <td>C:</td>
        <input type="checkbox" value ={Question.Answer3} onChange={()=>handleChange(3)} />{Question.Answer3}
       </tr>
      <tr>
        
        </tr>
      <tr>
        <td>D:</td>
        <input type="checkbox" value ={Question.Answer4} onChange={()=>handleChange(4)} />{Question.Answer4}
      </tr>
      <tr>
        
        </tr>
      
    </table>
    <p></p>
    </div>
    )
    
    }
    export default QuestionDetails
