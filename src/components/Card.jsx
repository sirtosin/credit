import React from 'react'

import { IoIosBed } from 'react-icons/io'
import { FaSwimmingPool, FaUmbrellaBeach } from 'react-icons/fa'
import image from '../assets/chair.png'
const Card = ({id, title, body, img}) => {
  return (
      <div>
          <section key={id} className='w-[300px] h-[400px] bg-white shadow-md flex flex-col  m-4 lg:w-[450px]  xl:w-[580px] xl:h-[300px] lg:flex-row lg:h-[350px]'>
              <img className='w-full h-[120px] object-cover lg:w-[200px] mr-4 lg:h-[350px] xl:h-[300px]' src={img} alt="" />
              <div className='p-5'>
                  <h3 className='text-3xl capitalize font-bold mb-2'>{title}</h3>
                  <p className='mb-4 '>{body}</p>
                  <div className='flex items-center justify-start space-x-8'>
                      <span className='flex items-center'>
                          <IoIosBed className='text-md text-gray-700 flex mr-3' /> 3
                      </span>
                      <span className='flex items-center'>
                          <img className='mr-3' src={image} alt="" />
                          5
                      </span>
                      <FaUmbrellaBeach className='text-md text-gray-700' />
                      <FaSwimmingPool className='text-md text-gray-700' />

                  </div>
                  <h3 className='bg-red-600 my-3 w-[120px] p-2 capitalize text-white rounded-full text-center lg:my-9'>book now</h3>
              </div>
          </section>
    </div>
  )
}

export default Card
