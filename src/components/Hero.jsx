import React from 'react'
import image from '../assets/image_slider.png'
const Hero = () => {
  return (
    <div>
      <h1 className='absolute font-bold text-white text-4xl p-2 capitalize font-sans w-full flex justify-center items-center mt-[2em]
      lg:top-1/2 lg:text-6xl lg:mt-0'>enjoy freedom land</h1>
      <img className='w-full lg:h-[600px] object-cover'  src={image} />
    </div>
  )
}

export default Hero
