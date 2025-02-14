/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,ts,jsx,tsx}",
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
      extend: {
        scrollBehavior: ["smooth"],
        fontFamily: {
          custom: ['Monserrat', 'sans-serif'],
          customMonserratBold: ['MonserratBold', 'sans-serif'],
          customMonserratMed: ['MonserratMed', 'sans-serif']
        },
        colors: {
          "primaryWhite": {
            default: "#FEFEFF"
          },  
          "orange": {
            default: "#C89038",
          },
          "primary-gray": {
            default: "#E5E2DE",
            "200": "#D1D1D1"
          },
          "primary-blue": {
            default: "#111B33",
            "200": "#2B334E"
          },        
        },
        screens: {
          sm: "640px",  
          md: "768px",  
          lg: "1024px", 
          xl: "1280px", 
          "2xl": "1536px"
        },
      },
    },
    plugins: [],
}