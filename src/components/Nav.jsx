import React from 'react';
import { NavLink } from 'react-router-dom';

const Navi = () => {
  return (
    <div className='navi'>
      <nav className="navbar navbar-expand-lg bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand mybrand" href="#">W-School</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link text-white" activeClassName="active" aria-current="page" to='/'>Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-white" activeClassName="active" to='/about'>About US</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-white" activeClassName='active' to='/contact'>Contact</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-white" activeClassName='active' to='/activities'>Activities</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-white" activeClassName='active' to='/academic'>Academic</NavLink>
              </li>
              <li className='nav-item'>
                <NavLink to='/register' className='nav-link text-white'>Register</NavLink>
              </li>
              <li className='nav-item'>
                <NavLink to='/login' className='btn btn-white bg-danger text-white'>Login</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navi;
