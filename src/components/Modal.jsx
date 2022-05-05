import React ,{useState}from 'react'
import { FaTimes } from 'react-icons/fa'

const Modal = ({ data, currTime ,handleClose, loading}) => {
    return (
        <>
            {!loading ?
                <div className='h-screen w-full fixed top-0 left-0 z-50 bg-black opacity-90 flex items-center justify-center'>
              

                    <section className="w-[300px] h-[300px] bg-white shadow-lg p-9 rounded-lg mx-auto lg:w-[500px]">
                        <FaTimes className="float-right text-xl text-red-600 relative -top-4 cursor-pointer" onClick={handleClose} />
                        <h2 className="text-3xl font-semibold">{data ? data.name : null}, {data && data.sys ? data.sys.country : null}</h2>
                        <h2 className="text-md font-bold text-gray-400">{currTime}</h2>
                        <h2 className="capitalize flex text-md font-bold text-gray-500 mb-1">humidity: {data.main ? <p className="ml-2">{data.main.humidity}%</p> : null}</h2>

                        <h2 className="capitalize flex text-md font-bold text-gray-500 mb-1">temperature: {data.main ? data.main.temp.toFixed() : null}°F</h2>
                        <h2 className="capitalize flex text-md font-bold text-gray-500 mb-1">weather:  {data.weather ? <p className="ml-2">{data.weather[0].main}</p> : null}</h2>
                        <h2 className="capitalize flex text-md font-bold text-gray-500 mb-1">Wind Speed:  {data.wind ? (
                            <p className="ml-2">{data.wind.speed.toFixed()} MPH</p>
                        ) : null}</h2>
                    </section>
                </div>
                :null}
        </>
    )
}

export default Modal
