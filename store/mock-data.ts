import { Order, Product } from '../types/types';

export const mockData = {
    orders: [
        {
            id: 1,
            title: 'Order 1',
            date: '2017-06-29 12:09:33',
            description: 'desc',
            get products() {
                return this.products;
            },
        },
        {
            id: 2,
            title: 'Order 2',
            date: '2017-06-29 12:09:33',
            description: 'desc',
            get products() {
                return this.products;
            },
        },
        {
            id: 3,
            title: 'Order 3',
            date: '2017-06-29 12:09:33',
            description: 'desc',
            get products() {
                return this.products;
            },
        },
    ] as Order[],

    products: [
        {
            id: 1,
            serialNumber: 'SN-12.34567891',
            isNew: 1,
            photo: 'img1',
            title: 'Gigabyte Technology X58-USB3 (Socket 1366) 6 X58-USB3',
            type: {
                type: 'monitors',
                label: 'Монітори',
            },
            specification: 'Specification 1',
            guarantee: {
                start: '2017-06-29 12:09:33',
                end: '2017-06-29 12:09:33',
            },
            price: [
                { value: 100, symbol: 'USD', isDefault: 0 },
                { value: 2600, symbol: 'UAH', isDefault: 1 },
            ],
            order: 1,
            date: '2017-06-29 12:09:33',
            available: true,
            executor: '',
            status: 'вільний',
            state: 'новий',
            group: 'Дуже, дуже, ну дуууже довга назва групи 1',
            comingName: 'Учорашній прихід',
        },
        {
            id: 2,
            serialNumber: 'SN-12.34567892',
            isNew: 1,
            photo: 'img2',
            title: 'Gigabyte Technology X58-USB3 (Socket 1366) 6 X58-USB3',
            type: {
                type: 'videocards',
                label: 'Відеокарти',
            },
            specification: 'Specification 2',
            guarantee: {
                start: '2017-06-29 12:09:33',
                end: '2017-06-29 12:09:33',
            },
            price: [
                { value: 100, symbol: 'USD', isDefault: 0 },
                { value: 2600, symbol: 'UAH', isDefault: 1 },
            ],
            order: 2,
            date: '2017-06-29 12:09:33',
            available: false,
            executor: '',
            status: 'у ремонті',
            state: 'б/у',
            group: 'Ще дуще, дуже, ну дуууже довга назва групи 2',
            comingName: 'Сьогодняшній прихід',
        },
        {
            id: 3,
            serialNumber: '',
            isNew: 4,
            photo: 'img3',
            title: 'Gigabyte Technology X58-USB3 (Socket 1366) 6 X58-USB3',
            type: {
                type: 'motherboards',
                label: 'Материнські плати',
            },
            specification: 'Specification 3',
            guarantee: {
                start: '2017-06-29 12:09:33',
                end: '2017-06-29 12:09:33',
            },
            price: [
                { value: 100, symbol: 'USD', isDefault: 0 },
                { value: 26200, symbol: 'UAH', isDefault: 1 },
            ],
            order: 3,
            date: '2017-06-29 12:09:33',
            available: true,
            executor: 'Щелоков Станіслав Олександрович',
            status: '',
            state: 'новий',
            group: 'Ще дуще, дуже, ну дуууже супер довга назва групи з группою групп у группі 3',
            comingName: 'Учорашній прихід',
        },
        {
            id: 4,
            serialNumber: 'SN-12.34567893',
            isNew: 4,
            photo: 'img3',
            title: 'Gigabyte Technology X58-USB3 (Socket 1366) 6 X58-USB3',
            type: {
                type: 'motherboards',
                label: 'Материнські плати',
            },
            specification: 'Specification 3',
            guarantee: {
                start: '2017-06-29 12:09:33',
                end: '2017-06-29 12:09:33',
            },
            price: [
                { value: 100, symbol: 'USD', isDefault: 0 },
                { value: 26200, symbol: 'UAH', isDefault: 1 },
            ],
            order: 3,
            date: '2017-06-29 12:09:33',
            available: false,
            executor: '',
            status: 'немає',
            state: 'Відновлений',
            group: 'Ще дуще, дуже, ну дуууже супер довга назва групи з группою групп у группі, а у ній ще підругруппа груп 4',
            comingName: 'Минулорічний прихід',
        },
    ] as Product[],
};

export default mockData;
