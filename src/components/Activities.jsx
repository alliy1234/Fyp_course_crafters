import React from 'react'
import Navi from './Nav'
import Footer from './Footer'

const Activities = () => {
  return (
    <>
    <Navi/>
    <div className='fullcontact'>
        <div className="contactimge">
        <img src=" https://images.pexels.com/photos/1369490/pexels-photo-1369490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='img-fluid w-100' alt="" />
    </div>
    <div className="texte">
        <h2>Our Co-Curricular Activities</h2>
        <h4>Get in Touch</h4>
    </div>
    </div>

    <div className="container mt-5">
        <div className="row">
            <div className="col-md-6 pb-5">
                <img src="https://images.pexels.com/photos/2568551/pexels-photo-2568551.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='img-fluid' alt="" />
            </div>
            <div className="col-md-6 d-flex justify-content-center align-items-center flex-column">
                <h2>Atheletics</h2>
                <p>Our Students Are passionate about sports and atheletics and have a freedom to choose the one they like and wish to take up.  We also Participate in inter-school district State and national Level Competitions </p>
            </div>
            
            <div className="col-md-6 pt-5 d-flex justify-content-center align-items-center flex-column">
                <h2>In House publications</h2>
                <p>In-house publications play a pivotal role in showcasing organizational expertise, promoting internal communication, and preserving institutional knowledge. They serve as valuable resources that highlight achievements, share insights, and foster a sense of community among employees </p>
            </div>
            <div className="col-md-6 pb-5 pt-5">
                <img src="https://images.pexels.com/photos/697244/pexels-photo-697244.jpeg?auto=compress&cs=tinysrgb&w=600" className='img-fluid' alt="" />
            </div>

            <div className="col-md-6 pb-5 pt-5">
                <img src="https://images.pexels.com/photos/102127/pexels-photo-102127.jpeg?auto=compress&cs=tinysrgb&w=600" className='img-fluid' alt="" />
            </div>
            <div className="col-md-6 d-flex justify-content-center align-items-center flex-column">
                <h2>Performing Art and Musics</h2>
                <p>Our Students Are passionate about sports and atheletics and have a freedom to choose the one they like and wish to take up.  We also Participate in inter-school district State and national Level Competitions </p>
            </div>
        </div>
    </div>

    <Footer/>
   
    </>
  )
}

export default Activities