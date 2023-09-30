import React from 'react';
import { Link } from 'react-router-dom';

import images from '../assets/images';
import Button from './Button';

function MovieInfo() {
    return (
        <div className="mb-5 w-full">
            <header className="flex flex-wrap">
                <div className="flex-1 dark:text-white">
                    <p className="text-gray-500">
                        Demon Slayer: Kimetsu no Yaiba Mugen Train Arc
                    </p>
                    <h3 className="my-2 text-xl font-medium">
                        Thanh Gươm Diệt Quỷ S2 - Kỹ Viện Trấn (Lồng tiếng) - Tập
                        1: Âm trụ Uzui Tengen
                    </h3>
                    <div className="flex items-center text-sm">
                        <div className="flex items-center">
                            <img
                                className="w-5 h-5 object-contain"
                                src={images.tomato}
                                alt=""
                            />
                            <p className="mx-1">8.2</p>
                        </div>
                        <p className="mx-5">64.572 lượt xem</p>
                    </div>
                </div>
                <div className="my-2 lg:my-0 w-full lg:w-60 flex lg:justify-end">
                    <Button rounded="full" iconOnly type="four">
                        <i class="fa-solid fa-heart"></i>
                    </Button>
                    <Button rounded="full" iconOnly type="four">
                        <i class="fa-solid fa-bookmark"></i>
                    </Button>
                    <Button rounded="full" iconOnly type="four">
                        <i class="fa-regular fa-share"></i>
                    </Button>
                </div>
            </header>
            <main>
                <p className="my-2 text-sm text-gray-500">
                    Bạo lực, kinh dị, hành vi nguy hiểm, dễ bắt chước
                </p>
                <p className="my-2 text-sm text-gray-500">
                    Nhóm của Tanjirou được giao cho nhiệm vụ tiêu diệt con quỷ
                    trên Chuyến Tàu Vô Tận cùng Viêm Đại Trụ Rengoku. Chuyến
                    hành trình bất ngờ không những khiến Tanjirou phải đối mặt
                    với sự dằn vặt về một cuộc sống yên bình mà cậu đã đánh mất,
                    mà còn hé lộ những bí mật về sức mạnh và tiềm lực thực sự
                    của bản thân.
                </p>
                <div className="my-2">
                    <p className="mb-2 dark:text-white text-lg font-semibold">
                        Thông tin thêm
                    </p>
                    <div className="mb-2 flex flex-wrap text-sm">
                        <p className="mr-2 text-gray-500">Phân loại dộ tuổi:</p>
                        <Link className="mr-1 dark:text-white hover:underline">
                            18+
                        </Link>
                    </div>
                    <div className="mb-2 flex flex-wrap text-sm">
                        <p className="mr-2 text-gray-500">
                            Phân loại nội dung:
                        </p>
                        <Link className="mr-1 dark:text-white hover:underline">
                            Bạo lực,
                        </Link>
                        <Link className="mr-1 dark:text-white hover:underline">
                            Tự tử,
                        </Link>
                        <Link className="mr-1 dark:text-white hover:underline">
                            Máu me,
                        </Link>
                        <Link className="mr-1 italic  dark:text-white hover:underline">
                            thêm...
                        </Link>
                    </div>
                    <div className="mb-2 flex flex-wrap text-sm">
                        <p className="mr-2 text-gray-500">Diễn viên:</p>
                        <Link className="mr-1 dark:text-white hover:underline">
                            Takaguza Itachi,
                        </Link>
                        <Link className="mr-1 dark:text-white hover:underline">
                            Takaguza Itachi,
                        </Link>
                        <Link className="mr-1 dark:text-white hover:underline">
                            Takaguza Itachi,
                        </Link>
                        <Link className="mr-1 italic  dark:text-white hover:underline">
                            thêm...
                        </Link>
                    </div>
                    <div className="mb-2 flex flex-wrap text-sm">
                        <p className="mr-2 text-gray-500">Đạo diễn:</p>
                        <Link className="mr-1 dark:text-white hover:underline">
                            Takaguza Itachi
                        </Link>
                    </div>
                    <div className="mb-2 flex flex-wrap text-sm">
                        <p className="mr-2 text-gray-500">Diễn viên:</p>
                        <Link className="mr-1 dark:text-white hover:underline">
                            Takaguza Itachi,
                        </Link>
                        <Link className="mr-1 dark:text-white hover:underline">
                            Takaguza Itachi,
                        </Link>
                        <Link className="mr-1 dark:text-white hover:underline">
                            Takaguza Itachi,
                        </Link>
                        <Link className="mr-1 italic  dark:text-white hover:underline">
                            thêm...
                        </Link>
                    </div>
                    <div className="mb-2 flex flex-wrap text-sm">
                        <p className="mr-2 text-gray-500">Thể loại:</p>
                        <Link className="mr-1 dark:text-white hover:underline">
                            Phim hoạt hình,
                        </Link>
                        <Link className="mr-1 dark:text-white hover:underline">
                            Hành động,
                        </Link>
                        <Link className="mr-1 dark:text-white hover:underline">
                            Kinh dị
                        </Link>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default MovieInfo;
