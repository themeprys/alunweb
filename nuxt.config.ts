// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    app: {
        head: {
            link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }]
        }
    },
    nitro: {
        preset: 'node-server'
    },
    buildDir: 'nuxt-dist',
})
