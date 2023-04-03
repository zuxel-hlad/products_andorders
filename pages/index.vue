<template lang="pug">
section
    coming-bar
    products-list
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import comingBar from '~/components/coming-bar.vue';
import productsList from '~/components/products-list.vue';
export default defineComponent({
    name: 'home',
    components: {
        comingBar,
        productsList,
    },
});
</script>
<style scoped lang="scss"></style>
