<template lang="pug">
.coming-item(
    :class="{'coming-item_short': isShort}"
)
    nuxt-link(:to="`/order-${order?.id}`").coming-item__coming-name {{ order.title ? order.title : '-' }}
    .coming-item__products
        button.coming-item__products-btn(
            type="button"
            :title="isShort ? 'Закрити деталі приходу' : 'Відкрити деталі приходу'"
            @click="$emit('open-details')"
            )
            i.fa-solid.fa-list-ul
        .coming-item__products-text
            span.coming-item__products-count {{ order.products.length ? order.products.length : '-' }}
            span.coming-item__products-text Продукти
    .coming-item__coming-date 
        span.date-short {{ order.shortDate ? order.shortDate : '-' }}
        span.date-full {{ order.date ? order.date : '-' }}
    .coming-item__prices
        span.coming-item__prices-usd {{ order.totalSumUSD ? order.totalSumUSD : '-' }}
        span.coming-item__prices-uah {{ order.totalSumUAH ? order.totalSumUAH : '-' }}
    button.coming-item__delete(
        type="button"
        @click="$emit('delete-coming')"
        )
        i.fa-regular.fa-trash-can

</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { ComingOrder } from '~/types/types';

export default defineComponent({
    name: 'coming-item',
    props: {
        isShort: {
            type: Boolean,
            required: false,
            default: false,
        },
        order: {
            type: Object as () => ComingOrder,
            required: true,
            default: () => {},
        },
    },
});
</script>
<style scoped lang="scss">
.coming-item {
    padding: 10px 36px;
    width: 100%;
    display: grid;
    grid-template-columns: 425px 131px 112px 122px 26px;
    grid-template-rows: 1fr;
    grid-auto-rows: 1fr;
    justify-content: space-between;
    justify-items: start;
    align-items: center;
    background-color: $white;
    border: 1px solid $light-gray;
    border-radius: 6px;
    padding: 10px 23px 10px 36px;
    transition: box-shadow 0.25s ease;
    cursor: pointer;

    @media (any-hover: hover) {
        &:hover {
            box-shadow: 7px 7px 11px 0px $product-serial-color;
        }
    }

    &__coming-name {
        display: block;
        text-decoration: none;
        font-size: 16px;
        color: $product-date-color;
        text-align: left;
        border-bottom: 1px solid $product-date-color;
        padding-bottom: 1px;
        transition: color 0.25s;

        @media (any-hover: hover) {
            &:hover {
                color: $dark;
                text-decoration-color: $dark;
            }
        }
    }

    &__products {
        display: flex;
        justify-content: flex-start;
        align-items: center;

        &-btn {
            width: 42px;
            height: 42px;
            border-radius: 50%;
            border: 1px solid $light-gray;
            background-color: transparent;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 18px;
            cursor: pointer;
            color: $product-date-color;
            margin-right: 20px;
        }

        span {
            display: block;
        }

        &-count {
            font-size: 18px;
            color: $product-date-color;
            margin-bottom: 8px;
        }

        &-text {
            font-size: 16px;
            color: $product-serial-color;
        }
    }

    &__coming-date {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        span {
            display: block;
        }

        .date-short {
            font-size: 12px;
            color: $product-serial-color;
            margin-bottom: 5px;
        }

        .date-full {
            font-size: 16px;
            color: $product-date-color;
        }
    }

    &__prices {
        span {
            display: block;
        }

        &-usd {
            font-size: 12px;
            color: $product-serial-color;
            margin-bottom: 5px;
        }

        &-uah {
            font-size: 16px;
            color: $dark;
        }
    }

    &__delete {
        padding: 5px;
        border: none;
        background: transparent;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 16px;
        color: $product-date-color;
        cursor: pointer;
        transition: color 0.25s ease;

        @media (any-hover: hover) {
            &:hover {
                color: $dark;
            }
        }
    }

    &_short {
        grid-template-columns: 130px 1fr;
        gap: 40px;
        position: relative;

        .coming-item__coming-name {
            display: none;
        }

        .coming-item__prices {
            display: none;
        }

        .coming-item__delete {
            display: none;
        }

        .coming-item__coming-date {
            flex-direction: column;
            align-items: flex-start;
        }
    }
}
</style>
