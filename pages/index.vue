<template lang="pug">
section
    h1 main section
    nuxt-link(to="/settings") to settings
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({});
</script>

<style scoped lang="scss">
h1 {
    font-size: desktop-vw(20);
    color: $green;
}
</style>