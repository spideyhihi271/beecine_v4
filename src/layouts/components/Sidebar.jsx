import React from 'react';
import { NavLink } from 'react-router-dom';
import configs from '../../configs';

function Sidebar({ scaling }) {
    const navigators = [
        {
            title: 'MENU',
            contents: [
                {
                    icon: <i class="fa-light fa-house-blank"></i>,
                    title: 'Trang chủ',
                    to: configs.routes.home,
                },
                {
                    icon: <i className="fa-light fa-compass"></i>,
                    title: 'Khám phá',
                    to: configs.routes.explore,
                },
                {
                    icon: <i className="fa-light fa-grid-2"></i>,
                    title: 'Duyệt tìm phim',
                    to: configs.routes.browse,
                },
                {
                    icon: <i className="fa-light fa-clock"></i>,
                    title: 'Sắp ra mắt',
                    to: configs.routes.comming,
                },
                {
                    icon: <i className="fa-sharp fa-light fa-coin-front"></i>,
                    title: 'Gói dịch vụ',
                    to: configs.routes.pricing,
                },
            ],
        },
        {
            title: 'THƯ VIỆN',
            contents: [
                {
                    icon: <i className="fa-light fa-album"></i>,
                    title: 'Thư viện',
                    to: configs.routes.library,
                },
                {
                    icon: <i className="fa-light fa-bookmark"></i>,
                    title: 'Danh sách của bạn',
                    to: configs.routes.saved,
                },
                {
                    icon: <i className="fa-light fa-clock-rotate-left"></i>,
                    title: 'Phim đã xem',
                    to: configs.routes.history,
                },
                {
                    icon: <i className="fa-light fa-circle-down"></i>,
                    title: 'Tải xuống',
                    to: '',
                },
            ],
        },
        {
            title: 'TỔNG QUAN',
            contents: [
                {
                    icon: <i className="fa-light fa-circle-info"></i>,
                    title: 'Hướng dẫn',
                    to: '',
                },
                {
                    icon: <i className="fa-light fa-gear"></i>,
                    title: 'Cài đặt',
                    to: configs.routes.setting,
                },
            ],
        },
    ];

    const navigatorsSm = [
        {
            to: configs.routes.home,
            title: <i className="fa-light fa-grid-2"></i>,
        },
        {
            to: configs.routes.library,
            title: <i className="fa-light fa-compass"></i>,
        },
        {
            to: configs.routes.search,
            title: <i class="fa-light fa-magnifying-glass"></i>,
        },
        {
            to: configs.routes.browse,
            title: <i className="fa-light fa-grid-2"></i>,
        },
        {
            to: configs.routes.history,
            title: <i className="fa-light fa-clock-rotate-left"></i>,
        },
    ];
    return (
        <>
            <aside
                className={`hidden lg:block transition-all ${
                    scaling ? 'p-3 w-60' : 'p-1 w-16'
                }`}
            >
                <nav>
                    {navigators.map((item, idx) => (
                        <div className="mb-4">
                            {scaling && (
                                <p className="pl-3 text-sm text-gray-500">
                                    {item.title}
                                </p>
                            )}
                            {item.contents.map((nav, idx) => (
                                <NavLink to={nav.to} key={idx}>
                                    <div
                                        className={`flex items-center h-12 dark:text-white hover:bg-secondaryLight dark:hover:bg-secondaryDark rounded-md cursor-pointer transition-all ${
                                            scaling ? '' : 'justify-center'
                                        }`}
                                    >
                                        <p className="text-center text-lg w-10">
                                            {nav.icon}
                                        </p>
                                        {scaling && (
                                            <p className="ml-2 text-sm">
                                                {nav.title}
                                            </p>
                                        )}
                                    </div>
                                </NavLink>
                            ))}
                        </div>
                    ))}
                </nav>
            </aside>
            <aside className="lg:hidden fixed bottom-2 left-0 right-0 z-50 ">
                <div className="mx-auto flex items-center justify-around h-14 w-[90%] bg-bgDark dark:bg-white rounded-full">
                    {navigatorsSm.map((item, idx) => (
                        <NavLink
                            key={idx}
                            to={item.to}
                            className={({ isActive }) =>
                                isActive
                                    ? 'text-xl flex items-center justify-center w-10 h-10 bg-white text-black dark:text-white dark:bg-black rounded-full'
                                    : 'text-2xl flex items-center justify-center w-10 h-10 text-white dark:text-black'
                            }
                        >
                            {item.title}
                        </NavLink>
                    ))}
                </div>
            </aside>
        </>
    );
}

export default Sidebar;
