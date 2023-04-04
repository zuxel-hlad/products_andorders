<template lang="pug">
app-header
main.main
    navigation-menu
    slot
app-modal(
    titleType="продукт"
    :visibility="modal"
    :deletedItem="deletedProduct"
    @close-modal="closeModal"
    @cancel="closeModal"
    @delete="deleteProduct(deletedProduct)"
    )
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapState, mapActions } from 'pinia';
import { useStore } from '~/store';
import { useProductsStore } from '~/store/products';
import appHeader from '~/components/app-header.vue';
import navigationMenu from '~/components/navigation-menu.vue';
import appModal from '~/components/app-modal.vue';

export default defineComponent({
    components: {
        appHeader,
        navigationMenu,
        appModal,
    },
    computed: {
        ...mapState(useStore, ['modal', 'deletedProduct']),
    },
    methods: {
        ...mapActions(useStore, ['closeModal']),
        ...mapActions(useProductsStore, ['deleteProduct']),
    },
});
</script>

<style lang="scss" scoped>
.main {
    overflow-x: hidden;
    display: flex;
    justify-content: flex-start;
}
</style>
