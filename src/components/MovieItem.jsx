import React, { useState } from 'react';
import Submenu from '../components/SubMenu';
import images from '../assets/images';
import Button from './Button';
import Popup from './Popup';

function MovieItem({
    item,
    type = 0,
    remove = false,
    handlePopping = () => {},
}) {
    // Default
    let actions = [
        {
            icon: <i class="fa-light fa-circle-info"></i>,
            title: 'Thông tin chi tiết',
            handel: '',
        },
        {
            icon: <i className="fa-light fa-user"></i>,
            title: 'Lưu vào xem sau',
            handel: '',
        },
        {
            icon: <i class="fa-light fa-share"></i>,
            title: 'Chia sẻ',
            handel: '',
        },
    ];

    // State
    const [activeAction, setActiveAction] = useState(false);

    // TYPE
    let Content = (
        <div className="relative w-full h-40 dark:text-white rounded-xl overflow-hidden group cursor-pointer">
            <img
                className="absolute inset-0 z-0 w-full h-full object-cover"
                src="https://danviet.mediacdn.vn/296231569849192448/2022/4/8/mv5bmtjimzgwztktyzzhzc00yzhhlwezzdutmgm2nte4mzq4ngfmxkeyxkfqcgdeqwpybav1-1649412049769362683029.jpg"
                alt=""
            />
            <div className="absolute inset-0 z-10 w-full h-full bg-gradient-to-t from-black/30 to-black/0" />
            <div className="absolute z-20 left-2 top-2 p-[4px] flex bg-white/20 rounded-3xl">
                <p className="text-xs font-medium">#1 in Series</p>
                <img
                    className="ml-1 w-4 h-4 object-contain"
                    src={images.trending}
                    alt=""
                />
            </div>
            <div className="absolute z-20 top-2 right-2 opacity-0 group-hover:opacity-100 transition-all duration-[350ms]">
                <Submenu
                    actions={actions}
                    show={activeAction}
                    placement="bottom-start"
                    onClickOutside={() => setActiveAction(false)}
                >
                    <button
                        className=" w-7 h-7 rounded-full bg-white/20 text-white"
                        onClick={() => setActiveAction(!activeAction)}
                    >
                        <i className="fa-light fa-ellipsis-vertical"></i>
                    </button>
                </Submenu>
            </div>
            <div
                className="absolute z-20 left-2 bottom-2 translate-y-[110%] group-hover:translate-y-[0%] transition-all duration-[350ms]"
                onClick={handlePopping}
            >
                <h3 className="text-white text-sm">Breaking Bad</h3>
                <div className="flex items-center text-xs text-gray-300">
                    <p className="p-[6px] bg-black/50 rounded-xl">Hành động</p>
                    <p className="mx-2">2021</p>
                    <p>1h 30m</p>
                </div>
            </div>
        </div>
    );
    if (type == 1)
        Content = (
            <div className="mb-2 flex h-20">
                <img
                    className="w-28 h-full object-cover rounded-2xl"
                    src="https://danviet.mediacdn.vn/296231569849192448/2022/4/8/mv5bmtjimzgwztktyzzhzc00yzhhlwezzdutmgm2nte4mzq4ngfmxkeyxkfqcgdeqwpybav1-1649412049769362683029.jpg"
                    alt=""
                />
                <div className="mx-2 flex-1">
                    <header className="flex">
                        <div className="flex-1">
                            <h3 className="text-sm dark:text-white line-clamp-1">
                                Tập làm người xấu - Tập 2
                            </h3>
                            <p className="my-1 text-xs text-gray-500">
                                Breaking Bad
                            </p>
                            <div className="my-1 flex items-center text-xs text-gray-300">
                                <p>Hành động</p>
                                <p className="mx-2">2021</p>
                                <p>1h 30m</p>
                            </div>
                        </div>
                        <div className="w-fit flex gap-2 items-center">
                            {remove && (
                                <Button
                                    size="sm"
                                    rounded="full"
                                    type="sub"
                                    iconOnly
                                >
                                    <i class="fa-sharp fa-light fa-xmark"></i>
                                </Button>
                            )}
                            <Submenu
                                actions={actions}
                                show={activeAction}
                                placement="bottom-start"
                                onClickOutside={() => setActiveAction(false)}
                            >
                                <button
                                    className="w-8 h-8 dark:text-white justify-center border border-borderColor/50 dark:border-borderColor rounded-full hover:bg-secondaryLight dark:hover:bg-borderColor"
                                    type="secondary"
                                    onClick={() =>
                                        setActiveAction(!activeAction)
                                    }
                                >
                                    <i class="fa-light fa-ellipsis-vertical"></i>
                                </button>
                            </Submenu>
                        </div>
                    </header>
                </div>
            </div>
        );
    return Content;
}

export default MovieItem;
