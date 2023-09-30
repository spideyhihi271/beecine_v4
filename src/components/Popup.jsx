import React from 'react';

function Popup({ children, visible, setVisible }) {
    return (
        <>
            {visible && (
                <div className="fixed top-0 left-0 w-screen h-screen z-[9999]">
                    <div
                        className="absolute inset-0 z-0 bg-black/20"
                        onClick={() => setVisible(!visible)}
                    ></div>
                    <div className="absolute z-10 left-1/2 translate-x-[-50%] lg:top-10 h-[95vh] overflow-y-auto bg-bgDark rounded-xl overflow-hidden transition-all animate-fade-up">
                        {children}
                    </div>
                </div>
            )}
        </>
    );
}

export default Popup;
