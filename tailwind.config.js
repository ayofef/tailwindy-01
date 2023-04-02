/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            backgroundImage: {
                "sidebar-desktop": "url('/bg-sidebar-desktop.svg')",
            },
            colors: {
                blue: {
                    ...require("tailwindcss/colors").blue,
                    400: "hsl(213, 96%, 18%)",
                    300: "hsl(243, 100%, 62%)",
                    200: "hsl(228, 100%, 84%)",
                    100: "hsl(206, 94%, 87%)",
                },
                red: {
                    ...require("tailwindcss/colors").red,
                    400: "hsl(354, 84%, 57%)",
                },
                grey: {
                    ...require("tailwindcss/colors").gray,
                    400: "hsl(231, 11%, 63%)",
                    300: "hsl(229, 24%, 87%)",
                    200: "hsl(217, 100%, 97%)",
                    100: "hsl(231, 100%, 99%)",
                },
            },
        },
    },
    plugins: [require("@tailwindcss/forms")],
};
