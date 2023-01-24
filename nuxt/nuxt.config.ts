// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/strapi'],
  strapi: {
    // Options
    url: process.env.STRAPI_URL || 'http://localhost:1337',
    prefix: '/api',
    version: 'v4',
    cookie: {},
    cookieName: 'strapi_jwt'  
  }
  // runtimeConfig: {
  //   strapi: { // nuxt/strapi options available server-side
  //     url: 'http://example-strapi-instance:1337'
  //   },
  //   public: {
  //     strapi: { // nuxt/strapi options available client-side
  //       url: 'https://strapi.example.com'
  //     }
  //   }
  // },
  // // nuxt/strapi options available on both client and server
  // strapi: {
  //   prefix: '/api'
  // }
  // // ...
})
