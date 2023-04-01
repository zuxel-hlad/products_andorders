// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            title: 'dZENcode Test Task',
        },
        pageTransition: {
            name: 'fade',
            mode: 'out-in',
        },
    },
    plugins: [{ src: '~/plugins/height.ts', mode: 'client' }],
    css: ['~/assets/scss/styles.scss'],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: `
                    @import "~/assets/scss/_variables.scss"; 
                    @import "~/assets/scss/_functions.scss";
                    `,
                },
            },
        },
    },
});
