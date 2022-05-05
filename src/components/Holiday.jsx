import React from 'react'
import { BsSuitDiamond, BsSuitDiamondFill } from 'react-icons/bs'
import Card from './Card'
import { data } from './data'
const Holiday = () => {
  return (
    <div>
      <h3 className='title'>Recent holiday locations</h3>
      <div className='flex items-center justify-center space-x-3 mb-3'>
        <BsSuitDiamond className='text-xs' />
        <BsSuitDiamond className='text-xs' />
        <BsSuitDiamondFill className='text-xs' />
        <BsSuitDiamond className='text-xs' />
        <BsSuitDiamond className='text-xs' />
      </div>
      <article className='p-4 flex flex-col items-center lg:grid grid-cols-2 ml-4'>
        {data.map((data) => (
          <Card
            key={data.id}
            id={data.id}
            body={data.body}
            img={data.img}
            title={data.title}
          />
        ))}
      </article>
    </div>
  )
}

export default Holiday
 