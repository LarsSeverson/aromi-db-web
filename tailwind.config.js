/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**'],
  plugins: [require('tailwind-scrollbar')({ nocompatible: true, preferredStrategy: 'pseudoelements' })],
  theme: {
    fontFamily: {

    },
    extend: {
      colors: {
        background: '#ffffff',
        background2: '#f6f6f6',
        background3: '#eeeeee',
        background4: '#dddddd',
        background5: '#f9f9fa',

        surface: '#f2f2f2',
        surface2: '#e5e5e5',
        surface3: '#d9d9d9',
        surface4: '#cccccc',

        dark: '#000000',
        dark2: '#1a1a1a',
        dark3: '#2c2c2c',
        dark4: '#404040',

        primary: '#C6471D',
        primary2: '#b2401a',
        primary3: '#9e3917',
        primary4: '#8b3214',
        primary5: '#772b11',
        primary6: '#63240f',
        primaryHover: '#b0431e'
      },
      boxShadow: {
        symmetrical: '0 0 10px rgba(0, 0, 0, 0.15)',
      },
      fontSize: {
        md: '0.92rem'
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        jp: ['"Noto Sans JP"', 'sans-serif']
      }
    },
  }
}

