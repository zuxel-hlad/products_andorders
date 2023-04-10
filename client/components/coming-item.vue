<template lang="pug">
.coming-item(
    @click="$emit('view-details')"
    :class="{'coming-item_short': isShort, 'coming-item_selected': isShort && selected}"
)
    span.coming-item__coming-name {{ order.title ? order.title : '-' }}
    .coming-item__products
        button.coming-item__products-btn(
            type="button"
            :title="isShort ? 'Закрити деталі приходу' : 'Відкрити деталі приходу'"
            @click="$emit('open-details')"
            )
            i.fa-solid.fa-list-ul
        .coming-item__products-text
            span.coming-item__products-count {{ order.products.length ? order.products.length : '-' }}
            span.coming-item__products-text {{ $t('aside.products') }}
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
    button.coming-item__details
        i.fa-solid.fa-chevron-right
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
        selected: {
            type: Boolean,
            required: false,
            default: false,
        },
    },
});
</script>
<style scoped lang="scss">
.coming-item {
    padding: 10px 36px;
    display: grid;
    grid-template-columns: minmax(167px, 425px) 131px 112px minmax(40px, 122px) 26px;
    grid-template-rows: 1fr;
    grid-auto-rows: 1fr;
    gap: 10px;
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
        font-size: 16px;
        color: $product-date-color;
        text-align: left;
        text-decoration-color: $product-date-color;
        text-decoration: underline;
        position: relative;
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

        @media screen and (max-width: 992px) {
            flex-direction: column;
            align-items: center;
            justify-content: center;
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

        @media screen and (max-width: 992px) {
            text-align: center;
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

        @media screen and (max-width: 992px) {
            padding: 15px;
        }
    }

    &__details {
        position: absolute;
        width: 40px;
        top: 0;
        right: -40px;
        bottom: 0;
        background-color: $light-gray;
        border: none;
        display: flex;
        justify-content: center;
        align-items: center;
        color: $white;
        font-size: 16px;
        transition: right 0.25s;
        cursor: pointer;
        display: none;
    }

    &_short {
        overflow: hidden;
        grid-template-columns: 130px 1fr;
        gap: 40px;
        position: relative;
        padding: 10px 40px 10px 36px;

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

        @media (any-hover: hover) {
            &:hover {
                .coming-item__details {
                    display: block;
                    right: 0;
                }
            }
        }

        @media screen and (max-width: 1200px) {
            padding: 10px;
            gap: 15px;
            .coming-item__coming-date .date-full {
                font-size: 12px;
            }
        }

        @media screen and (max-width: 992px) {
            align-items: flex-start;
        }

        @media screen and (max-width: 768px) {
            .coming-item__details i {
                transform: rotate(-90deg);
            }
        }
    }

    &_selected {
        .coming-item__details {
            display: block;
            right: 0;
        }
    }

    @media screen and (max-width: 992px) {
        padding: 10px;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
}
</style>
