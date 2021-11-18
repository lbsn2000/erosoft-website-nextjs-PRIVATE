module.exports = {
    purge: ['./src/pages/**/*.{js,ts,jsx,tsx}',
        './src/components/**/*.{js,ts,jsx,tsx}',
        './src/svg/**/*.{js,ts,jsx,tsx}'
    ],
    darkMode: false,
    theme: {
        extend: {
            colors: {
                'erosoft-green-1': '#00A85A',
                'erosoft-green-2': '#22b14c',
                'erosoft-green-3': '#147e3d',
            },
        },
    },
    plugins: [],
}
