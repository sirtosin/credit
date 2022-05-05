import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import image from '../assets/ph.png';
const Header = () => {
    const [toggle, setToggle] = useState(false);

    const handleToggle = () => {
        setToggle(prev => !prev);
    } 
    const handleClose = () => {
        setToggle(false);
    }

    return (
        <header className='sticky top-0 left-0 z-50 bg-white shadow p-5 w-full '>
            <nav className='flex items-center justify-around space-x-3 max-w-7xl  mx-auto'>
                <Link className=' lg:hidden' to='/' onClick={handleClose}>
                    <img className='w-full' src={image} />
                </Link>
                <div className='hidden lg:flex m-0 text-2xl font-serif cursor-pointer '>
                    <Link className='capitalize px-9 ' to='/'>
                        Home
                    </Link>
                    <Link className='capitalize px-9 ' to=''>
                        experiences 
                    </Link>
                    <Link className=' px-9'to=''>
                        <img className='w-full' src={image}/>
                    </Link>
                    <Link className='capitalize px-9'to='history'>
                        history
                    </Link>
                    <Link className='capitalize px-9'to=''>
                        contact
                    </Link>

                </div>
                {/* menu icon  */}
                {!toggle ?
                    <AiOutlineMenu onClick={handleToggle} className='text-3xl lg:hidden cursor-pointer' /> :
                    <AiOutlineClose onClick={handleToggle} className='text-3xl cursor-pointer lg:hidden' />}
            </nav>
            {/* mobile navigation */}
            {toggle ?
                <section className='h-screen mx-auto lg:hidden '>

                    <div className='flex items-center justify-center  flex-col p-8 m-8 space-x-8 text-2xl font-serif' onClick={handleToggle}>
                        <p/>
                        <Link className='capitalize py-5 text-xl' to=''>
                            contact 
                        </Link>
                        <Link className='capitalize py-5  text-xl' to='history'>
                            history
                        </Link>
                        <Link className='capitalize py-5  text-xl' to=''>
                            experiences
                        </Link>
                    </div>
                </section> : null}
        </header>
    )
}

export default Header
