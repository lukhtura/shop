export const countTotalPrice = (data, currencyState) => {

    let totalPrice = 0;
    let itemQuantity = 0;

    data.forEach((item) => {
        itemQuantity = item.quantity;

        item.prices.forEach(item => {
            if (item.currency.label === currencyState.label) {
                totalPrice = totalPrice + item.amount * itemQuantity;
            }
        });

        itemQuantity = 0;
    });

    return totalPrice.toFixed(2);
};