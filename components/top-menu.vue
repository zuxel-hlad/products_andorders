<template lang="pug">
.top-menu
    form.top-menu__search
        input.top-menu__search-input(
            type="text" 
            placeholder="Пошук" 
            name="search"
        )
    .top-menu__info
        .top-menu__info-date
            span.top-menu__info-text {{ today }}
            span.top-menu__info-text {{ todayDate }}
        .top-menu__info-clock
            .clock-icon.img-full
                img(
                    src="../assets/svg/clock.svg" 
                    alt="clock icon"
                )
            span.top-menu__info-text {{ time }}
                
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'top-menu',
    data() {
        return {
            time: '00:00:00',
        };
    },
    computed: {
        today() {
            const daysOfWeek = ['Неділя', 'Понеділок', 'Вівторок', 'Середа', 'Четвер', "П'ятниця", 'Субота'];
            const date = new Date();
            const dayOfWeek = daysOfWeek[date.getDay()];
            return dayOfWeek;
        },
        todayDate() {
            const monthsOfWeek = [
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
            const date = new Date();
            const todayDate = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
            const dateString = `${todayDate} ${monthsOfWeek[date.getMonth()]}, ${date.getFullYear()}`;
            return dateString;
        },
    },
    created() {
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

    &__info {
        display: flex;
        justify-content: flex-start;
        align-items: flex-end;

        &-date {
            margin-right: 20px;
        }

        &-clock {
            display: flex;
            justify-content: flex-start;
            align-items: center;

            & .clock-icon {
                width: 20px;
                height: 20px;
                border-radius: 50%;
                margin-right: 10px;
            }
        }

        &-text {
            display: block;
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
            border-radius: 12px;
            outline-color: transparent;
            font-weight: 600;

            &::placeholder {
                color: $dark;
            }
        }
    }
}
</style>
