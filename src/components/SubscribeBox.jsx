import React from 'react'
import { AiOutlineCheck } from 'react-icons/ai'
import layer from '../assets/img/layer.png'

const SubscribeBox = ({ name, price, time, popular }) => {
    return (
        <div className={`subscribe-card ${popular && 'subscribe-card-popular'} lg:w-1/3 md:w-1/2 w-full text-start px-7 pt-16 pb-10 rounded-3xl ${popular && 'primary-bg'} ${popular && 'lg:-mt-14 lg:mb-14'} ${popular && 'drop-shadow-2xl relative'} ${popular && 'lg:order-none order-first'}`}>
            <h2 className={`poppins lg:text-4xl md:text-2xl text-lg font-bold ${popular && 'text-white'}`}>${price} <span className={`font-normal md:text-base text-xs ${popular ? 'text-white' : 'text-[#808080]'}`}>/ {time} month</span></h2>
            <h2 className={`poppins lg:text-2xl text-xl font-bold mb-4 ${popular && 'text-white'}`}>{name}</h2>
            <p className={`poppins font-normal md:text-base text-xs leading-7 ${popular ? 'text-white' : 'text-[#808080]'} mb-4`}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

            <ul>
                <li className={`flex items-center gap-2 poppins ${popular && 'text-white'} lg:text-base text-xs mb-2`}>
                    <div className={`w-5 h-5 rounded-full ${popular ? 'bg-white/10':'bg-[#5243C21A]/10'} flex justify-center items-center`}>
                        <AiOutlineCheck />
                    </div>
                    Access all videos
                </li>

                <li className={`flex items-center gap-2 poppins ${popular && 'text-white'} lg:text-base text-xs mb-2`}>
                    <div className={`w-5 h-5 rounded-full ${popular ? 'bg-white/10':'bg-[#5243C21A]/10'} flex justify-center items-center`}>
                        <AiOutlineCheck />
                    </div>
                    Get Certificate
                </li>

                <li className={`flex items-center gap-2 poppins ${popular && 'text-white'} lg:text-base text-xs mb-2`}>
                    <div className={`w-5 h-5 rounded-full ${popular ? 'bg-white/10':'bg-[#5243C21A]/10'} flex justify-center items-center`}>
                        <AiOutlineCheck />
                    </div>
                    Chat support
                </li>

                <li className={`flex items-center gap-2 poppins ${popular && 'text-white'} lg:text-base text-xs mb-2`}>
                    <div className={`w-5 h-5 rounded-full ${popular ? 'bg-white/10':'bg-[#5243C21A]/10'} flex justify-center items-center`}>
                        <AiOutlineCheck />
                    </div>
                    Update Notification
                </li>

                <li className={`flex items-center gap-2 poppins ${popular && 'text-white'} lg:text-base text-xs mb-2`}>
                    <div className={`w-5 h-5 rounded-full ${popular ? 'bg-white/10':'bg-[#5243C21A]/10'} flex justify-center items-center`}>
                        <AiOutlineCheck />
                    </div>
                    Download material
                </li>
            </ul>

            <button className={`w-full p-1.5 ${popular ? 'secondary-bg':'bg-[#FED1BA]/10'} ${popular ? 'text-white':'text-[#FDC2A5]'} rounded-3xl poppins text-base font-semibold leading-9 mt-5`}>Choose plan</button>

            {
                popular && <img src={layer} className='absolute right-0 top-0' alt="" />
            }

            {
                popular && <div className='poppins font-semibold text-xs py-1.5 px-4 inline	secondary-bg rounded-2xl text-white absolute top-5 right-5'>MOST POPULAR</div>
            }
            
        </div>
    )
}

export default SubscribeBox