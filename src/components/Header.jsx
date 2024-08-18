import React from 'react'
import vector from '../assets/img/Vector.png'


const Header = () => {
    return (
        <div className='w-full primary-bg py-4'>
            <div className='container mx-auto flex justify-between'>
                <div className='flex items-center'>
                    <h1 className='text-2xl font-bold poppins text-white'>Skill <span className='secondary-color'>Shoot</span></h1>
                </div>

                <div className='lg:block hidden'>
                    <ul className="px-1 text-lg h-full poppins font-normal text-white/60 w-full flex justify-between items-center gap-4">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Course</a></li>
                        <li><a href="#">Subscribe</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Testimoni</a></li>
                    </ul>
                </div>

                <div className='flex justify-end items-center gap-3'>
                    <a href="#" className='text-white font-normal poppins text-lg lg:block hidden'>
                        Login
                    </a>
                    <a className="secondary-bg btn px-11 border-0 text-white font-normal poppins text-lg lg:flex hidden">Register</a>

                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <img src={vector} alt="" srcset="" />
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow right-0">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Course</a></li>
                            <li><a href="#">Subscribe</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Testimoni</a></li>
                            <li><a href="#">Login</a></li>
                            <li><a href="#">Register</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header