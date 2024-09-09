/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: 'selector',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true
    },
    extend: {
      screens: {
        'xs': '400px'
      },
      dropShadow: {
        'custom': '0 0 1px black',
      },
      colors: { 'bailant-red': "#FF4757" },
      maxWidth: {
        '32': '8rem',
        '80': '20rem',
      },
      minHeight: {
        '65': '65px',
        'custom-main': 'calc(100% - (65px))'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontSize: {
        'xxxs': '.5rem',
        'xxs': '.65rem',
      },
      height: {
        '1/20': "5%",
        '2/20': "10%",
        '3/20': "15%",
        '4/20': "20%",
        '5/20': "25%",
        '6/20': "30%",
        '7/20': "35%",
        '8/20': "40%",
        '9/20': "45%",
        '10/20': "50%",
        '11/20': "55%",
        '12/20': "60%",
        '13/20': "65%",
        '14/20': "70%",
        '15/20': "75%",
        '16/20': "80%",
        '17/20': "85%",
        '18/20': "90%",
        '19/20': "95%",
        'custom-nav': '65px',
        'custom-main': 'calc(100% - (65px))',
        'custom-main-full': 'calc(100vh - (65px))',
        'custom-main-mobile': 'calc(100vh - (100px))',
      },
      zIndex: {
        '0': 0,
        '1': 1,
        '2': 2,
        '3': 3,
        '4': 4,
        '5': 5,
        '10': 10,
        '20': 20,
        '30': 30,
        '40': 40,
        '50': 50,
        '25': 25,
        '75': 75,
        '100': 100,
        '990': 990,
        '991': 991,
        '992': 992,
        '993': 993,
        '994': 994,
        '995': 995,
        '996': 996,
        '997': 997,
        '998': 998,
        '999': 999,
        'auto': 'auto',
      }
    },

  }
}
