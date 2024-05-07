import React from 'react';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const Anav = () => {
const navigate=useNavigate();
  const destroy=()=>{
    sessionStorage.clear();
    navigate('/login');
  }

    return (
        <>
            <aside>
                <nav>
                    <ul>
                        <li><NavLink to='/dashboard' activeClassName="active"><i className="fas fa-tachometer-alt"></i> Dashboard</NavLink></li>
                        <li><NavLink to='/alluser' activeClassName="active"><i className="fas fa-users"></i> Users</NavLink></li>
                        <li><NavLink to='/courses' activeClassName="active"><i className="fas fa-book-open"></i> Courses</NavLink></li>
                        <li><NavLink to='/enrolluser' activeClassName="active"><i className="fas fa-user-plus"></i> Enroll users</NavLink></li>
                        <li><NavLink to='/admissionlist' activeClassName="active"><i className="fas fa-list-alt"></i> Admission</NavLink></li>
                        <li><NavLink to='/teacher' activeClassName="active"><i className="fas fa-chalkboard-teacher"></i> Teachers</NavLink></li>
                        <li><NavLink to='/upprofile' activeClassName="active"><i className="fas fa-user-edit"></i> Profile</NavLink></li>
                        <li><a href="#" onClick={()=>destroy()}><i className="fas fa-sign-out-alt"></i> Logout</a></li>
                    </ul>
                </nav>
            </aside>
        </>
    );
};

export default Anav;
