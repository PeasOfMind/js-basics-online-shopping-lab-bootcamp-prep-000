var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  let newItem = {itemName: item, itemPrice: Math.floor(Math.random()*10 + 1)};
  cart.push(newItem);
  return `${item} has been added to your cart.`;
}

function viewCart() {
  let cartString = "In your cart, you have";
  if(cart.length === 0) return "Your shopping cart is empty.";
  for(i in cart){
    if(cart.length = 1) {
      return cartString + `${cart[i].itemName} at ${cart[i].itemPrice}.`
    }
    if(i = cart.length-1) {
      cartString += `and ${cart[i].itemName} at ${cart[i].itemPrice}.`
    }
    else cartString+= ` ${cart[i].itemName} at ${cart[i].itemPrice},`
  }
  return cartString;
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
