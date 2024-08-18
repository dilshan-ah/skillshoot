import React from 'react'
import elementone from '../assets/img/Vector 15.png'
import elementtwo from '../assets/img/Group 162529.png'

const Footer = () => {
    return (
        <>
            <div className='w-full primary-bg py-32 text-center relative'>
                <h2 className='text-white poppins text-4xl leading-[54px]'>Subscribe to get notified about update</h2>
                <p className='poppins font-normal text-base	leading-9 text-white mb-12'>Smart Jackpots that you may love this anytime & anywhere</p>

                <div className='flex max-w-[555px] mx-auto gap-5'>
                    <div className='grow'>
                        <input type="email" className='w-full bg-white/10 outline-0 py-1.5 px-6 text-white poppins font-normal leading-[50px]' placeholder='Enter your email' />
                    </div>
                    <button className='poppins font-medium text-lg text-white secondary-bg px-6'>Subscribe us</button>
                </div>

                <img src={elementtwo} className='absolute right-44 top-0 bottom-0 m-auto' alt="" />
                <img src={elementone} className='absolute left-44 top-48 bottom-0 m-auto' alt="" />
            </div>

            <div className='w-full primary-bg py-5'>
                <div className='container mx-auto flex justify-between'>
                    <div className='flex items-center'>
                        <h1 className='text-2xl font-bold poppins text-white'>Skill <span className='secondary-color'>Shoot</span></h1>
                    </div>
                    <div className='inline'>
                        <ul className="px-1 text-lg h-full poppins font-normal text-white/60 w-full flex justify-between items-center gap-4">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Course</a></li>
                            <li><a href="#">Subscribe</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Testimoni</a></li>
                        </ul>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Footer