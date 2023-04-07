<template lang="pug">
.details
    .details__header
        button.details__close.img-full(
            type="button"
            @click="$emit('close-details')"
            )
            img(
                src="~/assets/svg/close.svg" 
                alt="закртити деталі"
                title="закртити деталі"
            )
        h4.details__title Дуже дуже придуже дліннюча назва дліннючого приходу
        button.details__add-product(type="button") Додати продукт
            i.fa-solid.fa-plus
    .details__list(v-if="products.length")
        transition-group(name="details-list")
            product-item(
                    v-for="(product) in products" 
                    isShort
                    :key="product.id" 
                    :product="product"
                    :selected="false"
                    @delete-product="$emit('delete-product',product)"
                )
    h4.main-title.details__empty(v-else) Продуктів покищо немає.
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Product } from '~/types/types';
import productItem from '~/components/product-item.vue';
export default defineComponent({
    name: 'order-details',
    props: {
        products: {
            type: Array as () => Product[],
            required: true,
            default: () => [],
        },
        selectedOrderId: {
            type: Number as () => number | null,
            required: true,
            default: null,
        },
    },
    components: { productItem },
    computed: {},
    data() {
        return {
            seletedIdx: 1,
        };
    },
});
</script>

<style scoped lang="scss">
.details {
    border-radius: 6px;
    background-color: $white;
    border: 1px solid $light-gray;
    min-width: 440px;

    &__empty {
        text-align: center;
        margin-bottom: 15px;
        font-size: 18px;
    }

    &__header {
        padding: 33px 37px 18px;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;

        @media screen and (max-width: 992px) {
            padding: 20px 15px;
        }
    }

    &__title {
        font-size: 25px;
        font-weight: 500;
        margin-bottom: 25px;

        @media screen and (max-width: 992px) {
            font-size: 20px;
            margin-bottom: 15px;
        }
    }

    &__close {
        position: absolute;
        right: -21px;
        top: -21px;
        border: none;
        border-radius: 50%;
        background-color: #fff;
        width: 42px;
        height: 42px;
        padding: 7px;
        cursor: pointer;
        box-shadow: 3px 4px 9px 1px $product-serial-color, 1px 1px 1px 0px $product-serial-color;

        @media screen and (max-width: 992px) {
            right: -3px;
        }
    }

    &__add-product {
        color: $main-green-color;
        border: none;
        background: transparent;
        font-size: 18px;
        cursor: pointer;
        position: relative;
        padding: 10px 10px 10px 30px;
        border-radius: 6px;
        border: 1px solid transparent;
        transition: color 0.25s ease;

        &::before {
            position: absolute;
            left: 0;
            top: 50%;
            transform: translateY(-50%);
            content: '';
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background: $main-green-color;
        }

        i {
            position: absolute;
            left: 5.5px;
            top: 50%;
            transform: translateY(-50%);
            color: $white;
            font-size: 10px;
        }

        @media (any-hover: hover) {
            &:hover {
                color: $product-date-color;
            }
        }

        @media screen and (max-width: 992px) {
            font-size: 16px;
        }
    }

    &__list {
        max-width: 958px;
        max-height: 400px;
        overflow-y: auto;
        overflow-x: hidden;
        border-bottom-left-radius: 6px;
        border-bottom-right-radius: 6px;
    }

    @media screen and (max-width: 992px) {
        width: auto;
        min-width: auto;
    }
}

.details-list-enter-active,
.orders-list-leave-active {
    transition: all 0.5s ease;
}

.details-list-enter-from,
.details-list-leave-to {
    opacity: 0;
    transform: translateX(30px);
    position: absolute;
    overflow: hidden;

    @media screen and (max-width: 576px) {
        position: static;
    }
}

.details-list-enter-to,
.details-list-leave {
    opacity: 1;
    transform: translateX(0);
    position: static;
    overflow: visible;
}
</style>
