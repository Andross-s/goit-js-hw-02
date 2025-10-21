// function makeTransaction(quantity, pricePerDroid) {
//   const totalPrice = quantity * pricePerDroid;
//   return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
// }

// console.log(makeTransaction(5, 3000)); // "You ordered 5 droids worth 15000 credits!"
// console.log(makeTransaction(3, 1000)); // "You ordered 3 droids worth 3000 credits!"
// console.log(makeTransaction(10, 500)); // "You ordered 10 droids worth 5000 credits!"

// function checkStorage(available, ordered) {
//   if (available >= ordered) {
//     return 'Order is processed, our manager will contact you';
//   } else {
//     return 'Not enough goods in stock!';
//   }
// }
// // checkStorage(100, 50);
// console.log('🚀 ~ checkStorage(100, 50):', checkStorage(100, 50));
// // checkStorage(100, 130);
// console.log('🚀 ~ checkStorage(100, 130):', checkStorage(100, 130));
// // checkStorage(200, 20);
// console.log('🚀 ~ checkStorage(200, 20):', checkStorage(200, 20));
// // checkStorage(200, 150);
// console.log('🚀 ~ checkStorage(200, 150):', checkStorage(200, 150));
// // checkStorage(150, 180);
// console.log('🚀 ~ checkStorage(150, 180):', checkStorage(150, 180));

function checkStorage(available, ordered) {
  if (ordered === 0) {
    return 'There are no products in the order!';
  } else if (available < ordered) {
    return 'Your order is too large, there are not enough items in stock!';
  } else {
    return 'The order is accepted, our manager will contact you';
  }
}
// checkStorage(100, 50);
console.log('🚀 ~ checkStorage(100, 50):', checkStorage(100, 50));
// checkStorage(100, 130);
console.log('🚀 ~ checkStorage(100, 130):', checkStorage(100, 130));
// checkStorage(70, 0);
console.log('🚀 ~ checkStorage(70, 0):', checkStorage(70, 0));
// checkStorage(200, 20);
console.log('🚀 ~ checkStorage(200, 20):', checkStorage(200, 20));
// checkStorage(200, 250);
console.log('🚀 ~ checkStorage(200, 250):', checkStorage(200, 250));
// checkStorage(150, 0);
console.log('🚀 ~ checkStorage(150, 0):', checkStorage(150, 0));
// checkStorage(80, 80);
console.log('🚀 ~ checkStorage(80, 80):', checkStorage(80, 80));
