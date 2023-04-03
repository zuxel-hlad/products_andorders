<template lang="pug">
section
    comingBar(
        title-text="Продукти"
        :count="products.length"
        :filter-options="productsTypes"
    )
    products-list(
        :products="products"
        @delete-product="deleteProduct"
        )
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapState, mapActions } from 'pinia';
import { DeletedProduct } from '~~/store/store-types';
import { useProductsStore } from '~/store/products';
import { useStore } from '~/store';
import productsList from '~/components/products-list.vue';
import comingBar from '~/components/coming-bar.vue';
export default defineComponent({
    name: 'products',
    components: {
        comingBar,
        productsList,
    },
    computed: {
        ...mapState(useProductsStore, {
            products: (store) => store.products,
        }),
        ...mapState(useStore, ['modal']),
        productsTypes(): string[] {
            return this.products.map((product) => product.type.toLocaleLowerCase());
        },
    },
    methods: {
        ...mapActions(useStore, ['openModal']),
        deleteProduct(deletedProduct: DeletedProduct): void {
            this.openModal(deletedProduct);
        },
    },
});
</script>
<style lang="scss" scoped></style>
