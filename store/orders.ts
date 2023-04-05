import { orders } from './mock-data';
import { defineStore } from 'pinia';
import { Order } from '~/types/types';
import { DeletedItem } from '../types/types';
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
            return state.orders.map((order) => ({
                ...order,
                shortDate: transformDate(order.date, true),
                date: transformDate(order.date, false),
                totalSumUSD: `${calcTotalProductsPrice(order.products, 'usd')} $`,
                totalSumUAH: `${calcTotalProductsPrice(order.products, 'uah')} UAH`,
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
    },
});
