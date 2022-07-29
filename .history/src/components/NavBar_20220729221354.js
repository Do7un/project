import React, { useState} from 'react'
import { link } from 'react-router-dom';

function NavBar() {
  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo'>
            ANIMED <i class='fab fa-typo3' />
          </Link>
        </div>
      </nav>
    </>
  );
}

export default NavBar