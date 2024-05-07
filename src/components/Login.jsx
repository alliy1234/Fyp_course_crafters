import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Login.css';
import { NavLink } from 'react-router-dom';
function Login() {
  
  useEffect(() => {
   let ulogin=sessionStorage.getItem('ulogin');
   if(ulogin){
navigate('/home')
   }
  }, [])
  

  const inita = {
    email: '',
    password: ''
  }
  const [formData, setFormData] = useState(inita);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://127.0.0.1:8000/api/login', formData)
      .then(response => {
        console.log(response.data);
        if (response.data.status === 0) {
      
          toast.success("User login successfully")
          
          const userdata = response.data.user_data;
          sessionStorage.setItem('userData', JSON.stringify(userdata));
          sessionStorage.setItem('ulogin',true);
        setTimeout(() => {
          navigate('/home');
          
        },4000);

        } else if (response.data.status === 1) {
          
          toast.success("Admin login successfully")
          const userdata = response.data.user_data;
          sessionStorage.setItem('adminData', JSON.stringify(userdata));
        setTimeout(() => {
          navigate('/dashboard');
          
        },2000);
        }
        else {
          alert('log in Failed.')
        }
        setFormData(inita);
      })
      .catch(error => {
        console.error(error);

      });

  };
  // if (isLoggedIn) {
  //     return <Redirect to="/home" />;
  //   }

  return (

    <div className="login-container">
    <form className="login-form" onSubmit={handleSubmit}>
      <h2>Login</h2>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name='email' placeholder="Enter your email"
          value={formData.email} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name='password' placeholder="Enter your password"
          value={formData.password} onChange={handleChange} required />
      </div>
      <button type="submit" className='login'>Login</button>
      <div className="card-footer bg-light text-center">
              <p className="mb-0">Dont have an account? <NavLink to="/register">Sign Up</NavLink></p>
            </div>
    </form>
   
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
  );
}

export default Login;