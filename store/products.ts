import { defineStore } from 'pinia';
import { useStore } from './index';
import { Product } from './store-types';
import { DeletedProduct } from './store-types';
import mockData from './mock-data';

interface RootState {
    products: Product[];
}

const { closeModal } = useStore();

export const useProductsStore = defineStore('products', {
    state: (): RootState => {
        return {
            products: mockData.products,
        };
    },

    actions: {
        deleteProduct(product: DeletedProduct | null): void {
            if (product) {
                this.products = this.products.filter((item) => item.id !== product.id);
                closeModal();
            } else {
                return;
            }
        },
    },
});
