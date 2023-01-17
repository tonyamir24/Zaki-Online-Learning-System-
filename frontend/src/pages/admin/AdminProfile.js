import { Link } from "react-router-dom"
import SearchResults from "../../components/SearchResults"
//import { useState ,useEffect } from "react";
//import { useAuthContex } from '../../hooks/useAuthContex';
const AdminProfile =() =>{
 //   const {user} =useAuthContex()
   

    return (
        <div className="TraineeProfile">
            <h1> Anaaa el Traineeee </h1>
            <SearchResults/>

            <div className="traineeCourses">

            </div>
            
        <Link to ={'/reports'}>
            <button style={{ width: "100px", height: "60px", margin:25 }} type="submit">View Reports</button>
        </Link>
        
        </div>
    )

}

export default AdminProfile