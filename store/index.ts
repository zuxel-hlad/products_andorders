import { defineStore } from 'pinia';
import { DeletedProduct } from './store-types';
export interface RootState {
    modal: boolean;
    deletedProduct: DeletedProduct | null;
}

export const useStore = defineStore('root', {
    state: () => {
        return {
            modal: false,
            deletedProduct: {},
        } as RootState;
    },

    actions: {
        openModal(deletedObj: DeletedProduct | null): void {
            this.modal = true;
            this.deletedProduct = deletedObj;
        },
        closeModal(): void {
            this.modal = false;
            this.deletedProduct = null;
        },
    },
});
