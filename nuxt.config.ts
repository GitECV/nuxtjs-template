// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ['primevue/resources/themes/soho-dark/theme.css'],
  modules: ['nuxt-primevue'],
  primevue: {
    options: {
      ripple: true,
    },
    components: {
      include: ['InputText', 'Button', 'Toast'],
    },
  },
})
