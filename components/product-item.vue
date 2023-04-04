<template lang="pug">
.product-item
    .product-item__available(
        :class="{'product-item__available_available': product.available}"
    )
    .product-item__img.img-full
        img(
            src="~/assets/img/moc_product.png" 
            alt="product name"
            )
    .product-item__descr
        span.product-item__descr-text.wrap-text {{ product.title ? product.title : '-' }}
        span.product-item__descr-text.product-item__descr-text_serial.wrap-text {{ product.serialNumber ? product.serialNumber : '-' }}
    .product-item__status
        span.product-item__status-status(
            :class="{'product-item__status-status_free': product.status === 'вільний'}"
        ) {{ product.status ? product.status : '-' }}
        .product-item__status-dates
            span з&nbsp;
                span {{ product.guarantee.start ? product.guarantee.start : '-' }}
            span по&nbsp;
                span {{ product.guarantee.end ? product.guarantee.end : '-' }}
    span.product-item__state {{ product.state ? product.state : '-' }}
    .product-item__prices
        template(v-if="product.price.length")
            span(
                v-for="(price, idx) in product.price"
                :class="`product-item__prices-${price?.symbol?.toLocaleLowerCase()}`"
                :key="idx"
                ) {{ price.label}}
        span.product-item__prices-uah(v-else) -
    span.product-item__group-name.wrap-text {{ product.group ? product.group : '-' }}
    span.product-item__text.wrap-text {{ product.executor ? product.executor : '-' }}
    span.product-item__text.wrap-text {{ product.comingName ? product.comingName : '-' }}
    .product-item__coming-date 
        span.date-short {{ product.shortDate ? product.shortDate : '-' }}
        span.date-full {{ product.date ? product.date : '-' }}
    button.product-item__delete(
        type="button"
        @click="$emit('delete-product')"
        )
        i.fa-regular.fa-trash-can
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Product } from '~/types/types';

export default defineComponent({
    name: 'product-item',
    emits: ['delete-product'],
    props: {
        product: {
            type: Object as () => Product,
            required: true,
            default: () => {},
        },
    },
});
</script>

<style scoped lang="scss">
.product-item {
    width: 100%;
    display: grid;
    position: relative;
    grid-template-columns:
        10px 42px 475px 255px 50px
        123px 380px 263px 374px 115px 25px;
    grid-template-rows: 1fr;
    grid-auto-rows: 1fr;
    justify-content: space-between;
    justify-items: center;
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

    &__available {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: $dark;

        &_available {
            background-color: $main-green-color;
        }
    }

    &__img {
        width: 44px;
        height: 34px;
        display: flex;
        justify-content: center;
        align-items: flex-start;
    }

    &__descr {
        &-text {
            font-size: 18px;
            display: block;
            color: $dark;
            text-decoration: underline;
            text-decoration-color: $text-border-color;
            margin-bottom: 8px;

            &_serial {
                color: $product-serial-color;
                margin-bottom: 0;
            }
        }
    }

    &__status {
        display: flex;
        justify-content: flex-start;
        align-items: center;

        &-status {
            display: block;
            font-size: 16px;
            min-width: 73px;
            text-align: center;
            color: $dark;
            margin-right: 50px;
            text-transform: capitalize;

            &_free {
                color: $main-green-color;
            }
        }

        &-dates {
            display: flex;
            flex-direction: column;

            span {
                display: flex;
                justify-content: space-between;
                align-items: center;
                font-size: 16px;
                color: $product-serial-color;

                span {
                    color: $product-date-color;
                }
            }
        }
    }

    &__state {
        display: block;
        font-size: 16px;
        color: $product-date-color;
        text-transform: uppercase;
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

    &__group-name {
        display: block;
        font-size: 16px;
        color: $product-date-color;
        text-decoration: underline;
        text-decoration-color: $product-serial-color;
    }

    &__text {
        display: block;
        font-size: 16px;
        color: $product-date-color;
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
}
</style>
