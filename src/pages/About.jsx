import React from 'react'

const About = () => {
  return (
    <div>

<div className='relative h-96  bg-cover bg-center' style={{backgroundImage:"url('https://png.pngtree.com/thumb_back/fh260/back_our/20190619/ourmid/pngtree-travel-around-the-world-travel-poster-template-image_140335.jpg')"}}>
         <div className='absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center'>
          <h1 className='text-4xl md:text-6xl font-bold text-white mb-4'>About Us</h1>
         </div>
    </div>
      <div className=' grid gap-6 sm:grid-cols-1 md:grid-cols-2 container mx-auto m-12'>
        <div className='overflow-hidden flex items-center mr-2 rounded-lg shadow-md cursor-pointer transform transition duration-300 hover:scale-110'>
          <img className='w-full object-cover' src='https://png.pngtree.com/thumb_back/fh260/back_our/20190619/ourmid/pngtree-travel-around-the-world-travel-poster-template-image_140335.jpg'/>
        </div>
        <div>
          <div className=' m-4'>
            <h4 className='text-2xl font-bold m-2'>Who We Are</h4>
            <p className='text-gray-600'>WE are passionate travel agency committed to providing the best travel experiences for our clients.Our team of dedicated professionals works tirelessly to ensure your trips are seamless and unforgettable.</p>
          </div>
          <div className='m-4'>
            <h4 className='text-2xl font-bold m-2'> Our Mission</h4>
            <p className='text-gray-600'>Our mission is to create amazing travel experiences that inspire and enrich the lives of our clients.We believe in personalized service,attention to detail,and providing exceptional value.</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default About