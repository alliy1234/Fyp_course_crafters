import React,{useEffect} from 'react'
import {useNavigate} from 'react-router-dom';

const Protected = ({Comp}) => {
  const navigate=useNavigate();
   useEffect(() => {
    let login=localStorage.getItem('login');
    if(!login){
navigate('/login');
    }
   }, [])
   
  return (
    <div>
     
<Comp/>

    </div>
  )
}

export default Protected