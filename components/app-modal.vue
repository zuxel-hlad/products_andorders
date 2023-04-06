<template lang="pug">
.modal(
    :class="{'modal_active': visibility,'modal_order': modalType === 'order'}")
    .modal-content(@click.stop)
        button.modal-content__close.img-full(
            type="button" 
            @click="$emit('close-modal')"
            )
            img(
                src="../assets/svg/close.svg" 
                alt="close modal" 
                title="close modal"
            )
        h4.modal-content__title.wrap-text Ви впевнені що бажаєти видалити цей {{ titleType }} ?
        .modal-content__product
            .modal-content__product-status 
            .modal-content__product-img.img-full
                img(src="../assets/img/moc_product.png" alt="product name")
            .modal-content__product-descr
                span.modal-content__product-text.wrap-text {{ deletedItem?.title }}
                span.modal-content__product-text.modal-content__product-text_serial.wrap-text {{ deletedItem?.serialNumber }}
        .modal-content__buttons
            button.modal-content__buttons-btn.wrap-text(
                type="button"
                @click="$emit('cancel')"
                ) Скасувати
            button.modal-content__buttons-btn.wrap-text.modal-content__buttons-btn_delete(
                type="button"
                @click="$emit('delete')"
                )
                i.fa-regular.fa-trash-can &nbsp;
                | Видалити
                

</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useStore } from '~/store';
import { mapState } from 'pinia';

export default defineComponent({
    name: 'app-modal',
    props: {
        visibility: {
            type: Boolean,
            default: false,
            required: true,
        },
        titleType: {
            type: String,
            required: true,
            default: '',
        },
        modalType: {
            type: String as () => 'order' | 'product',
            required: true,
            default: '',
        },
    },
    computed: {
        ...mapState(useStore, ['deletedItem']),
    },
});
</script>

<style scoped lang="scss">
.modal {
    position: fixed;
    top: 0;
    right: 0;
    width: calc(100vw - 197px);
    min-height: 100vh;
    height: calc(100 * var(--vh-menu));
    background-color: $modal-overlay;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    visibility: hidden;
    transition: 0.25s ease-in-out;

    &_active {
        opacity: 1;
        visibility: visible;
    }

    &_order {
        .modal-content__product-status {
            display: none;
        }

        .modal-content__product-img {
            display: none;
        }
    }

    &-content {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        position: relative;
        flex: 1 1 auto;
        max-width: 791px;
        min-height: 263px;
        background-color: $white;
        border-radius: 4px;

        &__close {
            position: absolute;
            right: -21px;
            top: -21px;
            border: none;
            border-radius: 50%;
            background-color: $white;
            width: 42px;
            height: 42px;
            padding: 7px;
            cursor: pointer;
            box-shadow: 1px 1px 1px 0px $product-serial-color, 1px 1px 1px 0px $product-serial-color;

            @media screen and (max-width: 414px) {
                right: -3px;
            }
        }

        &__title {
            font-size: 25px;
            font-weight: 500;
            padding: 32px 37px 40px 37px;

            @media screen and (max-width: 768px) {
                padding: 30px 15px;
            }

            @media screen and (max-width: 414px) {
                font-size: 18px;
            }
        }

        &__product {
            padding: 11px 44px;
            border-top: 1px solid $main-bg;
            border-bottom: 1px solid $main-bg;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            flex-grow: 1;
            min-height: 68px;

            &-status {
                width: 10px;
                height: 10px;
                border-radius: 50%;
                background-color: $main-green-color;
                margin-right: 38px;
                flex-shrink: 0;
            }

            &-img {
                width: 44px;
                height: 34px;
                margin-right: 72px;
                flex-shrink: 0;
                display: flex;
                justify-content: center;
                align-items: center;
            }

            &-text {
                font-size: 18px;
                display: block;
                color: $dark;
                text-decoration: underline;
                text-decoration-color: $text-border-color;
                margin-bottom: 8px;

                &:last-child {
                    margin-bottom: 0;
                }

                &_serial {
                    color: $product-serial-color;
                    margin-bottom: 0;
                }

                @media screen and (max-width: 414px) {
                    font-size: 14px;
                    line-height: 120%;
                    margin-bottom: 5px;
                }
            }

            @media screen and (max-width: 768px) {
                padding: 15px;

                &-status {
                    margin-right: 15px;
                }
                &-img {
                    margin-right: 15px;
                }
            }
        }

        &__buttons {
            padding: 26px 37px 35px 37px;
            background-color: $main-green-color;
            display: flex;
            justify-content: flex-end;
            align-items: flex-start;
            gap: 15px;

            &-btn {
                font-family: 'Roboto', sans-serif;
                cursor: pointer;
                border: none;
                background-color: transparent;
                font-size: 16px;
                text-transform: uppercase;
                text-align: center;
                padding: 16px;
                color: $white;
                min-width: 176px;
                border-radius: 60px;
                font-weight: 500;
                transition: background-color 0.25s ease, color 0.25s ease;

                @media (any-hover: hover) {
                    &:hover {
                        background-color: $white;
                        color: $dark;
                    }
                }

                &:disabled {
                    background-color: $product-serial-color;
                    color: $light-gray;
                    cursor: not-allowed;
                }

                &_delete {
                    background-color: $white;
                    color: red;
                    box-shadow: 13px 8px 16px -2px $product-serial-color;

                    @media (any-hover: hover) {
                        &:hover {
                            background-color: red;
                            color: $white;
                            box-shadow: none;
                        }
                    }
                }

                @media screen and (max-width: 768px) {
                    padding: 12px;
                    min-width: 150px;
                }

                @media screen and (max-width: 414px) {
                    font-size: 12px;
                    min-width: 120px;
                }
            }

            @media screen and (max-width: 768px) {
                padding: 30px 15px;
                justify-content: space-between;
                gap: 5px;
            }
        }

        @media screen and (max-width: 992px) {
            max-width: 90%;
        }
    }

    @media screen and (max-width: 768px) {
        width: calc(100vw - 150px);
    }

    @media screen and (max-width: 576px) {
        width: 100vw;
    }
}
</style>
