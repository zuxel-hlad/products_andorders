// https://nuxt.com/docs/api/configuration/nuxt-config
import locales from './locales';
export default defineNuxtConfig({
    app: {
        pageTransition: {
            name: 'fade',
            mode: 'out-in',
        },
    },
    plugins: [
        { src: '~/plugins/height.ts', mode: 'client' },
        { src: '~/plugins/socket-io.ts', mode: 'client' },
    ],
    css: ['~/assets/scss/styles.scss'],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: `
                        @import "~/assets/scss/_variables.scss"; 
                    `,
                },
            },
        },
    },
    modules: ['@pinia/nuxt', '@nuxtjs/i18n'],
    i18n: {
        vueI18n: {
            legacy: false,
            locale: 'ua',
            fallbackLocale: 'ua',
            messages: { ...locales },
        },
        locales: [
            {
                code: 'en',
                name: 'English',
            },
            {
                code: 'ua',
                name: 'Ukranian',
                isCatchallLocale: true,
            },
        ],
        defaultLocale: 'ua',
        detectBrowserLanguage: false,
    },
    components: false,
});
