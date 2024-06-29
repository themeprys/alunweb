// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    app: {
        head: {
            link: [
                { rel: 'icon', type: 'image/png', href: '/favicon.png' },
                { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@100;300;400;500;700;900&display=swap'},
                { rel: 'stylesheet', href: '/assets/main.css'}                
            ],  

        },        
    },
    nitro: {
        preset: 'vercel-edge',
      },    
})
