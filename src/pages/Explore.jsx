import React from 'react';
import ListSlider from '../components/ListSlider';
import Carousel from '../components/Carousel';

function Explore() {
    return (
        <>
            <Carousel />
            <div className="mb-2 pb-3 border-b-[1px] border-borderColor">
                <ListSlider
                    title="Phim điện ảnh hành đầu"
                    subTitle="Được tạo tự động"
                />
            </div>
            <div className="mb-2 pb-3 border-b-[1px] border-borderColor">
                <ListSlider
                    title="Phim điện ảnh hành đầu"
                    subTitle="Được tạo tự động"
                />
            </div>
            <div className="mb-2 pb-3 border-b-[1px] border-borderColor">
                <ListSlider
                    title="Phim điện ảnh hành đầu"
                    subTitle="Được tạo tự động"
                />
            </div>
        </>
    );
}

export default Explore;
