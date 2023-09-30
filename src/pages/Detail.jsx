import React from 'react';
import images from '../assets/images';
import Comment from '../components/Comment';
import ListSlider from '../components/ListSlider';
import MovieInfo from '../components/MovieInfo';
import MovieItem from '../components/MovieItem';

function Detail() {
    const data = [1, 2, 3, 4, 5, 6, 7, 7];

    return (
        <>
            <header className="flex flex-wrap">
                <div className="flex-1">
                    <video
                        controls
                        autoPlay
                        className="mb-5 w-full h-52 lg:h-[470px] object-cover"
                        src={images.video}
                    ></video>
                    <MovieInfo />
                </div>
                <div className="lg:ml-5 lg:w-96">
                    <div className="mb-2">
                        <p className="mb-2 dark:text-white text-lg font-medium">
                            Nội dung tiếp theo
                        </p>
                        <div className="py-2 lg:max-h-[430px] overflow-y-auto">
                            <MovieItem type={1} />
                            <MovieItem type={1} />
                            <MovieItem type={1} />
                            <MovieItem type={1} />
                            <MovieItem type={1} />
                            <MovieItem type={1} />
                            <MovieItem type={1} />
                        </div>
                    </div>
                    <Comment />
                </div>
            </header>
            <main className="my-5">
                <ListSlider title="Nội dung tiếp theo" data={data} />
                <ListSlider title="Nội dung liên quan" data={data} />
            </main>
        </>
    );
}

export default Detail;
