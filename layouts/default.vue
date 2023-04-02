<template lang="pug">
app-header
main.main
    navigation-menu
    slot
app-modal
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import appHeader from '~/components/app-header.vue';
import navigationMenu from '~~/components/navigation-menu.vue';
import appModal from '~/components/app-modal.vue';

export default defineComponent({
    components: {
        appHeader,
        navigationMenu,
        appModal,
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
