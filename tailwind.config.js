/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: "jit",
    content: ["./pages/**/*.tsx", "./components/**/*.tsx"],
    theme: {
        extend: {
            colors: {
                primary: {
                    100: "#15536a",
                    200: "#1d7595",
                    300: "#09aaaa",
                    400: "#2697c0",
                    500: "#3fb0d9",
                    600: "#6ac2e2",
                    700: "#95d3ea",
                    700: "#bfe5f2",
                    800: "#d4ecf7",
                    900: "#eaf6fb",
                    DEFAULT: "#09aaaa",
                },
                secondary: "#C06C84",
            },
        },
    },
    plugins: [],
    darkMode: false,
};