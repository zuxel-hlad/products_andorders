<template lang="pug">
section.orders
    pageTitle(
        withButton
        :titleText="$t('aside.coming')"
        :counter="orders.length"
    )
    .orders-wrapper(:class="{'orders-wrapper_with-list': orderDetailsVisibility}")
        app-list(v-if="orders.length")
            transition-group(name="orders-list")
                coming-item(
                    v-for="(order,idx) in orders"
                        :key="order.id"
                        :tabindex="idx"
                        :order="order"
                        :isShort="orderDetailsVisibility"
                        :selected="orderId === order.id"
                        @delete-coming="deleteOrderItem(order)"
                        @open-details="openOrderDetails(order.id)"
                        @view-details="orderId = order.id"
                    )
        h4.main-title(v-else) Приходів покищо немає.
        order-details(v-if="orderDetailsVisibility"
            :products="selectedOrderProducts"
            @close-details="orderDetailsVisibility = false"
            @delete-product="deletedProductItem"
            :selectedOrderId="orderId"
        )
    app-modal(
        :modalType="orderDetailsVisibility ? 'product' : 'order'"
        :titleType="orderDetailsVisibility ? $t('itemType.product') : $t('itemType.coming') "
        :visibility="modal"
        :deletedItem="deletedItem"
        @close-modal="closeModal"
        @cancel="closeModal"
        @delete="checkDeleteItemFunctionType"
    )
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useOrdersStore } from '~/store/orders';
import { useStore } from '~/store';
import { storeToRefs } from 'pinia';
import type { DeletedItem } from '~/types';
import pageTitle from '~/components/page-title.vue';
import appList from '~/components/app-list.vue';
import comingItem from '~/components/coming-item.vue';
import appModal from '~/components/app-modal.vue';
import orderDetails from '~/components/order-details.vue';

const orderDetailsVisibility = ref(false);
const orderId = ref(0);
const rootStore = useStore();
const { deletedItem, modal } = storeToRefs(rootStore);
const { openModal, closeModal } = rootStore;
const ordersStore = useOrdersStore();
const { formattedProducts: orders } = storeToRefs(ordersStore);
const { deleteOrder, deleteOrderProduct } = ordersStore;

const selectedOrderProducts = computed(() => {
    if (!orderId.value) {
        return [];
    } else {
        return orders.value?.find((order) => order?.id === orderId.value)?.products;
    }
});

const deleteOrderItem = (deletedObj: DeletedItem): void => {
    openModal(deletedObj);
};
const deletedProductItem = ({ id, serialNumber, title }: DeletedItem): void => {
    openModal({ id, serialNumber, title, parentId: orderId });
};
const checkDeleteItemFunctionType = () => {
    if (orderDetailsVisibility.value) {
        deleteOrderProduct();
    } else {
        deleteOrder();
    }
};
const openOrderDetails = (id: number): void => {
    orderDetailsVisibility.value = !orderDetailsVisibility.value;
    orderId.value = id ? id : 0;
};
</script>
<style scoped lang="scss">
@keyframes open-details {
    from {
        transform: translateX(100%);
        opacity: 0;
    }
    to {
        transform: translateX(0%);
        opacity: 1;
    }
}

@keyframes reverse-open-details {
    from {
        transform: translateX(-120%);
        opacity: 0;
    }
    to {
        transform: translateX(0%);
        opacity: 1;
    }
}
.orders {
    overflow-x: hidden;

    &-wrapper {
        padding-top: 52px;
        max-width: 1440px;
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
        grid-auto-rows: 1fr;
        animation: reverse-open-details 0.7s ease;

        &_with-list {
            animation: open-details 0.7s ease;
            grid-template-columns: minmax(360px, 465px) 1fr;
            gap: 15px;

            @media screen and (max-width: 1200px) {
                grid-template-columns: minmax(200px, 360px) 1fr;
            }

            @media screen and (max-width: 992px) {
                grid-template-columns: minmax(200px, 30%) 1fr;
            }

            @media screen and (max-width: 768px) {
                display: flex;
                gap: 10px;
                flex-direction: column-reverse;
                align-items: flex-start;
                justify-content: flex-start;
            }
        }
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
</style>
