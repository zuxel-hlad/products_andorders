<template lang="pug">
.products-list
    TransitionGroup(
        v-if="products.length"
        name="list" 
        tag="div")
        product-item(
            v-for="product in products" :key="product.id" 
            :product="product"
            @delete-product="setDeletedItem(product)" 
        )
    h4.main-title(v-else) Продуктів покищо немає.
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Product, DeletedProduct } from '~/types/types';
import productItem from '~/components/product-item.vue';
import comingItem from '~/components/coming-item.vue';

export default defineComponent({
    name: 'products-list',
    props: {
        products: {
            type: Array as () => Product[],
            required: true,
            default: () => [],
        },
    },
    components: { productItem, comingItem },
    methods: {
        setDeletedItem({ id, serialNumber, title }: DeletedProduct): void {
            this.$emit('delete-product', { id, serialNumber, title });
        },
    },
});
</script>

<style scoped lang="scss">
.products-list {
    max-width: 1440px;
    padding-bottom: 21px;
    overflow: auto;

    &::v-deep(> div) {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
    }
}

.list-enter-active,
.list-leave-active {
    transition: 0.5s;
}
.list-enter-from,
.list-leave-to {
    transform: translateY(-30px);
    transform: translateX(-30px);
    opacity: 0;
}
</style>
