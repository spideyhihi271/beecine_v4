import React from 'react';
import images from '../assets/images';
import Button from '../components/Button';
import MovieInfo from '../components/MovieInfo';
import ListGrid from '../components/ListGrid';
import Comment from './Comment';

function WickViewMovie({ setVisible }) {
    // Default
    const selectors = [
        {
            icon: <i class="fa-light fa-tv-retro"></i>,
            title: 'Mùa 1 - 23 tập',
            handel: '',
        },
        {
            icon: <i class="fa-light fa-tv-retro"></i>,
            title: 'Mùa 2 - 23 tập',
            handel: '',
        },
        {
            icon: <i class="fa-light fa-tv-retro"></i>,
            title: 'Mùa 3 - 23 tập',
            handel: '',
        },
        {
            icon: <i class="fa-light fa-tv-retro"></i>,
            title: 'Mùa 4 - 23 tập',
            handel: '',
        },
        {
            icon: <i class="fa-light fa-tv-retro"></i>,
            title: 'Mùa 5 - 23 tập',
            handel: '',
        },
    ];

    return (
        <div className="w-[50vw]">
            <header className="relative w-full h-96">
                <video
                    autoPlay
                    loop
                    className="absolute z-0 inset-0 w-full h-full object-cover"
                    src={images.video}
                ></video>
                <div className="absolute z-10 top-3 right-3">
                    <Button
                        type="four"
                        iconOnly
                        rounded="full"
                        onClick={() => setVisible(false)}
                    >
                        <i class="fa-light fa-xmark"></i>
                    </Button>
                </div>
                <div className="absolute z-10 bottom-3 right-3">
                    <Button type="secondary" iconOnly rounded="full">
                        <i class="fa-light fa-volume"></i>
                    </Button>
                </div>
            </header>
            <main className="py-2 px-5">
                <MovieInfo />
                <ListGrid
                    title="Danh sách tập phim"
                    subTitle="Mùa 1 - 23 tập"
                    perOne
                    type={1}
                    selectors={selectors}
                />
                <Comment />
            </main>
        </div>
    );
}

export default WickViewMovie;
