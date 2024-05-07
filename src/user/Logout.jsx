import React from 'react'
import { useNavigate } from 'react-router-dom';
const Logout = () => {
    const navigate=useNavigate();

     JSON.parse(sessionStorage.getItem('userData'));
    const res=sessionStorage.clear();
    if(res){
        navigate('/login')
    }

  return (
    <div>Logout</div>
  )
}

export default Logout