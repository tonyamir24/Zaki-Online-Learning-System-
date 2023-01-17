import { Link } from "react-router-dom"
import SearchResults from "../../components/SearchResults"
import { useState ,useEffect } from "react";
import { useAuthContex } from '../../hooks/useAuthContex';
const TraineeProfile =() =>{
    const {user} =useAuthContex()
    const [Courses,setCourses]=useState(null)
    
    //const id=user.token
     useEffect(()=>{
        
         const fetchUser= async() =>{
             const response =await fetch('/registeredCourses',{
            method:'POST',
            headers: {'Content-Type':'application/json'},
            body : JSON.stringify({traineeID:user.token})
        })
            const json = await response.json()
             if(response.ok){
               const {Courses}=json
               setCourses(Courses)
               console.log(Courses)
                //console.log(Courses)
                 }
             }
            if(user)
         fetchUser()
     },[user])

    return (
        <div className="TraineeProfile">
            <h1> Anaaa el Traineeee </h1>
            <SearchResults/>

            <div className="traineeCourses">

            </div>
            {user && user.Wallet &&
            <h4>Wallet: {user.Wallet}</h4>

            }
        <Link to ={'/changePass/jyg'}>
            <button style={{ width: "100px", height: "60px", margin:25 }} type="submit">Change Password</button>
        </Link>
        <p></p>
        {Courses && Courses.map((course)=>{
            return(
                <a href={"/course/"+course.courseID}>{course.courseTitle}</a>

            )
        })}
        <p></p>
      <Link to ={'/reportList'}>
            <button style={{ width: "100px", height: "60px", margin:25 }} type="submit">Reports</button>
        </Link>
        </div>
    )

}

export default TraineeProfile