import React from 'react';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Unav = () => {
    const navigate = useNavigate();

    const destroy = () => {
        sessionStorage.clear();
        navigate('/login');
    };

    return (
        <>
            <aside>
                <nav>
                    <ul>
                        <li><NavLink to="/home"><i className="fas fa-user-circle"></i> Profile</NavLink></li>
                        <li><NavLink to='/uscourses'><i className="fas fa-book"></i> Courses</NavLink></li>
                        <li><NavLink to='/enrollement'><i className="fas fa-user-plus"></i> Enrollment</NavLink></li>
                        <li><NavLink to='/status'><i className="fas fa-info-circle"></i> View Status</NavLink></li>
                        <li><a href="#" onClick={() => destroy()}><i className="fas fa-sign-out-alt"></i> Logout</a></li>
                    </ul>
                </nav>
            </aside>
        </>
    );
};

export default Unav;
