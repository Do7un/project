import React, { useState } from 'react'
import { link } from "react-router-dom";

function NavBar() {
  return (
    <>
     <nav className="navbar">
        <div className="navbar-container">
            <link to="/" className='navbar-logo'>
                ANIMED
            </link>
        </div>
     </nav>
    </> 
  )
}

export default NavBar