<template lang="pug">
header.header
    .container.header-wrapper
        nuxt-link.header__logo.img-full(to='/')
            img(src='../assets/img/logo.png', alt='invertory logo')
        top-menu
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import topMenu from '~/components/top-menu.vue';

export default defineComponent({
    name: 'app-header',
    components: {
        topMenu,
    },
});
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
    }

    &__logo {
        display: block;
        flex-shrink: 0;
        width: 150px;
        height: 49px;
        margin-right: 152px;
    }
}
</style>
