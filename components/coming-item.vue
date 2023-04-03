<template lang="pug">
.coming-item
    span.coming-item__coming-name Дуже дуже довга дліннюча назва приходу
    .coming-item__products
        button.coming-item__products-btn(type="button")
            i.fa-solid.fa-list-ul
        .coming-item__products-text
            span.coming-item__products-count 23
            span.coming-item__products-text Продукти
    .coming-item__coming-date 
        span.date-short 06 / 12
        span.date-full 06 / 12 / 2017
    .coming-item__prices
        span.coming-item__prices-usd 2500&nbsp;$
        span.coming-item__prices-uah 250 000. 50&nbsp;UAH
    button.coming-item__delete(type="button")
        i.fa-regular.fa-trash-can

</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'coming-item',
});
</script>
<style scoped lang="scss">
.coming-item {
    padding: 10px 36px;
    min-width: 1434px;
    display: grid;
    grid-template-columns: 578px 131px 112px 122px 16px;
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
        font-size: 16px;
        color: $product-date-color;
        text-align: left;
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
