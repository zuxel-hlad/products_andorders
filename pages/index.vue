<template lang="pug">
section
    pageTitle(
        withButton
        titleText="Приходи"
        :counter="orders.length"
    )
    coming-list
        template(v-if="orders.length")
            TransitionGroup(name="coming" tag="div")
                coming-item(
                    v-for="(order,idx) in orders"
                        :key="order.id"
                        :tabindex="idx"
                        :order="order"
                        @delete-coming="deleteOrderItem(order)"
                    )
        h4.main-title(v-else) Приходів покищо немає.
    app-modal(
        titleType="прихід"
        modalType="order"
        :visibility="modal"
        :deletedItem="deletedProduct"
        @close-modal="closeModal"
        @cancel="closeModal"
        @delete="deleteOrder(deletedProduct)"
    )
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useOrdersStore } from '~/store/orders';
import { useStore } from '~/store';
import { mapState, mapActions } from 'pinia';
import { DeletedProduct } from '~/types/types';
import pageTitle from '~/components/page-title.vue';
import comingList from '~/components/coming-list.vue';
import comingItem from '~/components/coming-item.vue';
import appModal from '~/components/app-modal.vue';
export default defineComponent({
    name: 'home',
    components: {
        pageTitle,
        comingList,
        comingItem,
        appModal,
    },
    computed: {
        ...mapState(useStore, ['modal', 'deletedProduct']),
        ...mapState(useOrdersStore, {
            orders: (store) => store.formattedProducts,
        }),
    },
    methods: {
        ...mapActions(useStore, ['openModal', 'closeModal']),
        ...mapActions(useOrdersStore, ['deleteOrder']),
        deleteOrderItem(deletedObj: DeletedProduct): void {
            this.openModal(deletedObj);
        },
    },
});
</script>
<style scoped lang="scss">
.coming-enter-active,
.coming-leave-active {
    transition: 0.5s;
}
.coming-enter-from,
.coming-leave-to {
    transform: translateY(-30px);
    transform: translateX(-30px);
    opacity: 0;
}
</style>
