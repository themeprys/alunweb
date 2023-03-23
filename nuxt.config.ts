// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    app: {
        head: {
            link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }],
            
        },
        
    },
    modules: ['nuxt-gtag'],
    gtag: {
      id: 'G-2B33HH8Y84'
    }    
})
