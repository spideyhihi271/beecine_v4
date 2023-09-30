import React, { useState } from 'react';

import Search from '../components/Search';
import Button from '../../components/Button';
import Notify from '../../components/Notify';
import Submenu from '../../components/SubMenu';

function Header({ scaling, handelScaling }) {
    // Default
    const actions = [
        {
            title: 'Thông tin tài khoản',
            icon: <i className="fa-light fa-user"></i>,
            handle: () => {
                navigate(config.routes.profile);
                setActiveLogger(false);
            },
        },
        {
            title: 'Video đã xem',
            icon: <i className="fa-light fa-clock-rotate-left"></i>,
            handle: () => {
                navigate(config.routes.history);
                setActiveLogger(false);
            },
        },
        {
            title: 'Cài đặt',
            icon: <i className="fa-light fa-gear"></i>,
            handle: () => {},
        },
        {
            title: 'Điều khoản sử dụng',
            icon: <i className="fa-light fa-shield-check"></i>,
            handle: () => {},
        },
        {
            title: 'Trợ giúp',
            icon: <i className="fa-light fa-circle-info"></i>,
            handle: () => {},
        },
        {
            title: 'Đăng xuất',
            icon: <i className="fa-light fa-right-from-bracket"></i>,
            handle: () => {
                dispath(loginClear());
                setActiveLogger(false);
            },
        },
    ];

    // State
    const [showNotify, setShowNotify] = useState(false);
    const [showUser, setShowUser] = useState(false);

    return (
        <header className="px-3 h-16 lg:h-20 flex items-center">
            <div className="flex items-center w-[228px]">
                <div className="hidden lg:block">
                    <Button
                        type="four"
                        iconOnly
                        rounded="full"
                        onClick={handelScaling}
                    >
                        <i className="fa-light fa-bars"></i>
                    </Button>
                </div>
                <img
                    className={`h-8 ${scaling ? '' : 'lg:mx-5'}`}
                    src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_Green.png"
                    alt=""
                />
            </div>
            <div className="hidden lg:block flex-1 px-5">
                <Search />
            </div>
            <div className="w-60 flex items-center justify-end">
                <Notify
                    show={showNotify}
                    onClickOutside={() => setShowNotify(false)}
                >
                    <button
                        onClick={() => setShowNotify(!showNotify)}
                        className="mx-2 w-10 h-10 rounded-full text-xl dark:text-white hover:bg-secondaryLight dark:hover:bg-secondaryDark"
                    >
                        <i className="fa-light fa-bell"></i>
                    </button>
                </Notify>
                <button
                    onClick={() => setShowNotify(!showNotify)}
                    className="hidden lg:block mx-2 w-10 h-10 rounded-full text-xl dark:text-white hover:bg-secondaryLight dark:hover:bg-secondaryDark"
                >
                    <i className="fa-light fa-grid-2"></i>
                </button>
                <Submenu
                    actions={actions}
                    show={showUser}
                    onClickOutside={() => setShowUser(false)}
                >
                    <button onClick={() => setShowUser(!showUser)}>
                        <img
                            className="mx-2 w-8 h-8 rounded-full "
                            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                            alt=""
                        />
                    </button>
                </Submenu>
            </div>
        </header>
    );
}

export default Header;
