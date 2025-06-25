import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss()
    ]
  },
  app: {
    baseURL: '/my-portfolio/', // baseURL: '/<repository>/'
    buildAssetsDir: 'assets', // don't use "_" at the begining of the folder name to avoids nojkill conflict
    head: {
      link: [
        { rel: 'preconnect', href: 'https://rsms.me/' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: "" },
        { rel: 'stylesheet', href: 'https://rsms.me/inter/inter.css' },
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/odometer.js/0.4.8/themes/odometer-theme-default.min.css' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Tiny5&display=swap' }
      ],
      script: [
        { src: 'https://cdnjs.cloudflare.com/ajax/libs/odometer.js/0.4.8/odometer.min.js' }
      ]
    },
    pageTransition: {
      name: 'page',
      mode: 'out-in'
    }
  },
  nitro: {
    preset: 'static'
  },
})
