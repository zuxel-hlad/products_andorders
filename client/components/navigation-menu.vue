<template lang="pug">
aside.navigation-menu(:class="{'navigation-menu_active': mobileMenu}")
    .navigation-menu__overlay(@click="openMobileMenu")
    .navigation-menu__user.img-full
        img(
            src="https://i.pravatar.cc/100" 
            alt="user"
        )
        button.navigation-menu__user-profile(
            type="button"
            @click="$router.push('/profile')"
        )
            i.fa-sharp.fa-solid.fa-gear
    label.navigation-menu__langs
        i.fa-solid.fa-earth-americas
        select.navigation-menu__langs-select(@change="setLang")
            option(
                v-for="{label, name, id} in langs"
                :key="id"
                :value="name"
                :selected="currentLang === name"
            ) {{ label }}
    nuxt-link.navigation-menu__link(
        v-for='{ to, name, id, iconClassname } in links',
        :class="{'router-link-exact-active': $route.path.includes('order') && to === '/'}"
        :key='id',
        :to='customLocalePath(to)'
        )
        span.navigation-menu__link-text.wrap-text {{ name }}
            i(:class="iconClassname")
</template>

<script lang="ts">
import { useStore } from '~/store';
import { mapState, mapActions } from 'pinia';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'navigation-menu',
    data() {
        return {
            links: [
                {
                    name: this.$t('aside.coming'),
                    to: '/',
                    id: 1,
                    iconClassname: 'fa-solid fa-right-to-bracket',
                },
                {
                    name: this.$t('aside.groups'),
                    to: '/groups',
                    id: 2,
                    iconClassname: 'fa-sharp fa-solid fa-layer-group',
                },
                {
                    name: this.$t('aside.products'),
                    to: '/products',
                    id: 3,
                    iconClassname: 'fa-sharp fa-solid fa-boxes-stacked',
                },
                {
                    name: this.$t('aside.users'),
                    to: '/users',
                    id: 4,
                    iconClassname: 'fa-solid fa-users',
                },
                {
                    name: this.$t('aside.settings'),
                    to: '/settings',
                    id: 5,
                    iconClassname: 'fa-sharp fa-solid fa-wrench',
                },
            ],
            langs: [
                {
                    label: 'ua',
                    name: 'ua',
                    id: 4,
                },
                {
                    label: 'en',
                    name: 'en',
                    id: 5,
                },
            ],
        };
    },
    computed: {
        ...mapState(useStore, ['mobileMenu']),
        currentLang(): string {
            return this.$i18n.locale;
        },
    },
    watch: {
        $route() {
            if (!this.mobileMenu) return;
            this.openMobileMenu();
        },
    },
    methods: {
        ...mapActions(useStore, ['openMobileMenu']),
        customLocalePath(path: string): string {
            //@ts-ignore
            return this.localePath(path);
        },
        setLang(event: Event): void {
            const { value: lang } = event.target as HTMLInputElement;
            const isSlash = window.location.href.includes('?') ? '' : '';
            // @ts-ignore
            window.location.href = this.switchLocalePath(lang) + (lang === 'ua' ? '' : isSlash);
        },
    },
});
</script>

<style scoped lang="scss">
.navigation-menu {
    padding: 122px 12px 12px;
    width: 197px;
    height: calc(100 * var(--vh-menu));
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-color: $white;
    box-shadow: 3px 0px 40px 0px $product-serial-color;
    overflow-y: auto;
    transition: 0.25s;

    &__langs {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 5px;
        margin-bottom: 10px;

        & i {
            display: block;
            font-size: 16px;
            color: $dark;
        }

        &-select {
            padding: 5px;
            font-size: 16px;
            border: none;
            outline-color: $product-serial-color;
            cursor: pointer;
            color: $dark;
        }
    }

    &__overlay {
        position: fixed;
        top: 0;
        right: 0;
        content: '';
        min-height: 100vh;
        height: calc(100 * var(--vh-menu));
        width: calc(100vw - 90px);
        background-color: $modal-overlay;
        transition: 0.25s;
        opacity: 0;
        visibility: hidden;
        display: none;

        @media screen and (max-width: 576px) {
            display: block;
        }
    }

    &__user {
        position: relative;
        margin: 0 auto 64px;
        width: 95px;
        height: 95px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
            clip-path: circle(50%);
        }

        &-profile {
            position: absolute;
            bottom: -5px;
            right: -10px;
            background-color: $white;
            border: none;
            padding: 0;
            width: 42px;
            height: 42px;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            color: $product-date-color;
            box-shadow: 3px 3px 15px 0px $product-serial-color;
            font-size: 16px;
            cursor: pointer;

            i {
                transition: transform 0.7s ease;
            }

            &:hover i {
                transform: rotate(360deg);
            }

            @media screen and (max-width: 576px) {
                width: 32px;
                height: 32px;
            }
        }

        @media screen and (max-width: 576px) {
            width: 50px;
            height: 50px;
        }
    }

    &__link {
        max-width: 100%;
        display: inline-block;
        text-decoration: none;
        text-align: center;
        padding: 16px 0;

        @media screen and (max-width: 768px) {
            padding: 8px 0;
        }

        @media screen and (max-width: 576px) {
            padding: 10px;
        }

        &-text {
            display: block;
            font-size: 16px;
            line-height: 120%;
            font-weight: 700;
            text-transform: uppercase;
            color: $dark;
            padding-bottom: 2px;
            border-bottom: 3px solid transparent;
            transition: border-color 0.25s;
            padding-bottom: 2px;

            i {
                display: none;
            }

            @media screen and (max-width: 768px) {
                font-size: 14px;
            }

            @media screen and (max-width: 576px) {
                font-size: 0;

                i {
                    display: block;
                    font-size: 25px;
                    padding-bottom: 2px;
                }
            }
        }
        &.router-link-exact-active span {
            border-color: $main-green-color;
        }
    }

    @media screen and (max-width: 768px) {
        width: 150px;
    }

    @media screen and (max-width: 576px) {
        width: 0;
        padding: 150px 0 0;
        position: relative;

        &_active {
            padding: 150px 12px 12px;
            width: 90px;

            .navigation-menu__overlay {
                visibility: visible;
                opacity: 1;
                z-index: 1;
            }
        }
    }
}
</style>
