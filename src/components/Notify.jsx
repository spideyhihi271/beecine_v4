import React from 'react';
import Tippy from '@tippyjs/react/headless';
import { Link } from 'react-router-dom';

function Notify({ children, show, onClickOutside }) {
    return (
        <Tippy
            interactive
            appendTo={() => document.body}
            visible={show}
            placement="bottom-end"
            onClickOutside={onClickOutside}
            render={(attrs) => (
                <div className="box" tabIndex="-1" {...attrs}>
                    <div className="p-4 w-96 rounded-lg bg-white dark:text-white dark:bg-secondaryDark shadow-md">
                        <header className="flex items-center justify-between dark:text-white">
                            <p>Thông báo</p>
                            <button>
                                <i className="fa-light fa-gear"></i>
                            </button>
                        </header>
                        <main className="my-4 ">
                            <Link>
                                <div className="p-2 mb-2 flex items-center hover:bg-secondaryLight dark:hover:bg-bgDark transition-colors">
                                    <img
                                        className="w-20 h-12 object-cover"
                                        src="https://i.ytimg.com/vi/QF-oyCwaArU/maxresdefault.jpg"
                                        alt=""
                                    />
                                    <div className="mx-2 flex-1">
                                        <p className="mb-2 text-sm">
                                            The Nun 2 đã ra mắt! Xem ngay
                                        </p>
                                        <p className=" text-xs text-gray-500">
                                            Lorem ipsum dolor sit amet
                                            consectetur, adipisicing elit.
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        </main>
                    </div>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Notify;
