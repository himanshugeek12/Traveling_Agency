import React from 'react'
import { FaPhone } from 'react-icons/fa'
import { IoLocationOutline } from 'react-icons/io5'
import { MdEmail } from 'react-icons/md'

const Contact = () => {
  return (
    <div className='bg-gray-100'>

<div className='relative h-96  bg-cover bg-center' style={{backgroundImage:"url('https://png.pngtree.com/thumb_back/fh260/back_our/20190619/ourmid/pngtree-travel-around-the-world-travel-poster-template-image_140335.jpg')"}}>
         <div className='absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center'>
          <h1 className='text-4xl md:text-6xl font-bold text-white mb-4'>Contact Us</h1>
         
         </div>
    </div>
      <div className='grid gap-8 sm:grid-cols-1 md:grid-cols-2  container mx-auto m-16 h-full '>
        <div className=' container p-6 shadow-md rounded-lg bg-white'>
          <h1 className='text-3xl'>Contact Details</h1>
          <div className='flex items-center mt-4'>
          <MdEmail  className='text-blue-400 mr-2'/>
          <p className=''>info@travelagency.com</p>
          </div>
         <div className='flex mt-4'>
         <FaPhone className='text-blue-400 mr-2'/>
         <p className=' '>+123 456 7890</p>
         </div>
          <div className='flex mt-4'>
          <IoLocationOutline className='text-blue-400 mr-2'/>
          <p className=' '>123 Travel Varansi City,India</p>
          </div>
         
        </div>
        <div className='shadow-md rounded-lg bg-white'>
          <h3 className='text-3xl m-4'>Get in Touch</h3>
          <form className='m-4'>
           <div className='mb-4'>
            <label className='block text-gray-700  m-2'>Name</label>
            <input type='text' className='border w-full p-2 rounded-lg'  placeholder='Enter your Name' />
           </div>
           <div className='mb-4'>
            <label  className='block text-gray-700 m-2'>Email</label>
            <input type='email'className='border w-full p-2 rounded-lg' placeholder='Enter your email' />
           </div>
           <div className='mb-4'>
            <label className='block m-2 text-gray-700 w-full p-2 rounded-lg'>Message</label>
            <textarea  name=''className='border w-full p-4 rounded-lg' placeholder='Write your Message' id=''></textarea>
           </div>
           <button className='p-2 border bg-blue-400 text-white rounded-lg hover:bg-blue-200 text-xl'>Send Message</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact