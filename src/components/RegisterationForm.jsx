
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import '../register.css'; // Import your CSS file for styling
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function RegistrationForm() {
  const navigate=useNavigate();
  const inita = {
    name: '',
    email: '',
    password: '',
    message: ''
  };

  const [formData, setFormData] = useState(inita);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    setShowForm(true);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://127.0.0.1:8000/api/register', formData)
      .then(response => {
        console.log(response.data);
        toast.success("User Registered successfully")
        setTimeout(()=>{
          navigate('/login')
        },4000)
        setFormData(inita);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <>
      <div className={`container mt-5 ${showForm ? 'slide-from-top' : ''}`}>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header  p-3 text-white">
                <h2 className="mb-0 text-center">Registration Form</h2>
              </div>
              <div className="card-body registration-form">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" name="password" value={formData.password} onChange={handleChange} required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea className="form-control" id="message" name="message" rows="3" value={formData.message} onChange={handleChange}></textarea>
                  </div>
                  <div className="d-grid">
                    <button type="submit" className="">Submit</button>
                  </div>
                </form>
              </div>
              <div className="card-footer bg-light text-center">
                <p className="mb-0">Already have an account? <NavLink to="/login">Login</NavLink></p>
              </div>
              <ToastContainer
      position="top-center"
      autoClose={3000}
      hideProgressBar={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
    />
            </div>
          </div>
        </div>
      </div>
     
    </>
  );
}

export default RegistrationForm;