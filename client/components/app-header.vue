<template lang="pug">
header.header
    .container.header-wrapper
        nuxt-link.header__logo.img-full(to='/')
            img(src='../assets/img/logo.png', alt='invertory logo')
        button.header__burger(
            type="button"
            @click="openMobileMenu"
            )
            i.fa-sharp.fa-solid.fa-bars
        top-menu
</template>

<script setup lang="ts">
import topMenu from '~/components/top-menu.vue';
import { useStore } from '~/store';

const { openMobileMenu } = useStore();
</script>

<style scoped lang="scss">
.header {
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    padding: 12px 0;
    z-index: 2;
    background-color: $white;
    box-shadow: 0px 3px 40px 0px $product-serial-color;
    min-height: 75px;

    &-wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;

        @media screen and (max-width: 576px) {
            align-items: flex-start;
        }
    }

    &__logo {
        display: block;
        flex-shrink: 0;
        width: 150px;
        height: 49px;
        margin-right: 152px;

        @media screen and (max-width: 992px) {
            margin-right: 15px;
        }

        @media screen and (max-width: 576px) {
            width: 120px;
            height: 40px;
        }
    }

    &__burger {
        position: absolute;
        width: 50px;
        height: 50px;
        padding: 0;
        display: none;
        justify-content: center;
        align-items: center;
        font-size: 40px;
        top: 55px;
        left: 5px;
        background: transparent;
        border: none;
        color: $dark;

        @media screen and (max-width: 576px) {
            display: flex;
        }
    }
}
</style>
