import React,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
const Usprotected = (props) => {
    const {Comp}=props;
    const navigate=useNavigate();

    useEffect(() => {
      let ulogin=sessionStorage.getItem('ulogin');
      if(!ulogin){
navigate('/login');
      }else{
        navigate('/home');
      }
    }, [])
    
  return (
    <div>
        <Comp/>
        </div>
  )
}

export default Usprotected