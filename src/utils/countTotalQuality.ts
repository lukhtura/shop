export const countTotalQuantity = (arr) => {
  let res = 0;
  arr.forEach(item => {
    res = res + item.quantity;
  });
  return res;
}