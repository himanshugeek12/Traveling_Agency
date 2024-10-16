import React from 'react'

const services=[
{
  image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVO58pvlhdcZPf0F26Auz6xh2k43hrVh0DvQ&s',
  title:'Flight Booking',
  description:'We provide easy and quick flight booking services to make your travel hassle-free.'
},
{
  image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmukGUa1mOHqzcsY-0WEEQDcPweuDf-QovdA&s',
  title:'Hotel Booking',
  description:'Book hotels at the best prices with our exclusive deals and discounts.'
},
{
  image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5B0YzEW83FJ-5RxKbrPE1jDH3R0_fiXqJew&s',
  title:'Beach Tours',
  description:'Enjoy relaxing beach tours with all-inclusive packages and guided tours.'
},
{
  image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFPXUCfGgaGwLjbZlQu4sdsA7hctwqYeX76w&s',
  title:'Concierge Services',
  description:'Get personalized concierge services for a seamless travel experience.'
}
]

const Service = () => {
  return (
   <div className='py-10 bg-gray-100'>
    <div className='container mx-auto px-4'>
      <h3 className='text-3xl font-bold text-center mb-10'>Our Services</h3>
      <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {services.map((service,index)=>(
          <div key={index} className='rounded-lg shadow-md overflow-hidden bg-white cursor-pointer items-center transform transition duration-300 hover:scale-110'>
            <img src={service.image} className='w-full h-48 object-cover  p-4'/>
            <div className=''>
              <h4 className='text-xl font-bold text-center'>{service.title}</h4>
              <p className='text-gray-600 text-center'>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
   </div>
  )
}

export default Service