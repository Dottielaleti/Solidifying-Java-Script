function inventoryDrain(stock) {
  let bulkSales = 0;
  let normalSales = 0; 

  while(stock > 0) {
    if ( stock % 3 === 0) {
      stock = stock - 3;
      bulkSales++;
    }
    else if (stock % 2 === 0) {
        stock = stock - 2;
        normalSales++;
      }
      else {
        stock = stock - 1;
      }
    }
    return {
      remainingStock: stock,
      bulkSales: bulkSales,
      normalSales: normalSales
    };
}
console.log(inventoryDrain(11));



let  cars = [
  { model: 'Sedan', price: 2000000, stock: 7},
  { model: 'SUV', price: 30000000, stock: 9 },
  { model: 'Convertible', price: 40000000, stock: 6}
];

function printCarWithStock(cars) {
  for (let i = 0; i < cars.length; i++) {
    if (cars[i].stock > 5) {

      console.log(cars[i].model);
    }
  }
}
printCarWithStock(cars);



let products = [
  { name: 'Sneakers', price: 8000, stock: 5 },
  { name: 'Boots', price: 12000, stock: 2 },
  { name: 'Loafers', price: 6000, stock: 8 }
];

  function processSales(products, quantity) {
  let totalSales = 0;
  let totalDiscount = 0;

    if (products[i].stock === 0) {
      return 'Out of stock';
    }
    if (products[i].stock < quantity) {
      return 'Insufficient stock';
    }
    let totalPrice = products[i].price * quantity;
    let discount = 0;

    if (totalPrice > 20000) {
      discount = 0.1 * totalPrice;
      totalPrice = totalPrice - discount;
    }

    products[i].stock = products[i].stock - quantity;
    totalSales = totalSales + totalPrice;
    totalDiscount = totalDiscount + discount; 

    console.log(`Product: ${products[i].name}, Quantity Sold: ${quantity}, Total Price: ${totalPrice}, Discount Applied: ${discount}, Remaining Stock: ${products[i].stock}`);

  }

processSales(2);


let items = [
  {name: 'Hat', price: 1500, stock: 10 },
  {name: 'Scarf', price: 2500, stock: 14 },
  {name: 'Gloves', price: 3000, stock: 17 }  
];
const processSales = (quantity) => {
let totalRevenue = 0;
let totalDiscounts = 0;

const availableItems = items.filter(item => {
  return item.stock >= quantity;
});

availableItems.forEach(item => {
  let totalPrice = item.price * quantity;
  let discount = 0;

  if (totalPrice >= 7000) {
    discount = 0.1 * totalPrice;
    totalPrice = totalPrice - discount;
  }

    item.stock -= quantity,
    totalRevenue += totalPrice,
    totalDiscounts += discount

    console.log(
      `Item: ${item.name}, Quantity Sold: ${quantity}, Total Price: ${totalPrice}, Discount Given: ${discount}, Remaining Stock: ${item.stock}`);
});

const receipts = availableItems.map(item => {
  return {
    product: item.name,
    stockLeft: item.stock
  };
});

return {
  receipts: receipts,
  totalRevenue: totalRevenue,
  totalDiscounts: totalDiscounts
};
}
console.log(processSales(10));
 