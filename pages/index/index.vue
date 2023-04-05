<template lang="pug">
section
    pageTitle(
        withButton
        titleText="Приходи"
    )
    coming-list
        template(v-if="orders.length")
            coming-item(
                v-for="(order,idx) in orders"
                    :key="order.id"
                    :tabindex="idx"
                    :order="order"
                )
        h4.main-title(v-else) Приходів покищо немає.
    
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useOrdersStore } from '~/store/orders';
import { useStore } from '~/store';
import { mapState, mapActions } from 'pinia';
import { DeletedProduct } from '~/types/types';
import pageTitle from '~/components/page-title.vue';
import comingList from '~/components/coming-list.vue';
import comingItem from '~/components/coming-item.vue';
export default defineComponent({
    name: 'home',
    components: {
        pageTitle,
        comingList,
        comingItem,
    },
    computed: {
        ...mapState(useOrdersStore, {
            orders: (store) => store.formattedProducts,
        }),
    },
    methods: {
        ...mapActions(useStore, ['openModal']),
        // deleteOrder({ itemType, title, id }): void {
        //     this.openModal({ itemType, title, id });
        // },
    },
});
</script>
<style scoped lang="scss"></style>
