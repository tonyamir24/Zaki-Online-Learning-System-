import { Link } from "react-router-dom"
import SearchResults from "../components/SearchResults"

const TraineeProfile =() =>{
    return (
        <div className="TraineeProfile">
            <h1> Anaaa el Traineeee </h1>
            <SearchResults/>

            <br></br>

            <br></br>
            
        <button style={{ width: "100px", height: "60px", margin:25 }} type="submit">View My Courses</button>
        <Link to ={'/changePass/'+"jyg"}>
            <button style={{ width: "100px", height: "60px", margin:25 }} type="submit">Change Password</button>
            </Link>
        <br></br>
        <br></br>
        
        
      
        </div>
    )

}

export default TraineeProfile