import React from 'react'

import element from '../assets/img/bx-user 1.png'
import play from '../assets/img/play.png'


const CourseBox = ({ img, title, avatar, name, position, participant, price, pervideo }) => {
    return (
        <div className="card bg-white shadow-xl rounded-2xl relative">
            <figure className='relative'>
                <img
                    src={img}
                    alt="Shoes" className='w-full' />

                <div className='w-[84px] h-[84px] bg-white/60 rounded-full absolute inset-0	m-auto flex justify-center items-center'>
                    <div className='w-[60px] h-[60px] primary-bg rounded-full'>
                        <img src={play} className='w-full h-full' />
                    </div>
                </div>
            </figure>
            <div>
                <div className='p-6'>
                    <h2 className="poppins font-semibold text-2xl leading-9 mb-5">{title}</h2>

                    <div className='grid grid-cols-2'>
                        <div className="card lg:card-side mb-5">
                            <figure>
                                <img
                                    src={avatar}
                                    alt="Album" className='w-[45px] h-[45px] rounded-full' />
                            </figure>
                            <div className="card-body p-3 gap-0">
                                <h2 className="poppins text-sm leading-5 font-medium">{name}</h2>
                                <p className='poppins font-normal text-xs'>{position}</p>
                            </div>
                        </div>

                        <div className="card lg:card-side mb-5 flex justify-end">
                            <figure>
                                <img
                                    src={element}
                                    alt="Album" className='w-[35px] h-[35px] rounded-full' />
                            </figure>
                            <div className="card-body p-3 gap-0">
                                <h2 className="poppins text-sm leading-5 font-medium">{participant}</h2>
                                <p className='poppins font-normal text-xs'>Participant</p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="px-6 py-4 flex justify-between items-center bg-[#FAFAFA] rounded-b-2xl">
                    <button className="primary-bg btn poppins text-white text-xs font-semibold leading-7">Buy Now</button>

                    <h4 className='poppins font-semibold text-2xl leading-9'>${price}<span className='text-xs text-[#808080] font-normal leading-7'>/{pervideo} Video</span></h4>
                </div>
            </div>

            
        </div>
    )
}

export default CourseBox