import React from 'react'

const ServiceBox = ({ img, title, comment }) => {
  return (
    <div className='flex flex-col lg:items-start items-center'>
      <img src={img} alt="" srcset="" className='mb-5 w-12 h-12' />
      <h2 className='poppins font-semibold text-2xl leading-9'>{title}</h2>
      <p className='poppins font-normal text-base	leading-9	text-[#808080] max-w-md mb-5'>{comment}</p>
    </div>
  )
}

export default ServiceBox