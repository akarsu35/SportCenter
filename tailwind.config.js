/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/images/hero-man.jpg')",
        'footer-texture': "url('/img/footer-texture.png')",
      },
      backgroundColor: {
        hoverColor: '#FB9912',
        btnColor: '#355592',
        heroBottom: '#F1F8FF',
        bgNavbar: '#355592',
      },
      height: {
        bgHeight: '80vh',
      },
      textColor: {
        btnColor: '#355592',
        menuColor: '#FB9912',
      },
      caretColor: {
        caretColor: '#FB9912',
      },
      focusColor: '#FB9912',
      borderColor: {
        'border-color': '#FB9912',
      },
      ringColor: {
        ringColor: '#355592',
      },
    },
  },
  plugins: [],
}
