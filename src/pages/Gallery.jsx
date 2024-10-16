import React from 'react'

const images=[
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE9RIZxplUh7GLY1kS0K9XSOtCs3_5wh-TpA&s',
  'https://hblimg.mmtcdn.com/content/hubble/img/agra/mmt/activities/m_activities-agra-taj-mahal_l_400_640.jpg',
  'https://www.touropia.com/gfx/b/2011/09/hawa_mahal.jpg',
  'https://img.traveltriangle.com/blog/wp-content/uploads/2020/02/cover-places-to-visit-in-the-World1.jpg',
  'https://blog.thomascook.in/wp-content/uploads/2020/08/Singapore-banner.jpg',
  'https://www.usnews.com/object/image/00000163-8d5b-d398-ad7f-8dfff5760000/3-eiffel-tower-getty.jpg?update-time=1527086483519&size=responsive640'
];

const Gallery = () => {
  return (
    <div>
    <div className='relative h-96  bg-cover bg-center' style={{backgroundImage:"url('https://png.pngtree.com/thumb_back/fh260/back_our/20190619/ourmid/pngtree-travel-around-the-world-travel-poster-template-image_140335.jpg')"}}>
         <div className='absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center'>
          <h4 className='text-4xl md:text-6xl font-bold text-white mb-4'>Gallery</h4>
        </div>
    </div>
    <div className='bg-gray-100 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container mx-auto  mt-6 cursor-pointer '>
      {images.map((image,index)=>(
       <div key={index} className='transform transition duration-300 hover:scale-110 rounded-lg shadow-md bg-white overflow-hidden'>
         <img src={image}  className='w-full h-48 object-cover'/>
       </div>
      ))}
    </div>
    </div>
  )
}

export default Gallery