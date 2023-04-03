export interface Price {
    value: number;
    symbol: 'USD' | 'UAH';
    isDefault: number;
}

export interface Product {
    id: number;
    serialNumber: number | string;
    isNew: number;
    photo: string;
    title: string;
    type: string;
    specification: string;
    guarantee: {
        start: string;
        end: string;
    };
    price: Price[];
    order: number;
    date: string;
}

export interface Order {
    id: number;
    title: string;
    date: string;
    description: string;
    products: Product[];
}

export interface DeletedProduct {
    title: string;
    id: string | number;
    serialNumber: number | string;
}
