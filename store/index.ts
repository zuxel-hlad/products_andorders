import { defineStore } from 'pinia';
import { DeletedItem } from '../types/types';
export interface RootState {
    modal: boolean;
    deletedItem: null | DeletedItem;
    activeSessions: number;
}

export const useStore = defineStore('root', {
    state: () => {
        return {
            modal: false,
            deletedItem: null,
            activeSessions: 0,
        } as RootState;
    },

    actions: {
        openModal(deletedObj: DeletedItem): void {
            this.modal = true;
            this.deletedItem = deletedObj;
        },
        closeModal(): void {
            this.modal = false;
            this.deletedItem = null;
        },
        setActiveSessions(count: number): void {
            this.activeSessions = count;
        },
    },
});
