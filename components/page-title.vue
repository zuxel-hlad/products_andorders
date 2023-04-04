<template lang="pug">
h1.main-title {{ titleText }} / {{ counter }}
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'page-title',
    props: {
        titleText: {
            type: String,
            requierd: true,
            default: '',
        },
        withButton: {
            type: Boolean,
            requierd: false,
            default: false,
        },
        counter: {
            type: Number,
            requierd: true,
            default: 0,
        },
    },
});
</script>

<style scoped lang="scss"></style>
