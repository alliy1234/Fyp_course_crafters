import React, { useEffect, useState } from 'react'
import Anav from './Anav'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const EnrollList = () => {
  const adminData = JSON.parse(sessionStorage.getItem('adminData'));
  const navigate =useNavigate();
    const[uenroll,updenroll]=useState();
    useEffect(() => {
      const fetchit=async()=>{
const res=await fetch('http://127.0.0.1:8000/api/getallenrolldata');
const out=await res.json();
updenroll(out)
      }
      fetchit();
    }, [])


    const getenrolldata=async(id)=>{
     
      
      try {
        const response = await axios.post(`http://127.0.0.1:8000/api/specificenrolldata/${id}`);
    
        if (response.data.data) {
          // Store data in session storage
          sessionStorage.setItem('enrollData', JSON.stringify(response.data.data));
          console.log('Data stored in session storage:', response.data.data);
              navigate('/viewenroll');
        } else {
          console.log('Data not found');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    
      
    }

    const delenrolldata=async(id)=>{
 axios.delete(`http://127.0.0.1:8000/api/delenroll/${id}`)
.then((res)=>{
  if(res.data.status=='ok'){
    alert('deleted Successfully')
  }
}).catch((err)=>{
  console.log(err)
})
    }
    
  return (
    <>
         <header>
    <h1>Welcome to Your Page {adminData.name} Email: {adminData.email} </h1>
  </header>
    <Anav/>
    <div className='container'>
        <h1 className='text-center m-5'> Enroll Users List</h1>
        <div className="row">
        
{uenroll && uenroll.map((item,ind)=>{
    return(
        <>
        <div className="col-md-4">
         <div className="card" style={{width: '18rem'}} key={ind}>
  
  <div className="card-body" >
    <h5 className="card-title"> Course ID: {item.cid}</h5>
    <h5 className="card-title"> User ID: {item.uid}</h5>
    <h5 className="card-title">{item.uname}</h5>
    <h5 className="card-title">{item.cname}</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary me-4" onClick={()=>{getenrolldata(item.uid)}}>View</a>
    <a href="#" className="btn btn-danger" onClick={()=>{delenrolldata(item.uid)}}>Delete</a>
  </div>
</div>
</div>
        </>
    )
   
})}

</div>
        </div>
    </>
  )
}

export default EnrollList