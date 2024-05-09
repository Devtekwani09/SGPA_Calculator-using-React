import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    // <div className="flex justify-center bg-[#000000] h-[7vh] text-[#d6cedd] text-xl font-bold items-center">
    //     <Link to="/">
    //     SGPA Calculator
    //     </Link>
    // </div>
    <div>
        <nav class="navbar navbar-light bg-[#050a44] text-white">
            
            <div class="container-fluid text-center text-2xl">
                <Link to="/">
                <span class="navbar-brand mb-0 h1">SGPA Calculator</span>
                </Link>
            </div>
        </nav>
    </div>
  )
}

export default Navbar;