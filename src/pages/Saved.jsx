import React from 'react';
import ListGrid from '../components/ListGrid';
import Button from '../components/Button';
import Selector from '../components/Selector';

function Saved() {
    // Default
    const selectors = [
        {
            title: 'Hoạt động gần đây',
            value: 0,
        },
        {
            title: 'Đã lưu gần đây',
            value: 1,
        },
        {
            title: 'Đã xem gần đây',
            value: 2,
        },
    ];
    return (
        <>
            <header className="flex items-end justify-between flex-wrap">
                <div>
                    <h1 className="mt-5 text-3xl font-bold dark:text-white">
                        Nội dung đã lưu
                    </h1>
                    <p className="my-2 text-gray-500 text-sm">
                        Những nội dung bạn đã xem, lưu trữ hoặc yêu thích được
                        lưu trữ ở đây
                    </p>
                    <div className="my-2 flex gap-2 flex-wrap">
                        <Button size="sm" type="sub" rounded="md" widthFull>
                            Tất cả
                        </Button>
                        <Button size="sm" type="sub" rounded="md" widthFull>
                            Phim điện ảnh
                        </Button>
                        <Button size="sm" type="sub" rounded="md" widthFull>
                            TV Series
                        </Button>
                        <Button size="sm" type="sub" rounded="md" widthFull>
                            Chương trình truyền hình
                        </Button>
                    </div>
                </div>
                <Selector data={selectors} />
            </header>
            <div>
                <ListGrid />
            </div>
        </>
    );
}

export default Saved;
