import React, {useState} from 'react'
import { link } from 'react-router-dom'

function NavBar() {
  return (
        <>
          <nav className='navbar'>
            <div classname='navbar-container'>
                <link to='/' className="navbar-logo">
                    ANIMED <i className='fab fa-typo3' />
                </link>
            </div>
          </nav>
        </>
  )
}

export default NavBar