<template lang="pug">
section
    pageTitle(
        withButton
        titleText="Приходи"
        :counter="orders.length"
    )
    app-list(
        v-if="orders.length"
        customClass="coming-list"
        )
        transition-group(name="orders-list")
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
        :deletedItem="deletedItem"
        @close-modal="closeModal"
        @cancel="closeModal"
        @delete="deleteOrder"
    )
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useOrdersStore } from '~/store/orders';
import { useStore } from '~/store';
import { mapState, mapActions } from 'pinia';
import { DeletedItem } from '~/types/types';
import pageTitle from '~/components/page-title.vue';
import appList from '~/components/app-list.vue';
import comingItem from '~/components/coming-item.vue';
import appModal from '~/components/app-modal.vue';
export default defineComponent({
    name: 'home',
    components: {
        pageTitle,
        appList,
        comingItem,
        appModal,
    },
    computed: {
        ...mapState(useStore, ['modal', 'deletedItem']),
        ...mapState(useOrdersStore, {
            orders: (store) => store.formattedProducts,
        }),
    },
    methods: {
        ...mapActions(useStore, ['openModal', 'closeModal']),
        ...mapActions(useOrdersStore, ['deleteOrder']),
        deleteOrderItem(deletedObj: DeletedItem): void {
            this.openModal(deletedObj);
        },
    },
});
</script>
<style scoped lang="scss">
.coming-list {
    padding-top: 52px;
}

.orders-list-enter-active,
.orders-list-leave-active {
    transition: all 0.5s ease;
}
.orders-list-enter-from,
.orders-list-leave-to {
    opacity: 0;
    transform: translateX(30px);
}
</style>
