import React,{useState,useEffect} from 'react'
import axios from 'axios';
import UsHome from './UsHome';
import { useNavigate } from 'react-router-dom';
import Unav from './Unav';
const Uscourses = () => {
  
  const navigate=useNavigate();
const [courses, setCourses] = useState([]);
const userData = JSON.parse(sessionStorage.getItem('userData'));




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


const handelEnr=async(id)=>{
  const response= await axios.post(`http://127.0.0.1:8000/api/courseup/${id}`);
    const used=response.data;
    sessionStorage.setItem('getit',JSON.stringify(used));
    // console.log(used)
navigate('/enroll')
}

  return (
    <>
   <header>
    <h1>Welcome to Your Page {userData.name} Email: {userData.email} </h1>
  </header>
<div className="row container">
  <div className="col-md-3">
    <Unav/>
  </div>
  <div className="col-md-9">
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
                            <td>
                            <button onClick={()=>handelEnr(item.id)} className='btn btn-success'>Enroll</button></td>
                            {/* <td>{item.i}</td> */}
                      
                        </tr>
                    ))}
                </tbody>
                
            </table>
  </div>
      
</div>
    </>
   
  )
}

export default Uscourses