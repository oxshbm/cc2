import React from 'react'
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import Login from './components/Login'
import Signup from './components/Signup';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import Dashbord from './pages/Dashbord';
import StudyGroups from './pages/StudyGroups';


const App = () => {
  return (
    <div>
      <BrowserRouter>
     <Routes>
      <Route path='/' element={<LoginPage/>} />
      <Route path='/signupPage' element={<SignupPage/>}/>
      <Route path='/dashbord' element={<Dashbord/>} />
      <Route path='/StudyGroups' element={<StudyGroups/>}/>
      
     </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App