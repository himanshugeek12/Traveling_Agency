import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [isOpen,setIsOpen]=useState(false);
  return (
    <nav className='fixed right-0 left-0 shadow-lg m-4 z-50 bg-white'>
      <div className='container px-4 flex justify-between items-center h-16'>
        <h2 className='text-2xl font-bold'>Travel</h2>
        <div className='hidden md:flex space-x-4 items-center font-bold text-sm'>
          <Link to="/" className='px-6 py-2 hover:bg-gray-600 hover:text-white'>Home</Link>
          <Link to="/gallery" className='px-6 py-2 hover:bg-gray-600 hover:text-white'>Gallery</Link>
          <Link to="/contact" className='px-6 py-2 hover:bg-gray-600 hover:text-white'>Contact</Link>
          <Link to="/about" className='px-6 py-2 hover:bg-gray-600 hover:text-white'>About</Link>
          <button className='border px-6 py-2 bg-gray-300 hover:bg-blue-300'>Login</button>
        </div>
        <div className='md:hidden'>
         <button onClick={()=>setIsOpen(!isOpen)}>
         {isOpen ? <FaTimes />:<FaBars />}
         </button>
        </div>
      </div>
      {isOpen && (
  
  <div className=' md:hidden flex space-y-6 py-4 flex-col bg-white items-center'>
    <Link to="/" className='px-6 py-2 hover:bg-gray-600 hover:text-white'>Home</Link>
    <Link to="/gallery" className='px-6 py-2 hover:bg-gray-600 hover:text-white'>Gallery</Link>
    <Link to="/contact" className='px-6 py-2 hover:bg-gray-600 hover:text-white'>Contact</Link>
    <Link to="/about" className='px-6 py-2 hover:bg-gray-600 hover:text-white'>About</Link>
    <button className='border px-6 py-2 bg-gray-300 hover:bg-blue-300'>Login</button>
  </div>
)}
    </nav>
  )
}

export default Navbar