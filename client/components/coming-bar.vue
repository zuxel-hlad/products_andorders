<template lang="pug">
.coming-bar
    pageTitle(
        :titleText="titleText" 
        :counter="count")
    label.coming-bar__select
        span.coming-bar__select-label {{ $t('filter.label') }}
        select.coming-bar__select-select(
            @input="setFilter"
            name="product-type"
        )
            option(value="all" selected) {{ $t('filter.default') }}
            template(v-if="filterOptions.length")
                option.coming-bar__select-option(
                    v-for="({type, label}, idx) in filterOptions"
                    :value="type"
                    :key="idx"
                    :selected="route.query.filter === type"
                ) {{ label }}
            option.coming-bar__select-option(
                v-else
                value=""
            ) {{ $t('filter.empty') }}
</template>

<script setup lang="ts">
import type { Filters } from '~/types';
import pageTitle from '~/components/page-title.vue';

interface Props {
    titleText: string;
    count: number;
    filterOptions: Filters[];
}

const route = useRoute();
const router = useRouter();

withDefaults(defineProps<Props>(), {
    titleText: '',
    count: 0,
    filterOptions: () => [],
});

if (!route.query.filter) {
    router.replace({ query: { filter: 'all' } });
}

const setFilter = (event: Event): void => {
    const value = (event.target as HTMLInputElement).value;
    router.replace({ query: { filter: value } });
};

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

        @media screen and (max-width: 768px) {
            padding-left: 0;
            padding-top: 20px;
            max-width: 100%;
        }
    }

    @media screen and (max-width: 1200px) {
        margin-bottom: 50px;
    }

    @media screen and (max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;
    }
}
</style>
