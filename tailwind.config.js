/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                mainColor: '#FB627D',
                bgLight: '#FFF',
                secondaryLight: '#F3F5F7',
                bgDark: '#141718',
                secondaryDark: '#232627',
                subDark: '#27292B',
                borderColor: '#2E3233',
            },
        },
    },
    plugins: [],
};
