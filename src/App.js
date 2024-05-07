
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'

import Login from './components/Login';
import Home from './Home';
import UsHome from './user/UsHome';
import Dashboard from './admin/Dashboard';
import Protected from './components/Protected';
import Courses from './admin/Courses';
import AddCourse from './admin/AddCourse';
import Update from './admin/Update';
import Alluser from './admin/Alluser';
import Teacher from './admin/Teacher';
import Addteacher from './admin/Addteacher';
import Updteacher from './admin/Updteacher';
import Uscourses from './user/Uscourses';
import Enroll from './user/Enroll';
import Enrollement from './user/Enrollement';
import EnrollList from './admin/EnrollList';
import Usprotected from './user/Usprotected';
import About2 from './components/About2';
import ContactUs from './components/ContactUs';
import Activities from './components/Activities';
import Academic from './components/Academic';
import ViewEnroll from './admin/ViewEnroll';
import Admission from './admin/Admission';
import ViewAdmission from './admin/ViewAdmission';
import Status from './user/Status';
import RegistrationForm from './components/RegisterationForm';
import Upprofile from './admin/Upprofile';

function App() {
  return (
    <BrowserRouter>
   
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About2/>} />
      <Route path='/contact' element={<ContactUs/>} /> 
      <Route path='/activities' element={<Activities/>} /> 
      <Route path='/academic' element={<Academic/>} /> 
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<RegistrationForm/>} />
      <Route path='/home' element={<Usprotected Comp={UsHome}/>}></Route>
      <Route path='/uscourses' element={<Usprotected Comp={Uscourses}/>} ></Route>
      <Route path='/enrollement' element={<Usprotected Comp={Enrollement}/>} ></Route>
      <Route path='/enroll' element={<Usprotected Comp={Enroll}/>} ></Route>
      <Route path='/dashboard' element={<Dashboard/>}></Route>
      <Route path='/courses' element={<Courses/>} ></Route>
      <Route path='/addcourse' element={<AddCourse/>} ></Route>
      <Route path='/updcourse' element={<Update/>} ></Route>
      <Route path='/alluser' element={<Alluser/>} ></Route>
      <Route path='/teacher' element={<Teacher/>} ></Route>
      <Route path='/addteacher' element={<Addteacher/>} ></Route>
      <Route path='/updteacher' element={<Updteacher/>} ></Route>
    
      <Route path='/enrolluser' element={<EnrollList/>}></Route>
      <Route path='/status' element={<Status/>}></Route>
      <Route path='/viewenroll' element={<ViewEnroll/>}></Route>
      <Route path='/admissionlist' element={<Admission/>}></Route>
      <Route path='/admissionview' element={<ViewAdmission/>}></Route>
      <Route path='/upprofile' element={<Upprofile/>}></Route>
   
    </Routes>
    

    </BrowserRouter>
  );
}

export default App;
