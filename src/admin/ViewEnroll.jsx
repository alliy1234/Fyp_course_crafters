import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


const ViewEnroll = () => {
    const naviagte=useNavigate();
    const storedData = JSON.parse(sessionStorage.getItem('enrollData'));
    // console.log('Stored data:', storedData);

    const ide=storedData[0].uid;
    const [courseData,setcourse]=useState({
        cid:storedData[0].cid,
        uid:storedData[0].uid,
        uname:storedData[0].uname,
        uemail:storedData[0].uemail,
        cname:storedData[0].cname,
        cteach:storedData[0].cteach,
        cleng:storedData[0].cleng,
        camount:storedData[0].camount,
    })
    const handleChange=(e)=>{
  setcourse({...courseData,[e.target.name]:e.target.value});
    }
    const handelsubmit=(e)=>{
e.preventDefault();
axios.post('http://127.0.0.1:8000/api/admissionstudent',courseData)
.then((res)=>{
    if(res.data.status=='ok'){
        alert('User admitied to your course Successfull');
        naviagte('/admissionlist');
        
    }
}).catch((err)=>{
    console.log(err)
})

    }

  return (
   <>
   
   <div className="container">
        <h1>Enroll Course</h1>
        <form action="" onSubmit={handelsubmit}>
        <div className="form-group">
            <label>Course Id</label>
            <input
              type="text"
              className="form-control"
              name="cid"
              value={courseData.cid}
              onChange={handleChange}
              placeholder="Enter course name"
              readOnly
            />
          </div>
        <div className="form-group">
            <label>User id</label>
            <input
              type="text"
              className="form-control"
              name="uid"
              value={courseData.uid}
              onChange={handleChange}
              placeholder="Enter course name"
              readOnly
            />
          </div>
          <div className="form-group">
            <label>User Name</label>
            <input
              type="text"
              className="form-control"
              name="uname"
              value={courseData.uname}
              onChange={handleChange}
              placeholder="Enter course name"
              readOnly
            />
            </div>
             <div className="form-group">
            <label>User Email</label>
            <input
              type="email"
              className="form-control"
              name="uemail"
              value={courseData.uemail}
              onChange={handleChange}
              placeholder="Enter course name"
              readOnly
            />
          </div>
          <div className="form-group">
            <label>Course Name</label>
            <input
              type="text"
              className="form-control"
              name="cname"
              value={courseData.cname}
              onChange={handleChange}
              placeholder="Enter course name"
              readOnly
            />
          </div>

          <div className="form-group">
            <label>Teacher Name</label>
            <input
              type="text"
              className="form-control"
              name="cteach"
              value={courseData.cteach}
              onChange={handleChange}
              placeholder="Enter Teacher name"
           
            />
          </div>
          <div className="form-group">
            <label>Course Duration</label>
            <input
              type="text"
              className="form-control"
              name="cleng"
              value={courseData.cleng}
              onChange={handleChange}
              placeholder="Enter course length"
              readOnly
            />
          </div>
          <div className="form-group">
            <label>Course Fee</label>
            <input
              type="text"
              className="form-control"
              name="camount"
              value={courseData.camount}
              onChange={handleChange}
              placeholder="Enter course amount"
              
            />
          </div>

          <div className="row">
            <div className="col-md-6">
            <button type="submit" className="btn btn-primary" >Admission</button>
            </div>
           
          </div>
 
          
        </form>
    </div>
   
   
   
   
   </>
  )
}

export default ViewEnroll