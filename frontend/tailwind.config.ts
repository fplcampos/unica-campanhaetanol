import type { Config } from 'tailwindcss'
 
const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
        screens: {
        'sm': '375px',
        'md': '640px',
        'lg': '1025px',
        'xl': '1024px',
        '2xl': '1140px',
      },
      center: true,
    },
    extend: {
      backgroundImage: {
        'banner': "url('/images/imgBanner.png')",
        'quiz': "url('/images/quiz.png)",
      },
      fontFamily: {
        prometo: ['var(--font-prometo)'],
        serif: ['sans-serif']
      },
      colors: {
        'aqua': '#A9F9DD',
        'aqua-light': '#A9F9DD80',
        'blue': '#006A80',
        'green': '#00912C',
        'green-result': '#87E976',
        'dark-green': '#002E38',
        'medium-green': '#00817A',
        'moss-green': '#00BCB8',
        'light-yellow': '#FFF5A2',
        'menu-hover': '#F0F1BA',
      },
      borderRadius: {
        'lg': '17rem',
        'xl': '1.88rem',
      },
      fontSize: {
        '5xl': '3.5rem',
      },
      spacing: {
        '30': '7.2rem',
        '34': '8.2rem'
      }
    },
  },
  plugins: [],
}
export default config
