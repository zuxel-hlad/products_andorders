<template lang="pug">
section.orders
    pageTitle(
        withButton
        titleText="Приходи"
        :counter="orders.length"
    )
    .orders-wrapper(:class="{'orders-wrapper_with-list': orderDetails}")
        app-list(v-if="orders.length")
            transition-group(name="orders-list")
                coming-item(
                    v-for="(order,idx) in orders"
                        :key="order.id"
                        :tabindex="idx"
                        :order="order"
                        :isShort="orderDetails"
                        :selected="orderId === order.id"
                        @delete-coming="deleteOrderItem(order)"
                        @open-details="openOrderDetails(order.id)"
                        @view-details="orderId = order.id"
                    )
        h4.main-title(v-else) Приходів покищо немає.
        .orders-wrapper__list(:class="{'orders-wrapper__list_active': orderDetails}")
            order-details(
                v-if="orderDetails"
                :products="selectedOrderProducts"
                @close-details="orderDetails = false"
                @delete-product="deletedProductItem"
                :selectedOrderId="orderId"
            )
    app-modal(
        modalType="order"
        :titleType="orderDetails ? 'продукт' : 'прихід'"
        :visibility="modal"
        :deletedItem="deletedItem"
        @close-modal="closeModal"
        @cancel="closeModal"
        @delete="checkDeleteItemFunctionType"
    )
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useOrdersStore } from '~/store/orders';
import { useProductsStore } from '~/store/products';
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
            orderDetails: false,
            orderId: null as null | number,
        };
    },
    computed: {
        ...mapState(useStore, ['modal', 'deletedItem']),
        ...mapState(useProductsStore, {
            products: ({ transformedProducts }) => transformedProducts,
        }),
        ...mapState(useOrdersStore, {
            orders: (store) => store.formattedProducts,
        }),
        selectedOrderProducts() {
            if (!this.orderId) {
                return [];
            } else {
                return this.orders?.find((order) => order?.id === this.orderId)?.products;
            }
        },
    },
    methods: {
        ...mapActions(useStore, ['openModal', 'closeModal']),
        ...mapActions(useOrdersStore, ['deleteOrder', 'deleteOrderProduct']),
        ...mapActions(useProductsStore, ['deleteProduct']),
        deleteOrderItem(deletedObj: DeletedItem): void {
            this.openModal(deletedObj);
        },
        deletedProductItem({ id, serialNumber, title }: DeletedItem): void {
            console.log({ id, serialNumber, title });
            this.openModal({ id, serialNumber, title, parentId: this.orderId! });
        },
        checkDeleteItemFunctionType() {
            if (this.orderDetails) {
                this.deleteOrderProduct();
            } else {
                this.deleteOrder();
            }
        },
        openOrderDetails(id: number): void {
            this.orderDetails = !this.orderDetails;
            this.orderId = id ? id : null;
        },
    },
});
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
            grid-template-columns: 465px 1fr;
            gap: 15px;
        }

        &__list {
            width: 0%;

            &_active {
                width: 100%;
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
