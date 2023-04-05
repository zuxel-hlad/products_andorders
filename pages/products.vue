<template lang="pug">
section
    comingBar(
        title-text="Продукти"
        :count="filteredProducts.length"
        :filter-options="filterOptions"
    )
    app-list(v-if="filteredProducts.length")
        transition-group(name="products-list")
            product-item(
                v-for="product in filteredProducts" 
                :key="product.id" 
                :product="product"
                @delete-product="deletedProductItem(product)"
            )
    h4.main-title(v-else) Продуктів покищо немає.
    app-modal(
        titleType="продукт"
        modalType="product"
        :visibility="modal"
        @close-modal="closeModal"
        @cancel="closeModal"
        @delete="deleteProduct"
    )
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapState, mapActions } from 'pinia';
import { useProductsStore } from '~/store/products';
import { useStore } from '~/store';
import { Filters, Product } from '~/types/types';
import appList from '~/components/app-list.vue';
import comingBar from '~/components/coming-bar.vue';
import appModal from '~/components/app-modal.vue';
import productItem from '~/components/product-item.vue';

export default defineComponent({
    name: 'products-list',
    components: {
        comingBar,
        appList,
        appModal,
        productItem,
    },
    computed: {
        ...mapState(useStore, {
            modal: ({ modal }) => modal,
        }),
        ...mapState(useProductsStore, {
            products: ({ transformedProducts }) => transformedProducts,
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
        deletedProductItem({ id, serialNumber, title }: Product): void {
            this.openModal({ id, serialNumber, title });
        },
    },
});
</script>
<style lang="scss" scoped>
.products-list-enter-active,
.products-list-leave-active {
    transition: all 0.5s ease;
}
.products-list-enter-from,
.products-list-leave-to {
    opacity: 0;
    transform: translateX(30px);
}
</style>
