import React from 'react';
import Tippy from '@tippyjs/react/headless';

function Submenu({
    actions = [],
    children,
    show,
    placement = 'bottom-end',
    onClickOutside,
}) {
    return (
        <Tippy
            interactive
            appendTo={() => document.body}
            visible={show}
            placement={placement}
            onClickOutside={onClickOutside}
            render={(attrs) => (
                <div className="box" tabIndex="-1" {...attrs}>
                    <section className="relative w-52 bg-white dark:text-white dark:bg-secondaryDark shadow-md rounded-lg overflow-hidden">
                        {actions.map((item, idx) => (
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
            {children}
        </Tippy>
    );
}

export default Submenu;
