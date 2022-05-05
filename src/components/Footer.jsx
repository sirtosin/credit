import React from 'react'
import image from '../assets/image_footer.png'
import { footerContent } from './data'
const Footer = () => {
  return (
    <div>
      <img className='w-full lg:h-[600px] object-cover' src={image} alt="" />

      {/* contact form*/}
      <section className='w-[300px] mx-auto relative my-5 lg:absolute z-40 lg:-mt-[25em] bg-white lg:w-[400px] h-[400px] lg:right-0 p-10  lg:mr-40'>
        <h3 className='font-semibold text-xl text-center mb-1  capitalize lg:text-2xl'>send us a message</h3>
        <form action="" className='p-4'>
          <input className='p-3 outline-none border-b-2 border-gray-300 mb-2 w-full'  type="text" placeholder="Your name" />

          <input className='p-3 outline-none border-b-2 border-gray-300 mb-2 w-full'  type="email" placeholder="Email" />
          <input className='p-3 outline-none border-b-2 border-gray-300 mb-2 w-full'  type="text" placeholder="Message" />
          <input className='uppercase text-white  bg-red-600 rounded-full my-10 mr-20 w-[100px] p-2 lg:my-20' type="submit" value='send'/>
        </form>
      </section>

      <footer className='bg-gray-900 text-white p-8  flex flex-col  lg:flex-row justify-around'>
        <div className='grid grid-cols-2 lg:flex flex-row space-x-1 p-0 flex-1 lg:p-10'>
        {footerContent.map((item, index) => (
          <div key={index} className='mb-4 '>
            <h3 className='capitalize font-semibold text-xl'>{item.title}</h3>
            <aside className=' lg:flex flex-row justify-between '>
              <div>
                {item.content.map((link, index) => (

                  <p key={index} className='mr-10 w-[100px]'>{link}</p>
                ))}
                </div>
              <div>
                {item.content2 && item.content2.map((link, index) => (
                  <p key={index} className='hidden xl:flex ml-20'>{link}</p>
                ))}
             </div>
            </aside>
          </div>
        ))}
        </div>
        <section className='p-0  lg:p-10 lg:text-right'>
          <div>
            <h3>Phone: +91-80-41127931</h3>
            <h3>Email: info@aztechdesign.co</h3>
         </div>
          <div className='my-4 capitalize'>
            <h3 className='font-semibold text-lg'>Address</h3>
            <p>1st main bucharest</p>

            <p>2nd stage ralfflsen tower,</p>
            <p>bucharest-400400,</p>
            <p> romania</p>
          </div>
        </section>
      </footer>
    </div>
  )
}

export default Footer
