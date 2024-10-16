import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className=' bg-slate-800 text-white  w-full '>
    <div className=' grid gap-6 grid-cols-1 md:grid-cols-3  text-center cursor-pointer '>
      <div>
        <h2 className='text-xl font-bold p-2'>Travel Agency</h2>
        <p>Your trusted partner for unfogettable travel experience.Explore the world with us.</p>
      </div>
      <div className='flex flex-col md:items-center'>
        <h1 className='text-lg font-bold p-2'>Quick Links</h1>
        <div className='grid grid-cols-1 mt-4 space-y-2'>
       <Link to="/">Home</Link>
       <Link to="/gallery">Gallery</Link>
       <Link to="/contact">Contact</Link>
       <Link to="/about">About</Link>
     </div>
      </div>
      <div className=''>
        <h1 className='text-xl font-bold p-2'>Follow Us</h1>
        <div className='flex justify-center space-x-2  px-2'>
         <FaFacebookF size={24} className='text-blue-500 hover:text-blue-600'/>
         <FaInstagram size={24} className='text-pink-500 hover:text-pink-600'/>
         <FaTwitter size={24} className='text-blue-500 hover:text-blue-600'/>
         <FaYoutube size={24} className='text-red-500 hover:text-red-600'/>
        </div>
       <form className='flex items-center justify-center mt-8 mb-3'>
       <input type='email' placeholder='Your Email'
       className='border p-2  rounded-lg bg-gray-800 '/>
       <button className='text-white rounded-lg border bg-blue-500 text-xl p-1'>Subscribe</button>
       </form>
       </div>
      </div>
      
      <div className=' flex justify-between px-12 text-white pb-4 border-t'>
        <p>	&copy; 2024 Travel Agency.All rights reserved.</p>
        <div className='mt-2'>
          <Link to="/" className='mr-4'>Privacy Policy</Link>
          <Link to="/">Terms of services</Link>
        </div>
       </div>
      </div>
    
  )
}

export default Footer