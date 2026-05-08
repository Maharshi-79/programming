import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useEffect } from 'react';

export const Header = ({title}) => {
   const redirect = useNavigate();
    useEffect(()=>{
        if(localStorage.getItem('s_id'))
        {
        }
        else
        {
            redirect('/');
        }
    })
    
    const logout=()=>{
        localStorage.removeItem('s_id');
        localStorage.removeItem('s_name');
        redirect('/');
        alert('Logout Success');
        return false;
    }
  return (
   <div><div className="p-5 bg-primary text-white text-center">
    <h1>{title}</h1>
  </div>
  <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
    <div className="container-fluid">
      <ul className="navbar-nav">
        <li className="nav-item">
            <NavLink to="/dashboard" className="nav-link">
                Home
          </NavLink>
        </li>
          <li className="nav-item">
                            <NavLink className="nav-link" to="/add_user">Add User</NavLink>
                        </li>
        <li className="nav-item">
          <NavLink to="/manage_user" className="nav-link">
                Manage User
          </NavLink>
        </li>
        <li className="nav-item">
                            <a className="nav-link" href="#" onClick={logout}>Logout</a>
                        </li>
       
      </ul>
    </div>
  </nav></div>

  )
}
export default Header;