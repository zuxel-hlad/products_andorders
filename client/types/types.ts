export interface Price {
    value: number;
    symbol: 'USD' | 'UAH';
    isDefault: number;
    label?: string;
}

export interface Product {
    id: number;
    serialNumber: number | string;
    isNew: number;
    photo: string;
    title: string;
    type: {
        type: string;
        label: string;
    };
    specification: string;
    guarantee: {
        start: string;
        end: string;
    };
    price: Price[];
    order: number;
    date: string;
    shortDate?: string;
    available: true | false;
    executor: string;
    status: string;
    state: string;
    group: string;
    comingName: string;
}

export interface Order {
    id: number;
    title: string;
    date: string;
    description: string;
    products: Product[];
}

export interface ComingOrder {
    date: string;
    description: string;
    id: number;
    products: Product[];
    shortDate: string;
    title: string;
    totalSumUAH: string;
    totalSumUSD: string;
}

export interface DeletedItem {
    title: string;
    id: string | number;
    parentId?: string | number;
    serialNumber?: number | string;
}

export interface Filters {
    type: string;
    label: string;
}
