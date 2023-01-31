const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: "jit",
    content: ["./pages/**/*.tsx", "./components/**/*.tsx"],
    theme: {
        extend: {
            screens: {
                "phone-lg": {
                    max: "900px",
                },
                phone: {
                    max: "768px",
                },
            },

            colors: {
                primary: {
                    100: "#15536a",
                    200: "#1d7595",
                    300: "#09aaaa",
                    400: "#2697c0",
                    500: "#3fb0d9",
                    600: "#6ac2e2",
                    700: "#95d3ea",
                    800: "#bfe5f2",
                    900: "#d4ecf7",
                    950: "#eaf6fb",
                    DEFAULT: "#09aaaa",
                },

                secondary: {
                    200: "#AF4B67",
                    DEFAULT: "#C06C84",
                    500: "#d194a5",
                    700: "#f0dbe1",
                },
            },
        },
    },
    plugins: [],
    darkMode: false,
};
