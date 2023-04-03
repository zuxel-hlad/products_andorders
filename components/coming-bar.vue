<template lang="pug">
.coming-bar
    pageTitle(
        :titleText="titleText" 
        :counter="count")
    label.coming-bar__select
        span.coming-bar__select-label Тип:
        select.coming-bar__select-select(name="product-type")
            option(disabled value="" selected) Виберіть тип
            option.coming-bar__select-option(value="value1") type 1
            option.coming-bar__select-option(value="value2") type 2
            option.coming-bar__select-option(value="value3") type 3
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import pageTitle from '~/components/page-title.vue';
type Options = string[];

export default defineComponent({
    name: 'coming-bar',
    props: {
        titleText: {
            type: String,
            default: '',
            required: true,
        },
        count: {
            type: Number,
            default: 0,
            required: true,
        },
        filterOptions: {
            type: Array as () => Options,
            default: () => [],
            requiered: true,
        },
    },
    components: { pageTitle },
});
</script>

<style scoped lang="scss">
.coming-bar {
    margin-bottom: 73px;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    &__select {
        width: 100%;
        max-width: 400px;
        padding-left: 30px;
        display: flex;
        align-items: center;
        justify-content: flex-start;

        &-label {
            display: block;
            font-size: 16px;
            color: $product-serial-color;
            margin-right: 10px;
        }

        &-select {
            width: 100%;
            padding: 10px 12px;
            color: $dark;
            font-size: 16px;
            border-radius: 6px;
            border: 1px solid $light-gray;
        }

        &-option {
            width: 100%;
        }
    }
}
</style>
