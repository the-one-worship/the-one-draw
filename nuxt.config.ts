const isProd = process.env.NODE_ENV === 'production'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: isProd ? '/the-one-linked/' : '',
    head: {
      title: 'The One Draw',
      charset: 'utf-8',
      viewport:
        'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0',
    },
  },
  css: ['~/assets/styles/globals.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
