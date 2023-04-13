<template lang="pug">
section.products
    comingBar(
        :title-text="$t('aside.products')"
        :count="filteredProducts.length"
        :filterOptions="filterOptions"
    )
    app-list(
        v-if="filteredProducts.length"
        withOverflow
        )
        transition-group(name="products-list")
            product-item(
                v-for="product in filteredProducts" 
                :key="product.id" 
                :product="product"
                @delete-product="deletedProductItem(product)"
            )
    h4.main-title(v-else) Продуктів покищо немає.
    app-modal(
        :titleType="$t('itemType.product')"
        modalType="product"
        :visibility="modal"
        @close-modal="closeModal"
        @cancel="closeModal"
        @delete="deleteProduct"
    )
</template>

<script setup lang="ts">
import appList from '~/components/app-list.vue';
import comingBar from '~/components/coming-bar.vue';
import appModal from '~/components/app-modal.vue';
import productItem from '~/components/product-item.vue';
import type { Filters, Product } from '~/types';
import { useProductsStore } from '~/store/products';
import { useStore } from '~/store/index';
import { addDeltaXScroll, removeDeltaXScroll } from '~/helpers/handle-deltaX-scroll';
import { storeToRefs } from 'pinia';
import { computed } from 'vue';

const route = useRoute();

const store = useStore();
const { modal } = storeToRefs(store);
const { closeModal, openModal } = store;

const productsStore = useProductsStore();
const { transformedProducts: products } = storeToRefs(productsStore);
const { deleteProduct } = productsStore;

const filteredProducts = computed((): Product[] | [] => {
    const filter = route.query.filter ? route.query.filter : 'all';
    if (filter === 'all') {
        return products.value;
    }
    return products.value.filter((product) => product.type.type === filter);
});

const filterOptions = computed((): Filters[] | [] => {
    if (products.value.length) {
        const types = products.value.map((item) => item.type);
        return types.filter((item, index) => {
            const firstIndex = types.findIndex((obj) => {
                return JSON.stringify(obj) === JSON.stringify(item);
            });
            return index === firstIndex;
        });
    } else {
        return [];
    }
});
const deletedProductItem = ({ id, serialNumber, title }: Product): void => {
    openModal({ id, serialNumber, title });
};

onMounted(() => addDeltaXScroll('.app-list'));
onBeforeUnmount(() => removeDeltaXScroll('.app-list'));
</script>
<style lang="scss" scoped>
.products-list-move,
.products-list-enter-active,
.products-list-leave-active {
    transition: all 0.5s ease;
}

.products-list-enter-from,
.products-list-leave-to {
    opacity: 0;
    transform: translateX(30px);
}

.products-list-leave-active {
    position: absolute;
}
</style>
