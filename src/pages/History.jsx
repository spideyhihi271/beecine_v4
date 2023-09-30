import React from 'react';
import MovieItem from '../components/MovieItem';
import Button from '../components/Button';

function History() {
    return (
        <>
            <h1 className="mt-5 text-3xl font-bold dark:text-white">
                Lịch sử xem
            </h1>
            <main className="my-5 flex flex-wrap">
                <div className="lg:order-1 w-full lg:flex-1 flex-1">
                    <div className="mb-2 lg:w-1/2 h-10 flex items-center rounded-xl bg-secondaryLight dark:bg-secondaryDark">
                        <button className="w-8 h-8 dark:text-white">
                            <i className="fa-light fa-magnifying-glass"></i>
                        </button>
                        <input
                            className="flex-1 text-sm dark:text-white bg-transparent"
                            type="text"
                            placeholder="Tìm kiếm trong lịch sử"
                        />
                        <button
                            className="w-8 h-8 dark:text-white"
                            onClick={() => setKeyword('')}
                        >
                            <i className="fa-light fa-xmark"></i>
                        </button>
                    </div>
                    <div className="my-2">
                        <div className="mb-2">
                            <Button
                                leftIcon={<i class="fa-light fa-trash"></i>}
                                type="sub"
                                rounded="md"
                                widthFull
                            >
                                Nội dung đã xem
                            </Button>
                        </div>
                        <div className="mb-2">
                            <Button
                                leftIcon={<i class="fa-light fa-pause"></i>}
                                type="sub"
                                rounded="md"
                                widthFull
                            >
                                Tạm dừng lưu vào lịch sử
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="py-2 w-full lg:flex-1 h-fit lg:max-h-[75vh] overflow-y-auto">
                    <div>
                        <p className="mb-4 dark:text-white font-bold ">
                            Hôm qua
                        </p>
                        <div>
                            <MovieItem type={1} remove />
                        </div>
                    </div>
                    <div>
                        <p className="mb-4 dark:text-white font-bold ">
                            Hôm nay
                        </p>
                        <div>
                            <MovieItem type={1} remove />
                            <MovieItem type={1} remove />
                            <MovieItem type={1} remove />
                            <MovieItem type={1} remove />
                            <MovieItem type={1} remove />
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default History;
