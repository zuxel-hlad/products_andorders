<template lang="pug">
app-header
main.main
    navigation-menu
    slot
</template>

<script setup lang="ts">
import appHeader from '~/components/app-header.vue';
import navigationMenu from '~/components/navigation-menu.vue';

</script>

<style lang="scss" scoped>
.main {
    overflow-x: hidden;
    display: flex;
    justify-content: flex-start;
}
</style>
