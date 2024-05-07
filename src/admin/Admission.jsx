import React,{useEffect, useState} from 'react'
import axios from 'axios';
import Anav from './Anav';
import { useNavigate } from 'react-router-dom';
const Admission = () => {
  const adminData = JSON.parse(sessionStorage.getItem('adminData'));
  const navigate=useNavigate();
  const [statee, upstate] = useState();

  useEffect(() => {
   


    async function fetchData() {
      try {
          const response = await axios.get('http://127.0.0.1:8000/api/getadmission');
          upstate(response.data.data);
      } catch (error) {
          console.error('Error fetching data:', error);
      }
  }

  fetchData();
    
  }, []);
  
  console.log(statee);

  const handleDelete=(id)=>{
const resp=axios.delete(`http://127.0.0.1:8000/api/deleteadmission/${id}`);
alert('User Deletd Successfully')
}
  
  const handelUpd=async(id)=>{
  
   const response= await axios.post(`http://127.0.0.1:8000/api/findadmission/${id}`);
   const used=response.data;
   sessionStorage.setItem('getadmission',JSON.stringify(used));
  //  console.log(used)
   navigate('/admissionview')

  
  };

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
      <th scope="col">Course Id</th>
      <th scope="col">User Id</th>
      <th scope="col">User Name</th>
      <th scope="col">Email</th>
      <th>Course name</th>
      <th scope="col">Teacher Name</th>
      <th scope="col">Duration</th>
     
      <th scope="col">Course Fee</th>

      <th scope='col'>Action</th>
     
    </tr>
                </thead>
                <tbody>
                {statee && statee.map((item, index) => (
                        <tr key={index}>
                            <td>{item.cid}</td>
                            <td>{item.uid}</td>
                            <td>{item.uname}</td>
                            <td>{item.uemail}</td>
                            <td>{item.cname}</td>
                            <td>{item.cteach}</td>
                            <td>{item.cleng}</td>
                            <td>{item.camount}</td>
                         
                            <td><button onClick={() => handleDelete(item.id)}  className='btn btn-danger'>Delete</button>
                            <button onClick={()=>handelUpd(item.id)} className='btn btn-success'>View</button></td> 
                           
                      
                        </tr>
                    ))}
                </tbody>
                
            </table>

      </div>


    </div>
  );
};




export default Admission