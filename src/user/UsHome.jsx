import axios from 'axios';
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Unav from './Unav';

const UsHome = () => {
  const navigate=useNavigate();

 
  const userData = JSON.parse(sessionStorage.getItem('userData'));
  console.log(userData.token);
  const inita={
name:"",
password:"",
email:userData.email
  };

  const [sate,upsate]=useState(inita)
  const handleChange=(e)=>{
    upsate({...sate,[e.target.name]:e.target.value});
  }
  const handleSubmit=(e)=>{
  e.preventDefault();
  axios.post('http://127.0.0.1:8000/api/update',sate)
  .then(response=>{
// console.log(response.data)
  }).catch(err=>{
console.log(err)
  })
  }
  
  return (
    <div> 
      <header>
    <h1>Welcome to Your Page {userData.name} Email: {userData.email} </h1>
  </header>
  
  <div className="row container">
    <div className="col-md-3">
      <Unav/>
    </div>
    <div className="col-md-9">
    <main>
    <section>
      <h2>Update Your Profile</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className="form-control" id="email" name="email" value={userData.email}
           onChange={handleChange} readOnly />
        </div>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" id="name" name="name"
           value={sate.value} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">Password</label>
          <input type="text" className="form-control" id="phone" name="password" value={sate.value}  onChange={handleChange} />
        </div>

        <button type="submit" className="btn btn-primary">Update</button>
        </form>
     
    </section>
  </main>
    </div>


  </div>
  
  
  






  
    </div>
  )
}

export default UsHome