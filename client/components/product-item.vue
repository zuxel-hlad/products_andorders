<template lang="pug">
.product-item(:class="styles.isItemShort")
    .product-item__available(
        :class="{'product-item__available_available': product.available}"
    )
    .product-item__img.img-full
        img(
            src="~/assets/img/moc_product.png" 
            alt="product name"
            )
    .product-item__descr
        span.product-item__descr-text.wrap-text {{ product.title }}
        span.product-item__descr-text.product-item__descr-text_serial.wrap-text {{ product.serialNumber }}
    .product-item__status
        span.product-item__status-status(
            :class="styles.status"
        ) {{ product.status }}
        .product-item__status-dates
            span {{$t('from')}}&nbsp;
                span {{ product?.guarantee?.start }}
            span {{$t('to')}}&nbsp;
                span {{ product?.guarantee?.end }}
    span.product-item__state {{ product.state }}
    .product-item__prices
        template(v-if="product?.price?.length")
            span(
                v-for="(price, idx) in product.price"
                :class="`product-item__prices-${price?.symbol?.toLocaleLowerCase()}`"
                :key="idx"
                ) {{ price.label}}
        span.product-item__prices-uah(v-else) -
    span.product-item__group-name.wrap-text {{ product.group }}
    span.product-item__text.wrap-text.executor {{ product.executor }}
    span.product-item__text.coming-name.wrap-text {{ product.comingName }}
    .product-item__coming-date 
        span.date-short {{ product.shortDate }}
        span.date-full {{ product.date }}
    button.product-item__delete(
        type="button"
        @click="emit('delete-product')"
        )
        i.fa-regular.fa-trash-can
</template>

<script setup lang="ts">
import type { Product } from '~/types';

interface Props {
    product: Product;
    isShort?: boolean;
    selected?: boolean;
}

interface Styles<T> {
    [key: string]: T;
}

const props = withDefaults(defineProps<Props>(), {
    isShort: false,
    selected: false,
    product: () => ({
        id: 0,
        serialNumber: 0 || '-',
        isNew: 0,
        photo: '-',
        title: '-',
        type: {
            type: '-',
            label: '-',
        },
        specification: '-',
        guarantee: {
            start: '-',
            end: '-',
        },
        price: [],
        order: 0,
        date: '-',
        shortDate: '-',
        available: false,
        executor: '-',
        status: '-',
        state: '-',
        group: '-',
        comingName: '-',
    }),
});

const emit = defineEmits<{ (e: 'delete-product'): void }>();

const styles = computed(
    (): Styles<string> => ({
        isItemShort: props.isShort ? 'product-item_short' : '',
        status:
            props.product.status === 'вільний' || props.product.status === 'free'
                ? 'product-item__status-status_free'
                : '',
    })
);
</script>

<style scoped lang="scss">
.product-item {
    min-width: 2550px;
    display: grid;
    position: relative;
    grid-template-columns:
        10px 42px 475px 275px 60px
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
        &:hover:not(.product-item_short) {
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
                text-transform: uppercase;
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

            @media screen and (max-width: 576px) {
                text-align: left;
                margin-right: 0;
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

        @media screen and (max-width: 576px) {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
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

        @media screen and (max-width: 576px) {
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
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

        @media screen and (max-width: 576px) {
            margin: 0 auto;
            padding: 15px;
        }
    }

    @media screen and (max-width: 576px) {
        min-width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        gap: 15px;
    }

    &_short {
        min-width: auto;
        justify-items: stretch;
        grid-template-columns: repeat(auto-fit, minmax(10px, auto));
        grid-template-rows: 1fr;
        gap: 15px;
        .product-item__status-dates,
        .product-item__state,
        .product-item__prices,
        .product-item__group-name,
        .product-item__text.executor,
        .product-item__text.coming-name,
        .product-item__coming-date {
            display: none;
        }
        .product-item__status-status {
            margin-right: 0;
        }

        @media (any-hover: hover) {
            &:hover {
                box-shadow: 0px 22px 24px -17px $product-serial-color inset;
            }
        }
        @media screen and (max-width: 992px) {
            padding: 10px;
            display: flex;
            flex-direction: column;
            align-items: flex-start;

            .product-item__delete {
                margin: 0 auto;
                padding: 15px;
            }
        }
    }
}
</style>
