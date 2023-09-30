import React, { useRef } from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Acssets
import 'swiper/css';
import 'swiper/css/navigation';

import CarouselItem from './CarouselItem';

function Carousel({ data }) {
    // State
    const swiperRef = useRef();

    // Handel
    const handelNext = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideNext();
        }
    };
    const handelPrev = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slidePrev();
        }
    };

    return (
        <div className="mb-2 lg:mb-5 relative h-60 lg:h-[500px]">
            <div className="hidden lg:flex absolute items-center gap-2 z-10 bottom-2 right-5">
                <button
                    onClick={handelPrev}
                    className="w-14 h-14 rounded-full text-lg bg-white/10 hover:bg-white/50 text-white transition-all"
                >
                    <i class="fa-regular fa-chevron-left"></i>
                </button>
                <button
                    onClick={handelNext}
                    className="w-14 h-14 rounded-full text-lg bg-white/10 hover:bg-white/50 text-white transition-all"
                >
                    <i class="fa-regular fa-chevron-right"></i>
                </button>
            </div>
            <div className="absolute inset-0 z-0 w-full h-full">
                <Swiper
                    ref={swiperRef}
                    spaceBetween={8}
                    loop
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    modules={[Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <CarouselItem />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CarouselItem />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CarouselItem />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
}

export default Carousel;
