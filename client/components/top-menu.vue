<template lang="pug">
.top-menu
    form.top-menu__search
        input.top-menu__search-input(
            type="text" 
            :placeholder="$t('header.search') " 
            name="search"
        )
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

<script setup lang="ts">
import { ref } from 'vue';
import { useStore } from '~/store';

let time = ref('00:00:00');
updateTime();
const clockTimer = setInterval(updateTime, 1000);

const { activeSessions } = useStore();
const { $i18n } = useNuxtApp();

const today = computed((): string => {
    const daysOfWeekUA = ['Неділя', 'Понеділок', 'Вівторок', 'Середа', 'Четвер', "П'ятниця", 'Субота'];
    const daysOfWeekEN = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const daysOfWeek = $i18n.locale.value === 'ua' ? daysOfWeekUA : daysOfWeekEN;
    const date = new Date();
    const dayOfWeek = daysOfWeek[date.getDay()];
    return dayOfWeek;
});

const todayDate = computed((): string => {
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
    const monthsOfWeek = $i18n.locale === 'ua' ? monthsOfWeekUA : monthsOfWeekEN;
    const date = new Date();
    const todayDate = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
    const dateString = `${todayDate} ${monthsOfWeek[date.getMonth()]}, ${date.getFullYear()}`;
    return dateString;
});

onBeforeUnmount(() => {
    clearInterval(clockTimer);
});

function updateTime(): void {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    time.value = `${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
}
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
