import { Order, Product } from '../types/types';
import generateMockPrice from '~/helpers/generate-mock-price';
export const orders = [
    {
        id: 1,
        title: 'Дуже довга назва приходу 1',
        date: '2017-06-29 12:09:33',
        description: 'desc',
        get products() {
            return products;
        },
    },
    {
        id: 2,
        title: 'Дуже довга назва приходу 2',
        date: '2017-06-29 12:09:33',
        description: 'desc',
        get products() {
            return products;
        },
    },
    {
        id: 3,
        title: 'Дуже довга назва приходу 3',
        date: '2017-06-29 12:09:33',
        description: 'desc',
        get products() {
            return products;
        },
    },
    {
        id: 4,
        title: 'Дуже довга назва приходу 4',
        date: '2017-06-29 12:09:33',
        description: 'desc',
        get products() {
            return products;
        },
    },
] as Order[];

export const products = [
    {
        id: generateMockPrice(),
        serialNumber: 'SN-12.34567891',
        isNew: 12,
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
            { value: generateMockPrice(), symbol: 'USD', isDefault: 0 },
            { value: generateMockPrice(), symbol: 'UAH', isDefault: 1 },
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
        id: generateMockPrice(),
        serialNumber: 'SN-12.34567891',
        isNew: 12,
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
            { value: generateMockPrice(), symbol: 'USD', isDefault: 0 },
            { value: generateMockPrice(), symbol: 'UAH', isDefault: 1 },
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
        id: generateMockPrice(),
        serialNumber: 'SN-12.34567891',
        isNew: 12,
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
            { value: generateMockPrice(), symbol: 'USD', isDefault: 0 },
            { value: generateMockPrice(), symbol: 'UAH', isDefault: 1 },
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
        id: generateMockPrice(),
        serialNumber: 'SN-12.34567892',
        isNew: 22,
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
            { value: generateMockPrice(), symbol: 'USD', isDefault: 0 },
            { value: generateMockPrice(), symbol: 'UAH', isDefault: 1 },
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
        id: generateMockPrice(),
        serialNumber: 'SN-12.34567892',
        isNew: 22,
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
            { value: generateMockPrice(), symbol: 'USD', isDefault: 0 },
            { value: generateMockPrice(), symbol: 'UAH', isDefault: 1 },
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
        id: generateMockPrice(),
        serialNumber: 'SN-12.34567892',
        isNew: 22,
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
            { value: generateMockPrice(), symbol: 'USD', isDefault: 0 },
            { value: generateMockPrice(), symbol: 'UAH', isDefault: 1 },
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
        id: generateMockPrice(),
        serialNumber: '',
        isNew: 7,
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
            { value: generateMockPrice(), symbol: 'USD', isDefault: 0 },
            { value: generateMockPrice(), symbol: 'UAH', isDefault: 1 },
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
        id: generateMockPrice(),
        serialNumber: '',
        isNew: 7,
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
            { value: generateMockPrice(), symbol: 'USD', isDefault: 0 },
            { value: generateMockPrice(), symbol: 'UAH', isDefault: 1 },
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
        id: generateMockPrice(),
        serialNumber: '',
        isNew: 7,
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
            { value: generateMockPrice(), symbol: 'USD', isDefault: 0 },
            { value: generateMockPrice(), symbol: 'UAH', isDefault: 1 },
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
        id: generateMockPrice(),
        serialNumber: '',
        isNew: 7,
        photo: 'img3',
        title: 'Gigabyte Technology X58-USB3 (Socket 1366) 6 X58-USB3',
        type: {
            type: 'harddisk',
            label: 'Жорсткі диски',
        },
        specification: 'Specification 3',
        guarantee: {
            start: '2017-06-29 12:09:33',
            end: '2017-06-29 12:09:33',
        },
        price: [
            { value: generateMockPrice(), symbol: 'USD', isDefault: 0 },
            { value: generateMockPrice(), symbol: 'UAH', isDefault: 1 },
        ],
        order: 4,
        date: '2017-06-29 12:09:33',
        available: true,
        executor: 'Щелоков Станіслав Олександрович',
        status: '',
        state: 'новий',
        group: 'Ще дуще, дуже, ну дуууже супер довга назва групи з группою групп у группі 3',
        comingName: 'Учорашній прихід',
    },
    {
        id: generateMockPrice(),
        serialNumber: '',
        isNew: 7,
        photo: 'img3',
        title: 'Gigabyte Technology X58-USB3 (Socket 1366) 6 X58-USB3',
        type: {
            type: 'harddisk',
            label: 'Жорсткі диски',
        },
        specification: 'Specification 3',
        guarantee: {
            start: '2017-06-29 12:09:33',
            end: '2017-06-29 12:09:33',
        },
        price: [
            { value: generateMockPrice(), symbol: 'USD', isDefault: 0 },
            { value: generateMockPrice(), symbol: 'UAH', isDefault: 1 },
        ],
        order: 4,
        date: '2017-06-29 12:09:33',
        available: true,
        executor: 'Щелоков Станіслав Олександрович',
        status: '',
        state: 'новий',
        group: 'Ще дуще, дуже, ну дуууже супер довга назва групи з группою групп у группі 3',
        comingName: 'Учорашній прихід',
    },
    {
        id: generateMockPrice(),
        serialNumber: '',
        isNew: 7,
        photo: 'img3',
        title: 'Gigabyte Technology X58-USB3 (Socket 1366) 6 X58-USB3',
        type: {
            type: 'harddisk',
            label: 'Жорсткі диски',
        },
        specification: 'Specification 3',
        guarantee: {
            start: '2017-06-29 12:09:33',
            end: '2017-06-29 12:09:33',
        },
        price: [
            { value: generateMockPrice(), symbol: 'USD', isDefault: 0 },
            { value: generateMockPrice(), symbol: 'UAH', isDefault: 1 },
        ],
        order: 4,
        date: '2017-06-29 12:09:33',
        available: true,
        executor: 'Щелоков Станіслав Олександрович',
        status: '',
        state: 'новий',
        group: 'Ще дуще, дуже, ну дуууже супер довга назва групи з группою групп у группі 3',
        comingName: 'Учорашній прихід',
    },
] as Product[];
