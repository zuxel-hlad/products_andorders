<template lang="pug">
h1.main-title {{ titleText }} / {{ counter }}
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'page-title',
    props: {
        titleText: {
            type: String as () => string,
            requierd: true as true,
            default: '' as '',
        },
        withButton: {
            type: Boolean as () => boolean,
            requierd: false as false,
            default: false as false,
        },
        counter: {
            type: Number as () => number,
            requierd: true as true,
            default: 0 as 0,
        },
    },
});
</script>

<style scoped lang="scss"></style>
