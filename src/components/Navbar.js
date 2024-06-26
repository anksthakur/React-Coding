import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <ul className='navbar'>
      <li><NavLink className="nav-bar-link"  to="/">Home</NavLink></li>
      <li><NavLink className="nav-bar-link" to="/about">About</NavLink></li>
      <li><NavLink className="nav-bar-link" to="/contactus">Contact Us</NavLink></li>
      <li><NavLink className="nav-bar-link" to="/student/thakur">Thakur</NavLink></li>
      <li><NavLink className="nav-bar-link" to="/student/anup">Anup</NavLink></li>
      <li><NavLink className="nav-bar-link" to="/student/kanu">Kanu</NavLink></li>
      <li><NavLink className="nav-bar-link" to="/login">Login</NavLink></li>
      </ul>
    </div>
  )
}

export default Navbar
