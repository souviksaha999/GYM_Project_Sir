import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from '../../Common/Navbar'
import Footer from '../../Common/Footer'
import Home from '../../Pages/Home'
import About from '../../Pages/About'
import GymFeature from '../../Pages/GymFeature'
import Services from '../../Pages/Services'
import TrainingDetails from '../OurService/TrainingDetails'
import Login from '../../Pages/Authentication/Login'
// import Register from '../../Pages/Authentication/Register'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Register2 from '../../Pages/Authentication/Register2'
import JoiningForm from '../../Pages/JoiningForm'
import Register from '../../Pages/Authentication/Register'


const GymRouting = () => {
  return (
    <>
<Router>
<ToastContainer />
      <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/feature' element={<GymFeature/>}/>
            <Route path='/service' element={<Services/>}/>
            <Route path='/joining' element={<JoiningForm/>}/>
            <Route path='/serviceDetails/:id' element={<TrainingDetails/>}/>
            <Route path='/login' element={<Login/>}/>
            {/* <Route path='/register' element={<Register/>}/> */}
            <Route path='/register2' element={<Register2/>}/>
        </Routes>
        <Footer/>
    </Router>
    </>
  )
}

export default GymRouting