import React from 'react'

import star from '../assets/img/star.png'

const ReviewBox = ({image, name, comment}) => {
    return (
        <div className='flex flex-col justify-center items-center pt-10 pb-5 px-10'>
            <img src={image} alt="" className='w-20 h-20' />
            <div className='inline-flex gap-3 mt-5 mb-5'>
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
            </div>
            <h3 className='poppins text-2xl	leading-9'>{name}</h3>
            <p className='poppins font-normal text-base	leading-9 text-[#808080]'>{comment}</p>
        </div>
    )
}

export default ReviewBox