<template lang="pug">
section
    coming-bar
    products-list(@delete-product="deleteProduct")
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapState, mapActions } from 'pinia';
import { useStore } from '~~/store';
import comingBar from '~/components/coming-bar.vue';
import productsList from '~/components/products-list.vue';
export default defineComponent({
    name: 'home',
    components: {
        comingBar,
        productsList,
    },
    computed: {
        ...mapState(useStore, ['modal']),
    },
    methods: {
        ...mapActions(useStore, ['toggleModal']),
        deleteProduct() {
            this.toggleModal(true);
            console.log('delete', this.modal);
        },
    },
});
</script>
<style scoped lang="scss"></style>
