import React from 'react';
import Button from '../components/Button';
import ListGrid from '../components/ListGrid';

function Browse() {
    // Default
    const releases = [
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
            <header className="my-5">
                <div className="mb-4 flex items-center">
                    <p className="w-fit text-sm dark:text-white">Thể loại</p>
                    <div className="mx-2 flex gap-2 flex-wrap flex-1">
                        <Button size="sm" type="sub" rounded="xl" widthFull>
                            Tất cả
                        </Button>
                        <Button
                            size="sm"
                            type="secondary"
                            rounded="xl"
                            widthFull
                        >
                            Phim điện ảnh
                        </Button>
                        <Button
                            size="sm"
                            type="secondary"
                            rounded="xl"
                            widthFull
                        >
                            TV Series
                        </Button>
                        <Button
                            size="sm"
                            type="secondary"
                            rounded="xl"
                            widthFull
                        >
                            Hoạt hình
                        </Button>
                    </div>
                </div>
                <div className="mb-4 flex items-center">
                    <p className="w-fit text-sm dark:text-white">Thể loại</p>
                    <div className="mx-2 flex gap-2 flex-wrap flex-1">
                        <Button size="sm" type="sub" rounded="xl" widthFull>
                            Tất cả thể loại
                        </Button>
                        <Button
                            size="sm"
                            type="secondary"
                            rounded="xl"
                            widthFull
                        >
                            Hành động
                        </Button>
                        <Button
                            size="sm"
                            type="secondary"
                            rounded="xl"
                            widthFull
                        >
                            Phiêu lưu
                        </Button>
                        <Button
                            size="sm"
                            type="secondary"
                            rounded="xl"
                            widthFull
                        >
                            Kịch tính
                        </Button>
                        <Button
                            size="sm"
                            type="secondary"
                            rounded="xl"
                            widthFull
                        >
                            Kinh dị
                        </Button>
                        <Button
                            size="sm"
                            type="secondary"
                            rounded="xl"
                            widthFull
                        >
                            Viễn tưởng
                        </Button>
                        <Button
                            size="sm"
                            type="secondary"
                            rounded="xl"
                            widthFull
                        >
                            Khác
                        </Button>
                    </div>
                </div>
                <div className="mb-4 flex items-center">
                    <p className="w-fit text-sm dark:text-white">Quốc gia</p>
                    <div className="mx-2 flex gap-2 flex-wrap flex-1">
                        <Button size="sm" type="sub" rounded="xl" widthFull>
                            Tất cả quốc gia
                        </Button>
                        <Button
                            size="sm"
                            type="secondary"
                            rounded="xl"
                            widthFull
                        >
                            Việt Nam
                        </Button>
                        <Button
                            size="sm"
                            type="secondary"
                            rounded="xl"
                            widthFull
                        >
                            Anh
                        </Button>
                        <Button
                            size="sm"
                            type="secondary"
                            rounded="xl"
                            widthFull
                        >
                            Mỹ
                        </Button>
                        <Button
                            size="sm"
                            type="secondary"
                            rounded="xl"
                            widthFull
                        >
                            Hàn Quốc
                        </Button>
                        <Button
                            size="sm"
                            type="secondary"
                            rounded="xl"
                            widthFull
                        >
                            Hồng Kong
                        </Button>
                        <Button
                            size="sm"
                            type="secondary"
                            rounded="xl"
                            widthFull
                        >
                            Khác
                        </Button>
                    </div>
                </div>
                <div className="mb-4 flex items-center">
                    <p className="w-fit text-sm dark:text-white">
                        Năm phát hành
                    </p>
                    <div className="mx-2 flex gap-2 flex-wrap flex-1">
                        <Button size="sm" type="secondary" rounded="xl">
                            2023
                        </Button>
                        <Button size="sm" type="secondary" rounded="xl">
                            2023
                        </Button>
                        <Button size="sm" type="secondary" rounded="xl">
                            2023
                        </Button>
                        <Button size="sm" type="secondary" rounded="xl">
                            2023
                        </Button>
                        <Button size="sm" type="secondary" rounded="xl">
                            2023
                        </Button>
                        <Button size="sm" type="secondary" rounded="xl">
                            2023
                        </Button>
                    </div>
                </div>
                <div className="mb-4 flex items-center">
                    <p className="w-fit text-sm dark:text-white">Phụ đề</p>
                    <div className="mx-2 flex gap-2 flex-wrap flex-1">
                        <Button size="sm" type="sub" rounded="xl" widthFull>
                            Tất cả
                        </Button>
                        <Button
                            size="sm"
                            type="secondary"
                            rounded="xl"
                            widthFull
                        >
                            Tiếng Việt
                        </Button>
                        <Button
                            size="sm"
                            type="secondary"
                            rounded="xl"
                            widthFull
                        >
                            Tiếng Anh
                        </Button>
                        <Button
                            size="sm"
                            type="secondary"
                            rounded="xl"
                            widthFull
                        >
                            Khác
                        </Button>
                    </div>
                </div>
            </header>
            <main className="">
                <ListGrid />
            </main>
        </>
    );
}

export default Browse;
