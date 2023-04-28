import React from 'react'
import './Nav.css'
// import Container from 'react-bootstrap/Container';
// import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'
import { Navbar } from 'react-bootstrap'

function Nav() {
    return (
       <Navbar  bg="primary" variant="dark">
            <div className="navbar">
                <div className='links'>
                    <Link to="/"  >Shop</Link>
                    <Link to="/cart"><i class="fa-solid fa-cart-shopping"></i></Link>
    
    
    
                </div>
            </div>
       </Navbar >
    )
}

export default Nav