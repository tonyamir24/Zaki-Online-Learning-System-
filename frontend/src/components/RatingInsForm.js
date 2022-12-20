import { useState } from "react";

const RatingInsForm =({Src,instructorID})=>{
    const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);


  const handleSubmit =async (e)=>{
    //  e.preventDefault()
      const response =await fetch('/addInsRating/'+instructorID,{
          method:'POST',
          body:JSON.stringify({
            Rate:rating,
              Src:Src
          }),
          headers:{
              'Content-Type':'application/json'
          }


      })
      const json =await response.json()
      console.log(json)
      
      

  }
  return (
    
    <div className="star-rating">
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            className={index <= (hover || rating) ? "on" : "off"}
            onClick={() => {setRating(index)
                console.log(rating)
                handleSubmit()}}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}>
            <span className="star">&#9733;</span>
          </button>
        );
      })}
    </div>
  );

}
export default RatingInsForm