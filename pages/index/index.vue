<template lang="pug">
section
    pageTitle(
        withButton
        titleText="Приходи"
    )
    coming-list
        coming-item(
            v-for="(_, idx) in 4"
                :key="idx"
                :tabindex="idx"
                @delete-coming="$emit('delete-coming')"
            )
    
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import pageTitle from '~/components/page-title.vue';
import comingList from '~/components/coming-list.vue';
import comingItem from '~/components/coming-item.vue';
export default defineComponent({
    name: 'home',
    components: {
        pageTitle,
        comingList,
        comingItem,
    },
});
</script>
<style scoped lang="scss"></style>
