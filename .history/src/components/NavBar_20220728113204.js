import React, { useState } from 'react'
import { link }

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