import React from 'react'
import Navi from './Nav'
import Footer from './Footer'

const ContactUs = () => {
  return (
    <>
    <Navi/>
    <div className='fullcontact'>
        <div className="contactimge">
        <img src="https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='img-fluid w-100' alt="" />
    </div>
    <div className="texte">
        <h2>Contact us</h2>
        <h4>Get in Touch</h4>
    </div>
    </div>

    <div className="container-fluid bg-dark text-white p-5">
        <div className="row contactdata">
            <div className="col-md-4 pb-5 ">
            <i class="fas fa-phone-square"></i>
              <h4>Phone</h4>
              <p>A wonderful serenity has taken possession of my entire soul, like these.</p>
              <span className='text-success'>+1-2345-2345</span>
            </div>
            <div className="col-md-4 pb-5">
            <i class="fas fa-envelope-square"></i>
                <h4>Email</h4>
                <p>A wonderful serenity has taken possession of my entire soul, like these.</p>
              <span className='text-success'>Contact@abc.com</span>
            </div>
            <div className="col-md-4 pb-5">
            <i class="fas fa-location-arrow"></i>
                <h4>Location</h4>
                <p>4 apt. Flawing Street. The Grand Avenue.
Liverpool, UK 33342</p>
   <span> <a href="" className='text-success'>View On Google Map</a></span>
            </div>
        </div>
    </div>

    <div className="container contactforme mt-5">
        <h2 className='text-capitalize text-center'>Leave us Your info </h2>
        <p className='text-center'>And we Will get back To You</p>
    <form>
        <div className="mb-3">
          <label htmlFor="fullName" className="form-label">Full Name</label>
          <input type="text" className="form-control" id="fullName" placeholder="Enter your full name" required />
        </div>
        
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email Address</label>
          <input type="email" className="form-control" id="email" placeholder="Enter your email address" required />
        </div>
        
        <div className="mb-3">
          <label htmlFor="subject" className="form-label">Subject</label>
          <input type="text" className="form-control" id="subject" placeholder="Enter the subject" required />
        </div>
        
        <div className="mb-3">
          <label htmlFor="message" className="form-label">Message</label>
          <textarea className="form-control" id="message" rows="5" placeholder="Enter your message" required></textarea>
        </div>
        
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>

    <div className="container-fluid mape m-0 p-0 mt-5">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27223.85259700871!2d74.27284605756701!3d31.46969302099043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919015f82b0b86f%3A0x2fcaf9fdeb3d02e6!2sJohar%20Town%2C%20Lahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1713406311140!5m2!1sen!2s" width="100%" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>

    <Footer/>
    </>
    
  )
}

export default ContactUs