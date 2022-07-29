import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineTaobao } from "react-icons/ai";

function NavBar() {
  return (
        <>
          <nav className='navbar'>
            <div classname='navbar-container'>
                < Link to='/' className="navbar-logo">
                    ANIMED <AiOutlineTaobao /> 
                </Link>
                
            </div>
          </nav>
        </>
  )
}

export default NavBar