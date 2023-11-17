import colors from 'tailwindcss/colors'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    colors: {
      transparent: colors.transparent,
      current: colors.current,
      inherit: colors.inherit,
      black: 'rgb(var(--color-black) / <alpha-value>)',
      white: colors.white,
      accent: colors.white,
      'input-background': 'rgb(var(--color-input-background) / <alpha-value>)',
      background: 'rgb(var(--color-background) / <alpha-value>)',
      red: colors.red,
      primary: {
        DEFAULT: 'rgb(var(--color-primary) / <alpha-value>)',
        light: 'rgb(var(--color-primary-light) / <alpha-value>)',
        dark: 'rgb(var(--color-primary-dark) / <alpha-value>)',
      },
      secondary: {
        DEFAULT: 'rgb(var(--color-secondary) / <alpha-value>)',
        light: 'rgb(var(--color-secondary-light) / <alpha-value>)',
        dark: 'rgb(var(--color-secondary-dark) / <alpha-value>)',
      },
    },
    extend: {
      zIndex: {
        1: '1',
        2: '2',
        3: '3',
        4: '4',
        5: '5',
        6: '6',
        7: '7',
        8: '8',
        9: '9',
        header: '10',
      },
      borderRadius: {
        inherit: 'inherit',
      },
    },
  },
  plugins: [],
}
