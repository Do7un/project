import React, {useState} from 'react'

function NavBar() {
  return (
    <>
     <nav className="navbar">
        <div className="navbar-container">
            <link to="/" className='navbar-logo'>
                ANIMED <FontAwesomeIcon icon="fa-solid fa-hurricane" />
            </link>
        </div>
     </nav>
    </>
  )
}

export default NavBar