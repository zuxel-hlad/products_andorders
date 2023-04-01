<template lang="pug">
app-header
main.main
    navigation-menu
    slot
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import appHeader from '~/components/app-header.vue';
import navigationMenu from '~~/components/navigation-menu.vue';
export default defineComponent({
    components: {
        appHeader,
        navigationMenu,
    },
});
</script>

<style scoped lang="scss">
.main {
    overflow-x: hidden;
    display: flex;
    justify-content: flex-start;
}
</style>