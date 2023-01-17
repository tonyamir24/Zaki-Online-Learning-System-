import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import SearchResults from './components/SearchResults';
import Course from './pages/Course';
import Instructor from './pages/Instructor';
import UploadVideo from './pages/UploadVideo';
import CourseForm from './components/CourseForm';
import QuestionForm from './pages/QuestionForm';

import TraineeProfile from './pages/trainee/TraineeProfile';
import InstructorViewProfile from './pages/InstructorViewProfile';
import InstViewCourses from './components/InstViewCourses';

import ForgetPassword from './pages/ForgetPassword';

import ChangePass from './pages/ChangePass'
import TakeExam from './pages/TakeExam';
import Contract from './pages/Contract';
import Signup from './pages/Signup';
import Login from './pages/login';

import SubtitleForm from './components/subtitleForm';

import { useAuthContex } from './hooks/useAuthContex';
import Report from './pages/ReportForm';
import IssuedReport from './pages/IssuedReports';
import AllReport from './pages/AllReports';
import AllRequests from './pages/Requests';
import RefundRequests from './pages/RefundRequests';

function App() {
  const {user} =useAuthContex()
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <div className='pages'>
          <Routes>
            <Route
              path="/"
              element={user ?<Home/>:<Navigate to="/login"/>}
            /> 
            <Route
              path="/signup"
              element= {!user ? <Signup />:<Navigate to="/"/> }
            />
            <Route
              path="/login"
              element= {!user ?<Login />:<Navigate to="/"/> }
            />


            <Route
              path="/search"
              element={<SearchResults />}
            /> 
            <Route
              path={"/course/:courseID"}
              element={<Course />}
              
            /> 

            <Route
              path={"/course/:courseID"}
              element={<Course />}
              
            /> 
            <Route
              path={"/instructor/:instructorID"}
              element={<Instructor />}
              
            />
            <Route
              path={"/uploadVideo"}
              element={<UploadVideo />}
              
            />
            <Route
              path={"/createCourse/:InstructorID"}
              element={<CourseForm />}
              
            />
            <Route
              path={"/addExam/:id"}
              element={<QuestionForm />}
              
            />
            <Route
              path={"/TraineeProfile"}
              element={<TraineeProfile />}
            />
              <Route
              path={"/myProfile"}
              element={<InstructorViewProfile />}
              
            />
            <Route
              path={"/myCourses/:InstructorID"}
              element={<InstViewCourses />}
              
            />
            <Route
              path="/ForgetPassword/:id"
              element= {<ForgetPassword /> }
            />

            <Route
              path="/ChangePass/:id"
              element= {<ChangePass /> }
            />
             <Route
              path="/takeExam/:id"
              element= {<TakeExam /> }
            />
                <Route
              path="/contract"
              element= {<Contract /> }
            />
            <Route
              path="/subtitleForm"
              element= {<SubtitleForm /> }
            />
            <Route
              path="/reportForm/:courseID"
              element= {<Report /> }
            />
            <Route
              path="/reportList"
              element= {<IssuedReport /> }
            />
            <Route
              path="/reports"
              element= {<AllReport /> }
            />
            <Route
              path="/requests"
              element= {<AllRequests   /> }
            />
   <Route
              path="/refundRequests"
              element= {<RefundRequests   /> }
            />


          </Routes>
          
        </div>
      </BrowserRouter>
   
    </div>
  );
}

export default App;
