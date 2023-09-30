import React from 'react';
import ListSlider from '../components/ListSlider';
import Button from '../components/Button';

function Library() {
    return (
        <>
            <header>
                <h1 className="mt-5 text-3xl font-bold dark:text-white">
                    Thư viện
                </h1>
                <p className="my-2 text-gray-500 text-sm">
                    Những nội dung bạn đã xem, lưu trữ hoặc yêu thích được lưu
                    trữ ở đây
                </p>
                <div className="my-2 flex gap-2 flex-wrap">
                    <Button size="sm" type="sub" rounded="md" widthFull>
                        Nội dung đã lưu
                    </Button>
                    <Button size="sm" type="sub" rounded="md" widthFull>
                        Nội dung đã thích
                    </Button>
                    <Button size="sm" type="sub" rounded="md" widthFull>
                        Nội dung đã xem
                    </Button>
                </div>
            </header>
            <main className="my-5">
                <ListSlider title="Nội dung đã xem" />
                <ListSlider title="Nội dung đã lưu" />
                <ListSlider title="Nội dung đã thích" />
            </main>
        </>
    );
}

export default Library;
