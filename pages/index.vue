<template lang="pug">
section
    pageTitle(
        withButton
        titleText="Приходи"
        :counter="orders.length"
    )
    .orders-wrapper(:class="{'orders-wrapper_with-details': orderDetails}")
        app-list(v-if="orders.length")
            transition-group(name="orders-list")
                coming-item(
                    v-for="(order,idx) in orders"
                        :key="order.id"
                        :tabindex="idx"
                        :order="order"
                        :isShort="orderDetails"
                        @delete-coming="deleteOrderItem(order)"
                        @open-details="orderDetails = !orderDetails"
                    )
        h4.main-title(v-else) Приходів покищо немає.
        transition
            order-details(
                v-if="orderDetails"
                @close-details="orderDetails = false"
                )
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
import orderDetails from '~/components/order-details.vue';
export default defineComponent({
    name: 'home',
    components: {
        pageTitle,
        appList,
        comingItem,
        appModal,
        orderDetails,
    },
    data() {
        return {
            orderDetails: true,
        };
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
.orders-wrapper {
    padding-top: 52px;
    max-width: 1440px;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    grid-auto-rows: 1fr;

    &_with-details {
        gap: 15px;
        grid-template-columns: minmax(300px, 467px) 1fr;
    }
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

.v-enter-active,
.v-leave-active {
    transition: opacity 0.25s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>
