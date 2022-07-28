import React, { useState } from 'react'

import { AiOutlineTaobao } from "react-icons/ai";

function NavBar() {
  return (
        <>
          <nav className='navbar'>
            <div classname='navbar-container'>
                <Link to='/' className="navbar-logo">
                    ANIMED <AiOutlineTaobao />
                </Link>
                <h1>hello</h1>
            </div>
          </nav>
        </>
  )
}

export default NavBar