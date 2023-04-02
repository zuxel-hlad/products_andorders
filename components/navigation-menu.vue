<template lang="pug">
aside.navigation-menu
    nuxt-link.navigation-menu__link(v-for='{ to, name, id } in links', :key='id', :to='to')
        span.navigation-menu__link-text.wrap-text {{ name }}
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'navigation-menu',
    data() {
        return {
            links: [
                {
                    name: 'Прихід',
                    to: '/',
                    id: 1,
                },
                {
                    name: 'Групи',
                    to: '/groups',
                    id: 2,
                },
                {
                    name: 'Продукти',
                    to: '/products',
                    id: 3,
                },
                {
                    name: 'Користувачі',
                    to: '/users',
                    id: 4,
                },
                {
                    name: 'Налаштування',
                    to: '/settings',
                    id: 5,
                },
            ],
        };
    },
});
</script>

<style scoped lang="scss">
.navigation-menu {
    padding: 0 12px;
    width: 197px;
    min-height: 100vh;
    height: calc(100 * var(--vh-menu));
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: $white;
    box-shadow: 3px 0px 40px 0px $product-serial-color;

    &__link {
        max-width: 100%;
        display: inline-block;
        text-decoration: none;
        text-align: center;
        padding: 16px 0;

        &-text {
            display: block;
            font-size: 16px;
            line-height: 120%;
            font-weight: 700;
            text-transform: uppercase;
            color: $dark;
            padding-bottom: 2px;
            border-bottom: 3px solid transparent;
            transition: border-color 0.25s;
            padding-bottom: 2px;
        }
        &.router-link-exact-active span {
            border-color: $main-green-color;
        }
    }
}
</style>
