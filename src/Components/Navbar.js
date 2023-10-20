import React from 'react'
import "../Styles/Navbar.css"
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='navbar-main'>
      <div>
        <h1>Parkmate</h1>
      </div>
      <div className='links'>
        <Link to={"/"}>Home</Link>
        <Link to={"/parking-form"}>Book your slot !</Link>
        <Link to={"/parking-lots"}>Parking lots</Link>
        <Link to={"/bookings"}>Bookings</Link>
      </div>
    </div>
  )
}

export default Navbar