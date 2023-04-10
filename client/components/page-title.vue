<template lang="pug">
h1.main-title.page-title(
    :class="{'page-title_with-button': withButton}"
) {{ titleText }} / {{ counter }}
    button.page-title__button(type="button")
        i.fa-solid.fa-plus
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

<style scoped lang="scss">
.page-title {
    position: relative;

    &__button {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 0;
        width: 38px;
        height: 38px;
        border-radius: 50%;
        border: none;
        background-color: $main-green-color;
        color: $white;
        cursor: pointer;
        transition: box-shadow 0.25s;
        display: none;

        &::before {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 30px;
            height: 30px;
            background-color: #8bc34a;
            border-radius: 50%;
            transition: background-color 0.25s;
        }

        i {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }

        @media (any-hover: hover) {
            &:hover {
                box-shadow: 0px 0px 10px 0px $product-serial-color, 0px 0px 10px 0px $product-serial-color;
            }
        }

        &:active::before {
            background-color: $main-green-color;
        }

        @media screen and (max-width: 768px) {
            width: 28px;
            height: 28px;
        }
    }
    &_with-button {
        padding-left: 62px;

        .page-title__button {
            display: block;
        }

        @media screen and (max-width: 768px) {
            padding-left: 42px;
        }
    }
}
</style>
