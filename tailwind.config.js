/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**'],
  plugins: [require('tailwind-scrollbar')({ nocompatible: true, preferredStrategy: 'pseudoelements' })],
  theme: {
    fontFamily: {

    },
    extend: {
      colors: {
        background: '#181818',
        background2: '#212121',
        background3: '#303030',
        background4: '#858585',
        background5: '#0f0f10',

        surface: '#2c2c2c',
        surface2: '#404040',
        surface3: '#555555',
        surface4: '#6a6a6a',

        light: '#ffffff',
        light2: '#f6f6f6',
        light3: '#dddddd',
        light4: '#dbdee3',

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

