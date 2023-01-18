import { Link } from "react-router-dom"
import SearchResults from "../components/SearchResults"
import { useAuthContex } from "../hooks/useAuthContex";
import { useState ,useEffect } from "react";

const InstructorViewProfile =() =>{
    const InstructorID="63666b4cb75a9876b2561ad0"
    const {user} =useAuthContex()


    const [salary,SetSalary]=useState(0)

    useEffect(()=>{
        const fetchUser= async() =>{
           

        const response =await fetch('/moneyOwed',{
            method:'POST',
            body:JSON.stringify({InstructorID:user.token}),
            headers:{
                'Content-Type':'application/json'
            }

        })
        const json =await response.json({})

       
        if(response.ok){
            SetSalary(json)
        }}
        if(user)
        fetchUser()
        

    },[user])



    return (
        <div className="InstrProfile">
            <h1> Anaa Instructor </h1>
            <SearchResults/>
            {
                 <h4>
                    You Get Total of : {salary} per month
                </h4>
            }
            <br></br>
            <Link to ={'/changePass/'+InstructorID}>
            <button style={{ width: "100px", height: "60px", margin:25 }} type="submit">Change Password</button>
            </Link>
            <Link to ={'/ForgetPassword/'+InstructorID}>
            <button style={{ width: "100px", height: "60px", margin:25 }} type="submit">Forget Password</button>
            </Link>
            <Link to ={'/createCourse/'+InstructorID}>
            <button style={{ width: "100px", height: "60px", margin:25}} type="submit">Create Course</button>

            </Link>

            <Link to ={'/instructor/'+InstructorID}>
            <button style={{ width: "100px", height: "60px", margin:25}} type="submit">View And Edit My Profile</button>
            </Link>

            

            <br></br>
            
           

            <Link to = {'/myCourses/'+InstructorID}>
            <button style={{ width: "100px", height: "60px", margin:25}} type="submit">View My Courses</button>

            </Link>



        </div>
    )

}

export default InstructorViewProfile