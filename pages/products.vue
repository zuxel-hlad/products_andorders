<template lang="pug">
section
    comingBar(
        title-text="Продукти"
        :count="filteredProducts.length"
        :filter-options="filterOptions"
    )
    products-list(
        :products="filteredProducts"
        @delete-product="deleteProduct"
        )
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapState, mapActions } from 'pinia';
import { DeletedProduct } from '~/types/types';
import { useProductsStore } from '~/store/products';
import { useStore } from '~/store';
import { Filters, Product } from '~/types/types';
import productsList from '~/components/products-list.vue';
import comingBar from '~/components/coming-bar.vue';

export default defineComponent({
    name: 'products',
    components: {
        comingBar,
        productsList,
    },
    computed: {
        ...mapState(useStore, ['modal']),
        ...mapState(useProductsStore, {
            products: (store) => store.transformedProducts,
        }),
        filteredProducts(): Product[] | [] {
            const filter = this.$route.query.filter ? this.$route.query.filter : 'all';
            if (filter === 'all') {
                return this.products;
            }
            return this.products.filter((product) => product.type.type === filter);
        },
        filterOptions(): Filters[] | [] {
            if (this.products.length) {
                const types = this.products.map((item) => item.type);
                return types.filter((item, index) => {
                    const firstIndex = types.findIndex((obj) => {
                        return JSON.stringify(obj) === JSON.stringify(item);
                    });
                    return index === firstIndex;
                });
            } else {
                return [];
            }
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
