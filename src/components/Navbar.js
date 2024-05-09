import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="flex justify-center bg-[#000000] h-[7vh] text-[#d6cedd] text-xl font-bold items-center">
        <Link to="/">
        SGPA Calculator
        </Link>
    </div>
  )
}

export default Navbar;