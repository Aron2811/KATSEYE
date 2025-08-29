import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom'


const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className='fixed m-4 top-0 right-0 left-0  z-50 bg-transparent'>
      <div className='container px-4 flex justify-between items-center h-16'>
        <h3 className='text-2xl font-bold text-white'>KATSEYE</h3>
        <div className='hidden md:flex absolute left-1/2 transform -translate-x-1/2 flex space-x-9 text-white text-sm font-bold'>
            <Link to="/" className='px-6 py-2 hover:bg-gray-600 hover:text-white rounded-sm'>Home</Link>
            <Link to="/members" className='px-6 py-2 hover:bg-gray-600 hover:text-white rounded-sm'>Members</Link>
            <Link to="/latest" className='px-6 py-2 hover:bg-gray-600 hover:text-white rounded-sm'>Latest</Link>
            
        </div>
        <div className='md:hidden'>
            <button onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <FaTimes /> : <FaBars/>}
            </button>
        </div>
      </div>
      {isOpen && (
         <div className='md:hidden flex space-y-6 py-4 flex-col bg-transparent items-center text-white'>
            <Link to="/" className='px-6 py-2 hover:bg-gray-600 hover:text-white rounded-sm'>Home</Link>
            <Link to="/members" className='px-6 py-2 hover:bg-gray-600 hover:text-white rounded-sm'>Members</Link>
            <Link to="/latest" className='px-6 py-2 hover:bg-gray-600 hover:text-white rounded-sm'>Latest</Link>
            
        </div>
      )}
    </nav>
  )
}

export default NavBar
