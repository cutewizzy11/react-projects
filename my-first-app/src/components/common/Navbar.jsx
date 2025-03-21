import React from 'react'
import './Navbar.css';
const Navbar = (props) => {
  return (
    <div className='navbar'>
        <h1>My First App</h1>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <ul>
            <li>{props.isLoggedIn ? `Welcome, ${props.username}` : 'Login'}</li>
            <li>{props.isLoggedIn ? "" : "Register"}</li>
        </ul>
    </div>
  )
}

export default Navbar