// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/ui', "@nuxt/image", '@pinia/nuxt', '@nuxtjs/apollo'],
  runtimeConfig: {
    public: {
      appwriteProjectID: process.env.APPWRITE_PROJECT_ID ?? "I shouldn't work"
    }
  },
  css: [
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],
  apollo: {
    clients: {
      default: {
        httpEndpoint: 'https://rickandmortyapi.com/graphql'
      }
    },
  },
})