// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/ui', "@nuxt/image"],
  runtimeConfig: {
    public: {
      appwriteProjectID: process.env.APPWRITE_PROJECT_ID ?? "I shouldn't work"
    }
  },
  css: [
    '@fortawesome/fontawesome-svg-core/styles.css'
  ]
})