import SearchResults from "../components/SearchResults"
import { Link } from 'react-router-dom'
const Home =()=>{

    return(
        <div className="Home">
            <h2>Home</h2>
            <Link to={'/TraineeProfile'}>
              <button style={{ width: "100px", height: "60px", margin:5 , "background-color":"blue"}} type="submit">Traineeee</button>
            </Link>

            

            <Link to={'/myProfile'}>
            <button style={{ width: "100px", height: "60px", "background-color":"red"}} type="submit">Instructor</button>
            </Link>       
            
             </div>
    

    )
}
export default Home