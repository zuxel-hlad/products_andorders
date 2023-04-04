import { defineStore } from 'pinia';
import { useStore } from './index';
import { Product } from '../types/types';
import { DeletedProduct } from '../types/types';
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

    getters: {
        transformedProducts(state) {
            const transformDate = (dateString: string, short: boolean): string => {
                const date = new Date(dateString);
                const day = date.getDate().toString().padStart(2, '0');
                const month = (date.getMonth() + 1).toString().padStart(2, '0');
                const year = date.getFullYear();
                if (short) {
                    return `${day} / ${month}`;
                } else {
                    return `${day} / ${month} /  ${year}`;
                }
            };

            if (state.products.length) {
                return state.products.map((product) => ({
                    ...product,
                    price: product?.price?.map((price) => ({
                        ...price,
                        label: `${price.symbol === 'USD' ? `${price.value} $` : `${price.value} ${price.symbol}`}`,
                    })),
                    guarantee: {
                        start: transformDate(product.guarantee.start, false),
                        end: transformDate(product.guarantee.end, false),
                    },
                    shortDate: transformDate(product.date, true),
                    date: transformDate(product.date, false),
                }));
            } else {
                return [];
            }
        },
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
