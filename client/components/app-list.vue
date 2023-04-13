<template lang="pug">
.app-list(:class="{'app-list_with-overflow': withOverflow}")
    slot
</template>

<script setup lang="ts">
interface Props {
    withOverflow?: boolean;
}

withDefaults(defineProps<Props>(), {
    withOverflow: false,
});
</script>

<style scoped lang="scss">
.app-list {
    width: 100%;
    max-width: 1440px;
    padding-bottom: 21px;
    display: flex;
    flex-direction: column;
    gap: 10px;

    &_with-overflow {
        overflow-x: auto;
        overflow-y: hidden;
    }
}
</style>
