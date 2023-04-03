import { defineStore } from 'pinia';
import { Order, Product } from './store-types';
import mockData from './mock-data';

interface RootState {
    products: {
        orders: Order[];
        products: Product[];
    };
}

export const useStore = defineStore('products', {
    state: (): RootState => {
        return {
            products: mockData,
        };
    },
});
