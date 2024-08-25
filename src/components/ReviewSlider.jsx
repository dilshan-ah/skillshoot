import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Mousewheel, Keyboard } from 'swiper/modules';
import ReviewBox from './ReviewBox';

import reviewavatarone from '../assets/img/unsplash_6W4F62sN_yI.png'
import reviewavatartwo from '../assets/img/unsplash_pUhxoSapPFA.png'
import reviewavatarthree from '../assets/img/unsplash_plsF6obTgms.png'

const ReviewSlider = () => {
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
                      slidesPerView: 1,
                    },
                    768: {
                      slidesPerView: 2,
                    },
                    1024: {
                      slidesPerView: 3,
                    },
                  }}
                modules={[Navigation, Mousewheel, Keyboard]}
                className="mySwiper review-slider"
            >
                <SwiperSlide>
                    <ReviewBox image={reviewavatarone} name='Nany Brugman' comment='I am quite satisfied, because the skills I want or dream of can really be mastered' />
                </SwiperSlide>
                <SwiperSlide>
                    <ReviewBox image={reviewavatartwo} name='Jason Bay' comment='I am quite satisfied, because the skills I want or dream of can really be mastered' />
                </SwiperSlide>
                <SwiperSlide>
                    <ReviewBox image={reviewavatarthree} name='Jason Bay' comment='I am quite satisfied, because the skills I want or dream of can really be mastered' />
                </SwiperSlide>
                <SwiperSlide>
                    <ReviewBox image={reviewavatartwo} name='Jason Bay' comment='I am quite satisfied, because the skills I want or dream of can really be mastered' />
                </SwiperSlide>
                <SwiperSlide>
                    <ReviewBox image={reviewavatarthree} name='Jason Bay' comment='I am quite satisfied, because the skills I want or dream of can really be mastered' />
                </SwiperSlide>

                <div className='absolute -bottom-20 w-full flex justify-center gap-10'>
                    <div className='swiper-button-prev relative !left-0 custom-button shadow-xl m-0' ref={prevRef}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="21" viewBox="0 0 23 21" fill="none">
                            <path d="M1.08331 10.8447L21.625 10.8447" stroke="#0C111F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M9 19.8444C8.99998 15.9873 1 10.8444 1 10.8444C1 10.8444 9 5.70159 9 1.84442" stroke="#0C111F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>

                    <div className='swiper-button-next relative !right-0 custom-button shadow-xl m-0' ref={nextRef}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="21" viewBox="0 0 23 21" fill="none">
                            <path d="M21.9167 10.8447L1.375 10.8447" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M14 19.8444C14 15.9873 22 10.8444 22 10.8444C22 10.8444 14 5.70159 14 1.84442" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                </div>

            </Swiper>

        </div>
    )
}

export default ReviewSlider