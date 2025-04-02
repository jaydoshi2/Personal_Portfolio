/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
      keyframes: {
        textRotate1: {
          '0%, 25%': { transform: 'translate3d(0, 0%, 0) rotateX(0deg)' },
          '33%, 92%': { transform: 'translate3d(0, -100%, 0) rotateX(-90deg)' },
          '100%': { transform: 'translate3d(0, 0%, 0) rotateX(0deg)' },
        },
        textRotate2: {
          '0%, 25%': { transform: 'translate3d(0, 100%, 0) rotateX(-90deg)' },
          '33%, 58%': { transform: 'translate3d(0, 0%, 0) rotateX(0deg)' },
          '66%, 100%': { transform: 'translate3d(0, 100%, 0) rotateX(-90deg)' },
        },
        textRotate3: {
          '0%, 58%': { transform: 'translate3d(0, 100%, 0) rotateX(-90deg)' },
          '66%, 92%': { transform: 'translate3d(0, 0%, 0) rotateX(0deg)' },
          '100%': { transform: 'translate3d(0, 100%, 0) rotateX(-90deg)' },
        },
      },
      animation: {
        textRotate1: 'textRotate1 5s infinite alternate',
        textRotate2: 'textRotate2 5s infinite alternate',
        textRotate3: "textRotate3 5s infinite alternate",
      },
      fontSize: {
        title: '2rem',
        subtitle: '1.5rem',
      },
    },
  },
  plugins: [],
};
