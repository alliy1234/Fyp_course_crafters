import React, { useState } from 'react'
import Anav from './Anav';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Upprofile = () => {
    const adminData = JSON.parse(sessionStorage.getItem('adminData'));
    const navigate=useNavigate();
    const [sate,upstate]=useState({
        name:'',
        password:'',
        email:adminData.email
    })
    const handleChange=(e)=>{
        upstate({...sate,[e.target.name]:e.target.value});
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.post('http://127.0.0.1:8000/api/updadmin',sate)
        .then(response=>{
            // console.log(response.data);
            navigate('/dashboard')
              }).catch(err=>{
            console.log(err)
              });
    }
   
  return (
    <>
     <header>
    <h1>Welcome to Your Page {adminData.name} Email: {adminData.email} </h1>
  </header>
  <Anav/>
    <div>
       <div className="col-md-9">
    <main>
    <section>
      <h2>Update Your Profile</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className="form-control" id="email" name="email" value={adminData.email}
           onChange={handleChange} readOnly />
        </div>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" id="name" name="name"
           value={sate.value} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">Password</label>
          <input type="password" className="form-control" id="phone" name="password" value={sate.value}  onChange={handleChange} />
        </div>

        <button type="submit" className="btn btn-primary">Update</button>
        </form>
     
    </section>
  </main>
    </div>
    </div>
    </>
  )
}

export default Upprofile
