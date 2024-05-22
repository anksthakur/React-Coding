import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const ContactUs = () => {
  return (
    <div>
      <h1>Contact Us Page</h1>
      <Link to="channel" >Channel</Link>
      <Link to="company" >Company</Link>
      <Link to="other" >Other</Link>
      <Outlet/>
    </div>
  )
}

export default ContactUs
