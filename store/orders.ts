import { orders } from './mock-data';
import { defineStore } from 'pinia';
import { Order, Product } from '~/types/types';
import transformDate from '~/helpers/transform-date';
import calcTotalProductsPrice from '~/helpers/calc-total-products-price';

export interface RootState {
    orders: Order[];
}

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
});
