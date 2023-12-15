import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'
import defaultTheme from 'tailwindcss/defaultTheme'
import plugin from 'tailwindcss/plugin'

const { screens } = defaultTheme

const sectionUtils = plugin(({ addUtilities, theme }) => {
  addUtilities([
    {
      '.section': {
        padding: theme('spacing.6'),
        width: '100%',
      },
      [`@media (min-width: ${screens.md})`]: {
        '.section': {
          'padding-right': theme('spacing.8'),
          'padding-left': theme('spacing.8'),
        },
      },
      '.section-max-w': {
        'margin-right': 'auto',
        'margin-left': 'auto',
        'max-width': screens.lg,
      },
      '.text-fill-transparent': {
        'background-clip': 'text',
        '-webkit-text-fill-color': 'transparent',
      },
    },
  ])
})

const linearGradientUtils = plugin(({ matchUtilities }) => {
  matchUtilities(
    {
      'bg-gradient-to-deg': value => ({
        'background-image': `linear-gradient(${value}deg, var(--tw-gradient-stops));`,
      }),
    },
    {
      values: Array.from({ length: 360 })
        .map((_, index) => index)
        .reduce(
          (collation, current) => {
            collation[current] = current
            return collation
          },
          {} as Record<string, number>
        ),
    }
  )
})

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'class',
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
        '1': '1',
        '2': '2',
        '3': '3',
        '4': '4',
        '5': '5',
        '6': '6',
        '7': '7',
        '8': '8',
        '9': '9',
        header: '10',
      },
      backgroundImage: {
        var: 'var(--bg-image, "");',
      },
      borderRadius: {
        inherit: 'inherit',
      },
    },
  },
  plugins: [sectionUtils, linearGradientUtils],
}
export default config
