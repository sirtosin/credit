import React from 'react'
import { BsSuitDiamond, BsSuitDiamondFill } from 'react-icons/bs'
import { data2 } from './data'
import InfoCard from './InfoCard'
const Info = () => {
  return (
    <div className='mt-10'>
      <h3 className='title'>  Why we are different</h3>
      <div className='flex items-center justify-center space-x-3'>
        <BsSuitDiamond className='text-xs' />
        <BsSuitDiamond className='text-xs' />
        <BsSuitDiamondFill className='text-xs' />
        <BsSuitDiamond className='text-xs' />
        <BsSuitDiamond className='text-xs' />
      </div>
      
      <article className='p-4 flex flex-col items-center lg:flex-row justify-around'>
        {data2.map((data) => (
          <InfoCard
            key={data.id}
            id={data.id}
            body={data.body}
            Icon={data.Icon}
            title={data.title}
          />
        ))}
      </article>
    </div>
  )
}

export default Info
