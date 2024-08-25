import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Mousewheel, Keyboard } from 'swiper/modules';
import CourseBox from './CourseBox';

import sliderVideo from '../assets/img/unsplash_m2TU2gfqSeE.png';
import sliderVideoTwo from '../assets/img/unsplash_m2TU2gfqSecfbgfcd.png';
import sliderVideoThree from '../assets/img/sdfsdf.png';

import avatarOne from '../assets/img/unsplash_EZ4TYgXPNWk.png'
import avatarTwo from '../assets/img/unsplash_YmQ8TrsieE4.png'
import avatarThree from '../assets/img/unsplash__THUISs23CI.png'

const CourseSlider = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const swiperRef = useRef(null);

    useEffect(() => {
        if (swiperRef.current) {
            const swiper = swiperRef.current.swiper;

            // Assign the navigation elements to swiper navigation
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;

            // Initialize swiper navigation
            swiper.navigation.init();
            swiper.navigation.update();
        }
    }, []);

    return (
        <div className="swiper-container">
            <Swiper
                ref={swiperRef}
                slidesPerView={3}
                spaceBetween={30}
                cssMode={true}
                mousewheel={true}
                keyboard={true}
                breakpoints={{
                    0: {
                        slidesPerView: 'auto'
                    },
                    767: {
                        slidesPerView: 'auto',
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                }}
                modules={[Navigation, Mousewheel, Keyboard]}
                className="mySwiper course-slider"
            >
                <SwiperSlide>
                    <CourseBox img={sliderVideo} title="Basics of learning team management" avatar={avatarOne} name='Jone Owel' position="IT Manager" participant='120' price='120' pervideo='25' />
                </SwiperSlide>

                <SwiperSlide>
                    <CourseBox img={sliderVideoTwo} title="Learn basic database structure" avatar={avatarTwo} name='Roynaldo Jr' position="Data Science" participant='55' price='180' pervideo='20' />
                </SwiperSlide>

                <SwiperSlide>
                    <CourseBox img={sliderVideoThree} title="Create dynamic website with basic php" avatar={avatarThree} name='Markus Low' position="Programer" participant='135' price='135' pervideo='25' />
                </SwiperSlide>

                <SwiperSlide>
                    <CourseBox img={sliderVideoTwo} title="Learn basic database structure" avatar={avatarTwo} name='Roynaldo Jr' position="Data Science" participant='120' price='120' pervideo='25' />
                </SwiperSlide>

                <SwiperSlide>
                    <CourseBox img={sliderVideoThree} title="Create dynamic website with basic php" avatar={avatarThree} name='Markus Low' position="Programer" participant='98' price='180' pervideo='20' />
                </SwiperSlide>

                <div className="swiper-button-prev shadow bg-white/80 p-3 w-[63px] h-[63px] rounded-full flex justify-center items-center" ref={prevRef}>
                    <div className='custom-button shadow-xl'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="21" viewBox="0 0 23 21" fill="none">
                            <path d="M1.08331 10.8447L21.625 10.8447" stroke="#0C111F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M9 19.8444C8.99998 15.9873 1 10.8444 1 10.8444C1 10.8444 9 5.70159 9 1.84442" stroke="#0C111F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                </div>

                <div className="swiper-button-next shadow bg-white/80 p-3 w-[63px] h-[63px] rounded-full flex justify-center items-center" ref={nextRef}>
                    <div className='custom-button shadow-xl'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="21" viewBox="0 0 23 21" fill="none">
                            <path d="M21.9167 10.8447L1.375 10.8447" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M14 19.8444C14 15.9873 22 10.8444 22 10.8444C22 10.8444 14 5.70159 14 1.84442" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                </div>
            </Swiper>

            {/* Custom navigation buttons */}

        </div>
    );
};

export default CourseSlider;
