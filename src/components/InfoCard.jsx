import React from 'react'
const InfoCard = ({ id, title, body, Icon }) => {
    return (
        <div>
            <section key={id} className='w-[300px] h-[300px] p-5 flex flex-col items-center justify-center xl:w-[380px]'>

                <div className='w-[80px] h-[80px] rounded-full bg-green-600 flex items-center justify-center text-5xl text-white'>
                    {Icon}
                </div>
                <h3 className='font-bold text-xl my-2 capitalize'>
                    {title}
                </h3>
                <p>
                    {body}
                </p>
            </section>
        </div>
    )
}

export default InfoCard
