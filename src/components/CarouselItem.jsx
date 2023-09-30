import React from 'react';

function CarouselItem() {
    return (
        <div className="relative h-full w-full rounded-xl overflow-hidden">
            <img
                className="absolute inset-0 z-0 w-full h-full object-cover"
                src="https://media.wired.com/photos/64790f5a0b67c709cbcaa9b5/master/w_2560%2Cc_limit/Spider-Man-Across-The-Spider-Verse-Monitor-Culture.jpg"
                alt=""
            />
            <div className="absolute inset-0 z-10 w-full h-full bg-gradient-to-t from-black/70 to-white/0" />
            <div className="absolute z-20 left-5 bottom-0 lg:bottom-10 w-3/4 md:w-1/2 text-white">
                <h1 className="my-2 uppercase text-white text-lg md:text-5xl font-medium">
                    Spider-Man: Across the Spider-Verse
                </h1>
                <div className="my-2 flex gap-3 items-center text-sm">
                    <p>2022</p>
                    <p>1h 56m</p>
                    <p className="p-2 w-fit text-sm bg-black/30 rounded-2xl text-white">
                        Hành động
                    </p>
                    <p className="p-2 w-fit text-sm bg-black/30 rounded-2xl text-white">
                        PG-13
                    </p>
                </div>
                <p className="my-2 hidden lg:block text-sm text-gray-400 line-clamp-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Minus possimus culpa molestiae omnis sequi esse cupiditate
                    reiciendis provident error eligendi impedit veritatis nobis
                    illum nulla, at iusto. Et, repellat nesciunt!
                </p>
                <div className="hidden lg:block">
                    <div className="mb-2 flex flex-wrap text-sm">
                        <p className="mr-2 text-gray-300">
                            Phân loại nội dung:
                        </p>
                        <p className="mr-1 dark:text-white hover:underline">
                            Bạo lực,
                        </p>
                        <p className="mr-1 dark:text-white hover:underline">
                            Tự tử,
                        </p>
                        <p className="mr-1 dark:text-white hover:underline">
                            Máu me,
                        </p>
                    </div>
                    <div className="mb-2 flex flex-wrap text-sm">
                        <p className="mr-2 text-gray-300">Diễn viên:</p>
                        <p className="mr-1 dark:text-white hover:underline">
                            Takaguza Itachi,
                        </p>
                        <p className="mr-1 dark:text-white hover:underline">
                            Takaguza Itachi,
                        </p>
                        <p className="mr-1 dark:text-white hover:underline">
                            Takaguza Itachi,...
                        </p>
                    </div>
                    <div className="mb-2 flex flex-wrap text-sm">
                        <p className="mr-2 text-gray-300">Đạo diễn:</p>
                        <p className="mr-1 dark:text-white hover:underline">
                            Takaguza Itachi
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CarouselItem;
