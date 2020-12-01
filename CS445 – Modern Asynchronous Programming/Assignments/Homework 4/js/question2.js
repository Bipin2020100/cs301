export const item = {
    "name": "Avocado",
    "type": "Fruit",
    "category": "Food",
    "price": 200
};
export let applyCoupon = (item) => {
    let copyItem = Object.assign({}, item);
    return (discount) => {
        copyItem.price = copyItem.price * ((100 - discount) / 100);
        return copyItem;
    };
};
applyCoupon(item)(10).price === 180;
