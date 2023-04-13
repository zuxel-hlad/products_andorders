import { orders, products } from './mock-data';
import { defineStore } from 'pinia';
import { Order, Product } from '~/types';
import { DeletedItem } from '../types';
import { useStore } from './index';
import transformDate from '~/helpers/transform-date';
import calcTotalProductsPrice from '~/helpers/calc-total-products-price';

export interface RootState {
    orders: Order[];
}

const rootStore = useStore();

export const useOrdersStore = defineStore('orders', {
    state: () => {
        return {
            orders,
        } as RootState;
    },
    getters: {
        formattedProducts(state) {
            const filterProducts = (items: Product[], id: number): Product[] => {
                if (items.length) {
                    return items.filter((item) => item.order === id);
                } else return [];
            };

            return state.orders.map((order) => ({
                ...order,
                products: filterProducts(order.products, order.id),
                shortDate: transformDate(order.date, true),
                date: transformDate(order.date, false),
                totalSumUSD: `${calcTotalProductsPrice(filterProducts(order.products, order.id), 'usd')} $`,
                totalSumUAH: `${calcTotalProductsPrice(filterProducts(order.products, order.id), 'uah')} UAH`,
            }));
        },
    },
    actions: {
        deleteOrder(): void {
            const deletedObjId = rootStore.deletedItem?.id;
            if (deletedObjId) {
                this.orders = this.orders.filter((item) => item.id !== deletedObjId);
                rootStore.closeModal();
            } else {
                return;
            }
        },
        deleteOrderProduct(): void {
            const deletedObjId = rootStore.deletedItem?.id;
            const deletedObjParentId = rootStore.deletedItem?.parentId;

            if (!deletedObjId && !deletedObjParentId) return;
            this.orders = this.orders.map((order) => {
                if (order.id === deletedObjParentId) {
                    return {
                        ...order,
                        products: order.products.filter((o) => o.id !== deletedObjId),
                    };
                } else {
                    return order;
                }
            });
            rootStore.closeModal();
        },
    },
});
