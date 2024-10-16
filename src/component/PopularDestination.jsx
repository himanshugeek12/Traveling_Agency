import React from 'react'

const destination=[
  {
    image:'https://currentaffairs.adda247.com/wp-content/uploads/multisite/sites/5/2023/06/16111548/Kedarnath.jpg',
    title:'Kedarnath Jyotirlinga',
    description:"Kedarnath Temple (Sanskrit: केदारनाथ मंदिर, IAST: Kēdāranātha Mandira, lit. 'temple of the God of the field') is a Hindu temple, one of the twelve jyotirlinga of Shiva."
  },
  
  {
    image:'https://www.planetware.com/wpimages/2019/12/nepal-in-pictures-beautiful-places-to-photograph-annapurna-range.jpg',
    title:'Annapurna Region,Nepal',
    description:'Hiking is the best way to experience the Annapurna region and capture some of the most outstanding images of mountains in Nepal. '
  },
  {
    image:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/3e/36/95/baga-sea-beach.jpg?w=500&h=400&s=1',
    title:'Morjim Beach',
    description:'Morjim Beach is one of the most tranquil beaches of North Goa. Located a little south of Aswem beach, it serves as a nesting habitat for Olive Ridley Turtles.'
  },
  
  {
    image:'https://images.hindi.news18.com/ibnkhabar/uploads/2016/04/1013.jpg?im=Resize,width=700,aspect=fit,type=normal',
    title:'Five Flower Lake',
    description:'This lake is the 10th most beautiful lake in the world. This lake is located in Jiuzhaigou Valley in South-Western China. It is also known as Wuhuha Lake. '
  },


];

const PopularDestination = () => {
  return (
   <div className='py-12 bg-gray-100'>
    <div className='container mx-auto px-4'>
      <h3 className='text-3xl font-bold text-center mb-8'>Popular Destination</h3>
      <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {destination.map((city,index)=>(
          <div key={index} className='bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform transition duration-300 hover:scale-110'>
            <img src={city.image} className='w-full h-48 object-cover '/>
            <div className='p-4'>
              <h4 className='text-xl font-bold text-center mb-2'>{city.title}</h4>
              <p className='text-gray-600'>{city.description}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
   
   </div>
  )
}

export default PopularDestination