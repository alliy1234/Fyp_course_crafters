import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Unav from './Unav';

const Enrollement = () => {
  const userData = JSON.parse(sessionStorage.getItem('userData'));
  const ide = userData.id;

  const [inenro, updenroll] = useState(null);

  useEffect(() => {
    axios.post(`http://127.0.0.1:8000/api/getenrolluser/${ide}`)
      .then((res) => {
        if (res.data.data.length > 0) { // Ensure there's data to prevent accessing undefined properties
          updenroll(res.data.data[0]); // Assuming you only fetch one record
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [ide]);

  const handelDel = (id) => {
    axios.delete(`http://127.0.0.1:8000/api/delenrolluser/${id}`)
      .then((res) => {
        if (res.data.status === 'ok') {
          alert('User Deleted Enrolled Course');
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
     <header>
    <h1>Welcome to Your Page {userData.name} Email: {userData.email} </h1>
  </header>
    
  <div className='row container'>
      <div className="col-md-3">
        <Unav/>
      </div>
      <div className="col-md-9">
      <h1 className='text-center m-5 text-danger'>Enrolled Courses List</h1>

<table className="table">
  <thead>
    <tr>
      <th scope="col">UName</th>
      <th scope="col">UEmail</th>
      <th scope="col">CName</th>
      <th scope="col">Teacher Name</th>
      <th scope="col">Course Duration</th>
      <th scope="col">Course Fee</th>
      <th scope='col'> Action </th>
    </tr>
  </thead>
  <tbody>
    {inenro && (
      <tr>
        <td>{inenro.uname}</td>
        <td>{inenro.uemail}</td>
        <td>{inenro.cname}</td>
        <td>{inenro.cteach}</td>
        <td>{inenro.cleng}</td>
        <td>{inenro.camount}</td>
        <td><button onClick={() => handelDel(inenro.uid)} className='btn btn-danger'>Delete</button></td>
      </tr>
    )}
  </tbody>
</table>
      </div>
      
    </div>
    </>
   
  );
};

export default Enrollement;
