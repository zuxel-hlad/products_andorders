<template lang="pug">
.products-list
    product-item
    product-item
    product-item
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import productItem from '~/components/product-item.vue';
export default defineComponent({
    name: 'products-list',
    components: { productItem },
});
</script>

<style scoped lang="scss">
.products-list {
    width: 2606px;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
}
</style>
