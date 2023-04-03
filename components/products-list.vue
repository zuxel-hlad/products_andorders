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
import { Product, DeletedProduct } from '~~/store/store-types';
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
    width: 2606px;

    &::v-deep(div[name='list']) {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
    }
}

.list-enter-active,
.list-leave-active {
    transition: all 0.25s ease;
}
.list-enter-from,
.list-leave-to {
    opacity: 0;
    transform: translateX(30px);
}
</style>
