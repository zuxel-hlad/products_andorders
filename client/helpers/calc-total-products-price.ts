import { Product } from '~/types';

export default (array: Product[], currency: string): number => {
    return array
        .map((item) => item.price!)
        .flat()
        .filter((price) => price.symbol.toLocaleLowerCase() === currency)
        .reduce((accumulator, currentValue) => accumulator + currentValue.value, 0);
};
