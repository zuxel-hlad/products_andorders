<template lang="pug">
.app-list(:class="{'app-list_with-overflow': withOverflow}")
    slot
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'coming-list',
    props: {
        withOverflow: {
            type: Boolean,
            required: false,
            default: false,
        },
    },
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
    }
}
</style>
