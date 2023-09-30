import React from 'react';
import { Link } from 'react-router-dom';

function Button({
    type = false,
    size = false,
    rounded = false,
    iconOnly = false,
    widthFull = false,
    styles = '',
    to = false,
    href = false,
    loading = false,
    children,
    leftIcon,
    rightIcon,
    onClick,
    disabled,

    ...passProps
}) {
    // Props
    const props = {
        onClick,
        ...passProps,
    };

    // Remove event listener when btn is disabled
    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }

    // Check type
    let Comp = 'button';
    let defaultClasses = '';
    if (to) {
        props.to = to;
        Comp = Link;
        defaultClasses = 'flex item-center';
    } else if (href) {
        props.href = href;
        Comp = 'a';
        defaultClasses = 'flex item-center';
    }

    // Size
    let sizeClasses = 'h-10 w-24';
    if (size == 'lg' && !iconOnly) sizeClasses = 'h-12 min-w-[96px]';
    else if (size == 'sm' && !iconOnly) sizeClasses = 'h-8 w-16';
    else if (iconOnly && size == 'lg') sizeClasses = 'h-12 w-12';
    else if (iconOnly && size == 'sm') sizeClasses = 'h-8 w-8';
    else if (iconOnly) sizeClasses = 'h-10 w-10';

    if (widthFull) sizeClasses += 'w-full';

    // Type
    let typeBtn = 'bg-mainColor text-white shadow-md hover:bg-mainColor/95';
    if (type == 'secondary')
        typeBtn =
            'dark:text-white justify-center border border-[1px] border-borderColor/50 dark:border-borderColor rounded-full hover:bg-secondaryLight dark:hover:bg-borderColor';
    else if (type == 'third')
        typeBtn =
            'dark:text-white hover:bg-secondaryLight dark:hover:bg-secondaryDark';
    else if (type == 'sub')
        typeBtn =
            'dark:text-white border dark:border-transparent dark:bg-borderColor/90 hover:bg-secondaryLight dark:hover:bg-borderColor';
    else if (type == 'four') typeBtn = 'text-white  hover:bg-borderColor';
    else if (type == 'danger') typeBtn = '';

    // Disable

    return (
        <Comp
            className={
                'block px-2 transition-all ' +
                defaultClasses +
                ' ' +
                'rounded-' +
                rounded +
                ' ' +
                sizeClasses +
                ' ' +
                typeBtn
            }
            {...props}
        >
            {loading && (
                <p className="w-8  text-sm ">
                    <i className="fa-thin fa-circle-notch fa-spin"></i>
                </p>
            )}
            {leftIcon && !loading && (
                <span className="mr-2 text-lg">{leftIcon}</span>
            )}
            <span className={iconOnly ? 'text-lg' : 'text-sm'}>{children}</span>
            {rightIcon && <span className="ml-2 text-lg">{rightIcon}</span>}
        </Comp>
    );
}

export default Button;
