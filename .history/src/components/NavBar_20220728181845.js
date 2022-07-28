import React, {useState} from 'react'
import img1 from './'

function NavBar() {
  return (
        <>
          <nav className='navbar'>
            <div classname='navbar-container'>
                <link to='/' className="navbar-logo">
                    ANIMED <img1 src={img1} alt='logo' />
                </link>
            </div>
          </nav>
        </>
  )
}

export default NavBar