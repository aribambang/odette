module.exports = {
    mode: 'jit',
    purge: [
        './src/pages/**/*.{js,ts,jsx,tsx}',
        './src/components/**/*.{js,ts,jsx,tsx}',
    ],
    darkMode: false,
    theme: {
        extend: {
            backgroundImage: {
                'paper-texture': "url('/images/bg-all.jpg')",
                'flower-pattern': "url('/images/bg-card.jpg')",
            },
            backgroundSize: {
                '50%': '50%',
                '80%': '80%',
            },
            boxShadow: {
                nav: '0 -1px 2px 0 rgba(0, 0, 0, 0.05)',
            },
            colors: {
                'theme-orange': '#c08b3c',
            },
            fontFamily: {
                title: ['Overlock', 'cursive'],
                body: [
                    '"Open Sans"',
                    'ui-sans-serif',
                    'system-ui',
                    '-apple-system',
                ],
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [require('@tailwindcss/aspect-ratio')],
};
