
let products = ['laptop', 'phone', 'tablet'];
let prices = [40000, 25000, 30000];
let inventory = [5, 10, 15];

let totalSales = 0;
let totalDiscountGiven = 0;

function buyMultiple(index, quantity) {
  if (inventory[index] <= 0) {
    return `  product ${products[index]} is out of stock.`;
  }

  if (inventory[index] < quantity) {
    return `Insufficient stock for ${products[index]}.`;
  }

  let totalPrice = prices[index] * quantity;
  let discount = 0;

  if (totalPrice > 20000) {
    discount = 0.1 * totalPrice;
    totalPrice -= discount;
  }

  inventory[index] -=  quantity;
  totalSales += totalPrice;
  totalDiscountGiven += discount;
  
  return {
    product: products[index],
    quantityBought: quantity,
    totalAmount: totalPrice,
    discountApplied: discount,
    remainingStock: inventory[index]
  };
}

let userQuantities = [2, 3, 5];

for (let i = 0; i < products.length; i++) {
  let result = buyMultiple(i, userQuantities[i]);
  console.log(`purchase ${i + 1}:`, result);
}
console.log(`\nTotal sales: ${totalSales}`);
console.log(`Remaining inventory:`, inventory);
console.log(`Total discount given: ${totalDiscountGiven}`);
