function reduceStock(stock) {
  return stock - 1;
}
let currentStock = 3001;

currentStock = reduceStock(currentStock);
console.log(currentStock);

currentStock = reduceStock(currentStock);
console.log(currentStock);

currentStock = reduceStock(currentStock);
console.log(currentStock);



function multiplyNumber(num) {
  return num * 2;
}
console.log(multiplyNumber(5));


function priceCalculation(price,quantity) {
  return price * quantity;
}
console.log(priceCalculation(2500,2));
console.log(priceCalculation(2500,7));


function applyDiscount(price,quantity) {
  let total = price * quantity;
  if (total > 5000) {
    return total - (0.1 * total);
  }
  else {
    return total
  }
}
console.log(applyDiscount(3000,2));


function calculateTotalWithDiscount(price,quantity) {
  let total = price * quantity;

    if (total > 5000) {
      return total - (0.1 * total);
    }
    else {
      return total
    }
}
console.log(calculateTotalWithDiscount(1000,3));
console.log(calculateTotalWithDiscount(3000,2));
console.log(calculateTotalWithDiscount(2500,2));


function takesStock(stock) {
  if (stock > 0) {
    return stock - 1;
  }else
  {
    return "Out of Stock";
  } 
}
console.log(takesStock(5));
console.log(takesStock(0)); 
console.log(takesStock(1));
