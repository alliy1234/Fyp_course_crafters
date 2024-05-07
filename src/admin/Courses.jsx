import React, { useState,useEffect } from 'react'
import Anav from './Anav'
import { NavLink } from 'react-router-dom'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Courses = () => {
  const navigate=useNavigate();
  const adminData = JSON.parse(sessionStorage.getItem('adminData'));

const [courses, setCourses] = useState([]);





useEffect(() => {
  async function fetchData() {
      try {
          const response = await axios.get('http://127.0.0.1:8000/api/allcourse');
          setCourses(response.data.data);
      } catch (error) {
          console.error('Error fetching data:', error);
      }
  }

  fetchData();
}, []);




const handleDelete = async (id) => {
  try {
      await axios.delete(`http://127.0.0.1:8000/api/coursedel/${id}`);
      window.location.reload();
  } catch (error) {
      console.error('Error deleting course:', error);
  }
};


const handelUpd=async (id)=> {
  try{
    const response= await axios.post(`http://127.0.0.1:8000/api/courseup/${id}`);
    const used=response.data;
    sessionStorage.setItem('getit',JSON.stringify(used));
    console.log(used)
navigate('/updcourse')

}
catch (error) {
  console.error('Error deleting course:', error);
}
}


// console.log(stated)
  return (
    <div>
        <header>
    <h1>Welcome to Your Page {adminData.name} Email: {adminData.email} </h1>
  </header>
      <Anav/>
      <div className="container">
      <table className="table  mt-5">
                <thead>
                <tr>
      <th scope="col">Id</th>
      <th scope="col">Name</th>
      <th scope="col">Description</th>
      <th scope="col">Duration</th>
      <th scope="col">Teacher Name</th>
      <th scope="col">Timing</th>
      <th scope="col">Course Fee</th>
      <th scope="col">Starting Date</th>
      <th scope="col">Ending Date</th>
      <th scope='col'>Total Seats</th>

      <th scope='col'>Action</th>
     
    </tr>
                </thead>
                <tbody>
                {courses && courses.map((item, index) => (
                        <tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.cname}</td>
                            <td>{item.cdesc}</td>
                            <td>{item.cleng}</td>
                            <td>{item.cteach}</td>
                            <td>{item.ctime}</td>
                            <td>{item.camount}</td>
                            <td>{item.cstart}</td>
                            <td>{item.cend}</td>
                            <td>{item.cseat}</td>
                            <td><button onClick={() => handleDelete(item.id)}  className='btn btn-danger'>Delete</button>
                            <button onClick={()=>handelUpd(item.id)} className='btn btn-success'>Update</button></td>
                            {/* <td>{item.i}</td> */}
                      
                        </tr>
                    ))}
                </tbody>
                
            </table>

        <NavLink to='/addcourse' className='btn btn-info text-center  mt-4' >Add Courses</NavLink>
      </div>


    </div>
  )
}

export default Courses