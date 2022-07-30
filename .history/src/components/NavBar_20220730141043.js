import React, { useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';
import { GiBoomerangSun } from "react-icons/gi";

function NavBar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
 

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            ANIMED <GiBoomerangSun/>
          </Link>
        </div>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ?'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
             <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
             </Link>
          </li>
          <li className='nav-item'>
             <Link to='/Images' className='nav-links' onClick={closeMobileMenu}>
              Images
             </Link>
          </li>
          <li className='nav-item'>
             <Link to='/Videos' className='nav-links' onClick={closeMobileMenu}>
              Videos
             </Link>
          </li>
          <li className='nav-item'>
             <Link to='/' className='nav-links-mobile' onClick={closeMobileMenu}>
              Sign IN
             </Link>
          </li>
        </ul>
        {Button && <Button  buttonStyle='btn--outline'>SIGN UP</Button>}
      </nav>
    </>
  );
}

export default NavBar