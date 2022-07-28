import React, {useState} from 'react'
import img1 from './images/1.png';

function NavBar() {
  return (
        <>
          <nav className='navbar'>
            <div classname='navbar-container'>
                <link to='/' className="navbar-logo">
                    ANIMED <img1 src=''./images/1.png alt='logo' />
                </link>
            </div>
          </nav>
        </>
  )
}

export default NavBar