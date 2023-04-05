<template lang="pug">
.coming-list
    slot
        
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import comingItem from '~/components/coming-item.vue';
export default defineComponent({
    name: 'coming-list',
    components: { comingItem },
});
</script>

<style scoped lang="scss">
.coming-list {
    padding-top: 52px;
    width: 100%;
    max-width: 1440px;
    padding-bottom: 21px;
    overflow: auto;

    &::v-deep(> div) {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
    }
}
</style>
