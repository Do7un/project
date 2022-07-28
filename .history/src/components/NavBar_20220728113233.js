import React, { useState } from 'react'
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
     <nav className="navbar">
        <div className="navbar-container">
            <link to="/" className='navbar-logo'>
                ANIMED <i class="fa-solid fa-hurricane"></i>
            </link>
        </div>
     </nav>
    </> 
  )
}

export default NavBar