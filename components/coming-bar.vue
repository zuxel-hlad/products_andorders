<template lang="pug">
.coming-bar
    pageTitle(
        :titleText="titleText" 
        :counter="count")
    label.coming-bar__select
        span.coming-bar__select-label Тип:
        select.coming-bar__select-select(
            @input="setFilter"
            name="product-type"
        )
            option(value="all" selected) Усі
            template(v-if="filterOptions.length")
                option.coming-bar__select-option(
                    v-for="({type, label}, idx) in filterOptions"
                    :value="type"
                    :key="idx"
                ) {{ label }}
            option.coming-bar__select-option(
                v-else
                value=""
            ) Поки немає фільрів.
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import pageTitle from '~/components/page-title.vue';
import { Filters } from '~~/types/types';

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
            type: Array as () => Filters[],
            default: () => [],
            requiered: true,
        },
    },
    components: { pageTitle },
    created() {
        this.$router.replace({ query: { filter: 'all' } });
    },
    methods: {
        setFilter(event: Event): void {
            const value = (event.target as HTMLInputElement).value;
            console.log(value);
            this.$router.replace({ query: { filter: value } });
        },
    },
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
            outline-color: $product-serial-color;
        }

        &-option {
            width: 100%;
        }
    }
}
</style>
