import React from 'react';
import Carousel from '../components/Carousel';
import ListSlider from '../components/ListSlider';
function Home() {
    const data = [1, 2, 3, 4, 5, 6, 7, 7];
    return (
        <>
            <Carousel />
            <ListSlider title="Phim điện ảnh nổi bật" data={data} />
            <ListSlider title="Phim điện ảnh nổi bật" data={data} />
            <ListSlider title="Phim điện ảnh nổi bật" data={data} />
            <ListSlider title="Phim điện ảnh nổi bật" data={data} />
        </>
    );
}

export default Home;
