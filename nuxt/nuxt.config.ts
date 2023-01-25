// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/strapi'],

  // https://github.com/nuxt/nuxt/issues/12748
  // https://github.com/vitejs/vite/issues/1925
  // vite: {
  //   server: {
  //     hmr: {
  //       protocol: 'wss',
  //       port: 22300,
  //       clientPort: 443,
  //       path: 'hmr/',
  //       timeout: 3,
  //     },
  //   }
  // },
  strapi: {
    // // Options
    // url: process.env.STRAPI_URL || 'http://localhost:1337',
    // prefix: '/api',
    // version: 'v4',
    // cookie: {},
    // cookieName: 'strapi_jwt'  
  }
})
