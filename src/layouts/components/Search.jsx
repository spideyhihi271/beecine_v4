import React, { useEffect, useState } from 'react';
import Tippy from '@tippyjs/react/headless';

function Search() {
    const results = [
        {
            icon: <i className="fa-light fa-magnifying-glass"></i>,
            title: 'Lục đại nguyên tố',
            handle: () => {},
        },
        {
            icon: <i className="fa-light fa-magnifying-glass"></i>,
            title: 'Bánh mì',
            handle: () => {},
        },
        {
            icon: <i className="fa-light fa-magnifying-glass"></i>,
            title: 'Hủ tiếu nam vang',
            handle: () => {},
        },
        {
            icon: <i className="fa-light fa-magnifying-glass"></i>,
            title: 'Bún riêu cua',
            handle: () => {},
        },
    ];
    const [keyword, setKeyword] = useState('');
    const [showResult, setShowResult] = useState(false);

    useEffect(() => {
        if (keyword.length > 0) {
            setShowResult(true);
        } else {
            setKeyword(false);
        }
    }, [keyword]);

    return (
        <Tippy
            interactive
            appendTo={() => document.body}
            visible={showResult}
            onClickOutside={() => setShowResult(false)}
            render={(attrs) => (
                <div className="box" tabIndex="-1" {...attrs}>
                    <section className="w-96 bg-white dark:text-white dark:bg-secondaryDark shadow-md overflow-hidden rounded-md">
                        {results.map((item, idx) => (
                            <button
                                key={idx}
                                className="flex items-center w-full h-12 hover:bg-secondaryLight dark:hover:bg-bgDark transition-colors"
                            >
                                <span className="w-10">{item.icon}</span>
                                <span className="text-sm">{item.title}</span>
                            </button>
                        ))}
                    </section>
                </div>
            )}
        >
            <div className="w-96 h-10 flex items-center rounded-xl bg-secondaryLight dark:bg-secondaryDark">
                <button className="w-8 h-8 dark:text-white">
                    <i className="fa-light fa-magnifying-glass"></i>
                </button>
                <input
                    className="flex-1 text-sm dark:text-white bg-transparent"
                    type="text"
                    onChange={(e) => setKeyword(e.target.value)}
                    placeholder="Tìm kiếm phim, diễn viên,..."
                />
                {keyword.length >= 1 && (
                    <button
                        className="w-8 h-8 dark:text-white"
                        onClick={() => setKeyword('')}
                    >
                        <i className="fa-light fa-xmark"></i>
                    </button>
                )}
            </div>
        </Tippy>
    );
}

export default Search;
