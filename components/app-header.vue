<template lang="pug">
header.header
    .container
        a.header__logo(href='!#')
            img(src='../assets/img/logo.png', alt='invertory logo')
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'app-header',
});
</script>

<style scoped lang="scss">
.header {
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    padding: 12px 0;
    z-index: 1;
    background-color: $white;
    box-shadow: 0px 3px 40px 0px $product-serial-color;
    min-height: 75px;

    &__logo {
        display: block;
        width: 150px;
        height: 49px;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
}
</style>