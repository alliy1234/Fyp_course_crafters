import React, { useState } from 'react'
import axios from 'axios';
import Unav from './Unav';

const Enroll = () => {
    const userData = JSON.parse(sessionStorage.getItem('userData'));
    const cdata=JSON.parse(sessionStorage.getItem('getit'));
console.log(cdata.data.cname)
    const[courseData,setcourse]=useState({
        uid:userData.id,
        uname:userData.name,
        uemail:userData.email,
      cname:cdata.data.cname,
      cid:cdata.data.id,
      cteach:cdata.data.cteach,
      cleng:cdata.data.cleng,
      camount:cdata.data.camount,

});

    const handleChange=(e)=>{
        setcourse({...courseData,[e.target.name]:e.target.value})
    }
   
const handelsubmit=(e)=>{
    e.preventDefault();
    axios.post('http://127.0.0.1:8000/api/enrolluser',courseData)
  
    .then((res)=>{
        console.log(res);
        if(res.data.status==='ok'){
            alert('user Enrolled Successfully');
            
        }
        else{
            alert('You Already enrolled')
        }
    }).catch((err)=>{
        console.log(err)
        alert('You Already enrolled')
    })
}

console.log(courseData);


  return (
    <>
     <header>
    <h1>Welcome to Your Page {userData.name} Email: {userData.email} </h1>
  </header>

    <div className="row container-fluid">
      <div className="col-md-3">
        <Unav/>
      </div>


      <div className="col-md-9">
      <h1>Enroll Course</h1>
        <form action="" onSubmit={handelsubmit}>
        <div className="form-group">
            <label>Course id</label>
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
              readOnly
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
              readOnly
            />
          </div>

          
          <button type="submit" className="btn btn-primary">Enroll</button>
        </form>
    </div>
      </div>
        
    </>
    
  )
}

export default Enroll