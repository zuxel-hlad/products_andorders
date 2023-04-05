<template lang="pug">
.app-list(:class="customClass")
    slot
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'coming-list',
    props: {
        customClass: {
            type: String,
            required: false,
            default: '',
        },
    },
});
</script>

<style scoped lang="scss">
.app-list {
    width: 100%;
    max-width: 1440px;
    padding-bottom: 21px;
    overflow: auto;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    grid-auto-rows: 1fr;
    gap: 10px;
}
</style>
