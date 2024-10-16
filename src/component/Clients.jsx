import React from 'react'

const clients=[
  {
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb3grB9Ne0kY8LBffw4eBU_0rccKxnuwhfSQ&s',
    title:'Alen,UK',
    description:'"This travel agency provided excellent service and helped us olan the perfect vacation.Highly recommend!"'
  },
  {
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9rN7wAXsN7NtRqjttytdwhxvBu23PY2hY3uypMsypFGADvq9a5d4pM_S1QtWxylm7wdo&usqp=CAU',
    title:'Jai,Mumbai',
    description:'"Amazing experience! The tour guides were knowledgeable and the destination were breathtaking"'
  },
  {
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXXtefAw0UjoTNawuTR5ZyLIzBoYrwCxPjZA&s',
    title:'Riya,Gujrat',
    description:'"Great customer service and fantastic travel packages.Will definitely book with them again"'
  },
]

const Clients = () => {
  return (
    <div className=' bg-gray-100'>
      <div className='container mx-auto'>
        <h3 className='text-3xl font-bold text-center m-12'>What Our Clients Say</h3>
        <div className='grid gap-6  md:grid-cols-3'>
          {clients.map((client,index)=>(
            <div className='shadow-md rounded-lg bg-white overflow-hidden transform transition duration-300 hover:scale-110 items-center cursor-pointer'>
              <img src={client.image} className='w-48 h-48 rounded-full py-2  mx-auto'/>
              <div className='mt-6 '>
                <h4 className='text-lg font-bold text-center'>{client.title}</h4>
                <p className='text-gray-600 text-center'>{client.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Clients