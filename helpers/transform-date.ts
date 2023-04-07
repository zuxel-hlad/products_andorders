export default (dateString: string, short: boolean): string => {
    const date = new Date(dateString.slice(0, 10));
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    if (short) {
        return `${day} / ${month}`;
    } else {
        return `${day} / ${month} /  ${year}`;
    }
};
