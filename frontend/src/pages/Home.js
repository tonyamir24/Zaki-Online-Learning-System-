//import SearchResults from "../components/SearchResults"
//import { Link } from 'react-router-dom'
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContex } from '../hooks/useAuthContex';
const Home =()=>{
  const navigate=useNavigate()
  const {user} =useAuthContex()

  useEffect(() => {
    if (user.type==='individualTrainee' ||user.type==='corporateTrainee') {
      
      navigate("/TraineeProfile");
    }
    if (user.type==='instructor' ) {
      
      navigate("/myProfile");
    }
  }, [navigate,user.type]);
//     return(
//         <div className="Home">
//             <h2>Home</h2>

//           {if(){

//           }

//           }


//             <Link to={'/TraineeProfile'}>
//               <button style={{ width: "100px", height: "60px", margin:5 , "background-color":"blue"}} type="submit">Traineeee</button>
//             </Link>

            

//             <Link to={'/myProfile'}>
//             <button style={{ width: "100px", height: "60px", "background-color":"red"}} type="submit">Instructor</button>
//             </Link>       
            
//              </div>
    

//     )
 }
export default Home