import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

// Assets
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';

// Components
import Button from './Button';
import MovieItem from './MovieItem';
import Popup from './Popup';
import WickViewMovie from './WickViewMovie';

function ListSlider({
    data = [1, 2, 3, 4, 5, 6, 7, 7],
    subTitle,
    title,
    iconTitle = false,
    per = 5,
    perMd = 3,
    perSm = 2,
}) {
    // State
    const swiperRef = useRef();
    const [isPopping, setPopping] = useState(false);

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
        <>
            <div className="mb-2 relative h-fit">
                <header className="flex items-center justify-between">
                    <div className="flex-[2]">
                        <div className="flex items-center">
                            {iconTitle && (
                                <p className="w-8 text-xl text-gray-500">
                                    {iconTitle}
                                </p>
                            )}
                            <h1 className="my-2 text-2xl font-semibold dark:text-white line-clamp-2">
                                {title}
                            </h1>
                        </div>
                        <p className="text-sm text-gray-400">{subTitle}</p>
                    </div>
                    <div className="flex-1 lg:flex-0 justify-end flex gap-2 items-center flex-wrap">
                        <Button rounded="3xl" type="sub">
                            Xem tất cả
                        </Button>
                        <div className="hidden lg:flex gap-2 items-center">
                            <Button
                                type="secondary"
                                iconOnly
                                onClick={() => handelPrev()}
                            >
                                <i class="fa-light fa-angle-left"></i>
                            </Button>
                            <Button
                                type="secondary"
                                iconOnly
                                onClick={() => handelNext()}
                            >
                                <i class="fa-light fa-angle-right"></i>
                            </Button>
                        </div>
                    </div>
                </header>
                <div className="my-5 relative">
                    <Swiper
                        ref={swiperRef}
                        spaceBetween={8}
                        modules={[Navigation]}
                        className="mySwiper"
                        breakpoints={{
                            320: {
                                slidesPerView: perSm,
                            },
                            768: {
                                slidesPerView: perMd,
                            },
                            1024: {
                                slidesPerView: per,
                            },
                        }}
                    >
                        {data.map((item, idx) => (
                            <SwiperSlide key={idx}>
                                <MovieItem
                                    handlePopping={() => setPopping(true)}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
            <Popup visible={isPopping} setVisible={setPopping}>
                <WickViewMovie setVisible={setPopping} />
            </Popup>
        </>
    );
}

export default ListSlider;
