let items = [
  { name: 'sneakers', price: 12000, stock: 4 },
  { name: 'boots', price: 10000, stock: 0 },
  { name: 'jacket', price: 16000, stock: 1 }
];

let totalSales = 0;
let totalDiscountGiven = 0;

function buyItem(index, quantity) {
  let item = items[index];

   if (item.stock === 0) {
    return 'Item sold out';
  }

  if (item.stock < quantity) {
    return 'Out of stock';
  }

  let total = item.price * quantity;
  let discount = 0;

   if (total > 15000) {
    discount = 0.1 * total;
    total -= discount;
  }

  item.stock -= quantity;
  totalSales += total;
  totalDiscountGiven += discount;

  return {
    item: item.name,
    discountApplied: discount,
    totalAmount: total,
    remainingStock: item.stock
  };
}
let quantities = [2, 1, 1];

for (let i = 0; i < items.length; i++) {
  let result = buyItem(i, quantities[i]);
  console.log(`Purchase ${i + 1}:`, result);
}
console.log(`\nTotal sales: ${totalSales}`);
console.log(`Remaining items:`, items.map(item => ({ name: item.name, stock: item.stock })));
console.log(`Total discount given: ${totalDiscountGiven}`);



