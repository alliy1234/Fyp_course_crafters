import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Chart from 'chart.js/auto';
import Anav from './Anav';
function Dashboard() {
    const adminData = JSON.parse(sessionStorage.getItem('adminData'));
    // console.log(adminData.token);
    const [jsonData, setJsonData] = useState(null);
    const [enroll,allenroll]=useState(0);
    const [user,alluser]=useState(0);
    const [adm,alladmuser]=useState(0);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('http://127.0.0.1:8000/api/all');
            const json = await response.json();
            // console.log(json)
            setJsonData(json);
          
        }
        fetchData();
    }, []);


    useEffect(()=>{
      const getenroll=async()=>{
        const list=await fetch('http://127.0.0.1:8000/api/getallenroll');
        const resp=await list.json();
        // console.log(resp)
        allenroll(resp);
      }
      getenroll();
    },[]);

    useEffect(()=>{
      const getuser=async()=>{
        const list=await fetch('http://127.0.0.1:8000/api/getalluser');
        const resp=await list.json();
        // console.log(resp)
        alluser(resp);
      }
      getuser();
    },[]);

    useEffect(()=>{
      const getuser=async()=>{
        const list=await fetch('http://127.0.0.1:8000/api/getalladmission');
        const resp=await list.json();
        // console.log(resp)
        alladmuser(resp);
      }
      getuser();
    },[]);
    

    return (
       <>
         <header>
    <h1>Welcome to Your Page {adminData.name} Email: {adminData.email} </h1>
  </header>
  <Anav/>
  <div className=' container'>

    <div className="row mt-5 g-5 p-5">
      <div className="col-md-4 ">
      <div class="card" >

  <div class="card-body">
    <h5 class="card-title">Number Of Enroll users</h5>
    <p class="card-text">{enroll}</p>
    <NavLink to='/'  className='btn btn-primary text-white'>View</NavLink>
  </div>
</div>
      </div>
      <div className="col-md-4 ">
      <div class="card" >

  <div class="card-body">
    <h5 class="card-title">Number Of  users</h5>
    <p class="card-text">{user}</p>
    <NavLink to='/'  className='btn btn-primary text-white'>View</NavLink>
  </div>
</div>
      </div>

      <div className="col-md-3 ">
      <div class="card" >

  <div class="card-body">
    <h5 class="card-title">Number Of Admission</h5>
    <p class="card-text">{adm}</p>
    <NavLink to='/'  className='btn btn-primary text-white'>View</NavLink>
   
  </div>
</div>
      </div>
     
     
    </div>
    
    <h1 className='text-center m-5'>Welcome {adminData.name} </h1>
            <h4 className='bg-danger text-white text-center p-2 container'> Number Of Registerd Users</h4>
            <table className="table container">
                <thead>
                <tr>
      <th scope="col">Id</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
     
    </tr>
                </thead>
                <tbody>
                {jsonData && jsonData.map((item, index) => (
                        <tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* <h2>Data Length Chart</h2>
      <canvas id="myChart" width="400" height="200"></canvas> */}
        
       
    </div>
  
       
      
       
       </>


    );
}

export default Dashboard;
