import React, { useState } from 'react'
import { link } from 'react-router-dom';
import { AiOutlineTaobao } from "react-icons/ai";

function NavBar() {
  return (
        <>
          <nav className='navbar'>
            <div classname='navbar-container'>
                < link to='/' className="navbar-logo">
                    ANIMED <AiOutlineTaobao />
                </link>
                <h1>hw
            </div>
          </nav>
        </>
  )
}

export default NavBar