import { defineStore } from 'pinia';

export interface RootState {
    orders: [];
}

export const useStore = defineStore('orders', {
    state: () => {
        return {
            orders: [],
        } as RootState;
    },
});
