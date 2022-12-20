import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import SearchResults from './components/SearchResults';
import Course from './pages/Course';
import Instructor from './pages/Instructor';
import UploadVideo from './pages/UploadVideo';
import CourseForm from './components/CourseForm';
import QuestionForm from './components/QuestionForm';

import TraineeProfile from './pages/TraineeProfile';
import InstructorViewProfile from './pages/InstructorViewProfile';
import InstViewCourses from './components/InstViewCourses';

import ForgetPassword from './pages/ForgetPassword';

import ChangePass from './pages/ChangePass'
import TakeExam from './pages/TakeExam';
import Contract from './pages/Contract';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <div className='pages'>
          <Routes>
            <Route
              path="/"
              element={<Home/>}
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

          </Routes>
        </div>
      </BrowserRouter>
   
    </div>
  );
}

export default App;
