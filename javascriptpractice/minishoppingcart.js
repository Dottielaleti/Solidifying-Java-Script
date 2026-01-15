function miniShoppingCart(price, quantity) {

  if (stock < quantity) {
    return 'Out of stock';
  }

  let total = price * quantity; 

   if (total > 5000) {
    total = total - (0.1 * total);
  } 

  stock = stock - quantity;

  return {finalAmount: total, remainingStock: stock};
}

stock = 5;

let purchase1 = miniShoppingCart(3000, 2);
console.log(`Final Amount: ${purchase1.finalAmount}, Remaining Stock: ${purchase1.remainingStock}`);


let purchase2 = miniShoppingCart(3000, 3);
console.log(`Final Amount: ${purchase2.finalAmount}, Remaining Stock: ${purchase2.remainingStock}`);



function checkQuantity(stock, quantity) {
  let totalPrice = stock * quantity;
  if (quantity === 0) {
    return "Invalid quantity";
  }
  return totalPrice;
}


function buyStock(price, quantity) {
  let total = price * quantity;
  
  for (let i = 0; i <= 10; i++) {
    
    if (stock < quantity) {
      return "Out of stock";
    }

    stock = stock - quantity;
    return {finalAmount: total, remainingStock: stock};

  }
}
console.log(buyStock(2000, 2));