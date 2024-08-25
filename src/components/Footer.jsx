import React from 'react'
import elementone from '../assets/img/Vector 15.png'
import elementtwo from '../assets/img/Group 162529.png'

const Footer = () => {
    return (
        <>
            <div className='w-full primary-bg md:py-32 py-24 text-center relative md:px-0 px-7'>
                <h2 className='text-white poppins lg:text-4xl md:text-2xl text-lg md:leading-[54px] leading-7 mb-5'>Subscribe to get notified about update</h2>
                <p className='poppins font-normal md:text-base text-xs md:leading-9 leading-7 text-white mb-12'>Smart Jackpots that you may love this anytime & anywhere</p>

                <div className='flex md:max-w-[555px] max-w-[300px] md:flex-row flex-col items-center mx-auto gap-5'>
                    <div className='grow md:w-auto w-full'>
                        <input type="email" className='w-full bg-white/10 outline-0 md:py-1.5 py-1 px-6 text-white poppins font-normal leading-[50px] rounded' placeholder='Enter your email' />
                    </div>
                    <button className='poppins font-medium md:text-lg text-xs text-white secondary-bg px-6 rounded py-4 md:w-auto w-max'>Subscribe us</button>
                </div>

                <img src={elementtwo} className='absolute md:right-44 right-0 md:top-0 top-60 bottom-0 m-auto md:w-auto w-16' alt="" />
                <img src={elementone} className='absolute md:left-44 left-10 md:top-48 bottom-0 m-auto md:w-auto w-12' alt="" />
            </div>

            <div className='w-full primary-bg py-5'>
                <div className='container mx-auto flex justify-between md:flex-row flex-col'>
                    <div className='flex items-center md:justify-start justify-center md:mt-0 mt-10'>
                        <h1 className='text-2xl font-bold poppins text-white'>Skill <span className='secondary-color'>Shoot</span></h1>
                    </div>
                    <div className='inline md:order-last order-first'>
                        <ul className="px-1 md:text-lg text-xs h-full poppins font-normal text-white/60 w-full flex justify-between items-center gap-4 md:flex-row flex-col">
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