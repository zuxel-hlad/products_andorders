import { Order, Product } from './store-types';

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
            serialNumber: 'SN-12.3456789',
            isNew: 1,
            photo: 'img1',
            title: 'Gigabyte Technology X58-USB3 (Socket 1366) 6 X58-USB3',
            type: 'Monitors',
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
        },
        {
            id: 2,
            serialNumber: 'SN-12.3456789',
            isNew: 1,
            photo: 'img2',
            title: 'Gigabyte Technology X58-USB3 (Socket 1366) 6 X58-USB3',
            type: 'videocard',
            specification: 'Specification 1',
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
        },
        {
            id: 3,
            serialNumber: 'SN-12.3456789',
            isNew: 4,
            photo: 'img3',
            title: 'Gigabyte Technology X58-USB3 (Socket 1366) 6 X58-USB3',
            type: 'motherboard',
            specification: 'Specification 1',
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
        },
    ] as Product[],
};

export default mockData;
