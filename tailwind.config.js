/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        colors: {
            primary: '#d7682d',
            secondary: '#c7d571',
            tertiary: '#f0eee8',
            creme: '#f0eee8',
            darkgreen: '#0f2f2f',
            white: '#FFFFFF',
            black: '#000000',
            border: '#314648',
            msgBg: '#BCE0FD'
          },
        fontFamily: {
            serif: ['Athelas', 'serif'],
            sans: ['Open Sans', 'sans-serif'],
        },
    },
    plugins: [],
}