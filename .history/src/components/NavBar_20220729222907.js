import React, { useState} from 'react'
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo'>
            ANIMED <i class='fab fa-typo3' />
          </Link>
        </div>
        <div className='menu-icon' onClick={handleClick}>
          <i className='fas fa-times'
        </div>
      </nav>
    </>
  );
}

export default NavBar