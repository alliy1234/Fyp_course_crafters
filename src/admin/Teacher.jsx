import React,{useEffect, useState} from 'react'
import Anav from './Anav'
import { NavLink } from 'react-router-dom'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Teacher = () => {
  const adminData = JSON.parse(sessionStorage.getItem('adminData'));
  const navigate=useNavigate();
const [teach,upteach]=useState(null);
useEffect(() => {
 const fetchall=async()=>{
const res=await fetch('http://127.0.0.1:8000/api/getallteacher');
const result= await res.json();
// console.log(result)
upteach(result);
 }
 fetchall();
}, [])

const handleDelete=(id)=>{
  axios.delete(`http://127.0.0.1:8000/api/deleteteach/${id}`)
  .then((res)=>{
    if(res.data.status='ok'){
      alert('Teacher Record Deleted')
    }
  }).catch((err)=>{
    console.log(err)
  })
  
}


const handelUpd=async (id)=> {
  try{
    const response= await axios.post(`http://127.0.0.1:8000/api/updateteach/${id}`);
    const teach=response.data;
    sessionStorage.setItem('getit',JSON.stringify(teach));
    console.log(teach)
navigate('/updteacher')

}
catch (error) {
  console.error('Error deleting course:', error);
}
}
  return (
    <>
         <header>
    <h1>Welcome to Your Page {adminData.name} Email: {adminData.email} </h1>
  </header>
    <Anav/>
    <div className='container'>
    <table className="table  mt-5">
                <thead>
                <tr>
      <th scope="col">Id</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Contact</th>
      <th scope="col">Address</th>
      <th scope='col'>Specialist</th>
      <th scope="col">Action</th>
      </tr>
      </thead>

      <tbody>
                {teach && teach.map((item, index) => (
                        <tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.contact}</td>
                            <td>{item.address}</td>
                            <td>{item.specialist}</td>
                            
                            <td><button onClick={() => handleDelete(item.id)}  className='btn btn-danger'>Delete</button>
                            <button onClick={()=>handelUpd(item.id)} className='btn btn-success'>Update</button></td>
                           
                      
                        </tr>
                    ))}
                </tbody>
      </table>

    <NavLink to='/addteacher' className='btn btn-info text-center  mt-4' >Add Teacher</NavLink>
    </div>
    </>
  )
}

export default Teacher