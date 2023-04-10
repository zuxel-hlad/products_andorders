<template lang="pug">
app-header
main.main
    navigation-menu
    slot
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import appHeader from '~/components/app-header.vue';
import navigationMenu from '~/components/navigation-menu.vue';

export default defineComponent({
    components: {
        appHeader,
        navigationMenu,
    },
    mounted() {
        // this.$nuxt.context.app.provide('myGlobalThis', this)
        // @ts-ignore
        this.$nuxt.vueApp.provide('myGlobalThis', this);
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
