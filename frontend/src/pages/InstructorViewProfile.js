import { Link } from "react-router-dom"
import SearchResults from "../components/SearchResults"

const InstructorViewProfile =() =>{
    const InstructorID="63666b4cb75a9876b2561ad0"




    return (
        <div className="InstrProfile">
            <h1> Anaa Instructor </h1>
            <SearchResults/>

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