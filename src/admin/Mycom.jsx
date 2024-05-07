// import React, { useState, useEffect } from 'react';
// import { NavLink } from 'react-router-dom';
// import { Pie } from 'react-chartjs-2';

// const MyComponent = () => {
//     const [enroll, setEnroll] = useState(0);
//     const [user, setUser] = useState(0);
//     const [adm, setAdm] = useState(0);

//     useEffect(() => {
//         fetchData();
//         getEnrollCount();
//         getUserCount();
//         getAdmCount();
//     }, []);

//     const fetchData = async () => {
//         const response = await fetch('http://127.0.0.1:8000/api/all');
//         const jsonData = await response.json();
//         console.log(jsonData);
//         // Process jsonData if needed
//     };

//     const getEnrollCount = async () => {
//         const response = await fetch('http://127.0.0.1:8000/api/getallenroll');
//         const enrollCount = await response.json();
//         console.log(enrollCount);
//         setEnroll(enrollCount);
//     };

//     const getUserCount = async () => {
//         const response = await fetch('http://127.0.0.1:8000/api/getalluser');
//         const userCount = await response.json();
//         console.log(userCount);
//         setUser(userCount);
//     };

//     const getAdmCount = async () => {
//         const response = await fetch('http://127.0.0.1:8000/api/getalladmission');
//         const admCount = await response.json();
//         console.log(admCount);
//         setAdm(admCount);
//     };

//     const enrollData = {
//         labels: ['Enrolled Users', 'Remaining Users'],
//         datasets: [
//             {
//                 label: 'Number of Users',
//                 backgroundColor: ['blue', 'gray'],
//                 borderColor: 'rgba(0,0,0,1)',
//                 borderWidth: 2,
//                 data: [enroll, user - enroll]
//             }
//         ]
//     };

//     const userData = {
//         labels: ['Enrolled Users', 'Unenrolled Users'],
//         datasets: [
//             {
//                 label: 'Number of Users',
//                 backgroundColor: ['green', 'gray'],
//                 borderColor: 'rgba(0,0,0,1)',
//                 borderWidth: 2,
//                 data: [enroll, user - enroll]
//             }
//         ]
//     };

//     const admData = {
//         labels: ['Admission Users', 'Non-Admission Users'],
//         datasets: [
//             {
//                 label: 'Number of Users',
//                 backgroundColor: ['orange', 'gray'],
//                 borderColor: 'rgba(0,0,0,1)',
//                 borderWidth: 2,
//                 data: [adm, user - adm]
//             }
//         ]
//     };

//     return (
//         <div className="row mt-5 g-5 p-5">
//             <div className="col-md-4">
//                 <div className="card">
//                     <div className="card-body">
//                         <h5 className="card-title">Enrolled Users</h5>
//                         <Pie
//                             data={enrollData}
//                             options={{
//                                 maintainAspectRatio: false
//                             }}
//                         />
//                         <NavLink to='/enrolluser' className='btn btn-primary text-white'>View</NavLink>
//                     </div>
//                 </div>
//             </div>
//             <div className="col-md-4">
//                 <div className="card">
//                     <div className="card-body">
//                         <h5 className="card-title">All Users</h5>
//                         <Pie
//                             data={userData}
//                             options={{
//                                 maintainAspectRatio: false
//                             }}
//                         />
//                         <NavLink to='/alluser' className='btn btn-primary text-white'>View</NavLink>
//                     </div>
//                 </div>
//             </div>
//             <div className="col-md-4">
//                 <div className="card">
//                     <div className="card-body">
//                         <h5 className="card-title">Admission Users</h5>
//                         <Pie
//                             data={admData}
//                             options={{
//                                 maintainAspectRatio: false
//                             }}
//                         />
//                         <NavLink to='/alladmission' className='btn btn-primary text-white'>View</NavLink>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default MyComponent;
