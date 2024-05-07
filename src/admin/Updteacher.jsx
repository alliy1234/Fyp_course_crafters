import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


const Updteacher = () => {
    const navigate=useNavigate();
    const teach=JSON.parse(sessionStorage.getItem('getit'));
    // console.log(teach.data.id);
    const id=teach.data.id;

    const [teacher,updteacher]=useState({
        name:teach.data.name,
        email:teach.data.email,
        contact:teach.data.contact,
        address:teach.data.address
    })

    const handelchange=(e)=>{
        updteacher({...teacher,[e.target.name]:e.target.value})
    }
    const handelsubmit=(e)=>{
        e.preventDefault();
        axios.post(`http://127.0.0.1:8000/api/editteach/${id}`,teacher)
        .then((res)=>{
// console.log(res)
alert('Teacher Record Updated Successfully');
navigate('/teacher')

        }).catch((err)=>{
            console.log(err)
        })
    }

  return (
    <div>
         <div className='container'>

<h2>Contact Form</h2>

<form  onSubmit={handelsubmit}>

<div className="form-group">
    <label for="name">Name:</label>
    <input type="text" className="form-control" onChange={handelchange}  id="name" name="name"
    value={teacher.name} required />
</div>

<div className="form-group">
    <label for="email">Email:</label>
    <input type="email" className="form-control" id="email"  onChange={handelchange}
     value={teacher.email} name="email" required />
</div>

<div className="form-group">
    <label for="contact">Contact:</label>
    <input type="tel" className="form-control" id="contact" onChange={handelchange}
    value={teacher.contact} name="contact" required />
</div>

<div className="form-group">
    <label for="address">Address:</label>
    <textarea className="form-control" id="address"onChange={handelchange} value={teacher.address} name="address" rows="4" required></textarea>
</div>

<button type="submit" className="btn btn-primary">Submit</button>
</form>
</div>

    </div>
  )
}

export default Updteacher