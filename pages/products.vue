<template lang="pug">
section
    comingBar(
        title-text="Продукти"
        :count="filteredProducts.length"
        :filter-options="filterOptions"
    )
    products-list(
        :products="filteredProducts"
        @delete-product="deleteProductItem"
        )
    app-modal(
        titleType="продукт"
        modalType="product"
        :visibility="modal"
        :deletedItem="deletedProduct"
        @close-modal="closeModal"
        @cancel="closeModal"
        @delete="deleteProduct(deletedProduct)"
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
import appModal from '~/components/app-modal.vue';

export default defineComponent({
    name: 'products',
    components: {
        comingBar,
        productsList,
        appModal,
    },
    computed: {
        ...mapState(useStore, ['modal', 'deletedProduct']),
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
        ...mapActions(useProductsStore, ['deleteProduct']),
        ...mapActions(useStore, ['openModal', 'closeModal']),
        deleteProductItem(deletedObj: DeletedProduct): void {
            this.openModal(deletedObj);
        },
    },
});
</script>
<style lang="scss" scoped></style>
