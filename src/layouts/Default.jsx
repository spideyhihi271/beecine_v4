import React, { useEffect, useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';

function Default({ children }) {
    const [darkMode, setDarkMode] = useState(true);
    const [scaling, setScaling] = useState(true);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
            document.documentElement.classList.remove('light');
        } else {
            document.documentElement.classList.add('light');
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

    return (
        <div className="w-screen h-screen flex flex-col bg-bgLight dark:bg-bgDark">
            <Header
                scaling={scaling}
                handelScaling={() => {
                    setScaling(!scaling);
                }}
            />
            <main className="flex-1 flex lg:pr-3 lg:px-0 px-1">
                <Sidebar scaling={scaling} />
                <main className="lg:pl-5 flex-1 max-h-[90vh] overflow-y-auto">
                    {children}
                </main>
            </main>
            <button
                className="fixed z-50 bottom-20 right-8 w-10 h-10 rounded-full "
                onClick={() => setDarkMode(!darkMode)}
            >
                Dark
            </button>
        </div>
    );
}

export default Default;
