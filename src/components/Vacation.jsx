import React from 'react'
import image from '../assets/bg.png'
import image1 from '../assets/image_idea_2.png'
import image2 from '../assets/image_idea_3.png'
import { BsSuitDiamond, BsSuitDiamondFill } from 'react-icons/bs'
const Vacation = () => {
  return (
    <div  className='mt-10 lg:mt-40'>
      <h3 className='title'>See latest vacation ideas</h3>
      <div className='flex items-center justify-center space-x-3 mb-3'>
        <BsSuitDiamond className='text-xs' />
        <BsSuitDiamond className='text-xs' />
        <BsSuitDiamondFill className='text-xs'/>
        <BsSuitDiamond className='text-xs' />
        <BsSuitDiamond className='text-xs'/>
      </div>
      <article className='flex flex-col items-center lg:flex-row justify-center'>
        <section className='p-8' >
          <img className='w-[350px] h-[300px] object-cover' src={image} />
          <div className='w-[200px] h-[100px] bg-white absolute z-40 flex justify-center items-center  mx-8 -mt-[12em] lg:mx-8 xl:mx-20'>
            <h4 className='text-center m-4 p-2 border  capitalize font-bold font-serif text-lg text-gray-500 hover:border-b-transparent'>beachfront escapes</h4>
          </div>
        </section>
        <section className='p-8' >
          <img className='w-[350px] h-[300px] object-cover' src={image1} />
          <div className='w-[200px] h-[100px] bg-white absolute z-40 flex justify-center items-center  mx-8 -mt-[12em] lg:mx-8 xl:mx-20'>
            <h4 className='text-center   p-3 border  capitalize font-bold font-serif text-lg text-gray-500 hover:border-b-transparent'> group holidays</h4>
          </div>
        </section>
        <section className='p-8' >
          <img className='w-[350px] h-[300px] object-cover' src={image2} />
          <div className='w-[200px] h-[100px] bg-white absolute z-40 flex justify-center items-center mx-8 -mt-[12em] lg:mx-8 xl:mx-20'>
            <h4 className='text-center  p-5 border  capitalize font-bold font-serif text-lg text-gray-500 hover:border-b-transparent'> city breaks</h4>
          </div>
        </section>
      </article>
      
    </div>
  )
}

export default Vacation
