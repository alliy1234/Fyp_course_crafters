import React,{useState,useEffect} from 'react'
import Anav from './Anav';
import axios from 'axios';
const Alluser = () => {
    const [jsonData, setJsonData] = useState(null);
    const adminData = JSON.parse(sessionStorage.getItem('adminData'));

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('http://127.0.0.1:8000/api/all');
            const json = await response.json();
            // console.log(json)
            setJsonData(json);
          
        }
        fetchData();
    }, []);
    const handel = async (id)=>{
try{
    await axios.delete(`http://127.0.0.1:8000/api/deleteuser/${id}`);
    alert('User Deleted');
    window.location.reload();
}catch(err){
console.log(err)
}
    }
  return (
  
    <>
      <header>
    <h1>Welcome to Your Page {adminData.name} Email: {adminData.email} </h1>
  </header>
     <Anav/>
     <div className='container mt-5 text-center'>
        <h1>All Users Data</h1>
        <table className="table container">
                <thead>
                <tr>
      <th scope="col">Id</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope='col'>Action</th>
     
    </tr>
                </thead>
                <tbody>
                {jsonData && jsonData.map((item, index) => (
                        <tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td><button onClick={()=>handel(item.id)} className='btn btn-danger' >Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>

    </div>
    </>
    
  )
}

export default Alluser