import { defineStore } from 'pinia';

export interface RootState {
    modal: boolean;
}

export const useStore = defineStore('root', {
    state: () => {
        return {
            modal: false,
        } as RootState;
    },

    actions: {
        toggleModal(value: boolean): void {
            this.modal = value;
        },
    },
});
