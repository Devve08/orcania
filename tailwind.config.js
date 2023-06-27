/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'my_bg_image' : "url('./assets/images/back.png')",
      },
      colors: {
        background: '#1A1B23',
        surface: '#282A37',
        input: '#323645',
        button: '#42BBFF',
        paragraph: '#C0C0C8'
      }
    },
  },
  plugins: [],
}
