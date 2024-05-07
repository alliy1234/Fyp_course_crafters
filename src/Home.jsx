import React from 'react'
import Navi from './components/Nav';
import Header from './components/Header';
import About from './components/About';
import Teacher from './components/Teacher';
import Courses from './components/Courses';
import RegistrationForm from './components/RegisterationForm';
import Footer from './components/Footer';
import Data from './components/Data';
import Curriculum from './components/Curriculum';
import Cocuricular from './components/Cocuricular';
import Testimonials from './components/Testimonials';
const Home = () => {
  return (
    <div>
        <Navi/>
    <Header/>
    <About/>
    <Data/>
    <Curriculum/>
    <Cocuricular/>
    <Teacher/>
    <Courses/>
    <Testimonials/>
    {/* <RegistrationForm/> */}
    <Footer/>
    </div>
  )
}

export default Home