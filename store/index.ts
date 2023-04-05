import { defineStore } from 'pinia';
import { DeletedProduct } from '../types/types';
export interface RootState {
    modal: boolean;
    deletedProduct: DeletedProduct | {};
    activeSessions: number;
}

export const useStore = defineStore('root', {
    state: () => {
        return {
            modal: false,
            deletedProduct: {},
            activeSessions: 0,
        } as RootState;
    },

    actions: {
        openModal(deletedObj: DeletedProduct): void {
            this.modal = true;
            this.deletedProduct = deletedObj;
        },
        closeModal(): void {
            this.modal = false;
            this.deletedProduct = {};
        },
        setActiveSessions(count: number): void {
            this.activeSessions = count;
        },
    },
});
