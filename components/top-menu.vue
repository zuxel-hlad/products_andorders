<template lang="pug">
.top-menu
    form.top-menu__search
        input.top-menu__search-input(
            type="text" 
            :placeholder="$t('header.search') " 
            name="search"
        )
        button(@click.prevent="$i18n.setLocale('ua')" type="button") ua
        button(@click.prevent="$i18n.setLocale('en')" type="button") en
    .top-menu__info
        .top-menu__info-date
            span.top-menu__info-text {{ today }}
            span.top-menu__info-text {{ todayDate }}
        .top-menu__info-clock(
            :title="`${$t('header.now')} ${time}`"
            )
            span.top-menu__info-text
                .clock-icon.img-full
                    img(
                        src="../assets/svg/clock.svg" 
                        alt="clock icon"
                    )
                | {{ time }}
            span.top-menu__info-text(:title="`${$t('header.users')} ${activeSessions}`")
                i.fa-sharp.fa-solid.fa-users
                |&nbsp;&nbsp; {{ activeSessions }}
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapState } from 'pinia';
import { useStore } from '~/store';

export default defineComponent({
    name: 'top-menu',
    data() {
        return {
            time: '00:00:00',
        };
    },
    computed: {
        ...mapState(useStore, ['activeSessions']),
        today() {
            const daysOfWeekUA = ['Неділя', 'Понеділок', 'Вівторок', 'Середа', 'Четвер', "П'ятниця", 'Субота'];
            const daysOfWeekEN = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            const daysOfWeek = this.$i18n.locale === 'ua' ? daysOfWeekUA : daysOfWeekEN;
            const date = new Date();
            const dayOfWeek = daysOfWeek[date.getDay()];
            return dayOfWeek;
        },
        todayDate() {
            const monthsOfWeekEN = ['Jan', 'Feb', 'Ma', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
            const monthsOfWeekUA = [
                'Січ',
                'Лют',
                'Берез',
                'Квіт',
                'Трав',
                'Черв',
                'Лип',
                'Серп',
                'Верес',
                'Жовт',
                'Лист',
                'Груд',
            ];
            const monthsOfWeek = this.$i18n.locale === 'ua' ? monthsOfWeekUA : monthsOfWeekEN;
            const date = new Date();
            const todayDate = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
            const dateString = `${todayDate} ${monthsOfWeek[date.getMonth()]}, ${date.getFullYear()}`;
            return dateString;
        },
    },
    created() {
        console.log(this.$i18n.locale);
        this.updateTime();
        setInterval(this.updateTime, 1000);
    },
    methods: {
        updateTime() {
            const date = new Date();
            const hours = date.getHours();
            const minutes = date.getMinutes();
            this.time = `${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
        },
    },
});
</script>

<style scoped lang="scss">
.top-menu {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 15px;

    &__info {
        display: flex;
        justify-content: flex-start;
        align-items: flex-end;
        flex-shrink: 0;

        &-date {
            margin-right: 20px;
        }

        &-clock {
            display: flex;
            flex-direction: column;

            & .clock-icon {
                width: 20px;
                height: 20px;
                border-radius: 50%;
                margin-right: 10px;
            }
        }

        &-text {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            margin-bottom: 5px;
            &:last-child {
                margin-bottom: 0;
            }
        }
    }

    &__search {
        width: 100%;
        max-width: 412px;

        &-input {
            width: 100%;
            color: $dark;
            font-size: 16px;
            padding: 10px 14px;
            border: 1px solid #bac2cc;
            box-shadow: 0px 1px 1px 0px $product-serial-color inset;
            overflow: hidden;
            border-radius: 8px;
            outline-color: transparent;
            font-weight: 600;

            &::placeholder {
                color: $dark;
            }

            @media screen and (max-width: 576px) {
                font-size: 14px;
                padding: 8px 10px;
            }
        }
    }

    @media screen and (max-width: 576px) {
        max-width: 177px;
        flex-wrap: wrap;
        justify-content: flex-end;
    }
}
</style>
