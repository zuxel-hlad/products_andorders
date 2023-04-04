import { defineStore } from 'pinia';
import { DeletedProduct } from '../types/types';
export interface RootState {
    modal: boolean;
    deletedProduct: DeletedProduct | null;
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
        openModal(deletedObj: DeletedProduct | null): void {
            this.modal = true;
            this.deletedProduct = deletedObj;
        },
        closeModal(): void {
            this.modal = false;
            this.deletedProduct = null;
        },
        setActiveSessions(count: number): void {
            this.activeSessions = count;
        },
    },
});
