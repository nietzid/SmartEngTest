const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Nunito', ...defaultTheme.fontFamily.sans],
            },
            fontFamily: {
                poppins: ['"Poppins"', 'cursive'],
            },
            colors: {
                'regal-blue': '#3E6D81',
            },
        },
    },

    plugins: [require('@tailwindcss/forms')],
};
