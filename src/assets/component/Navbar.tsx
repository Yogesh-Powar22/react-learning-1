import React from 'react';
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='nav-head container'>
      <Link className='nav-item' to="/">Home</Link>
      <Link className='nav-item' to="/about">About</Link>
      <Link className='nav-item' to="/contact">Contact</Link>
      
    </div>
  )
}

export default Navbar
