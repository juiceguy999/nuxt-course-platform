// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    ['@vueuse/nuxt', {}],
    ['@nuxtjs/supabase', {
      redirect: false
    }],
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@nuxtjs/tailwindcss'
  ],
  css: [
    '~/assets/css/main.css',
  ],
}) 
